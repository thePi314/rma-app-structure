class HomeScreen {
    static Name = 'Home Screen'
    static Id = 'home-screen';
    static Template = '';

    init(){
        document.querySelector("#toHome2").addEventListener('click',function(){
            Navigator.navigate('home2');
        });
    }
}

app.loaded_screens['home'] = HomeScreen;
