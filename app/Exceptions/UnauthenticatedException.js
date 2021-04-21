"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@poppinss/utils");
class UnauthenticatedException extends utils_1.Exception {
    constructor(message) {
        super(message);
    }
    static noToken() {
        return new UnauthenticatedException('No Token found!');
    }
    static invalidToken() {
        return new UnauthenticatedException('Token is not valid!');
    }
    static invalidLoginDetails() {
        return new UnauthenticatedException('Login details do not match!');
    }
    static tokenExpired() {
        return new UnauthenticatedException('Token has expired, login again!');
    }
    handle(error, ctx) {
        ctx.response.status(401).json({
            errors: [{ message: error.message }],
        });
    }
}
exports.default = UnauthenticatedException;
//# sourceMappingURL=UnauthenticatedException.js.map