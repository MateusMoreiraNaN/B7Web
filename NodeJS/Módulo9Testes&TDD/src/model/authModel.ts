import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/mysql"

export interface authInstance extends Model{
    id: number
    email: string
    password: string
}

export const Auth = sequelize.define<authInstance>('Auth',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    tableName: 'auth2',
    timestamps: false
})