class BaseComponent {
    static Name = 'base';
    static ClassName = 'component-base';
    static Template = '';
    static Events = {
        'init': [
            {
                name: 'click',
                process: (event, dom) => {

                }
            }
        ]
    }

    static get Config(){
        return {
            style: `./components/${this.Name}/${this.Name}.css`,
            template: `./components/${this.Name}/${this.Name}.html`
        }
    }
    
    static init_events(){
        document.querySelectorAll(`.${this.ClassName}`).forEach(elem => {
            for(let event in this.Events.init){
                elem.addEventListener(event.name, (evt)=>{
                    event.process(evt, elem);
                })
            }
        });
    }
}