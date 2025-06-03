import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";

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
            allowNull: false
        },
        productIdFk: {
            type: DataTypes.INTEGER,
            allowNull: false
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
