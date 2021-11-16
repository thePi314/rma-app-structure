class HomeScreen extends ScreenComponent {
    static Name = "Home Screen";
    static Id = "home-screen";
    static Template = '';

    constructor(){
        super();
    }

    init(){
        this.dom = document.getElementById('home-screen');
        
    }
    destroy(){}
}

app.screens["home"] = HomeScreen;