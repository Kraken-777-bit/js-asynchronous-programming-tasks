import fs from 'fs';

// BEGIN
export const compareFileSizes = (filepath1, filepath2, cb) => {
    fs.stat(filepath1, (err1, stats1) => {
      if (err1) {
        cb(err1);
        return;
      }
      fs.stat(filepath2, (err2, stats2) => {
        if (err2) {
          cb(err2);
          return;
        }
        const result = Math.sign(stats1.size - stats2.size);
        cb(null, result);
      });
    });
};
// END