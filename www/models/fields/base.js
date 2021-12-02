class Field {
    static validators = []

    constructor(value=null, default_value=null){
        this.value = value ?? default_value;
    }

    set(value){
        if(this.constructor.validate())
            this.value = value;
    }
    get(){
        return this.value;
    }

    static validate(value){
        for(let ind=0;ind<this.validators.length;ind++)
            if(!this.validators[ind](value))
                return false;
        
        return true;
    }

    hook_events(obj, field){
        Object.defineProperty(obj, field, {
            set: (value) => { this.set(value) },
            get: ()=>{return this.value}
        });
    }
}