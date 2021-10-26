let script = [
    './script1.js',
    './script2.js',
    './script3.js'
]

function create_script(src){
    let elem = document.createElement('script');
    elem.src = src;

    return elem
}

function load_scripts(){
    for(let ind=0;ind<script.length;ind++){
        console.log(ind);
        document.head.append(create_script(script[ind]));
    }
}

window.onload = () => {
    load_scripts();
}