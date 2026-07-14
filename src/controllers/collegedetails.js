import mongoose from 'mongoose';
import College from '../models/College.js';
import Collegeinfo from '../models/Collegeinfo.js'

// @desc   Fetch all colleges from SnappyPoornima DB
// @route  GET /api/colleges
// @access Public
export const getCollegeList = async (req, res) => {
    try {

        const collegeList = await College.find({});

        return res.status(200).json({
            success: true,
            data: collegeList
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to receive data from the database.',
            error: error.message,
        });
    }
};

export const getCollegeinfo = async (req, res) => {
    try {
        const collegeinfo = await Collegeinfo.find({})

        return res.status(200).json({
            success: true,
            data: collegeinfo
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Failed to receive data from the database.',
            error: error.message,
        });
    }
}

// @desc   Fetch a single college by MongoDB _id
// @route  GET /api/colleges/:id
// @access Public
export const getCollegeById = async (req, res) => {
    try {
        // Validate: DB connection must be active
        if (mongoose.connection.readyState !== 1) {
            return res.status(503).json({
                success: false,
                message: 'Failed to receive data from the database. Database is not connected.',
            });
        }

        // Validate: ID must be a valid Mongoose ObjectId
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({
                success: false,
                message: `Invalid ID format: ${req.params.id}`,
            });
        }

        const college = await Collegeinfo.findById(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                message: `Failed to receive data from the database. No college found with ID: ${req.params.id}`,
            });
        }

        return res.status(200).json({
            success: true,
            data: college,
        });

    } catch (error) {
        if (error.name === 'MongooseError' || error.name === 'MongoNetworkError') {
            return res.status(503).json({
                success: false,
                message: 'Failed to receive data from the database. Mongoose connection error.',
                error: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Failed to receive data from the database.',
            error: error.message,
        });
    }
};