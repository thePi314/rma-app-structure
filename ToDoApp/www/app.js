const CONFIG_FILE_PATH = './config.json';

var app = {
    screens: {},
    prepare_dependencies: [
        "./utils/ScriptLoader.js",
        "./utils/FileLoader.js"
    ],
    load_dep: function(){
        if(app.prepare_dependencies.length <= 0){
            app.prepare_app();
            return;
        }
        
        let elem = document.createElement("script");
        elem.src = app.prepare_dependencies[0];
        elem.onload = () => {
            app.prepare_dependencies.shift();
            app.load_dep()
        }

        document.head.append(elem);
    },
    prepare_app: function(){
        FileLoader.load_file(CONFIG_FILE_PATH, 
            (data) => {
                app.config = JSON.parse(data);
                app.process_config();
            },
            (err) => {
                console.log(`CONFIG LOAD FAILED: ${err}`);
            }
        );
    },
    process_config: function(){
        ScriptLoader.load_scripts(
            app.config.dependencies, 
            ()=>{
                StyleLoader.load_style(app.config.styles);
                app.load_screens(); 
            }
        );
    },
    load_screens: function (){
        let screens = Object.keys(app.config.screens).map(
            key => `./screens/${key}/${key.split('/')[key.split('/').length-1]}.js`);

        ScriptLoader.load_scripts(screens,() => {
            for(let screen in app.screens)
                FileLoader.load_file(
                    `./screens/${screen}/${screen.split('/')[screen.split('/').length-1]}.html`,
                    (data) => {
                        app.screens[screen].Template = data;
                        if(screen == app.config.start_screen)
                            app.init_app();
                    },
                    (err) => {
                        console.log(`FAILED TO LOAD SCREEN TEMPLATE: ${screen} ${err}`);
                    }
                )
        });
    },
    init_app: function(){
        Navigator.navigate(app.config.start_screen);
    }
}

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);    
    app.load_dep();
}
