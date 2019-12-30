import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface MatchModel extends Model {
    readonly matchid: bigint;
    readonly player: string;
    readonly played_as: string;
    readonly status: string;
    readonly score: bigint;
    readonly playtime: Date;
    readonly turn_count: number;
    readonly spawned: number;
    readonly killed: number;
    readonly damage: bigint;
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
        player: {
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
            values: ["pending", "win", "lose", "draw"],
            defaultValue: "pending",
            allowNull: false,
        },
        score: {
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
        spawned: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        killed: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false
        },
        damage: {
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