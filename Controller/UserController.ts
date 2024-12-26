import { UserModel } from "../Model/UserModel";
import express, { Request, Response } from "express"

export const UserLogin = async (req: Request, res: Response): Promise<any> => {
    try {
        const { email } = req.body
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found", status: "false" });
        }
        return res.status(200).json({ status: true, message: "User found", data: user })

    } catch (error) {
        return res.status(404).json({ error: error, status: "false" })
    }

}
export const UserRegister = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, email } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(401).json({ message: "Email already exists", status: "false" })
        }
        const createduser = await UserModel.create({ name, email })

        return res.status(201).json({ status: true, message: "User registered successfully", data: createduser })
    } catch (error) {
        return res.status(400).json({ error: error, status: "false" })
    }
}

export const getUser = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userId } = req.params
        const user = await UserModel.findOne({ _id: userId })
        if (!user) {
            return res.status(404).json({ error: 'User not found.', status: "false" });
        }
        return res.status(200).json({ message: "User found", status: true, data: user })

    } catch (error) {
        return res.status(404).json({ message: "Something wrong", status: "false" })
    }

}