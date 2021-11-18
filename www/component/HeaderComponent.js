class HeaderComponent {
    static ClassName = 'component-header'
    static InitEvents = {
        'buttons': function(dom){
            return;
        }
    }

    static load_style(){
        StyleLoader.load_style([`./assets/style/component/${this.name}.css`]);
    }

    static init_all(){
        let elems = document.querySelectorAll(`.visible .${this.ClassName}`)
        elems.forEach(elem => {
            for(let event in this.InitEvents)
                this.InitEvents[event](elem);
        });
    }
}