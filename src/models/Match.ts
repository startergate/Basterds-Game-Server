import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface MatchModel extends Model {
    readonly matchid: bigint;
    readonly pid: string;
    readonly played_as: string;
    readonly status: string;
    readonly score: bigint;
    readonly playtime: Date;
    readonly turn_count: number;
    readonly spawned_alias: number;
    readonly killed_alias: number;
    readonly killed_hostiles: number;
    readonly damage: bigint;
    readonly heal: bigint;
    readonly created_at: Date;
    readonly terminated_at: Date;
}

type MatchModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MatchModel;
}

export const Match = (sequelize: Sequelize) => {
    return <MatchModelStatic>sequelize.define("User", {
        matchid: {
            type: DataTypes.BIGINT,
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
            type: DataTypes.INTEGER,
            allowNull: false
        },
        spawned_alias: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        killed_alias: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        killed_hostiles: {
            type: DataTypes.INTEGER,
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