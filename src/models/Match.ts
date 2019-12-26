import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface MatchModel extends Model {
    readonly pid: string;
    readonly id: string;
}

type MatchModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MatchModel;
}

export const Match = (sequelize: Sequelize) => {
    return <MatchModelStatic>sequelize.define("User", {
        matchid: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true
        },
        pid: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        played_as: {
            type: DataTypes.CHAR(12),
            values: ["insomnia", "orangefamily", "overhit", "meisterboi"],
            defaultValue: "insomnia",
            allowNull: false,
        },
        status: {
            type: DataTypes.CHAR(7),
            values: ["pending", "win", "lose"],
            defaultValue: "pending",
            allowNull: false,
        },
        score: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        playtime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        turn_count: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        spawned_alias: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        killed_alias: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        killed_hostiles: {
            type: DataTypes.NUMBER,
            allowNull: false
        },
        damage: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        heal: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        terminated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: "api_match"
    });
};