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

function DOMRequest(method, url , data = null , headers = {} ) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);

        for( let elem in headers )
            xhr.setRequestHeader( elem , headers[elem] ) ;

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send(data);
    });
}

window.onload = () => {
    load_script_loader();
    //ScriptLoader.load_scripts(['./script1.js','./script2.js','./script3.js']);
}