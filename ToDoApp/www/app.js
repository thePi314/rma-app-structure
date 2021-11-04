const CONFIG_PATH = './config.js'; 
const SCRIPT_LOADER = './utils/ScriptLoader.js';

var app = {
    config: null
}

function load_script_loader() {
    let elem = document.createElement('script');
    elem.src = SCRIPT_LOADER;
    elem.onload = () => {
        ScriptLoader.load_scripts([CONFIG_PATH], ()=>{
            ScriptLoader.load_scripts(app.config.dependencies, ()=>{
                Navigator.load_screen('home');
            });
        });
    };

    document.head.append(elem);
}

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    load_script_loader();
}