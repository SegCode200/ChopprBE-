import express, { Router } from "express"
import { getUser, UserLogin, UserRegister } from "../Controller/UserController"

const router = Router()

router.route("/register").post(UserRegister)
router.route("/login").post(UserLogin)
router.route("/get-user/:userId").get(getUser)



export default router