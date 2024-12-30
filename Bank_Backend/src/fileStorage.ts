import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, 'customers.json');

// Function to read data from the file
export const readCustomersFromFile = (): any[] => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading the file:', error);
        return [];
    }
};

// Function to write data to the file
export const writeCustomersToFile = (customers: any[]): void => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(customers, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing to the file:', error);
    }
};
