import { Sequelize } from "sequelize"
const config = require('modules/dbInfo');

const sequelize = new Sequelize('basterds', config.id, config.pw, {
    host: config.host,
    dialect: "mysql"
});

export default {sequelize, Sequelize};
