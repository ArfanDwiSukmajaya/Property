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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MONGO_DB_URI = "mongodb+srv://nafra:nafra219@gigihlab.cjdbave.mongodb.net/hotel?retryWrites=true&w=majority";
// const MONGO_DB_URI = process.env.MONGO_DB_URI;
(() => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        (0, mongoose_1.set)("strictQuery", false);
        const db = yield (0, mongoose_1.connect)(MONGO_DB_URI);
        console.log("Connect to MongoDb", (_a = db.connection) === null || _a === void 0 ? void 0 : _a.name);
    }
    catch (error) {
        console.log(error);
    }
}))();
