import express, { Request, Response } from "express"
import crypto from "crypto"
import { UserModel } from "../Model/UserModel";
import { ShortUrlModel } from "../Model/ShortUrl";
import mongoose from "mongoose";


const port: number = parseInt(process.env.PORT!) || 2310
function generateShortKey(): string {
    return crypto.randomBytes(4).toString('hex'); // Generates a 8-character key
}
// Route to shorten a URL
export const shorturl = async (req: Request, res: Response): Promise<any> => {
    try {
        const { longUrl, userId } = req.body;
        if (!longUrl) {
            return res.status(400).json({ error: 'Please provide a valid URL.' });
        }

        // Generate a unique key
        const shortKey = generateShortKey();
        const shortUrl = `https://chopprbe.onrender.com/${shortKey}`;
        if (!userId) {
            const inputedUserUrl = await ShortUrlModel.create({
                longURL: longUrl,
                shortURL: shortUrl,
                shortkey: shortKey,
            })

            return res.status(200).json({ shortUrl, longUrl });
        } else {
            const user = await UserModel.findById({ _id: userId })

            if (!user) {
                return res.status(401).json({ message: "user not found", status: false })
            }
            const inputedUserUrl = await ShortUrlModel.create({
                longURL: longUrl,
                shortURL: shortUrl,
                shortkey: shortKey,
                createdBy: user._id
            })
            user.url?.push(new mongoose.Types.ObjectId(inputedUserUrl._id))
            user.save()

            return res.status(200).json({
                message: "Url Generated succesfully", status: "true", data: {
                    longurl: longUrl,
                    shorturl: shortUrl,
                }
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(404).json({ status: "false", message: "Server error" })
    }


};
// ('/:shortKey',
// Route to redirect from the short URL to the original
export const getshorturl = async (req: Request, res: Response): Promise<any> => {
    const { shortKey } = req.params;
    const longUrl = await ShortUrlModel.findOne({ shortkey: shortKey })

    if (!longUrl) {
        return res.status(404).json({ error: 'Short URL not found.' });
    }

    res.redirect(longUrl.longURL);
}

export const populateUserShortulr = async (req: Request, res: Response): Promise<any> => {
    try {
        const { userId } = req.params
        const user = await UserModel.findById({ _id: userId })
        if (!user) {
            return res.status(404).json({ error: 'User not found.', status: "false" });
        }
        const userShortUrls = await ShortUrlModel.find({ createdBy: user._id });
        res.json({ userShortUrls });
    } catch (error) {
        return res.status(404).json({ message: "Error while populating data", status: "false" })
    }

}