import express, { Application } from 'express';
import short from "../Router/shorturlrouter"
import user from "../Router/userRouter"

export const Server = (app: Application) => {

    app.use("/", short)
    app.use("/user", user)

    app.get("/", () => {
        console.log("Api is working well")
    })


}