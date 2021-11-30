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
    
    static __all__load_component(dom, screen=false){
        dom.querySelectorAll(`${screen ? '.screen' : (':not(.screen) > ')} .component.${this.ClassName}`).forEach(cmp => {
            let children = [...cmp.children];
            cmp.innerHTML = this.Template;  
            console.log(children);

            if(cmp.querySelector('.component-flag-children') != null){
                cmp.querySelector('.component-flag-children').append(...children)
            }
        });
    }

    static __all__init_events(dom, screen=false){
        let elems = dom.querySelectorAll(`${screen ? '.screen' : (':not(.screen) >')} .component.${this.ClassName}`)
        elems.forEach(elem => {
            this.init_events(elem);
            this.__init_children(elem);
        });   
    }

    static __init_children(dom){
        let elems = dom.querySelectorAll(`:not(.screen) > .component.${this.ClassName}`)
        elems.forEach(elem => {
            for(let key in app.components){
                app.components[key].__all__load_component(elem); 
                app.components[key].__all__init_events(elem);   
            }
        });
    }

    // Override
    static init_events(root_dom){}
}