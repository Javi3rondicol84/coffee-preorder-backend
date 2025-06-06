import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";
import { Category } from "./category.js";

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
            type: DataTypes.INTEGER,
            references: {
                model: 'categories',
                key: 'category_id'
            }
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
        modelName: 'Product',
        tableName: 'products',
        underscored: true,
        timestamps: true
    }
);

Product.belongsTo(Category, { foreignKey: "categoryIdFk" });
Category.hasMany(Product, { foreignKey: 'categoryIdFk' });
