"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class TweetCreateValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            title: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(1), Validator_1.rules.maxLength(100)]),
            content: Validator_1.schema.string.optional({ trim: true }, [Validator_1.rules.minLength(2)]),
            imageUrl: Validator_1.schema.string.optional({ trim: true }),
            hashtags: Validator_1.schema.string.optional({ trim: true }),
        });
        this.messages = {
            ..._messages_1.default,
        };
    }
}
exports.default = TweetCreateValidator;
//# sourceMappingURL=TweetCreateValidator.js.map