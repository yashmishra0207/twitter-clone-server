"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Tweets extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'tweets';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').notNullable().unsigned().references('id').inTable('users').onDelete('CASCADE');
            table.string('title').notNullable();
            table.text('content').nullable();
            table.string('image_url').nullable();
            table.string('image_width').nullable();
            table.string('image_height').nullable();
            table.text('hashtags').nullable();
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Tweets;
//# sourceMappingURL=1618648938510_tweets.js.map