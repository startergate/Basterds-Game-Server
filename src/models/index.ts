import { Sequelize } from "sequelize"
const config = require('modules/dbInfo');

import { User } from "./User"

const sequelize = new Sequelize('basterds', config.id, config.pw, {
    host: config.host,
    dialect: "mysql"
});

const user = User(sequelize);

export default {sequelize, Sequelize, user};
