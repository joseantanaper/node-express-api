"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const todos_data_1 = __importDefault(require("../data/todos.data"));
router.get('/', (req, res) => {
    res.send(todos_data_1.default);
});
exports.default = router;
