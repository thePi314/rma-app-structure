class HeaderComponent extends BaseComponent{
    static Name = 'header'
    static ClassName = 'component-header';
    static Events = {
        'init': [
            {
                event: 'click',
                process: (event, dom) => {

                }
            }
        ]
    }
}

app.loaded_components[HeaderComponent.className] = HeaderComponent;