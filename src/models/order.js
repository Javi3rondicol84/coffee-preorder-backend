import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";
import { User } from "./user.js";

export class Order extends Model {}

Order.init(
    {
        orderId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true 
        },
        userIdFk: {
            type: DataTypes.INTEGER,
            unique: true ,
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id'
            }
        },
        status: {
            type: DataTypes.ENUM(
                'pending', 'confirmed', 'processing', 
                'shipped', 'completed', 'cancelled', 
                'failed', 'refunded'
            ),
            defaultValue: 'pending'
        }
    },
    {
        sequelize: db,
        modelName: 'Order',
        tableName: 'orders',
        underscored: true
    }
);

Order.belongsTo(User, {foreignKey: 'userIdFk'});
User.hasOne(Order, {foreignKey: 'userIdFk'});