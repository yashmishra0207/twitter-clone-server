"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tweetService = void 0;
const Tweet_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Tweet"));
const Follower_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Follower"));
class TweetService {
    static getInstance() {
        return new TweetService();
    }
    async create(payload) {
        return await Tweet_1.default.create(payload);
    }
    async list(payload, loggedInUserId) {
        const { page, limit } = payload;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        let feed = Tweet_1.default.query().where('user_id', loggedInUserId).orWhereIn('user_id', Follower_1.default.query().select('user_id').distinct().where('follower_id', loggedInUserId)).orderBy('created_at', "desc").paginate(pageNo, pageLimit);
        return feed;
    }
    async search(query) {
        const { search, isHashtag, page, limit } = query;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        let rootQuery = Tweet_1.default.query().where('hashtags', 'LIKE', `%${search}%`);
        if (!isHashtag) {
            rootQuery = rootQuery.orWhere('title', 'LIKE', `%${search}%`).orWhere('content', 'LIKE', `%${search}%`);
        }
        let tweets = rootQuery.orderBy('created_at', "desc").paginate(pageNo, pageLimit);
        return tweets;
    }
    async myTweets(payload, loggedInUserId) {
        const { id, page, limit } = payload;
        const userId = id ? id : loggedInUserId;
        const pageNo = page ? page : 1;
        const pageLimit = limit ? limit : 10;
        const myTweets = Tweet_1.default.query().where('user_id', userId).orderBy('created_at', "desc").paginate(pageNo, pageLimit);
        return myTweets;
    }
}
exports.tweetService = TweetService.getInstance();
//# sourceMappingURL=TweetService.js.map