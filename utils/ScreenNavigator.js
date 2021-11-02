class ScreenNavigator{
    static load_screen(screen_name){
        let name = screen_name.split('/')[screen_name.split('/').length-1];

        FileLoader.load_file(
            `./screens/${screen_name}/${name}.html`, 
            function(screen_template){
                document.body.innerHTML = screen_template; 

                ScriptLoader.load_scripts([`./screens/${screen_name}/${name}.js`]);
                StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
            }    
        )
    }
}
