import mongoose from 'mongoose';

const CollegeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
        },
        Description: {
            type: String,
            trim: true,
        },
        TotalConnected: {
            type: Number,
            default: 0,
        },
        Alumani: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "College",
    }
);

const College = mongoose.model("College", CollegeSchema);

export default College;