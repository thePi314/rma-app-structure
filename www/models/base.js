class ModelBase {
    static has_primary_key = true;
    static count = 1;
    static name = 'base';
    static schema = {}

    constructor(initial_data={}){
        this.data = {}
        if(this.constructor.has_primary_key){
            this.data['id'] = new PrimaryField(initial_data?.Id ?? this.constructor.count++);
            this.data['id'].hook_events(this,'id');
        }
        
        for(let key in this.constructor.schema){
            this.data[key] = new this.constructor.schema[key].class({
                ...this.constructor.schema[key].params,
                value: (
                    this.constructor.schema[key]?.params?.default ?? initial_data[key]
                )
            });
            this.data[key].hook_events(this,key);
        } 
    }
}
