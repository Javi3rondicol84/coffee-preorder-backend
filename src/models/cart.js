import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";

export class Cart extends Model {}

Cart.init(
    {
        cartId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userIdFk: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false
        }
    },
    {
        sequelize: db,
        modelName: 'Cart',
        tableName:  'customer_carts',
        underscored: true
    }
)