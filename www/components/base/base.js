class BaseComponent {
    static Name = 'base';
    static ClassName = 'component-base';
    static Template = '';
    static Events = {}

    static get Config(){
        return {
            style: `./components/${this.Name}/${this.Name}.css`,
            template: `./components/${this.Name}/${this.Name}.html`
        }
    }
    
    static init_events(){
        for(let ind = 0 ; ind < this.Events.init.length;ind++){
            let event = this.Events.init[ind];

            let elems = document.querySelectorAll(`.${event.component ?? this.ClassName}`)
            elems.forEach(elem => {
                console.log(elem)

                if('name' in Object.keys(event))
                    elem.addEventListener(event.name, (evt)=>{
                        event.process(evt, elem);
                    });
                else
                    event.process(elem);
            });
        }
    }
}