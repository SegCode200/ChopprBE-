import mongoose, { Model, Schema } from "mongoose";

interface IData {
    longURL: string,
    shortURL: string,
    shortkey: string,
    createdBy?: {}
}
const shorturlSchema: Schema<IData> = new mongoose.Schema({
    longURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    },
    shortkey: {
        type: String,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true })

export const ShortUrlModel: Model<IData> = mongoose.model<IData>("ShortURL", shorturlSchema);