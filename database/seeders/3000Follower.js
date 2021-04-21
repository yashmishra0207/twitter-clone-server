"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Seeder_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Seeder"));
const Follower_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Follower"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const faker = __importStar(require("faker"));
class FollowerSeeder extends Seeder_1.default {
    async run() {
        const users = await User_1.default.query().select('id');
        let userIds = [];
        users.forEach((user) => {
            userIds.push(user.id);
        });
        let followers = [];
        for (let i = 0; i < 150; i++) {
            let uid;
            let fid;
            while (true) {
                uid = faker.random.arrayElement(userIds);
                fid = faker.random.arrayElement(userIds);
                if (uid !== fid)
                    break;
            }
            followers = [
                ...followers,
                {
                    user_id: uid,
                    follower_id: fid,
                },
            ];
        }
        await Follower_1.default.createMany(followers);
    }
}
exports.default = FollowerSeeder;
//# sourceMappingURL=3000Follower.js.map