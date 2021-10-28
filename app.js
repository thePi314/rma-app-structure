const CONFIG_FILE_PATH = './config.js';

var APP = {
    prepare_dependencies: [
        "./utils/ScriptLoader.js"
    ],
    load_dep: function(){
        if(APP.prepare_dependencies.length <= 0){
            APP.prepare_app();
            return;
        }
        
        let elem = document.createElement("script");
        elem.src = APP.prepare_dependencies[0];
        elem.onload = () => {
            APP.prepare_dependencies.shift();
            APP.load_dep()
        }

        document.head.append(elem);
    },
    prepare_app: function(){
        //APP.load_dep();
        ScriptLoader.load_config_file(CONFIG_FILE_PATH);
    },
    load_screens: function (){
        let screen_path = './screens/home/';

    },
    app_ready: false
}

window.onload = () => {
    APP.load_dep();
}
