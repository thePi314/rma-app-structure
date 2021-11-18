app.config = {
    styles: [
        './assets/styles/colors.css',
        './assets/styles/dimensions.css'
    ],
    dependencies: [
        './utils/StyleLoader.js',
        './utils/Navigator.js',
        './utils/FileLoader.js'
    ],
    components: [
        './components/base',
        './components/header'
    ],
    screens: {
        "home": false
    }
}