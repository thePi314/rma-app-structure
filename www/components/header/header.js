class HeaderComponent extends BaseComponent{
    static Name = 'header'
    static ClassName = 'component-header';
    static Events = {
        'init': [
            {
                event: 'click',
                process: (event, dom) => {

                }
            },
            {
                component: 'navbar-item',
                event: 'click',
                process: (event, dom) => {
                    console.log(dom)
                    //Navigator.navigate(dom.getAttribute('screen'))
                }
            },
            {
                process: (dom) => {
                    document.querySelector(`.navbar-item[screen="${Navigator.CURRENT_SCREEN}"]`).classList.add('selected');
                    console.log('hello')
                }
            }
        ]
    }

    static load_config() {
        FileLoader.load_file(this.Config.template, (data)=>{
            this.Template = data;
            StyleLoader.load_style([this.Config.style]);
        });
    }
}

app.components[HeaderComponent.className] = HeaderComponent;
HeaderComponent.load_config();
