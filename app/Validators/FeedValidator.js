"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class FeedValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            page: Validator_1.schema.number.optional([Validator_1.rules.unsigned()]),
            limit: Validator_1.schema.number.optional([Validator_1.rules.unsigned()])
        });
        this.messages = {
            ..._messages_1.default,
        };
    }
}
exports.default = FeedValidator;
//# sourceMappingURL=FeedValidator.js.map