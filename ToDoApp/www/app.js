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
                        for(let elem in app.loaded_screens) {
                            FileLoader.load_file(`./screens/${elem}/${elem}.html`,(data)=>{
                                app.loaded_screens[elem].Template = data;
                            },(err)=>{
                                app.loaded_screens[elem].Template = "NOT LOADED";
                                console.log(err);
                            });  
                        } 

                        Navigator.navigate('home');
                    }
                );

                StyleLoader.load_style([...app.config.styles]);
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