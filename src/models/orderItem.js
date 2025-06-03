import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";
import { Product } from "./product.js";
import { Order } from "./order.js";

export class OrderItem extends Model {}

OrderItem.init(
    {
        orderItemId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        orderIdFk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'orders',
                key: 'order_id'
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
        }
    },
    {
        sequelize: db,
        modelName: 'OrderItem',
        tableName: 'order_items',
        underscored: true
    }
);

OrderItem.belongsTo(Order, {foreignKey: 'orderIdFk'});
Order.hasMany(OrderItem, {foreignKey: 'orderIdFk'});

OrderItem.belongsTo(Product, {foreignKey: 'productIdFk'});
Product.hasMany(OrderItem, {foreignKey: 'productIdFk'});