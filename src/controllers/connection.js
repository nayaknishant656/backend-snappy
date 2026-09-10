import mongoose from 'mongoose';
import React from "react";
import ReactDOMServer from "react-dom/server";
import Connection from '../models/connection.js';
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import Blog from '../models/connectionblog.js';
import Page from ".././Components/page.js";
import { renderToStaticMarkup } from "react-dom/server";
import Connectionmap from "../Components/Connectionmap.js";
import Connblog from "../Components/Connblog.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export const getConnblog = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("<h2>Invalid Blog ID</h2>");
        }
        const blog = await Blog.findById(id).lean();

        if (!blog) {
            return res.status(404).send("<h2>Blog Not Found</h2>");
        }
        const cssPath = path.join(
            __dirname,
            "../Components/Conncss.css"
        );

        const css = fs.readFileSync(
            cssPath,
            "utf-8"
        );
        // Read server-side CSS
        // const css = fs.readFileSync(
        //     path.join(process.cwd(), "../src/Components/css/Conncss.css"),
        //     "utf-8"
        // );

        const component = React.createElement(
            Connblog,
            {
                products: blog,
            }
        );

        const html = renderToStaticMarkup(component);
        const fullHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>${blog.header || "Blog"}</title>

    <style>
        ${css}
    </style>
</head>

<body>
    ${html}
</body>
</html>
`;
        return res
            .status(200)
            .type("html")
            .send(fullHtml);
        // return res
        //     .status(200)
        //     .json({
        //         success: true,
        //         blog,
        //     });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Failed to generate HTML page.",
            error: error.message,
        });
    }
};