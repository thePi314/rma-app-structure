class NumberField extends Field {
    static validators = [
        (value) => {
            return !isNaN(value);
        }
    ]
}