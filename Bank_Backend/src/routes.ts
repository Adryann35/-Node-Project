import express, { Request, Response, NextFunction, Router } from 'express';
import { readCustomersFromFile, writeCustomersToFile } from './fileStorage';

const router: Router = express.Router();

// GET: Fetch all customers
router.get('/customers', (req: Request, res: Response, next: NextFunction): void => {
    try {
        const customers = readCustomersFromFile();
        res.status(200).json(customers);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

// POST: Add a new customer
router.post('/customers', (req: Request, res: Response, next: NextFunction): void => {
    const { name, email, balance } = req.body;

    if (!name || !email || typeof balance !== 'number') {
        res.status(400).json({ error: 'Invalid customer data' });
        return;
    }

    try {
        const customers = readCustomersFromFile();
        const newCustomer = { id: Date.now(), name, email, balance };
        customers.push(newCustomer);

        writeCustomersToFile(customers);
        res.status(201).json(newCustomer);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

// PUT: Update a customer
router.put('/customers/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction): void => {
    const { id } = req.params;
    const { name, email, balance } = req.body;

    try {
        const customers = readCustomersFromFile();
        const customerIndex = customers.findIndex(c => c.id === parseInt(id, 10));

        if (customerIndex === -1) {
            res.status(404).json({ error: 'Customer not found' });
            return;
        }

        customers[customerIndex] = { ...customers[customerIndex], name, email, balance };
        writeCustomersToFile(customers);

        res.status(200).json(customers[customerIndex]);
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

// DELETE: Delete a customer
router.delete('/customers/:id', (req: Request<{ id: string }>, res: Response, next: NextFunction): void => {
    const { id } = req.params;

    try {
        const customers = readCustomersFromFile();
        const updatedCustomers = customers.filter(c => c.id !== parseInt(id, 10));

        if (updatedCustomers.length === customers.length) {
            res.status(404).json({ error: 'Customer not found' });
            return;
        }

        writeCustomersToFile(updatedCustomers);
        res.status(204).send();
    } catch (error) {
        next(error); // Pass error to error-handling middleware
    }
});

export default router;
