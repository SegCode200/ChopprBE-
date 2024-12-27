"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShortUrlController_1 = require("../Controller/ShortUrlController");
var router = (0, express_1.Router)();
router.route("/longurl").post(ShortUrlController_1.shorturl);
router.route("/:shortKey").get(ShortUrlController_1.getshorturl);
router.route("/get-user-url/:userId").get(ShortUrlController_1.populateUserShortulr);
exports.default = router;
