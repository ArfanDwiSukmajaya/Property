import Property, { IProperty } from '../models/property.model';
import User from '../models/users.model';
import {Types} from "mongoose";

// Create Property
export async function createProperty(propertyData: IProperty): Promise<IProperty> {
    try {
        // Langkah 1: Buat properti baru
        const createdProperty = await Property.create(propertyData);
        // Langkah 2: Ambil pengguna dan perbarui daftar bookmark
        const user = await User.findById(propertyData.owner);
        if (!user) {
            throw new Error('User not found');
        }
        // Check if user.bookmarks is defined before accessing it
        if (user.bookmarks) {
            user.bookmarks.push(new Types.ObjectId(createdProperty._id)); // Convert _id to ObjectId and push it
        } else {
            // If bookmarks is undefined, initialize it as an empty array and push the ObjectId
            user.bookmarks = [new Types.ObjectId(createdProperty._id)];
        }
        // Langkah 3: Simpan perubahan pada objek pengguna
        await user.save();

        return createdProperty;
    } catch (error) {
        throw new Error(`Error creating property: ${error}`);
    }
}

export async function getAllProperty(): Promise<IProperty[]> {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });
        const propertiesWithUsername = await Promise.all(properties.map(async (property) => {
            const user = await User.findById(property.owner);
            const username = user ? user.username : 'Unknown';
            return {
                _id: property._id,
                owner: property.owner,
                username: username, // Tambahkan properti username ke dalam respons
                name: property.name,
                type: property.type,
                description: property.description,
                location: property.location,
                beds: property.beds,
                baths: property.baths,
                square_feet: property.square_feet,
                amenities: property.amenities,
                rates: property.rates,
                seller_info: property.seller_info,
                images: property.images,
                is_featured: property.is_featured,
                createdAt: property.createdAt,
                updatedAt: property.updatedAt
            };
        }));

        return propertiesWithUsername;
    } catch (error) {
        throw new Error(`Error getting all properties: ${error}`);
    }
}


// Read Property
export async function getPropertyById(propertyId: string): Promise<IProperty | null> {
    try {
        const property = await Property.findById(propertyId);
        return property;
    } catch (error) {
        throw new Error(`Error getting property by ID: ${error}`);
    }
}

// Update Property
export async function updateProperty(propertyId: string, update: Partial<IProperty>): Promise<IProperty | null> {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(propertyId, update, { new: true });
        return updatedProperty;
    } catch (error) {
        throw new Error(`Error updating property: ${error}`);
    }
}

// Delete Property
export async function deleteProperty(propertyId: string): Promise<void> {
    try {
        await Property.findByIdAndDelete(propertyId);
    } catch (error) {
        throw new Error(`Error deleting property: ${error}`);
    }
}
