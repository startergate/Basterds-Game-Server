import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface MatchModel extends Model {
    readonly matchid: bigint;
    readonly player1: string;
    readonly player2: string;
    readonly played_as1: string;
    readonly played_as2: string;
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
        player1: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        player2: {
            type: DataTypes.CHAR(32),
            references: {model: "User", key: 'pid'},
            allowNull: false
        },
        played_as1: {
            type: DataTypes.CHAR(12),
            values: ["insomnia", "orangefamily", "overhit", "meisterboi"],
            defaultValue: "insomnia",
            allowNull: false,
        },
        played_as2: {
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
        score1: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull: false
        },
        score2: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull: false
        },
        playtime: {
            type: DataTypes.DATE,
            defaultValue: 0,
            allowNull: false
        },
        turn_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        spawned1: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        killed1: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        spawned2: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        killed2: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        damage1: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull: false
        },
        heal1: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull: false
        },
        damage2: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
            allowNull: false
        },
        heal2: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
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
        tableName: "api_match",
    });
};