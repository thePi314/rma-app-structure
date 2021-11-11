class HeaderComponent {
    static ClassName = 'component-base'
    
    static load_style(){
        StyleLoader.load_style([`./assets/style/component/${this.name}.css`]);
    }

    static init_all(){
        let elems = document.querySelectorAll(`.visible .${this.ClassName}`)
        elems.forEach(elem => {

        });
    }
}