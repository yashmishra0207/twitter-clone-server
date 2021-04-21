"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class UserFollowValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            userIdToBeFollowed: Validator_1.schema.number([Validator_1.rules.exists({ table: 'users', column: 'id' })]),
        });
        this.messages = {
            ..._messages_1.default,
            'userIdToBeFollowed.exists': 'User with this id does not exists',
        };
    }
}
exports.default = UserFollowValidator;
//# sourceMappingURL=UserFollowValidator.js.map