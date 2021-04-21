"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class TweetSearchStringValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            search: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(1), Validator_1.rules.maxLength(32)]),
            isHashtag: Validator_1.schema.boolean.optional(),
            page: Validator_1.schema.number.optional([Validator_1.rules.unsigned()]),
            limit: Validator_1.schema.number.optional([Validator_1.rules.unsigned()]),
        });
        this.messages = {
            ..._messages_1.default,
        };
    }
}
exports.default = TweetSearchStringValidator;
//# sourceMappingURL=TweetSearchStringValidator.js.map