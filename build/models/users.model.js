"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String },
    bookmarks: { type: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Property' }], default: [] }
});
exports.default = (0, mongoose_1.model)("User", userSchema);
