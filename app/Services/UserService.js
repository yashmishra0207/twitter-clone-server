"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const Follower_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Follower"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UserService {
    static getInstance() {
        return new UserService();
    }
    async me(userId) {
        return await User_1.default.find(userId);
    }
    async find(key, value) {
        return await User_1.default.findBy(key, value);
    }
    async search(query) {
        const { handle, page, limit } = query;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        let users = User_1.default.query().where('handle', 'LIKE', `%${handle}%`).paginate(pageNo, pageLimit);
        return users;
    }
    async create(data) {
        const user = await User_1.default.create(data);
        return user;
    }
    async follow(userId, followerId) {
        const follower = await Follower_1.default.firstOrCreate({
            userId,
            followerId
        });
        return follower;
    }
    async unFollow(userId, followerId) {
        const row = await Follower_1.default.query().where({ 'follower_id': followerId, 'user_id': userId }).first();
        await row?.delete();
        return row;
    }
    async followers(payload, loggedInUserId) {
        const { id, page, limit } = payload;
        const userId = id ? id : loggedInUserId;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        const followers = await Follower_1.default.query().where('user_id', userId).orderBy('created_at', "desc").paginate(pageNo, pageLimit);
        return followers;
    }
    async followings(payload, loggedInUserId) {
        const { id, page, limit } = payload;
        const userId = id ? id : loggedInUserId;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        const followings = await Follower_1.default.query().where('follower_id', userId).orderBy('created_at', "desc").paginate(pageNo, pageLimit);
        return followings;
    }
}
exports.userService = UserService.getInstance();
//# sourceMappingURL=UserService.js.map