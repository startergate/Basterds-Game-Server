import { Sequelize } from "sequelize"
const config = require('modules/dbInfo');

import { User } from "./User"
import { Match } from "./Match"

const sequelize = new Sequelize('basterds', config.id, config.pw, {
    host: config.host,
    dialect: "mysql"
});

const user = User(sequelize);
const match = Match(sequelize);

export default {sequelize, Sequelize, user, match};
