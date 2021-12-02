const MONTHS = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decembar"
]

class DaySegmentComponent extends BaseComponent{
    static Name = 'day-segment'
    static ClassName = 'component-day-segment';

    static create_item(task){
        return `
            <div id="${task.id}" class="item ${task.status != null ? task.status : ""}">
                <div class="time">
                    ${task.time.split(":")[0]} <span class="minutes">${task.time.split(":")[1]}</span>
                </div>
                <div class="activity">${task.title}</div>
            </div>
        `;
    }

    static init_events(root_dom){
        let data = JSON.parse(root_dom.getAttribute('data'));
        root_dom.querySelector('.row .date').innerText = `${new Date(data.date).getDate()} ${MONTHS[new Date(data.date).getMonth()]}` ;
        root_dom.setAttribute('id', `ds-${data.id}`);

        let items_wrapper = root_dom.querySelector('.items');
        for(let ind=0;ind<data.tasks.length;ind++){
            let task = data.tasks[ind];
            items_wrapper.innerHTML += DaySegmentComponent.create_item(task);
        }
        root_dom.setAttribute('data',JSON.stringify({...data, tasks:null}))

        let items = root_dom.querySelectorAll('.item:not(.done):not(.missed)');
        const radius = 100;
        let initial_touch = null;
        let current_touch = null;

        items.forEach(item => {
            item.addEventListener('touchstart',(event)=>{
                if(item.classList.contains('slide-back'))
                   return;

                initial_touch = {
                    x: event.changedTouches[0].clientX,
                    y: event.changedTouches[0].clientY
                }
                console.log(`Start point: ${event.changedTouches[0].clientX}, ${event.changedTouches[0].clientY}`);
            })
            item.addEventListener("touchmove", (event)=>{
                if(initial_touch == null || item.classList.contains('missed') || item.classList.contains('done'))
                    return;

                current_touch = {
                    x: initial_touch.x - event.changedTouches[0].clientX,
                    y: initial_touch.y - event.changedTouches[0].clientY
                };

                item.style.transform = `translateX(${current_touch.x*-1}px)`;
            });
            item.addEventListener("touchend", (event)=>{
                console.log(`End point: ${current_touch.x}, ${current_touch.y}`);

                item.classList.add('slide-back');    
                if(radius <= Math.abs(current_touch.x)){
                    item.classList.add(current_touch.x < 0 ? 'turn-green' : 'turn-red')
                }
                
                initial_touch = null;
                current_touch = null;
            });

            item.addEventListener('animationend',(event)=>{
                switch(event.animationName){
                    case 'slide-back':
                        item.style.transform = null;
                        if(item.classList.contains('slide-back'))
                            item.classList.remove('slide-back')
                        break;

                    case 'turn-green':
                        item.classList.remove('turn-green');
                        item.classList.add('done');
                        break;

                    case 'turn-red':
                        item.classList.remove('turn-red');
                        item.classList.add('missed');
                        break;
                }
            })
        });

        let add_task_button = root_dom.querySelector('button');
        add_task_button.addEventListener('click',()=>{
            document.querySelector('#subscreen-new-task .wrapper .input-label[name="date"] input').setAttribute('value',data.date);
            app.cache['subscreen-new-task-add-position'] = data.id;

            SubscreenComponent.toggle('subscreen-new-task');
        });
    }
}

app.components[DaySegmentComponent.ClassName] = DaySegmentComponent;
DaySegmentComponent.load_config();
