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
const Tweet_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Tweet"));
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const faker = __importStar(require("faker"));
class TweetSeeder extends Seeder_1.default {
    async run() {
        const users = await User_1.default.query().select('id');
        let userIds = [];
        users.forEach(user => {
            userIds.push(user.id);
        });
        const randomHastags = [
            'competition',
            'influencer',
            'influencermarketing',
            'fridayfeeling',
            'MondayMotivation',
            'tbt',
            'wcw',
            'thursdaythoughts',
            'traveltuesday',
            'blessed',
            'goals',
            'vegan',
            'fitness',
            'science',
            'fintech',
        ];
        let tweets = [];
        for (let i = 0; i < 200; i++) {
            tweets = [
                ...tweets,
                {
                    user_id: faker.random.arrayElement(userIds),
                    title: faker.lorem.sentence(),
                    content: faker.lorem.sentences(5),
                    image_url: faker.random.image(),
                    image_width: (Math.random() * 20).toFixed(0),
                    image_height: (Math.random() * 20).toFixed(0),
                    hashtags: faker.random.arrayElements(randomHastags, 5).toString(),
                },
            ];
        }
        await Tweet_1.default.createMany(tweets);
    }
}
exports.default = TweetSeeder;
//# sourceMappingURL=2000_Tweet.js.map