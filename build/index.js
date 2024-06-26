"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("./config/mongoose");
const PropertyRoutes_1 = __importDefault(require("./routes/PropertyRoutes"));
const UserRoutes_1 = __importDefault(require("./routes/UserRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Property routes
app.use('/api/properties', PropertyRoutes_1.default);
// User routes
app.use('/api/users', UserRoutes_1.default);
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map