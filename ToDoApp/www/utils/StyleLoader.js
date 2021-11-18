class StyleLoader {
    static create_style(src, styles=[]){
        let elem = document.createElement('link');   
        elem.href = src;
        elem.rel = 'stylesheet';
        elem.onload = () => {
            StyleLoader.load_style(styles);
        };
    
        return elem
    }

    static load_style(styles=[]){
        if(styles.length == 0){
            return;
        }

        document.head.append(
            StyleLoader.create_style(
                styles[0],styles.slice(1,styles.length)));
    }
}
