import mongoose from 'mongoose';
import React from "react";
import ReactDOMServer from "react-dom/server";
import College from '../models/College.js';
import Collegeinfo from '../models/Collegeinfo.js'
import Product from "../Components/Product.js";
import { sql } from '../config/db.js';

export const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("<h2>Invalid Product ID</h2>");
        }
        const product = await Collegeinfo.findById(id);
        if (!product) {
            return res.status(404).send("<h2>Product Not Found</h2>");
        }
        const html = ReactDOMServer.renderToString(
            React.createElement(Product, { product })
        );

        return res.status(200).json({ html, product });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};


export const getpostgres = async (req, res) => {

    try {

        const result = await sql`
            SELECT
                c.course_name,
                qp.year,
                qp.exam_type,
                qp.file_url
            FROM question_papers qp
            JOIN courses c ON qp.course_id = c.course_id
            WHERE c.course_name = 'Python Programming'
            ORDER BY qp.year DESC;
        `;

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch colleges from Postgres",
            error: error.message
        });
    }

};