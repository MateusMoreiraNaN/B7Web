import { Schema, model, Model, connection } from 'mongoose'

type UserType = {
    name: {
        firstName: string,
        lastName: string
    },
    email: string,
    age: number,
    interests: [string]
}

const schema = new Schema<UserType>({
    name:{
        firstName: {type: String, required: true},
        lastName: String
    },
    email: {type: String, required: true},
    age: {type: Number, required: true},
    interests: [String],
    
})

const modelName: string = 'User'

export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);