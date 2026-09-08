import mongoose from 'mongoose';
import React from "react";
import ReactDOMServer from "react-dom/server";
import Connection from '../models/connection.js';
import Page from ".././Components/page.js";
import { renderToStaticMarkup } from "react-dom/server";
import Connectionmap from "../Components/Connectionmap.js";
export const getAllConnections = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("<h2>Invalid Product ID</h2>");
        }

        const product = await Connection.findById(id);

        if (!product) {
            return res.status(404).send("<h2>Product Not Found</h2>");
        }

        const html = ReactDOMServer.renderToString(
            React.createElement(Page, { product })
        );
        return res.status(200).type("html").send(html);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

export const getConnectionmmap = async (req, res) => {
    try {

        const products = await Connection.find({}).lean();

        const component = React.createElement(
            Connectionmap,
            {
                products: products,
            }
        );

        const html = renderToStaticMarkup(component);

        return res
            .status(200)
            .type("html")
            .send(html);

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to generate HTML page.",
            error: error.message,
        });
    }
};