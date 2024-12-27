"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var shorturlrouter_1 = __importDefault(require("../Router/shorturlrouter"));
var userRouter_1 = __importDefault(require("../Router/userRouter"));
var Server = function (app) {
    app.use("/", shorturlrouter_1.default);
    app.use("/user", userRouter_1.default);
    app.get("/", function () {
        console.log("Api is working well");
    });
};
exports.Server = Server;
