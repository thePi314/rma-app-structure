class DateModel extends ModelBase {
    static name = 'dates';
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