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

    constructor(args={}){
        super(args.value ?? null, args.default_value ?? null);
        if(args.auto_now && !this.value){
            this.value = new Date();
        }
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