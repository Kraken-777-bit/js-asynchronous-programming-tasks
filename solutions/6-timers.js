import fs from 'fs';

// BEGIN
const watch = (filepath, interval, callback) => {
    let lastModifiedTime = Date.now(); 
  
    const checkFile = () => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId); 
          callback(err);
          return;
        }
  
        const modifiedTime = stats.mtimeMs; // Время изменения файла
  
        if (modifiedTime > lastModifiedTime) {
          callback(null); // Файл изменился — вызываем колбэк
        }
  
        lastModifiedTime = modifiedTime; 
      });
    };
  
    checkFile(); 
    const timerId = setInterval(checkFile, interval); 
  
    return timerId; 
};
  
export default watch;
// END
