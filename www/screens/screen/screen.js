class Screen {
    static Name = 'Undefined Screen'
    static Id = 'undefined-screen';
    static Template = 'none';

    constructor(){
        this.init();
    }

    init(){
        for(let key in app.loaded_components){
            app.loaded_components[key].init_events(); 
        }
    }
}