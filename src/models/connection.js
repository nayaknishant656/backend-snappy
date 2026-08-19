import mongoose from 'mongoose';

const ConnectionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },

        category: {
            type: String,
            trim: true,
            required: true,
        },

        city: {
            type: String,
            trim: true,
        },

        image: {
            type: String,
            trim: true,
            required: true,
        },

        link: {
            type: String,
            trim: true,
            required: true,
        },

        Description: {
            type: String,
            trim: true,
            required: true,
        },

        TotalConnected: {
            type: Number,
            default: 0,
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "Connection",
    }
);

const Connection = mongoose.model("Connection", ConnectionSchema);

export default Connection;