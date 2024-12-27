"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortUrlModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var shorturlSchema = new mongoose_1.default.Schema({
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });
exports.ShortUrlModel = mongoose_1.default.model("ShortURL", shorturlSchema);
