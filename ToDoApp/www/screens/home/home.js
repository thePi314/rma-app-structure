class HomeScreen {
    static Name = 'Home Screen'
    static Id = 'home-screen';

    init(){
        document.querySelector("#toHome2").addEventListener('click',function(){
            Navigator.navigate('home2');
        });
    }
}

app.loaded_screens['home'] = HomeScreen;
