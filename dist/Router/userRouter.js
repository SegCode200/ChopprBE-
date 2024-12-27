"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../Controller/UserController");
var router = (0, express_1.Router)();
router.route("/register").post(UserController_1.UserRegister);
router.route("/login").post(UserController_1.UserLogin);
router.route("/get-user/:userId").get(UserController_1.getUser);
exports.default = router;
