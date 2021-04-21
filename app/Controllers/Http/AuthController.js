"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Hash_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Hash"));
const UnauthenticatedException_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Exceptions/UnauthenticatedException"));
const JWTService_1 = global[Symbol.for('ioc.use')]("App/Services/JWTService");
const UserService_1 = global[Symbol.for('ioc.use')]("App/Services/UserService");
const LoginValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/LoginValidator"));
const SignUpValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/SignUpValidator"));
const ResponseUtil_1 = require("../utils/ResponseUtil");
class AuthController {
    async login({ request, response }) {
        const sanitizedPayload = await request.validate(LoginValidator_1.default);
        const { email, password } = sanitizedPayload;
        const user = await UserService_1.userService.find('email', email);
        console.log('here');
        if (!user || !user.password) {
            throw UnauthenticatedException_1.default.invalidLoginDetails();
        }
        const verified = await Hash_1.default.verify(user.password, password);
        if (!verified) {
            throw UnauthenticatedException_1.default.invalidLoginDetails();
        }
        const token = await JWTService_1.jwtService.sign({ sub: user.id });
        return response.status(200).json(ResponseUtil_1.responseUtil.reponseJson({ user, token }, "logged in successfully!"));
    }
    async signup({ request, response }) {
        const sanitizedPayload = await request.validate(SignUpValidator_1.default);
        const user = await UserService_1.userService.create(sanitizedPayload);
        return response.status(200).json(ResponseUtil_1.responseUtil.reponseJson({ user }, "account created successfully!"));
    }
}
exports.default = AuthController;
//# sourceMappingURL=AuthController.js.map