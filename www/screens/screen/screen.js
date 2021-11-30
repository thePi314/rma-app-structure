class Screen {
    static Name = 'Undefined Screen'
    static Id = 'undefined-screen';
    static Template = 'none';

    dom = null;

    constructor(){
        //this.init();
    }

    init(){
        this.before_render();

        for(let key in app.components){
            app.components[key].__all__load_component(this.dom, true); 
            app.components[key].__all__init_events(this.dom, true);   
        }

        this.screen_events();
    }

    static create_dom(){
        let elem = document.createElement('div');
        elem.classList.add('screen');
        elem.id = this.Id;
        elem.innerHTML = this.Template;

        let screen = new this();
        screen.dom = elem;
        return screen;
    }

    screen_events(){}
    before_render(){}
}