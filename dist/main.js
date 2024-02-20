"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const todoRouter_1 = __importDefault(require("./routes/todoRouter"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', router);
app.use('/api/todos', todoRouter_1.default);
router.use((req, res, next) => {
    console.log('%s %s %s', req.method, req.url, req.path);
    next();
});
router.get('/', (req, res) => {
    res.send('/api');
});
app.use('/static', express_1.default.static('public'));
app.use('/nodejs', express_1.default.static('public/nodejs.png'));
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.get('/ping', (req, res) => {
    res.send('Pong');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
