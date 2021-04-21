"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtService = void 0;
const app_1 = global[Symbol.for('ioc.use')]("Config/app");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const UnauthenticatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthenticatedException"));
const app_2 = global[Symbol.for('ioc.use')]("Config/app");
class JWTService {
    static getInstance() {
        return new JWTService();
    }
    async sign(sub) {
        const token = jsonwebtoken_1.default.sign(sub, app_1.appKey, {
            expiresIn: parseInt(app_2.tokenExpiry),
        });
        return token;
    }
    async verify(token) {
        try {
            const data = jsonwebtoken_1.default.verify(token, app_1.appKey);
            return data;
        }
        catch (e) {
            if (e.name === 'TokenExpiredError') {
                throw UnauthenticatedException_1.default.tokenExpired();
            }
            throw UnauthenticatedException_1.default.invalidToken();
        }
    }
}
exports.jwtService = JWTService.getInstance();
//# sourceMappingURL=JWTService.js.map