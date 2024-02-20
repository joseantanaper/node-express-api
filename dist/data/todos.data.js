"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = [
    {
        id: '1',
        todo: 'Todo 1',
        creationDate: new Date(),
    },
    {
        id: '2',
        todo: 'Todo 2',
        creationDate: new Date(),
    },
];
const todoEntries = data.map((obj) => {
    const object = obj;
    object.id = obj.id;
    return object;
});
exports.default = todoEntries;
