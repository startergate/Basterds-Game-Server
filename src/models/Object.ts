import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";
import { User } from "./User"

interface ObjectModel extends Model {
    readonly objectid: bigint;
    readonly matchid: bigint;
    readonly belong_to: string;
    readonly status: string;
    readonly faction: string;
    readonly job: string;
    readonly hp: number;
    readonly damage: number;
}

type ObjectModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ObjectModel;
}

export const Object = (sequelize: Sequelize) => {
    return <ObjectModelStatic>sequelize.define("User", {
        objectid: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        matchid: {
            type: DataTypes.BIGINT,
            references: {model: "Match", key: 'matchid'},
            allowNull: false,
        },
        belong_to: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        status: {
            type: DataTypes.CHAR(6),
            values: ["unborn", "alive", "stun", "dead", "done"],
            defaultValue: "unborn",
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
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        },
        damage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100
        }
    }, {
        timestamps: false,
        tableName: "api_object"
    });
};