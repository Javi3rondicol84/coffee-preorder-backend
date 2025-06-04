import { DataTypes, Model } from "sequelize";
import { db } from "../configs/dbConfig.js";
import { Cart } from "./cart.js";
import { Product } from "./product.js";

export class CartItem extends Model {}

CartItem.init(
    {   
        cartItemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        cartIdFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                modelName: 'customer_carts',
                key: 'cart_id'
            }
        },
        productIdFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'products',
                key: 'product_id'
            } 
        },
        price: {
            type: DataTypes.DECIMAL
        },
        quantity: {
            type: DataTypes.INTEGER
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
        modelName: 'cartItem',
        tableName: 'cart_items',
        underscored: true,
        timestamps: true       
    }
);

CartItem.belongsTo(Cart, { foreignKey: 'cartIdFk' });
Cart.hasMany(CartItem, { foreignKey: 'cartIdFk' });

CartItem.belongsTo(Product, { foreignKey: 'productIdFk' });
Product.hasMany(CartItem, { foreignKey: 'productIdFk' });
