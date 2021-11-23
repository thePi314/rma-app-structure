class HeaderComponent extends BaseComponent{
    static Name = 'header'
    static ClassName = 'component-header';

    static init_events(root_dom){
        let selected_screen = root_dom.querySelector(`.navbar-item[screen="${root_dom.getAttribute('selected-screen')}"]`)
        if(selected_screen != null){
            selected_screen.classList.add('selected')
            let img = selected_screen.querySelector('img');
            img.src = img.src.split('.').slice(0,img.src.split('.').length-1).join('.') + '_white.svg';
        }

        // init toogler logic
        let toggler_elem = root_dom.querySelector('.navbar-toogler');
        let navbar_elem = root_dom.querySelector('.navbar');

        toggler_elem.addEventListener('click',()=>{
            if(navbar_elem.classList.contains('slide-left') || navbar_elem.classList.contains('slide-right'))
                return;

            if(navbar_elem.classList.contains('collapsed'))
                navbar_elem.classList.add('slide-right');
            else{
                navbar_elem.classList.add('collapsed');
                navbar_elem.classList.add('slide-left');
            }
        });
    
        navbar_elem.addEventListener('animationend',()=>{
            if(navbar_elem.classList.contains('slide-left')){
                navbar_elem.classList.remove('slide-left');
            }
            else{
                if(navbar_elem.classList.contains('slide-right')){
                    navbar_elem.classList.remove('slide-right');
                    navbar_elem.classList.remove('collapsed');
                }
            }
        });
    }
}

app.components[HeaderComponent.ClassName] = HeaderComponent;
HeaderComponent.load_config();
