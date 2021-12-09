class DateField extends Field {
    static validators = [
        (value)=>{
            try{
                return value.constructor.name === 'Date';
            }
            catch(err){
                return false;
            }
        }
    ]

    constructor(value=null, default_value=null){
        super(value, default_value);
    }

    set(value){
        if(!this.constructor.validate(value))
            throw new Error(`${value} is not type of ${this.constructor.name}`);
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
}