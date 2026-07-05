import mongoose from "mongoose";

const collegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        aboutUs: {
            type: String,
            required: true
        },

        image: {
            type: String,
            required: true
        },

        navigation: {
            resources: {
                type: String,
                default: ""
            },

            connection: {
                type: String,
                default: ""
            },

            leaderboard: {
                type: String,
                default: ""
            },

            colx: {
                type: String,
                default: ""
            },

            events: {
                type: String,
                default: ""
            }
        }
    },
    {
        timestamps: true,
        collection: 'Collegeinfo'
    }
);

export default mongoose.model('Collegeinfo', collegeSchema);