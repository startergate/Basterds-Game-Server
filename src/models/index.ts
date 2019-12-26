import { Sequelize } from "sequelize"
const config = require('modules/dbInfo');

import { User } from "./User"
import { Match } from "./Match"
import { Object } from "./Object";
import { Action } from "./Action";

const sequelize = new Sequelize('basterds', config.id, config.pw, {
    host: config.host,
    dialect: "mysql"
});

const user = User(sequelize);
const match = Match(sequelize);
const object = Object(sequelize);
const action = Action(sequelize);

export { sequelize, Sequelize, user, match, object, action };
