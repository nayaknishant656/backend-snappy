import React from "react";

export default function Product({ product }) {
    return React.createElement(
        "div",
        null,
        React.createElement("h2", null, product.name),
        React.createElement("p", null, product.description),
        React.createElement("p", null, 'You are GOING BE TO BE 0.1111% in the World already')
    );
}