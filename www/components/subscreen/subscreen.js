class SubscreenComponent extends BaseComponent{
    static Name = 'subscreen'
    static ClassName = 'component-subscreen';

    static init_events(root_dom){
        
    }
}

app.components[SubscreenComponent.ClassName] = SubscreenComponent;
SubscreenComponent.load_config();
