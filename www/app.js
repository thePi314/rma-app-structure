const CONFIG_FILE_PATH = './config.json';

var app = {
    cache:{},
    data:{
        dates:[
            {
                id:1,
                date: "2021-11-21",
                tasks:[
                    {
                        id:1,
                        time: "07:30",
                        status: "missed",
                        title: "Ustajanje"
                    },
                    {
                        id:2,
                        time:"08:00",
                        status: null,
                        title: "Skola"
                    },
                    {
                        id:3,
                        time:"13:00",
                        status: null,
                        title: "Kafa"
                    }
                ]
            }
        ]
    },
    screens: {},
    components:{},
    config:null,
    setup: {
        dependencies: [
            "./utils/ScriptLoader.js",
            "./utils/FileLoader.js"
        ],
        load_dep: function(){
            if(app.setup.dependencies.length <= 0){
                app.setup.prepare_app();
                return;
            }
            
            let elem = document.createElement("script");
            elem.src = app.setup.dependencies[0];
            elem.onload = () => {
                app.setup.dependencies.shift();
                app.setup.load_dep()
            }
    
            document.head.append(elem);
        },
        prepare_app: function(){
            FileLoader.load_file(CONFIG_FILE_PATH, 
                (data) => {
                    app.config = JSON.parse(data);
                    app.setup.process_config();
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
                    app.setup.load_components(); 
                }
            );
        },
        load_components: function(){
            ScriptLoader.load_scripts(
                app.config.components.map(component => `${component}/${component.split('/')[component.split('/').length-1]}.js`), 
                ()=>{
                    StyleLoader.load_style(app.config.styles);
                    app.setup.load_screens(); 
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
                                app.setup.init_app();
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
    },
}

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);    
    app.setup.load_dep();
}
