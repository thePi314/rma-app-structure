class Home2Screen {
    static Name = 'Home2 Screen'
    static Id = 'home2-screen';
    static Template = '';

    init(){
        document.querySelector("#tohome").addEventListener('click',function(){
            Navigator.navigate('home');
        });
    }
}

app.loaded_screens['home2'] = Home2Screen;