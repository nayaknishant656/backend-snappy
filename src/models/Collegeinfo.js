import mongoose from "mongoose";

const CatalogItemSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            trim: true,
        },

        title: {
            type: String,
            required: true,
            trim: true,
        },

        iconName: {
            type: String,
            required: true,
            trim: true,
        },

        color: {
            type: String,
            required: true,
            trim: true,
        },

        componentName: {
            type: String,
            default: null,
        },

        link: {
            type: String,
            default: null,
        },

        props: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },
    },
    { _id: false }
);

const collegeSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        badge: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        aboutUs: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        footerText: {
            type: String,
            required: true,
        },


        catalogItems: {
            type: [CatalogItemSchema],
            default: [],
        },
    },
    {
        timestamps: true,
        collection: "Collegeinfo",
    }
);

export default mongoose.model("Collegeinfo", collegeSchema);