class DaySegmentComponent extends BaseComponent{
    static Name = 'day-segment'
    static ClassName = 'component-day-segment';

    static init_events(root_dom){}
}

app.components[DaySegmentComponent.ClassName] = DaySegmentComponent;
DaySegmentComponent.load_config();
