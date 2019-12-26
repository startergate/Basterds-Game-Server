import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";
import { User } from "./User"

interface ActionModel extends Model {
    readonly actionid: bigint;
    readonly pid: string;
    readonly matchid: bigint;
    readonly type: string;
    readonly origin: bigint;
    readonly to: bigint;
    readonly destination_x: number;
    readonly destination_y: number;
    readonly amount: number;
}

type ActionModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ActionModel;
}

export const Action = (sequelize: Sequelize) => {
    return <ActionModelStatic>sequelize.define("User", {
        actionid: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        pid: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        matchid: {
            type: DataTypes.BIGINT,
            references: {model: "Match", key: 'matchid'},
            allowNull: false,
        },
        type: {
            type: DataTypes.CHAR(10),
            values: ["spawn", "move", "attack", "moveattack", "die"],
            allowNull: false
        },
        origin: {
            type: DataTypes.BIGINT,
            references: {model: "Object", key: 'objectid'},
            allowNull: false,
        },
        to: {
            type: DataTypes.BIGINT,
            references: {model: "Object", key: 'objectid'},
            allowNull: true,
        },
        destination_x: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        destination_y: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        timestamps: false,
        tableName: "api_object"
    });
};