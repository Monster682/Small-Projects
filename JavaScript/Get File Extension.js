function getFileExtension(filename) {
    return filename.split('.').pop();
}

console.log(getFileExtension('module.js'));
console.log(getFileExtension('module.txt'));
