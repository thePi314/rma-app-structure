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

    static load_config() {
        FileLoader.load_file(this.Config.template, (data)=>{
            this.Template = data;
            StyleLoader.load_style([this.Config.style]);
        });
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