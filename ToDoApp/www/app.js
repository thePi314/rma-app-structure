const CONFIG_PATH = './config.js'; 
const SCRIPT_LOADER = './utils/ScriptLoader.js';

var app = {
    config: null,
    loaded_screens: {}
}

// TODO TO KILL WHEN DONE
function load_script_loader() {
    let elem = document.createElement('script');
    elem.src = SCRIPT_LOADER;
    elem.onload = () => {
        ScriptLoader.load_scripts([CONFIG_PATH], ()=>{
            ScriptLoader.load_scripts(app.config.dependencies, ()=>{
                ScriptLoader.load_scripts(
                    Object.keys(app.config.screens)
                    .map(screen => `./screens/${screen}/${screen}.js`),
                    () => {
                        Navigator.navigate('home');
                    }
                )
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