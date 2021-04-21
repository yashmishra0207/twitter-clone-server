"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class SignUpValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            fullName: Validator_1.schema.string({ trim: true }),
            email: Validator_1.schema.string({ trim: true }, [Validator_1.rules.email(), Validator_1.rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]),
            handle: Validator_1.schema.string({ trim: true }, [Validator_1.rules.minLength(1), Validator_1.rules.maxLength(40), Validator_1.rules.unique({ table: 'users', column: 'handle' }), Validator_1.rules.regex(/^\S+$/)]),
            phone: Validator_1.schema.string.optional(),
            location: Validator_1.schema.string.optional(),
            profilePic: Validator_1.schema.string.optional(),
            about: Validator_1.schema.string.optional(),
            password: Validator_1.schema.string({}, [Validator_1.rules.minLength(8)]),
        });
        this.messages = {
            ..._messages_1.default,
            'email.unique': 'This email already exists!',
            'handle.regex': 'The handle can not contain space(s)',
            'handle.unique': 'This handle is already taken',
        };
    }
}
exports.default = SignUpValidator;
//# sourceMappingURL=SignUpValidator.js.map