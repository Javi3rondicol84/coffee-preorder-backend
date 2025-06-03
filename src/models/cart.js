import { Model, DataTypes } from "sequelize";
import { db } from "../configs/dbConfig.js";
import { User } from "./user.js";

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
            allowNull: false,
            references: {
                model: 'users',
                key: 'user_id'
            }
        }
    },
    {
        sequelize: db,
        modelName: 'Cart',
        tableName:  'customer_carts',
        underscored: true
    }
);

Cart.belongsTo(User, {foreignKey: 'userIdFk'});
User.hasOne(Cart, {foreignKey: 'userIdFk'});