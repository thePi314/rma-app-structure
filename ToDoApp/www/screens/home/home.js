class HomeScreen extends ScreenComponent {
    static Name = "Home Screen";
    static Id = "home-screen";

    constructor(){
        super();
    }
    
    init(){
       
    }
    destroy(){}
}

APP.screens["home"] = HomeScreen;