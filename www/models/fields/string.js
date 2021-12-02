class StringField extends Field {
    static validators = [
        (value) => {
            return typeof value === 'string';
        }
    ]
}