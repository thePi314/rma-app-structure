class HomeScreen extends ScreenComponent {
    static Name = "Home Screen";
    static Id = "home-screen";

    constructor(){
        super();
    }

    init(){
        this.dom = document.getElementById('home-screen');
        this.dom.querySelector('#gotohome2').addEventListener('click',function(){
            Navigator.navigate('home2');
        });
    }
    destroy(){}
}

APP.screens["home"] = HomeScreen;