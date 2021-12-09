class ModelBase {
    static has_primary_key = true;
    static count = 1;
    static name = 'base';
    static schema = {}

    constructor(initial_data={}){
        this.data = {}
        if(this.constructor.has_primary_key){
            this.data['Id'] = new PrimaryField(this.constructor.count++);
            this.data['Id'].hook_events(this,'Id');
        }
        
        
        for(let key in this.constructor.schema){
            this.data[key] = new this.constructor.schema[key].class();
            this.data[key].hook_events(this,key);
        } 
    }
}
