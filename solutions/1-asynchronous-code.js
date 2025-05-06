import fs from 'fs';

// BEGIN
const print = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.log(`Ошибка: в чтении файла!`);
      return;
    }
    console.log(data);
  });
};

export default print;
// END
