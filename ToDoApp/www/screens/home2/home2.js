class Home2Screen extends ScreenComponent {
    static Name = "Home Screen";
    static Id = "home2-screen";

    constructor(){
        super();
    }

    init(){
        this.dom = document.getElementById('home2-screen');
        this.dom.querySelector('#gotohome').addEventListener('click',function(){
            Navigator.navigate('home');
        });
    }
    destroy(){}
}

APP.screens["home2"] = Home2Screen;