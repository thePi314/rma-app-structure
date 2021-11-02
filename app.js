const CONFIG_PATH = './config.js'; 
const SCRIPT_LOADER = './utils/ScriptLoader.js'

var app = {
    config: null,
    app_ready: false
}

function load_script_loader() {
    let elem = document.createElement('script');
    elem.src = SCRIPT_LOADER;
    elem.onload = () => {
        ScriptLoader.load_scripts([CONFIG_PATH], ()=>{
            ScriptLoader.load_scripts(app.config.dependencies, ()=>{
                app.app_ready=true;
            });
        });
    };

    document.head.append(elem);
}

window.onload = () => {
    load_script_loader();
    //ScriptLoader.load_scripts(['./script1.js','./script2.js','./script3.js']);
}