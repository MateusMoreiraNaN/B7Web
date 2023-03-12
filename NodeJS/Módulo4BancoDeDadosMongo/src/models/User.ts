import { Schema, model, Model, connection } from "mongoose";
type UserType = {
    email: string,
    age: number,
    interest: [string],
    name: {
        firstName: string,
        lastName: string
    }
};

const schema = new Schema<UserType>({
    email: {type: String, required: true},
    age: {type: Number, required: true},
    interest: [String],
    name: {
      firstName: {type: String, required: true},
      lastName: String
    }
  });

const modelName: string = 'User';
export default (connection && connection.models[modelName]) ?
    connection.models[modelName] as Model<UserType>
     :
    model<UserType>(modelName, schema);