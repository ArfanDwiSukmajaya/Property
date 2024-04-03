import { Request, Response } from 'express';
import * as userService from '../services/UserService';

// Create User
export async function createUser(req: Request, res: Response): Promise<void> {2
    try {
        const userData = req.body;
        const createdUser = await userService.createUser(userData);
        res.status(201).json(createdUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Get User by Email
export async function getUserByEmail(req: Request, res: Response): Promise<void> {
    try {
        const email = req.params.email;
        const user = await userService.getUserByEmail(email);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Update User
export async function updateUserByEmail(req: Request, res: Response): Promise<void> {
    try {
        const email = req.params.email;
        const update = req.body;
        const updatedUser = await userService.updateUserByEmail(email, update);
        if (!updatedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(updatedUser);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}

// Delete User
export async function deleteUserByEmail(req: Request, res: Response): Promise<void> {
    try {
        const email = req.params.email;
        await userService.deleteUserByEmail(email);
        res.status(204).end();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
}
