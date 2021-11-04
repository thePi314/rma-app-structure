class FileLoader{
    static load_file(path, on_success, on_failure){
        const xhr = new XMLHttpRequest()

        xhr.open('GET', path, false)
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.withCredentials = false;

        xhr.onload = () => {
            if (xhr.status == 200 || xhr.status == 0)
                on_success(xhr.response)
            else if (failure)
                on_failure(xhr.status)
        }

        xhr.send()
    }
}
