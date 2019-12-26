import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";
import { User } from "./User"

interface ObjectModel extends Model {
    readonly pid: string;
    readonly id: string;
}

type ObjectModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ObjectModel;
}

export const Object = (sequelize: Sequelize) => {
    return <ObjectModelStatic>sequelize.define("User", {
        objectid: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        matchid: {
            type: DataTypes.CHAR(32),
            allowNull: false,
            unique: true,
        },
        belong_to: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(6),
            values: ["unborn", "alive", "stun", "dead", "done"],
            allowNull: false
        },
        faction: {
            type: DataTypes.CHAR(12),
            values: ["insomnia", "orangefamily", "overhit", "meisterboi"]
        },
        job: {
            type: DataTypes.CHAR(8),
            values: ["leader", "basic", "advanced", "expert"],
            allowNull: false
        },
        hp: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        damage: {
            type: DataTypes.NUMBER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "api_object"
    });
};