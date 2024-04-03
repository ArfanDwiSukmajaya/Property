"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProperty = exports.updateProperty = exports.getPropertyById = exports.getAllPropertiesController = exports.createProperty = void 0;
const propertyService = __importStar(require("../services/PropertyService"));
// Create Property
function createProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyData = req.body;
            const createdProperty = yield propertyService.createProperty(propertyData);
            res.status(201).json(createdProperty);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
exports.createProperty = createProperty;
function getAllPropertiesController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const properties = yield propertyService.getAllProperty();
            res.json(properties);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
exports.getAllPropertiesController = getAllPropertiesController;
// Get Property by ID
function getPropertyById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyId = req.params.id;
            const property = yield propertyService.getPropertyById(propertyId);
            if (!property) {
                res.status(404).json({ error: 'Property not found' });
                return;
            }
            res.json(property);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
exports.getPropertyById = getPropertyById;
// Update Property
function updateProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyId = req.params.id;
            const update = req.body;
            const updatedProperty = yield propertyService.updateProperty(propertyId, update);
            if (!updatedProperty) {
                res.status(404).json({ error: 'Property not found' });
                return;
            }
            res.json(updatedProperty);
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
exports.updateProperty = updateProperty;
// Delete Property
function deleteProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const propertyId = req.params.id;
            yield propertyService.deleteProperty(propertyId);
            res.status(204).end();
        }
        catch (error) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            }
            else {
                res.status(500).json({ error: 'An unknown error occurred' });
            }
        }
    });
}
exports.deleteProperty = deleteProperty;
