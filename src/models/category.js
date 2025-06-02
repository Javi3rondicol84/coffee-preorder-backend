import { DataTypes, Model } from "sequelize";
import { db } from "../configs/dbConfig.js";

export class Category extends Model {}

Category.init(
    {
        categoryId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        categoryName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'Category',
        tableName: 'categories',
        underscored: true
    }
)