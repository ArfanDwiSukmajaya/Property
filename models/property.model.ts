import {model, Schema, Types} from "mongoose";
export interface IProperty {
    _id: string
    owner: Types.ObjectId;
    name: string
    type: string
    description: string
    location: ILocation
    beds: number
    baths: number
    square_feet: number
    amenities: string[]
    rates: IRates
    seller_info: ISellerInfo
    images: string[]
    is_featured: boolean
    createdAt?: string
    updatedAt?: string
}

interface ILocation {
    street: string
    city: string
    state: string
    zipcode: string
}

interface IRates {
    weekly: number
    monthly?: number
    nightly?: number
}

export interface ISellerInfo {
    name: string
    email: string
    phone: string
}

const propertySchema = new Schema<IProperty>({
    owner: { type: Schema.Types.ObjectId, ref : 'User'},
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipcode: { type: String, required: true }
    },
    beds: { type: Number, required: true },
    baths: { type: Number, required: true },
    square_feet: { type: Number, required: true },
    amenities: { type: [String], required: true },
    rates: {
        weekly: { type: Number, required: true },
        monthly: { type: Number },
        nightly: { type: Number }
    },
    seller_info: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true }
    },
    images: { type: [String], required: true },
    is_featured: { type: Boolean, default: false },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now }
});
export default model<IProperty>("Property", propertySchema);