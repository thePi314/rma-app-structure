
class HomeScreen extends Screen {
    static Name = 'Home Screen'
    static Id = 'home-screen';
    static Template = '';

    constructor(){
        super();
    }

    screen_events(){
        document.getElementById('triger-drugi').addEventListener('click',()=>{
            SubscreenComponent.toggle('subscreen-new-task2');
        })
    }
}

app.screens['home'] = HomeScreen;
