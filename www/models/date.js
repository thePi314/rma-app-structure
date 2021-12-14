class DateModel extends ModelBase {
    static name = 'DateModel';
    static schema = {
        'date': {
            class: DateField,
            params: {
                default: null,
                auto_now: true
            }
        }
    }
}