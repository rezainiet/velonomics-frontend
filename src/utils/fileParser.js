import * as XLSX from 'xlsx';
import Papa from 'papaparse';

export const parseFile = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const data = e.target.result;
            try {
                if (file.name.endsWith('.csv')) {
                    Papa.parse(data, {
                        header: true,
                        complete: (results) => {
                            resolve(results.data);
                        },
                        error: (error) => {
                            reject(error);
                        }
                    });
                } else if (file.name.endsWith('.xlsx')) {
                    const workbook = XLSX.read(data, { type: 'binary' });
                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];
                    const jsonData = XLSX.utils.sheet_to_json(sheet);
                    resolve(jsonData);
                } else {
                    reject(new Error('Unsupported file format'));
                }
            } catch (error) {
                reject(error);
            }
        };
        reader.onerror = (error) => reject(error);
        reader.readAsBinaryString(file);
    });
};

export const syncMasterFile = async (file) => {
    const parsedData = await parseFile(file);
    // Here you would typically send the parsed data to your backend or update your local storage
    // For this example, we'll just return the parsed data
    return parsedData;
};

