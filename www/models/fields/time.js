class Time{
    constructor(
        hour=new Date().getHours(),
        minute=new Date().getMinutes(),
        second=new Date().getSeconds()
    ){
        this.data={
            hour: null,
            minute: null,
            second: null
        };

        // Hour 
        Object.defineProperty(this, 'hour', {
            set: (value) => { 
                if(!(0 <= value && value <= 23))
                    throw new Error(`${value} cant not describe amount of hours.`);
                
                this.data.hour = value; 
            },
            get: ()=>{return this.data.hour}
        });

        // Minute 
        Object.defineProperty(this, 'minute', {
            set: (value) => { 
                if(!(0 <= value && value <= 59))
                    throw new Error(`${value} cant not describe amount of minutes.`);
                
                this.data.minute = value; 
            },
            get: ()=>{return this.data.minute}
        });

        // Second 
        Object.defineProperty(this, 'second', {
            set: (value) => { 
                if(!(0 <= value && value <= 59))
                    throw new Error(`${value} cant not describe amount of second.`);
                
                this.data.second = value; 
            },
            get: ()=>{return this.data.second}
        });

        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    
    static format(string_time){
        return new Time(
            +string_time.split(':')[0],
            +string_time.split(':')[1],
            +string_time.split(':')[2]
        )
    }

    compare(time){
        if(time.hour < this.hour)
            return 1;
        else
            if(time.hour > this.hour)
                return -1;

        if(time.minute < this.minute)
            return 1;
        else
            if(time.minute > this.minute)
                return -1;

        if(time.second < this.second)
                return 1;
            else
                if(time.second > this.second)
                    return -1;

        return 0;
    }

    string() {
        return `${this.hour < 10 ? '0' : ''}${this.hour}:${this.minute < 10 ? '0' : ''}${this.minute}:${this.second < 10 ? '0' : ''}${this.second}`;
    }
}

class TimeField extends Field {
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