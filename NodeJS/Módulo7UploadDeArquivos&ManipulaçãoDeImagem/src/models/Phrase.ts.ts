import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/sql";

export interface ImageInstance extends Model{
    id: number
    author: string
    txt: string
}

export const Image = sequelize.define<ImageInstance>('Image',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    author:{
        type: DataTypes.STRING
    },
    txt:{
        type: DataTypes.STRING
    }
},{
    tableName: 'Api',
    timestamps: false
})