class SubscreenComponent extends BaseComponent{
    static Name = 'subscreen'
    static ClassName = 'component-subscreen';
    static CurrentActiveScreen = 1000000;

    static toggle(id, dom=null){
        let elem = dom ?? document.querySelector(`.component.${this.ClassName}#${id}`);
        if(elem == null || elem.classList.contains('open-collapsing') || elem.classList.contains('close-collapsing'))
            return;

        if(elem.classList.contains('collapsed')){
            elem.classList.add('close-collapsing');
        }
        else{
            elem.classList.add('open-collapsing');
            elem.classList.add('collapsed');
            elem.style.zIndex = SubscreenComponent.CurrentActiveScreen++;
        }
    }

    static init_events(root_dom){
        root_dom.querySelector('.subscreen-close').addEventListener('click',()=>{
            SubscreenComponent.toggle(null, root_dom);
        });

        root_dom.addEventListener('animationend',(event)=>{
            switch(event.animationName){
                case 'close-collapsing':
                    root_dom.classList.remove('collapsed');
                    root_dom.classList.remove('close-collapsing');
                    break;

                case 'open-collapsing':
                    root_dom.classList.remove('open-collapsing');
                    break;
            }
        })
    }
}

app.components[SubscreenComponent.ClassName] = SubscreenComponent;
SubscreenComponent.load_config();
