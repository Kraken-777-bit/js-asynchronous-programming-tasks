import fsp from 'fs/promises';

// BEGIN
export const reverse = (filepath) => {
    return fsp.readFile(filepath, 'utf-8') 
      .then((data) => data.split('\n').reverse().join('\n')) 
      .then((reversedData) => fsp.writeFile(filepath, reversedData)); 
};
// END