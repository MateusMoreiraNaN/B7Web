import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/sql";

export interface ImageInstance extends Model{
    id: number
    
}

export const ImageDb = sequelize.define<ImageInstance>('ImageDb',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    
},{
    tableName: 'campo',
    timestamps: false
})