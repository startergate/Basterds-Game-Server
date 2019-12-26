import { Sequelize, DataTypes, Model, BuildOptions } from "sequelize";

interface UserModel extends Model {
    readonly pid: string;
    readonly id: string;
}

type UserModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): UserModel;
}

export const User = (sequelize: Sequelize) => {
    return <UserModelStatic>sequelize.define("User", {
        pid: {
            type: DataTypes.CHAR(32),
            primaryKey: true
        },
        id: {
            type: DataTypes.CHAR(20),
            allowNull: false,
            unique: true
        }
    }, {
        timestamps: false,
        tableName: "auth_sid_user"
    });
};