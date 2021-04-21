"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseUtil = void 0;
class ResponseUtil {
    static getInstance() {
        return new ResponseUtil();
    }
    reponseJson(body, message) {
        return {
            body,
            message,
        };
    }
}
exports.responseUtil = ResponseUtil.getInstance();
//# sourceMappingURL=ResponseUtil.js.map