import mongoose, { Model, Schema } from "mongoose"


// Schema
interface Iuser {
    name: string;
    email: string;
    url?: string
}

const UserSchema: Schema<Iuser> = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    url: [{ type: Schema.Types.ObjectId, ref: "ShortURL" }]
}, { timestamps: true })

// Model
export const UserModel: Model<Iuser> = mongoose.model("UserModel", UserSchema)

