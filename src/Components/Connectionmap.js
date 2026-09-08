import React from "react";

export default function Connectionmap({ products }) {

    const communities = Array.isArray(products)
        ? products
        : products?.products || [];

    return React.createElement(
        "div",
        {
            className: "communities-container",
        },

        communities.map((product) =>
            React.createElement(
                "div",
                {
                    className: "community-page",
                    key: product._id || product.name,
                },

                React.createElement("img", {
                    src: product.image,
                    alt: product.name,
                    className: "community-image",
                }),

                React.createElement(
                    "span",
                    {
                        className: "community-category",
                    },
                    product.category
                ),

                React.createElement(
                    "h1",
                    null,
                    product.name
                ),

                React.createElement(
                    "p",
                    null,
                    `📍 ${product.city}`
                ),

                React.createElement(
                    "p",
                    null,
                    product.Description
                ),

                React.createElement(
                    "p",
                    null,
                    `People Connected: ${product.TotalConnected}`
                ),

                React.createElement(
                    "p",
                    null,
                    product.isActive ? "Active" : "Inactive"
                ),

                React.createElement(
                    "a",
                    {
                        href: product.link,
                        className: "connect-button",
                    },
                    "Connect with Community"
                )
            )
        )
    );
}