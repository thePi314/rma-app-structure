class DaySegmentComponent extends BaseComponent{
    static Name = 'day-segment'
    static ClassName = 'component-day-segment';

    /*<div class="item done">
        <div class="time">
            07 <span class="minutes">30</span>
        </div>
        <div class="activity">Wake up</div>
    </div>*/
    static create_item(id,time,status,title){
        return `
            <div id="day-segment-item-${id}" class="item ${status != null ? status : ""}">
                <div class="time">
                    ${time.split(":")[0]} <span class="minutes">${time.split(":")[1]}</span>
                </div>
                <div class="activity">${title}</div>
            </div>
        `;
    }

    static init_events(root_dom){
        let data = JSON.parse(root_dom.getAttribute('data'));
        root_dom.querySelector('.row .date').innerText = data.date;

        let items_wrapper = root_dom.querySelector('.items');
        for(let ind=0;ind<data.tasks.length;ind++){
            let task = data.tasks[ind];
            items_wrapper.innerHTML += DaySegmentComponent.create_item(task.id,task.time,task.status,task.title);
        }

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
            SubscreenComponent.toggle('subscreen-new-task');
        });
    }
}

app.components[DaySegmentComponent.ClassName] = DaySegmentComponent;
DaySegmentComponent.load_config();
