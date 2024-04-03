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
exports.deleteUserByEmail = exports.updateUserByEmail = exports.getUserByEmail = exports.createUser = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
// Create User
function createUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const createdUser = yield users_model_1.default.create(userData);
            return createdUser;
        }
        catch (error) {
            throw new Error(`Error creating user: ${error}`);
        }
    });
}
exports.createUser = createUser;
// Read User
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield users_model_1.default.findOne({ email }).populate('bookmarks');
            return user;
        }
        catch (error) {
            throw new Error(`Error getting user by email: ${error}`);
        }
    });
}
exports.getUserByEmail = getUserByEmail;
// Update User
function updateUserByEmail(email, update) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedUser = yield users_model_1.default.findOneAndUpdate({ email }, update, { new: true });
            return updatedUser;
        }
        catch (error) {
            throw new Error(`Error updating user: ${error}`);
        }
    });
}
exports.updateUserByEmail = updateUserByEmail;
// Delete User
function deleteUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield users_model_1.default.findOneAndDelete({ email });
        }
        catch (error) {
            throw new Error(`Error deleting user: ${error}`);
        }
    });
}
exports.deleteUserByEmail = deleteUserByEmail;
