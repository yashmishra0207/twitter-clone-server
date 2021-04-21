"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Validator_1 = global[Symbol.for('ioc.use')]("Adonis/Core/Validator");
const _messages_1 = __importDefault(require("./_messages"));
class UserUnFollowValidator {
    constructor(ctx) {
        this.ctx = ctx;
        this.schema = Validator_1.schema.create({
            userIdToBeUnFollowed: Validator_1.schema.number([Validator_1.rules.exists({ table: 'users', column: 'id' })]),
        });
        this.messages = {
            ..._messages_1.default,
            'userIdToBeUnFollowed.exists': 'User to be unfollowed does not exist',
        };
    }
}
exports.default = UserUnFollowValidator;
//# sourceMappingURL=UserUnFollowValidator.js.map