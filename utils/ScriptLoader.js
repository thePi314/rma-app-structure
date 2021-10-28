class ScriptLoader {
    static Scripts = [];
    
    static load_config_file(path_to_config_file){
        document.body.append(ScriptLoader.create_script_element(path_to_config_file, ()=>{
            ScriptLoader.Scripts = CONFIG_JSON.dependencies;
            ScriptLoader.load_scripts();
        }));
    }
    
    static create_script_element(src, on_load_event = () => {}){
        let elem = document.createElement('script');
        elem.src = src;
        elem.onload = on_load_event;
    
        return elem;
    }
    
    static load_scripts(scripts=null){
        if(scripts == null){
            if(ScriptLoader.Scripts.length == 0)
                return;
        
            document.body.append(
                ScriptLoader.create_script_element(
                    ScriptLoader.Scripts[0], () => ScriptLoader.load_scripts()));
        
            ScriptLoader.Scripts.shift();
            return;
        }
        
        if(scripts.length == 0)
            return;
    
        document.body.append(
            ScriptLoader.create_script_element(
                scripts[0], () => ScriptLoader.load_scripts(scripts.slice(0,1))));
    }
}

class CSSLoader {
    static load_css(path){
        let elem = document.createElement('link');
        elem.rel = "stylesheet";
        elem.href = path;

        document.head.append(elem);
    }
}


console.log("ScriptLoader is loaded")
