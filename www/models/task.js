//id:1,
//time: "07:30",
//status: "missed",
//title: "Ustajanje"

class DateTask extends ModelBase {
    static name = 'DateTask';
    static schema = {
        'time': {
            class: DateField,
            params: {
                default: null,
                auto_now: true
            }
        }
    }
}