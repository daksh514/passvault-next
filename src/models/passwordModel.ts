import { Schema, model, models } from "mongoose";


const passwordSchema = new Schema({
    passTitle: {
        type: String,
        required: true
    },
    passValue: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    isLocked: {
        type: Boolean,
        default: false,
        required: true
    }
})

export const passwordModel = models?.passwordsInfo || model('passwordsInfo', passwordSchema)