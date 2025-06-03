import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";

export class Product extends Model {}

Product.init(
    {
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        price: {
            type: DataTypes.DECIMAL
        },
        description: {
            type: DataTypes.STRING
        },
        imgPath: {
            type: DataTypes.STRING
        },
        categoryIdFk: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: db,
        modelName: 'Product',
        tableName: 'products',
        underscored: true
    }
)