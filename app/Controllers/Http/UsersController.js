"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = global[Symbol.for('ioc.use')]("App/Services/UserService");
const UserFollowerValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserFollowerValidator"));
const UserFollowingValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserFollowingValidator"));
const UserFollowValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserFollowValidator"));
const UserSearchValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserSearchValidator"));
const UserUnFollowValidator_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Validators/UserUnFollowValidator"));
const ResponseUtil_1 = require("../utils/ResponseUtil");
class UsersController {
    async me({ request, response }) {
        const data = await UserService_1.userService.me(request.loggedInUser.id);
        return response.status(200).json(ResponseUtil_1.responseUtil.reponseJson({ data }, "logged in user details fetched successfully!"));
    }
    async show({ request, response }) {
        const userId = request.param('id');
        const foundUser = await UserService_1.userService.find('id', userId);
        let message = "user found";
        if (!foundUser)
            message = "user not found";
        return response.status(200).json(ResponseUtil_1.responseUtil.reponseJson({ foundUser }, message));
    }
    async search({ request, response }) {
        const sanitizedPayload = await request.validate(UserSearchValidator_1.default);
        const users = await UserService_1.userService.search(sanitizedPayload);
        if (users.length == 0) {
            return response.status(200).json({
                users,
                message: "no user found with matching handle"
            });
        }
        return response.status(200).json({
            users,
            message: "users fetched successfully"
        });
    }
    async follow({ request, response }) {
        const userId = request.loggedInUser.id;
        const { userIdToBeFollowed } = await request.validate(UserFollowValidator_1.default);
        if (userId == userIdToBeFollowed) {
            return response.status(422).json({
                message: "You can't follow yourself",
            });
        }
        await UserService_1.userService.follow(userIdToBeFollowed, userId);
        return response.status(200).json({
            message: "User followed successfully",
        });
    }
    async unFollow({ request, response }) {
        const userId = request.loggedInUser.id;
        const { userIdToBeUnFollowed } = await request.validate(UserUnFollowValidator_1.default);
        await UserService_1.userService.unFollow(userIdToBeUnFollowed, userId);
        return response.status(200).json({
            message: "User unfollowed successfully",
        });
    }
    async followers({ request, response }) {
        let sanitizedPayload = await request.validate(UserFollowerValidator_1.default);
        const followers = await UserService_1.userService.followers(sanitizedPayload, request.loggedInUser.id);
        if (followers.length == 0) {
            return response.status(200).json({
                followers,
                message: "no follower found"
            });
        }
        return response.status(200).json({
            followers,
            message: "followers fetched successfully"
        });
    }
    async followings({ request, response }) {
        let sanitizedPayload = await request.validate(UserFollowingValidator_1.default);
        const followings = await UserService_1.userService.followings(sanitizedPayload, request.loggedInUser.id);
        if (followings.length == 0) {
            return response.status(200).json({
                followings,
                message: "no following found"
            });
        }
        return response.status(200).json({
            followings,
            message: "followings fetched successfully"
        });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map