
import {model, Schema, Types} from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
    email: string;
    username: string;
    image?: string;
    bookmarks? : (Types.ObjectId | null)[];
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    email: { type: String, required: true },
    username: { type: String, required: true },
    image : {type: String},
    bookmarks: { type: [{ type: Schema.Types.ObjectId, ref: 'Property' }], default: [] }
});

export default model<IUser>("User", userSchema);