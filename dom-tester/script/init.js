var mainDiv = {
    type: "div",
    attr: [{ class: "container" }],
    child: [
        {
            type: "header",
            attr: [{ class: "blog-header py-3" }],
            child: [
                {
                    type: "div",
                    attr: [{ class: "row flex-nowrap justify-content-between align-items-center" },],
                    child: [
                        {
                            type: "div",
                            attr: [
                                { class: "col-4 pt-1" },
                            ],
                            child: [{
                                type: "a",
                                attr: [
                                    { class: "text-muted" },
                                    { href: "#" }
                                ],
                                text: "Subscribe",
                            },],
                        },
                        {
                            type: "div",
                            attr: [
                                { class: "col-4 text-center" },
                            ],
                            child: [{
                                type: "a",
                                attr: [
                                    { class: "blog-header-logo text-dark" },
                                    { href: "#" }
                                ],
                                text: "Large",
                            },],
                        },
                        {
                            type: "div",
                            attr: [
                                { class: "col-4 d-flex justify-content-end align-items-center" },
                            ],
                            child: [
                                {
                                    type: "a",
                                    attr: [
                                        { class: "btn btn-sm btn-outline-secondary" },
                                        { href: "#" }
                                    ],
                                    text: "Sign up",
                                },
                            ],
                        },
                    ],
                },
            ]
        }
    ]
};


var navScrollerLintWorld = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "World",
};
var navScrollerLintTech = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Technology",
};
var navScrollerLintDesign = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Design",
};
var navScrollerLintCulture = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Culture",
};
var navScrollerLintBusiness = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Business",
};
var navScrollerLintPolitics = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Politics",
};
var navScrollerLintOpinion = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Opinion",
};
var navScrollerLintScience = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Science",
};
var navScrollerLintHealth = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Health",
};
var navScrollerLintStyle = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Style",
};
var navScrollerLintTravel = {
    type: "a",
    attr: [
        { class: "p-2 text-muted" },
        { href: "#" }
    ],
    text: "Travel",
};


var navScrollerObj = Dominator.create({
    type: "nav",
    attr: [
        { class: "nav d-flex justify-content-between" },
    ],
    child: [],
}).addChild(Dominator.create(navScrollerLintWorld))
    .addChild(Dominator.create(navScrollerLintTech))
    .addChild(Dominator.create(navScrollerLintDesign))
    .addChild(Dominator.create(navScrollerLintCulture))
    .addChild(Dominator.create(navScrollerLintBusiness))
    .addChild(Dominator.create(navScrollerLintPolitics))
    .addChild(Dominator.create(navScrollerLintOpinion))
    .addChild(Dominator.create(navScrollerLintScience))
    .addChild(Dominator.create(navScrollerLintHealth))
    .addChild(Dominator.create(navScrollerLintStyle))
    .addChild(Dominator.create(navScrollerLintTravel));

var contentObj = Dominator.create(mainDiv);
contentObj.addChild(Dominator.create({
    type: "div",
    attr: [{ class: "nav-scroller py-1 mb-2" }],
    child: [],
}).addChild(navScrollerObj)
);




// jumbotron

contentObj.addChild(Dominator.create({

    type: "div",
    attr: [{ class: "jumbotron p-3 p-md-5 text-white rounded bg-dark" }],
    child: [
        {
            type: "div",
            attr: [{ class: "col-md-6 px-0" }],
            child: [
                {
                    type: "h1",
                    attr: [{ class: "display-4 font-italic" }],
                    text: "Title of a longer featured blog post"
                },
                {
                    type: "p",
                    attr: [{ class: "lead my-3" }],
                    text: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents."
                },
                {
                    type: "p",
                    attr: [{ class: "lead mb-0" }],
                    child: [{
                        type: "a",
                        attr: [
                            { href: "#" }, { class: "text-white font-weight-bold" }
                        ],
                        text: "Continue reading..."
                    }]
                }
            ]
        }
    ]
}));

var cardObj = Dominator.create({
    type: "div",
    attr: [{ class: "col-md-6" }],
    child: [
        {
            type: "div",
            attr: [{ class: "card flex-md-row mb-4 box-shadow h-md-250" }],
            child: [
                {
                    type: "div",
                    attr: [{ class: "card-body d-flex flex-column align-items-start" }],
                    child: [
                        {
                            type: "strong",
                            attr: [{ class: "d-inline-block mb-2 text-primary" }],
                            child: [],
                            text: "World"
                        },
                        {
                            type: "h3",
                            attr: [{ class: "mb-0" }],
                            child: [
                                {
                                    type: "a",
                                    attr: [
                                        { class: "text-dark" },
                                        { href: "#" }
                                    ],
                                    child: [],
                                    text: "Featured Post",
                                }
                            ]
                        },
                        {
                            type: "div",
                            attr: [{ class: "mb-1 text-muted" }],
                            child: [],
                            text: "Nov 12"
                        },
                        {
                            type: "p",
                            attr: [{ class: "card-text mb-auto" }],
                            child: [],
                            text: "This is a wider card with supporting text below as a natural lead-in to additional content."
                        },
                        {
                            type: "a",
                            attr: [
                                { href: "#" }
                            ],
                            child: [],
                            text: "Continue reading",
                        },

                    ]
                },
                {
                    type: "img",
                    attr: [
                        { class: "card-img-right flex-auto d-none d-md-block" },
                        { src: "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_182119034c0%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_182119034c0%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.20000076293945%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" },
                        { alt: "Card image cap" }
                    ],
                    child: [],
                },

            ]
        },

    ]
});

var cardsObj = Dominator.create(
    {
        type: "div",
        attr: [{ class: "row mb-2" }],
        child: [ ],
    }
).addChild(cardObj).addChild(cardObj);

contentObj.addChild(cardsObj);


var contentDom = Dominator(contentObj);
document.body.append(contentDom);
