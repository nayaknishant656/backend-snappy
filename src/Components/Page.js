import React from "react";

export default function Page({ product }) {
    return React.createElement(
        "div",
        {
            className: "community-page",
        },

        // Header / Image
        React.createElement(
            "div",
            {
                className: "community-header",
            },

            React.createElement("img", {
                src: product.image,
                alt: product.name,
                className: "community-image",
            }),

            React.createElement(
                "div",
                {
                    className: "community-header-content",
                },

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
                )
            )
        ),

        // Main Content
        React.createElement(
            "div",
            {
                className: "community-content",
            },

            React.createElement(
                "h2",
                null,
                "About the Community"
            ),

            React.createElement(
                "p",
                null,
                product.Description
            ),

            // Community Stats
            React.createElement(
                "div",
                {
                    className: "community-stats",
                },

                React.createElement(
                    "div",
                    {
                        className: "stat",
                    },

                    React.createElement(
                        "strong",
                        null,
                        product.TotalConnected
                    ),

                    React.createElement(
                        "span",
                        null,
                        "People Connected"
                    )
                ),

                React.createElement(
                    "div",
                    {
                        className: "stat",
                    },

                    React.createElement(
                        "strong",
                        null,
                        product.city
                    ),

                    React.createElement(
                        "span",
                        null,
                        "Location"
                    )
                ),

                React.createElement(
                    "div",
                    {
                        className: "stat",
                    },

                    React.createElement(
                        "strong",
                        null,
                        product.isActive ? "Active" : "Inactive"
                    ),

                    React.createElement(
                        "span",
                        null,
                        "Community Status"
                    )
                )
            ),

            // Connect Button
            React.createElement(
                "a",
                {
                    href: product.link,
                    className: "connect-button",
                },
                "Connect with Community"
            )
        )
    );
}