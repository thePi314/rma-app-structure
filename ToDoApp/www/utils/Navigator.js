class Navigator{
    static CURRENT_SCREEN = null;
    static CURRENT_SCREEN_INSTANCE = null;

    static navigate(screen_name){
        let name = screen_name.split('/')[screen_name.split('/').length-1];
        
        document.querySelector('.app').innerHTML = app.loaded_screens[name].Template; 
        StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
        Navigator.CURRENT_SCREEN = screen_name;

        Navigator.CURRENT_SCREEN_INSTANCE = new app.loaded_screens[name];
        Navigator.CURRENT_SCREEN_INSTANCE.init();
    }
}
