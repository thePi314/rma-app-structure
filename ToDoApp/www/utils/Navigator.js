class Navigator {
    static CURRENT_SCREEN = '';
    static CURRENT_SCREEN_INSTANCE = null;

    static navigate(screen){
        Navigator.CURRENT_SCREEN = screen;

        FileLoader.load_file(`./screens/${screen}/${screen}.html`,function(data){
            document.querySelector('.app').innerHTML = data;

            StyleLoader.load_style([`./screens/${screen}/${screen}.css`]);
            //ScriptLoader.load_scripts([`./screens/${screen}/${screen}.js`]);
            Navigator.CURRENT_SCREEN_INSTANCE = new APP.screens[screen]();
            Navigator.CURRENT_SCREEN_INSTANCE.init();
        })
    }
}