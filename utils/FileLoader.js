class FileLoader {
    static load_file(path, success, failure) {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', path)

        xhr.onload = () => {
            if (xhr.status == 200)
                success(xhr.response)
            else if (failure)
                failure(xhr.status)
        }

        xhr.send()
    }
}
