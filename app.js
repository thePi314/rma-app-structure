class ScriptLoader {
    static scripts = [];
    
    static load_config_file(){
        document.body.append(ScriptLoader.create_script_element('./config.js', ()=>{
            ScriptLoader.scripts = CONFIG_JSON.dependencies;
            ScriptLoader.load_scripts();
        }));
    }
    
    static create_script_element(src, on_load_event = () => {}){
        let elem = document.createElement('script');
        elem.src = src;
        elem.onload = on_load_event;
    
        return elem;
    }
    
    static load_scripts(){
        if(ScriptLoader.scripts.length == 0)
            return;
    
        document.body.append(
            ScriptLoader.create_script_element(
                ScriptLoader.scripts[0], () => ScriptLoader.load_scripts()));
    
        ScriptLoader.scripts.shift();
    }
}

window.onload = () => {
    ScriptLoader.load_config_file();
}