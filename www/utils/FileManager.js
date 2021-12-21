function createFile(path){
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {
        console.log('file system open: ' + fs.name);
        fs.root.getFile(path, { create: true, exclusive: false }, function (fileEntry) {
            console.log("fileEntry is file?" + fileEntry.isFile.toString());
            console.log(fileEntry)
            // fileEntry.name == 'someFile.txt'
            // fileEntry.fullPath == '/someFile.txt'
            //writeFile(fileEntry, null);
        }, (err)=>{console.log(err)});
    
    }, (err)=>{console.log(err)});
}

class FileManager{
    
}