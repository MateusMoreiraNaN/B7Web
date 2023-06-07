import { Model, DataTypes } from "sequelize"
import { sequelize } from "../database/mysql"

export interface authInstance extends Model{
    
}

export const Auth = sequelize.define<authInstance>('Auth',{
 
    
},{
    tableName: 'auth',
    timestamps: false
})