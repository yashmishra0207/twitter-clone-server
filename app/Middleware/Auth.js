"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UnauthenticatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthenticatedException"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const JWTService_1 = global[Symbol.for('ioc.use')]("App/Services/JWTService");
class Auth {
    async handle({ request }, next) {
        const token = (request.headers().authorization)?.slice(7);
        if (!token) {
            throw UnauthenticatedException_1.default.noToken();
        }
        try {
            const data = await JWTService_1.jwtService.verify(token);
            const user = await User_1.default.findOrFail(data.sub);
            request.loggedInUser = user;
        }
        catch (e) {
            if (e.name === 'TokenExpiredError') {
                throw UnauthenticatedException_1.default.tokenExpired();
            }
            throw UnauthenticatedException_1.default.invalidToken();
        }
        await next();
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map