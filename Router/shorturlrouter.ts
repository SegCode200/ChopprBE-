import express, { Router } from "express"
import { getshorturl, populateUserShortulr, shorturl } from "../Controller/ShortUrlController"

const router = Router()

router.route("/longurl").post(shorturl)
router.route("/:shortKey").get(getshorturl)
router.route("/get-user-url/:userId").get(populateUserShortulr)



export default router