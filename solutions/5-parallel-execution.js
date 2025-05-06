import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import async from 'async';

// BEGIN
export const getDirectorySize = (dirPath, callback) => {
    fs.readdir(dirPath, (readErr, files) => {
      if (readErr) {
        callback(readErr);
        return;
      }

      const filePaths = files.map((file) => path.join(dirPath, file));
      
      async.map(filePaths, (filePath, cb) => { // Итератор функция
        fs.stat(filePath, (statErr, stats) => {
          if (statErr) {
            cb(statErr, 0); 
            return;
          }
  
          cb(null, stats.isFile() ? stats.size : 0); // Учитываем только файлы
        });
      }, (err, sizes) => { // callback функция
        if (err) {
          callback(err);
          return;
        }
  
        callback(null, err ? null : _.sumBy(sizes)); // Суммируем размеры всех файлов
      });
    });
};
// END
