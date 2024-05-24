'use server'


import mongoose, { Mongoose } from "mongoose"

import { passwordModel } from "@/models/passwordModel"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"

export async function savePassword(passwordData: FormData) {
    // console.log(passwordData);
    const passTitle = passwordData.get('passTitle') as string
    const passValue = passwordData.get('passValue') as string
    const userEmail = passwordData.get('userEmail') as string
    await mongoose.connect(process.env.MONGODB_URI as string)
    const createdDoc = await passwordModel.create({
        passTitle: passTitle,
        passValue: passValue,
        userEmail: userEmail,
        isLocked: false
    })
    return true
}

export async function getPasswords() {
    const session = await getServerSession(authOptions);
    const userEmail = session?.user?.email as string;

    await mongoose.connect(process.env.MONGODB_URI as string)
    const passwords = await passwordModel.find({ userEmail: userEmail })
    return passwords
}

export async function deletePassword(userId: string) {
    try {
        const userIdInObj = new mongoose.Types.ObjectId(userId)

        await mongoose.connect(process.env.MONGODB_URI as string)

        const res = await passwordModel.findByIdAndDelete(userIdInObj);

    } catch (error) {
        console.log(error);
    }
}

    export async function updatePassword(passwordData: FormData, userId: string) {
        try {
            const passTitle = passwordData.get('passTitle') as string
            const passValue = passwordData.get('passValue') as string
            // const userEmail = passwordData.get('userEmail') as string
            await mongoose.connect(process.env.MONGODB_URI as string)
            await passwordModel.findByIdAndUpdate(userId, { passTitle, passValue })
            return true

        } catch (error) {
            console.log(Error);
        }
        // console.log(passwordData);
        // const userIdInObj = new mongoose.Types.ObjectId(userId)

    }