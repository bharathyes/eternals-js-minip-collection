// how to create an internal representation with Dominator.create 
// that can be used by Dominator.set and Dominator.addChild to alter interal values?
// but then calling Dominator() will create an DOM element when passed the above internal representation

// what is Dominator here ? A module / class / function ??
// NOTE: Dominator syntax representation is similar to jQuery...

(function (root, publicFns) {
    root.maker = publicFns(root.Dominator)
})(window, function (Dominator) {

    var myElementObj = Dominator.create({
        type: "div",
        attr: [{
            class: "app main",
        },
        {
            id: "unique"
        }],
        text: "Some Content 1",
        child: null,
    });

    myElementObj.set('class', ['box', 'box-container']).set('id', 'my-id-1');  

    var myChildElementObj = Dominator.create({
        type: 'h1',
        attr: [{
            class: "app main h1"
        },
        { id: "h1" }
        ],
        text: "Some Content 2",
        child: null,
    });
    myElementObj.addChild(myChildElementObj);
    myChildElementObj.set('id', 'my-id-2');  

    var myInnerChildElementObj = Dominator.create({
        type: 'p',
        attr: [{
            class: "app main"
        },
        { id: "p1" }
        ],
        text: "Some Content 3",
        child: null,
    });
    myChildElementObj.addChild(myInnerChildElementObj);


    var elementsDom = Dominator(myElementObj);
    document.body.append(elementsDom);

});

