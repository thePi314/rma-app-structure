class Navigator {
    static CURRENT_SCREEN = '';
    static CURRENT_SCREEN_INSTANCE = null;

    static navigate(screen){
        Navigator.CURRENT_SCREEN = screen;
        
        StyleLoader.load_style([`./screens/${screen}/${screen}.css`]);
        document.querySelector('.app').innerHTML = app.screens[screen].Template;
        
        Navigator.CURRENT_SCREEN_INSTANCE = new app.screens[screen]();
        Navigator.CURRENT_SCREEN_INSTANCE.init();
    }
}