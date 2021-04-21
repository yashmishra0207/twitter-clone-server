"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Schema_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Schema"));
class Users extends Schema_1.default {
    constructor() {
        super(...arguments);
        this.tableName = 'users';
    }
    async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id');
            table.string('full_name').notNullable();
            table.string('email').notNullable().unique();
            table.string('handle').notNullable().unique();
            table.string('phone').nullable();
            table.string('location').nullable();
            table.string('profile_pic').nullable();
            table.text('about').nullable();
            table.string('password').notNullable();
            table.timestamps();
        });
    }
    async down() {
        this.schema.dropTable(this.tableName);
    }
}
exports.default = Users;
//# sourceMappingURL=1618644495253_users.js.map