import { Request, Response } from 'express';
import * as propertyService from '../services/PropertyService';

// Create Property
export async function createProperty(req: Request, res: Response): Promise<void> {
    try {
        const propertyData = req.body;
        const createdProperty = await propertyService.createProperty(propertyData);
        res.status(201).json(createdProperty);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

export async function getAllPropertiesController(_req: Request, res: Response): Promise<void> {    try {
        const properties = await propertyService.getAllProperty();
        res.json(properties);
    }catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Get Property by ID
export async function getPropertyById(req: Request, res: Response): Promise<void> {
    try {
        const propertyId = req.params.id;
        const property = await propertyService.getPropertyById(propertyId);
        if (!property) {
            res.status(404).json({ error: 'Property not found' });
            return;
        }
        res.json(property);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Update Property
export async function updateProperty(req: Request, res: Response): Promise<void> {
    try {
        const propertyId = req.params.id;
        const update = req.body;
        const updatedProperty = await propertyService.updateProperty(propertyId, update);
        if (!updatedProperty) {
            res.status(404).json({ error: 'Property not found' });
            return;
        }
        res.json(updatedProperty);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Delete Property
export async function deleteProperty(req: Request, res: Response): Promise<void> {
    try {
        const propertyId = req.params.id;
        await propertyService.deleteProperty(propertyId);
        res.status(204).end();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
