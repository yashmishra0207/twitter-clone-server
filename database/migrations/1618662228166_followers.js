"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Followers extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'followers';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable();
            table.integer('follower_id').unsigned().references('id').inTable('users').onDelete('CASCADE').notNullable();
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Followers;
//# sourceMappingURL=1618662228166_followers.js.map