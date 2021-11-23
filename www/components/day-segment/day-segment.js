class DaySegmentComponent extends BaseComponent{
    static Name = 'day-segment'
    static ClassName = 'component-day-segment';

    static init_events(root_dom){
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
            })
            item.addEventListener("touchmove", (event)=>{
                if(initial_touch == null || item.classList.contains('missed') || item.classList.contains('done'))
                    return

                current_touch = {
                    x: initial_touch.x - event.changedTouches[0].clientX,
                    y: initial_touch.y - event.changedTouches[0].clientY
                };

                item.style.transform = `translateX(${current_touch.x*-1}px)`;
            });
            item.addEventListener("touchend", (event)=>{
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
    }
}

app.components[DaySegmentComponent.ClassName] = DaySegmentComponent;
DaySegmentComponent.load_config();
