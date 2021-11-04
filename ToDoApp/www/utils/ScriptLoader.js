class ScriptLoader {
    static create_script(src, scripts=[], on_loaded_scripts){
        let elem = document.createElement('script');
        elem.src = src;
        elem.onload = () => {
            ScriptLoader.load_scripts(scripts, on_loaded_scripts);
        };
    
        return elem
    }

    static load_scripts(scripts=[], on_loaded_scripts = () => {console.log('Scripts are loaded!')}){
        if(scripts.length == 0){
            on_loaded_scripts();
            return;
        }

        document.head.append(
            ScriptLoader.create_script(
                scripts[0],scripts.slice(1,scripts.length), on_loaded_scripts));
    }
}
