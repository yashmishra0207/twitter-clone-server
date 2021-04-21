"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seederService = void 0;
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class SeederService {
    static getInstance() {
        return new SeederService();
    }
    async removeOldData() {
        await Database_1.default.rawQuery('DELETE FROM followers');
        await Database_1.default.rawQuery('ALTER TABLE followers AUTO_INCREMENT= ? ;', [1]);
        await Database_1.default.rawQuery('DELETE FROM tweets');
        await Database_1.default.rawQuery('ALTER TABLE tweets AUTO_INCREMENT= ? ;', [1]);
        await Database_1.default.rawQuery('DELETE FROM users');
        await Database_1.default.rawQuery('ALTER TABLE users AUTO_INCREMENT= ? ;', [1]);
    }
}
exports.seederService = SeederService.getInstance();
//# sourceMappingURL=SeederService.js.map