class ScreenNavigator{
    static load_screen(screen_name, parent = null){
        let name = screen_name.split('/')[screen_name.split('/').length-1];

        FileLoader.load_file(`./screens/${screen_name}/${screen_name}.html`,(res)=>{
            console.log(res)
            
            //ScriptLoader.load_scripts([`./screens/${screen_name}/${name}.js`]);
            //StyleLoader.load_style([`./screens/${screen_name}/${name}.css`]);
        },(err)=>{
            console.log(err)
        });
    }
}