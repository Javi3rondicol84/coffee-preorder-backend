import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";

export class User extends Model {}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'user'
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'User',
        tableName: 'users',
        underscored: true,
        timestamps: true
    }
);
