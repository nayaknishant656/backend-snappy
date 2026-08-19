import React from "react";

export default function Page({ product }) {
    return React.createElement(
        "div",
        null,
        React.createElement("h2", null, product.name),
        React.createElement("p", null, product.description),
        React.createElement("p", null, 'this is the page only')
    );
}