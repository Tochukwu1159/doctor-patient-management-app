"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
class TodoValidator {
    checkCreateTodo() {
        return [
            (0, express_validator_1.body)("id").optional().isUUID(4).withMessage("The value should be UUID v4"),
            (0, express_validator_1.body)('title').notEmpty().withMessage("The title should not be empty"),
            (0, express_validator_1.body)('completed').optional().isBoolean().withMessage("The value should be a boolean").isIn([0, false]).withMessage('The value should be 0 or false')
        ];
    }
}
exports.default = new TodoValidator();
