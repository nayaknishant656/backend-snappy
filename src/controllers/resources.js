import mongoose from 'mongoose';
import React from "react";
import ReactDOMServer from "react-dom/server";
import College from '../models/College.js';
import Collegeinfo from '../models/Collegeinfo.js'
import Product from ".././Components/Product.js";

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

        return res.status(200).send(html);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};