import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        role: {
            type: String,
            required: true,
            trim: true,
        },
    },
    { _id: false }
);

const LeaderboardSchema = new mongoose.Schema(
    {
        sno: {
            type: Number,
            required: true,
        },

        name: {
            type: String,
            required: true,
            trim: true,
        },

        image: {
            type: String,
            required: true,
        },

        leetcode: {
            type: Number,
            default: 0,
        },

        codeforces: {
            type: Number,
            default: 0,
        },

        sysDesign: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },

        devops: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
    },
    { _id: false }
);

const IdeaSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

const ContactSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
        },

        discord: {
            type: String,
            trim: true,
        },

        github: {
            type: String,
            trim: true,
        },
    },
    { _id: false }
);

const BlogSchema = new mongoose.Schema(
    {
        slug: {
            type: String,
            required: true,
            unique: true,
            index: true,
            trim: true,
            lowercase: true,
        },

        header: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        bannerImage: {
            type: String,
            required: true,
        },

        members: {
            type: [MemberSchema],
            default: [],
        },

        idea: {
            type: IdeaSchema,
            required: true,
        },

        contact: {
            type: ContactSchema,
            required: true,
        },

        leaderboard: {
            type: [LeaderboardSchema],
            default: [],
        },
    },

    {
        timestamps: true,
        collection: "Connectionblog",
    }
);

const Blog =
    mongoose.models.Blog ||
    mongoose.model("Blog", BlogSchema);

export default Blog;