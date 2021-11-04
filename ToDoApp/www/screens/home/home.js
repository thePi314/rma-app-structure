console.log('HomeScreen start loading!')

class HomeScreen extends ScreenComponent {
    static Name = "Home Screen";
    static Id = "home-screen";

    constructor(){}

    init(){
        this.ScreenDom = document.getElementById('home-screen');
    }
    destroy(){}
}

console.log('HomeScreen loaded!')
