import React from "react";

export default function Connblog({ products }) {
    const blogs = Array.isArray(products)
        ? products
        : Array.isArray(products?.blogs)
            ? products.blogs
            : products?.blog
                ? [products.blog]
                : products
                    ? [products]
                    : [];

    return React.createElement(
        "div",
        {
            className: "blogs-container",
        },

        blogs.map((blog) =>
            React.createElement(
                "article",
                {
                    className: "blog-page",
                    key: blog._id || blog.slug,
                },

                /* ================= HERO ================= */

                React.createElement(
                    "section",
                    {
                        className: "blog-hero",
                    },

                    React.createElement("img", {
                        src: blog.bannerImage,
                        alt: blog.header,
                        className: "blog-banner-image",
                    }),

                    React.createElement(
                        "div",
                        {
                            className: "blog-hero-overlay",
                        }
                    ),

                    React.createElement(
                        "div",
                        {
                            className: "blog-hero-content",
                        },

                        React.createElement(
                            "span",
                            {
                                className: "blog-badge",
                            },
                            "INNOVATORS HUB"
                        ),

                        React.createElement(
                            "h1",
                            null,
                            blog.header
                        ),

                        React.createElement(
                            "p",
                            null,
                            blog.description
                        )
                    )
                ),

                /* ================= MAIN ================= */

                React.createElement(
                    "div",
                    {
                        className: "blog-content",
                    },

                    /* ================= TEAM ================= */

                    React.createElement(
                        "section",
                        {
                            className: "blog-section",
                        },

                        React.createElement(
                            "div",
                            {
                                className: "section-heading",
                            },

                            React.createElement(
                                "span",
                                null,
                                "OUR TEAM"
                            ),

                            React.createElement(
                                "h2",
                                null,
                                "Meet the Innovators"
                            )
                        ),

                        React.createElement(
                            "div",
                            {
                                className: "members-grid",
                            },

                            Array.isArray(blog.members)
                                ? blog.members.map((member, index) =>
                                    React.createElement(
                                        "div",
                                        {
                                            className: "member-card",
                                            key:
                                                member.name ||
                                                `member-${index}`,
                                        },

                                        React.createElement(
                                            "div",
                                            {
                                                className: "member-avatar",
                                            },
                                            member.name
                                                ? member.name
                                                    .charAt(0)
                                                    .toUpperCase()
                                                : "?"
                                        ),

                                        React.createElement(
                                            "h3",
                                            null,
                                            member.name
                                        ),

                                        React.createElement(
                                            "p",
                                            null,
                                            member.role
                                        )
                                    )
                                )
                                : null
                        )
                    ),

                    /* ================= IDEA ================= */

                    blog.idea
                        ? React.createElement(
                            "section",
                            {
                                className:
                                    "blog-section idea-section",
                            },

                            React.createElement(
                                "div",
                                {
                                    className: "section-heading",
                                },

                                React.createElement(
                                    "span",
                                    null,
                                    "PROJECT IDEA"
                                ),

                                React.createElement(
                                    "h2",
                                    null,
                                    blog.idea.title
                                )
                            ),

                            React.createElement(
                                "div",
                                {
                                    className: "idea-card",
                                },

                                React.createElement(
                                    "div",
                                    {
                                        className: "idea-number",
                                    },
                                    "01"
                                ),

                                React.createElement(
                                    "p",
                                    null,
                                    blog.idea.description
                                )
                            )
                        )
                        : null,

                    /* ================= LEADERBOARD ================= */

                    React.createElement(
                        "section",
                        {
                            className:
                                "blog-section leaderboard-section",
                        },

                        React.createElement(
                            "div",
                            {
                                className: "section-heading",
                            },

                            React.createElement(
                                "span",
                                null,
                                "PERFORMANCE"
                            ),

                            React.createElement(
                                "h2",
                                null,
                                "Team Leaderboard"
                            )
                        ),

                        React.createElement(
                            "div",
                            {
                                className:
                                    "leaderboard-wrapper",
                            },

                            React.createElement(
                                "table",
                                {
                                    className:
                                        "leaderboard-table",
                                },

                                React.createElement(
                                    "thead",
                                    null,

                                    React.createElement(
                                        "tr",
                                        null,

                                        React.createElement(
                                            "th",
                                            null,
                                            "#"
                                        ),

                                        React.createElement(
                                            "th",
                                            null,
                                            "Member"
                                        ),

                                        React.createElement(
                                            "th",
                                            null,
                                            "LeetCode"
                                        ),

                                        React.createElement(
                                            "th",
                                            null,
                                            "Codeforces"
                                        ),

                                        React.createElement(
                                            "th",
                                            null,
                                            "System Design"
                                        ),

                                        React.createElement(
                                            "th",
                                            null,
                                            "DevOps"
                                        )
                                    )
                                ),

                                React.createElement(
                                    "tbody",
                                    null,

                                    Array.isArray(
                                        blog.leaderboard
                                    )
                                        ? blog.leaderboard.map(
                                            (person, index) =>
                                                React.createElement(
                                                    "tr",
                                                    {
                                                        key:
                                                            person.sno ||
                                                            person.name ||
                                                            index,
                                                    },

                                                    React.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "rank",
                                                        },
                                                        person.sno
                                                    ),

                                                    React.createElement(
                                                        "td",
                                                        null,

                                                        React.createElement(
                                                            "div",
                                                            {
                                                                className:
                                                                    "leader-member",
                                                            },

                                                            React.createElement(
                                                                "img",
                                                                {
                                                                    src:
                                                                        person.image,
                                                                    alt:
                                                                        person.name,
                                                                    className:
                                                                        "leader-image",
                                                                }
                                                            ),

                                                            React.createElement(
                                                                "span",
                                                                null,
                                                                person.name
                                                            )
                                                        )
                                                    ),

                                                    React.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "score",
                                                        },
                                                        person.leetcode
                                                    ),

                                                    React.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "score",
                                                        },
                                                        person.codeforces
                                                    ),

                                                    React.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "score",
                                                        },
                                                        person.sysDesign
                                                    ),

                                                    React.createElement(
                                                        "td",
                                                        {
                                                            className:
                                                                "score",
                                                        },
                                                        person.devops
                                                    )
                                                )
                                        )
                                        : null
                                )
                            )
                        )
                    ),

                    /* ================= CONTACT ================= */

                    blog.contact
                        ? React.createElement(
                            "section",
                            {
                                className:
                                    "blog-section contact-section",
                            },

                            React.createElement(
                                "div",
                                {
                                    className: "section-heading",
                                },

                                React.createElement(
                                    "span",
                                    null,
                                    "CONTACT"
                                ),

                                React.createElement(
                                    "h2",
                                    null,
                                    "Connect With Us"
                                )
                            ),

                            React.createElement(
                                "div",
                                {
                                    className:
                                        "contact-grid",
                                },

                                blog.contact.email &&
                                React.createElement(
                                    "a",
                                    {
                                        href: `mailto:${blog.contact.email}`,
                                        className:
                                            "contact-card",
                                    },

                                    React.createElement(
                                        "span",
                                        {
                                            className:
                                                "contact-label",
                                        },
                                        "EMAIL"
                                    ),

                                    React.createElement(
                                        "strong",
                                        null,
                                        blog.contact.email
                                    )
                                ),

                                blog.contact.discord &&
                                React.createElement(
                                    "div",
                                    {
                                        className:
                                            "contact-card",
                                    },

                                    React.createElement(
                                        "span",
                                        {
                                            className:
                                                "contact-label",
                                        },
                                        "DISCORD"
                                    ),

                                    React.createElement(
                                        "strong",
                                        null,
                                        blog.contact.discord
                                    )
                                ),

                                blog.contact.github &&
                                React.createElement(
                                    "a",
                                    {
                                        href:
                                            blog.contact.github,
                                        target: "_blank",
                                        rel:
                                            "noopener noreferrer",
                                        className:
                                            "contact-card",
                                    },

                                    React.createElement(
                                        "span",
                                        {
                                            className:
                                                "contact-label",
                                        },
                                        "GITHUB"
                                    ),

                                    React.createElement(
                                        "strong",
                                        null,
                                        "View GitHub →"
                                    )
                                )
                            )
                        )
                        : null
                ),

                /* ================= FOOTER ================= */

                React.createElement(
                    "footer",
                    {
                        className: "blog-footer",
                    },

                    React.createElement(
                        "p",
                        null,
                        blog.header
                    ),

                    React.createElement(
                        "span",
                        null,
                        "Innovators Hub"
                    )
                )
            )
        )
    );
}