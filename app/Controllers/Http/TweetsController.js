"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TweetService_1 = global[Symbol.for('ioc.use')]("App/Services/TweetService");
const FeedValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/FeedValidator"));
const TweetCreateValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/TweetCreateValidator"));
const TweetSearchStringValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/TweetSearchStringValidator"));
const UserTweetShowValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserTweetShowValidator"));
const ResponseUtil_1 = require("../utils/ResponseUtil");
class TweetsController {
    async create({ request, response }) {
        const sanitizedPayload = await request.validate(TweetCreateValidator_1.default);
        const { id } = request.loggedInUser;
        const createdPost = await TweetService_1.tweetService.create({ userId: id, ...sanitizedPayload });
        return response.status(200).json(ResponseUtil_1.responseUtil.reponseJson({ createdPost }, "You tweeted just now!"));
    }
    async list({ request, response }) {
        const sanitizedPayload = await request.validate(FeedValidator_1.default);
        const feed = await TweetService_1.tweetService.list(sanitizedPayload, request.loggedInUser.id);
        if (feed.length == 0) {
            return response.status(200).json({
                message: 'Your feed is empty'
            });
        }
        return response.status(200).json({
            feed,
            message: 'Feed fetched successfully'
        });
    }
    async search({ request, response }) {
        const sanitizedPayload = await request.validate(TweetSearchStringValidator_1.default);
        const foundTweets = await TweetService_1.tweetService.search(sanitizedPayload);
        if (foundTweets.length == 0) {
            return response.status(200).json({
                message: 'No Tweet found'
            });
        }
        return response.status(200).json({
            foundTweets,
            message: 'Tweets fetched successfully'
        });
    }
    async myTweets({ request, response }) {
        const sanitizedPayload = await request.validate(UserTweetShowValidator_1.default);
        const myTweets = await TweetService_1.tweetService.myTweets(sanitizedPayload, request.loggedInUser.id);
        if (myTweets.length == 0) {
            return response.status(200).json({
                message: 'You have not tweeted yet'
            });
        }
        return response.status(200).json({
            myTweets,
            message: 'Tweets fetched successfully'
        });
    }
}
exports.default = TweetsController;
//# sourceMappingURL=TweetsController.js.map