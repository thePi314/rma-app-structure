
class HomeScreen extends Screen {
    static Name = 'Home Screen'
    static Id = 'home-screen';
    static Template = '';

    constructor(){
        super();
    }

    before_render(){
        let items = ``;
        app.data.dates.forEach(item => {
            items = `${items}<div class="component component-day-segment" data='${JSON.stringify(item)}'></div>`;
        });

        this.dom.querySelector('.day-segments').innerHTML = items;
    }

    screen_events(){
        let subscreen = this.dom.querySelector('#subscreen-new-task');

        subscreen.querySelector('.wrapper button').addEventListener('click',()=>{
            let data = {
                id: null,
                time: subscreen.querySelector('.input-label[name="time"] input').value,
                date: subscreen.querySelector('.input-label[name="date"] input').value,
                title: subscreen.querySelector('.input-label[name="title"] textarea').value,
            }

            subscreen.querySelector('.input-label[name="time"] input').value = null;
            subscreen.querySelector('.input-label[name="date"] input').value = null;
            subscreen.querySelector('.input-label[name="title"] textarea').value = null;

            SubscreenComponent.toggle('subscreen-new-task');
        })
    }
}

app.screens['home'] = HomeScreen;
