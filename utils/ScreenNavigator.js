class ScreenNavigator{
    static load_screen(screen_name){
        let name = screen_name.split('/')[screen_name.split('/').length-1];

        ScriptLoader.load_scripts([`./screens/${screen_name}/${name}.js`]);
        StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
        
        let html_content = fetch(`http://${window.}./screens/${screen_name}/${name}.html`)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
}
