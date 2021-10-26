let scripts = [
    './script1.js',
    './script2.js',
    './script3.js'
]

function create_script(src){
    let elem = document.createElement('script');
    elem.src = src;
    elem.onload = () => {
        scripts.splice(0,1);
        load_scripts();
    };

    return elem
}

function load_scripts(){
    if(scripts.length == 0)
        return;
        
    document.head.append(create_script(scripts[0]));
}

window.onload = () => {
    load_scripts();
}