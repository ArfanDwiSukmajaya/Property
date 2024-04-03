import User, { IUser } from '../models/users.model';

// Create User
export async function createUser(userData: IUser): Promise<IUser> {
    try {
        const createdUser = await User.create(userData);
        return createdUser;
    } catch (error) {
        throw new Error(`Error creating user: ${error}`);
    }
}

// Read User
export async function getUserByEmail(email: string): Promise<IUser | null> {
    try {
        const user = await User.findOne({ email }).populate('bookmarks');
        return user;
    } catch (error) {
        throw new Error(`Error getting user by email: ${error}`);
    }
}

// Update User
export async function updateUserByEmail(email: string, update: Partial<IUser>): Promise<IUser | null> {
    try {
        const updatedUser = await User.findOneAndUpdate({ email }, update, { new: true });
        return updatedUser;
    } catch (error) {
        throw new Error(`Error updating user: ${error}`);
    }
}

// Delete User
export async function deleteUserByEmail(email: string): Promise<void> {
    try {
        await User.findOneAndDelete({ email });
    } catch (error) {
        throw new Error(`Error deleting user: ${error}`);
    }
}
