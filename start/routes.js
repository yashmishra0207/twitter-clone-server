"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HealthCheck_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/HealthCheck"));
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('health', async ({ response }) => {
    const report = await HealthCheck_1.default.getReport();
    return report.healthy
        ? response.ok(report)
        : response.badRequest(report);
});
Route_1.default.post('/login', 'AuthController.login');
Route_1.default.post('/signup', 'AuthController.signup');
Route_1.default.group(() => {
    Route_1.default.get('/', async ({ response }) => {
        return response.status(200).json({
            message: "Connection OK!",
        });
    });
    Route_1.default.group(() => {
        Route_1.default.get('/me', 'UsersController.me');
        Route_1.default.get('/show/:id', 'UsersController.show');
        Route_1.default.get('/search', 'UsersController.search');
        Route_1.default.post('/follow', 'UsersController.follow');
        Route_1.default.post('/unfollow', 'UsersController.unFollow');
        Route_1.default.get('/followers', 'UsersController.followers');
        Route_1.default.get('/following', 'UsersController.followings');
    }).prefix('user');
    Route_1.default.group(() => {
        Route_1.default.post('/', 'TweetsController.create');
        Route_1.default.get('/', 'TweetsController.myTweets');
        Route_1.default.get('/search', 'TweetsController.search');
    }).prefix('tweet');
    Route_1.default.group(() => {
        Route_1.default.get('/', 'TweetsController.list');
    }).prefix('feed');
}).middleware('auth');
//# sourceMappingURL=routes.js.map