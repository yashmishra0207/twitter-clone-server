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
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
const SeederService_1 = global[Symbol.for('ioc.use')]("App/Services/SeederService");
const faker = __importStar(require("faker"));
class UserSeeder extends Seeder_1.default {
    async run() {
        await SeederService_1.seederService.removeOldData();
        let users = [];
        users = [
            {
                full_name: "Yash Mishra",
                email: "yashmishra0207@gmail.com",
                handle: "live_moments",
                phone: 6306556234,
                password: 'test1234',
                about: 'Technology Enthusiast. ' + faker.lorem.words(10),
                profile_pic: 'https://avatars.githubusercontent.com/u/67147761?v=4',
                location: 'Lakhimpur-kheri, Uttar Pradesh, India'
            },
        ];
        for (let i = 0; i < 9; i++) {
            users = [
                ...users,
                {
                    full_name: faker.name.findName(),
                    email: faker.internet.email(),
                    handle: faker.internet.userName(),
                    phone: faker.phone.phoneNumber(),
                    password: 'test1234',
                    about: faker.lorem.words(),
                    profile_pic: faker.image.imageUrl(150, 150, 'people', true, true),
                    location: faker.address.city(),
                },
            ];
        }
        await User_1.default.createMany(users);
    }
}
exports.default = UserSeeder;
UserSeeder.developmentOnly = true;
//# sourceMappingURL=1000_User.js.map