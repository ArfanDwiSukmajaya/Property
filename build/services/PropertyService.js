"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.getPropertyById = exports.getAllProperty = exports.createProperty = void 0;
const property_model_1 = __importDefault(require("../models/property.model"));
const users_model_1 = __importDefault(require("../models/users.model"));
const mongoose_1 = require("mongoose");
// Create Property
function createProperty(propertyData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Langkah 1: Buat properti baru
            const createdProperty = yield property_model_1.default.create(propertyData);
            // Langkah 2: Ambil pengguna dan perbarui daftar bookmark
            const user = yield users_model_1.default.findById(propertyData.owner);
            if (!user) {
                throw new Error('User not found');
            }
            // Check if user.bookmarks is defined before accessing it
            if (user.bookmarks) {
                user.bookmarks.push(new mongoose_1.Types.ObjectId(createdProperty._id)); // Convert _id to ObjectId and push it
            }
            else {
                // If bookmarks is undefined, initialize it as an empty array and push the ObjectId
                user.bookmarks = [new mongoose_1.Types.ObjectId(createdProperty._id)];
            }
            // Langkah 3: Simpan perubahan pada objek pengguna
            yield user.save();
            return createdProperty;
        }
        catch (error) {
            throw new Error(`Error creating property: ${error}`);
        }
    });
}
exports.createProperty = createProperty;
function getAllProperty() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const properties = yield property_model_1.default.find().sort({ createdAt: -1 });
            const sortedProperties = properties.map(property => ({
                _id: property._id,
                owner: property.owner,
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
            }));
            return sortedProperties;
        }
        catch (error) {
            throw new Error(`Error getting all properties: ${error}`);
        }
    });
}
exports.getAllProperty = getAllProperty;
// Read Property
function getPropertyById(propertyId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const property = yield property_model_1.default.findById(propertyId);
            return property;
        }
        catch (error) {
            throw new Error(`Error getting property by ID: ${error}`);
        }
    });
}
exports.getPropertyById = getPropertyById;
// Update Property
function updateProperty(propertyId, update) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedProperty = yield property_model_1.default.findByIdAndUpdate(propertyId, update, { new: true });
            return updatedProperty;
        }
        catch (error) {
            throw new Error(`Error updating property: ${error}`);
        }
    });
}
exports.updateProperty = updateProperty;
// Delete Property
function deleteProperty(propertyId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield property_model_1.default.findByIdAndDelete(propertyId);
        }
        catch (error) {
            throw new Error(`Error deleting property: ${error}`);
        }
    });
}
exports.deleteProperty = deleteProperty;
//# sourceMappingURL=PropertyService.js.map