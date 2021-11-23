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
    
    static __all__load_component(){
        document.querySelectorAll(`.component.${this.ClassName}`).forEach(cmp => {
            cmp.innerHTML = this.Template;  
        });
    }

    static __all__init_events(){
        let elems = document.querySelectorAll(`.component.${this.ClassName}`)
        elems.forEach(elem => {
            this.init_events(elem);
        });
    }

    // Override
    static init_events(root_dom){}
}