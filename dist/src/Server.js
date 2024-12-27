"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var Index_1 = require("./Index");
var DB_1 = require("../Config/DB");
var port = parseInt(process.env.PORT) || 2310;
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use((0, helmet_1.default)());
(0, Index_1.Server)(app);
app.use(express_1.default.urlencoded({ extended: true }));
app.listen(port, function () {
    console.clear();
    console.log();
    console.clear();
    console.log("Server running at http://localhost:".concat(port, " \uD83D\uDE08\uD83D\uDE08\uD83D\uDC7D"));
    (0, DB_1.Dbconfig)();
});
