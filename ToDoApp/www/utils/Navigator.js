class Navigator{
    static CurrentScreen = null;

    static navigate(screen_name){
        let name = screen_name.split('/')[screen_name.split('/').length-1];

        FileLoader.load_file(
            `./screens/${screen_name}/${name}.html`, 
            function(screen_template){
                document.querySelector('.app').innerHTML = screen_template; 

                StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
                Navigator.CurrentScreen = new app.loaded_screens[name];
                Navigator.CurrentScreen.init();
            }    
        )
    }
}
