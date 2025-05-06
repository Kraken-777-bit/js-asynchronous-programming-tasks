import fs from 'fs';

// BEGIN
const write = (filePath, data, cb) => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.log(`Ошибка записи в файл!`);
        cb(err); 
        return;
      }
      cb(null); // не забываем последний успешный вызов потребуется для вложенностей
    });
};
  
export default write;
// END