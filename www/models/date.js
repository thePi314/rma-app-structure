class Date extends ModelBase {
    static count = 1;
    static name = 'dates';
    static schema = {
        'id': IntegerField,
        'date': DateField,
        'tasks': ListField
    }

    constructor(initial_data={}){
        for(let key in this.constructor.schema){
            this.constructor.schema[key].hook_events(this,key);
        } 
    }
}