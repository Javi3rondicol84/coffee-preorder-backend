import { DataTypes, Model } from "sequelize";
import { db } from "../configs/dbConfig.js";

export class CartItem extends Model {}

CartItem.init(
    {   
        cartItemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cartId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        price: {
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.INTEGER
        }

    },
    {
        sequelize: db,
        modelName: 'cartItem',
        tableName: 'cart_items',
        underscored: true       
    }
)