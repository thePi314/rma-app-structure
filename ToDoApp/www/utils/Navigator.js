class Navigator{
    static CURRENT_SCREEN = null;
    static CURRENT_SCREEN_INSTANCE = null;

    static navigate(screen_name){
        
        let name = screen_name.split('/')[screen_name.split('/').length-1];
        
        app.loaded_screens[name].Template;
        document.querySelector('.app').innerHTML = screen_template; 
        StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);

        FileLoader.load_file(
            `./screens/${screen_name}/${name}.html`, 
            function(screen_template){
                document.querySelector('.app').innerHTML = screen_template; 

                StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
                Navigator.CURRENT_SCREEN = screen_name;

                Navigator.CURRENT_SCREEN_INSTANCE = new app.loaded_screens[name];
                Navigator.CURRENT_SCREEN_INSTANCE.init();
            }    
        )
    }
}
