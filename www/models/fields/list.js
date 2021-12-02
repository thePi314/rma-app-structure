class ListField extends List {
    static validators = [
        (value)=>{
            return Array.isArray(value);
        }
    ]

    constructor(value=null, default_value=null, child_type=null){
        super(value, default_value);
        this.child_type = child_type;

        if(this.value == null)
            this.value = [];
    }

    push(item){
        if(item.constructor !== this.child_type){
            throw "Item is not of predefined type!";
        }

        this.value.push(item);
    }

    at(index){ return this.value[index];}
    pop(){return this.value.pop()}
    removeAt(index){return this.value.splice(index,1)}

    get length(){return this.value.length;}

    static hook_events(obj, field){
        Object.defineProperty(obj, field, {
            set: (value)=>{ this.set(value) },
            get: ()=>{return this.value},
            push: (item)=>{this.push(value)},
            at: (index)=>{ return this.at(index)},
            pop:()=>{return this.pop()},
            removeAt:(index)=>{return this.removeAt(index);},
            length:()=>{return this.length;}
        });
    }
}