
class HomeScreen extends Screen {
    static Name = 'Home Screen'
    static Id = 'home-screen';
    static Template = '';

    constructor(){
        super();
    }
}

app.screens['home'] = HomeScreen;
