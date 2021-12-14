class PrimaryField extends Field {
    constructor(value=null){
        super(value,value);
    }

    get(){return this.value;}
    set(value){throw new Error("Primary Key can not be modified!!!");}

    hook_events(obj, field){
        Object.defineProperty(obj, field, {
            get: ()=>{return this.value}
        });
    }
}