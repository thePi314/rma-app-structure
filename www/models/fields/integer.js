class IntegerField extends Field {
    static validators = [
        (value) => {
            return !isNaN(value) && Number.isInteger(value);
        }
    ]
}