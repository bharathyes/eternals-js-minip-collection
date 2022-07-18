
var main = Dominator.create({
    type: "div",
    attr: [
        { class: "collapse navbar-collapse", },
        { id: "navbarSupportedContent", }
    ],
    child: [
        {
            type: "ul",
            attr: [
                { "class": "navbar-nav ms-auto mb-2 mb-lg-0", },
            ],
            child: [
                {
                    type: "li",
                    attr: [{
                        class: "nav-item",
                    }],
                    child: [{
                        type: "a",
                        attr: [
                            { "class": "nav-link active", },
                            { "aria-current": "page", },
                            { "href": "#!" },
                        ],
                        text: "Home"
                    }],
                },
                {
                    type: "li",
                    attr: [{
                        class: "nav-item",
                    }],
                    child: [{
                        type: "a",
                        attr: [
                            { "class": "nav-link active", },
                            { "aria-current": "page", },
                            { "href": "#!" },
                        ],
                        text: "Career"
                    }],
                },
            ],
        }
    ],
});

var main2 = Dominator.create(
    {
        type: "h2",
        attr: [
            { class: "collapse navbar-collapse" },
            { id: "navbarSupportedContent" },
        ],
        child: [
            {
                type: "ul",
                attr: [
                    { class: "navbar-nav ms-auto mb-2 mb-lg-0" }
                ],
                child: [
                    {
                        type: "li",
                        attr: [
                            { class: "nav-item", }
                        ],
                        child: [
                            {
                                type: "a",
                                attr: [
                                    { class: "nav-link active" },
                                    { "aria-current": "page" },
                                    { href: "#!" },
                                ],
                                text: "Home",
                            }
                        ]
                    },
                    {
                        type: "li",
                        attr: [
                            { class: "nav-item" }
                        ],
                        child: [
                            {
                                type: "a",
                                attr: [
                                    { class: "nav-link" }, { href: "#!" }
                                ],
                                text: "About",
                            }
                        ],
                    },
                    {
                        type: "li",
                        attr: [
                            { class: "nav-item" }
                        ],
                        child: [
                            {
                                type: "a",
                                attr: [
                                    { class: "nav-link" }, { href: "#!" }
                                ],
                                text: "Contact",
                            },
                        ],
                    },
                    {
                        type: "li",
                        attr: [
                            { class: "nav-item" }
                        ],
                        child: [
                            {
                                type: "a",
                                attr: [
                                    { class: "nav-link" }, { href: "#!" }
                                ],
                                text: "Services",
                            },
                        ],
                    },
                ],
            },
        ],
    }
);

var main3 = Dominator.create({
    type: "main",
    attr: [
        { class: "main" }
    ],
    child: [main2]
});

// main3.addChild(main2);


var elementsDom = Dominator(main3);
document.body.append(elementsDom);
