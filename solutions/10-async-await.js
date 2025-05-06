import fsp from 'fs/promises';

// BEGIN
export const exchange = async (filePath1, filePath2) => {
    try {
      const [data1, data2] = await Promise.all([
        fsp.readFile(filePath1, 'utf-8'),
        fsp.readFile(filePath2, 'utf-8')
      ]);
  
      await Promise.all([
        fsp.writeFile(filePath1, data2, 'utf-8'),
        fsp.writeFile(filePath2, data1, 'utf-8')
      ]);
    } catch (error) {
      console.log(`Ошибка обмена файлов!`);
      throw error; // Позволяет вызывающему коду обработать ошибку
    }
};
// END