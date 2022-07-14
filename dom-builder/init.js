// how to create an internal representation with Dominator.create 
// that can be used by Dominator.set and Dominator.addChild to alter interal values?
// but then calling Dominator() will create an DOM element when passed the above internal representation

// what is Dominator here ? A module / class / function ??
// NOTE: Dominator syntax representation is similar to jQuery...

(function (root, publicFns) {
    root.maker = publicFns(root.dominator)
})(window, function (dominator) {

    var Dominator = dominator.Dominator;

    var myElementObj = Dominator.create({
        type: "div",
        attr: [{
            class: "app main",
        },
        {
            id: "unique"
        }],
        child: null,
    });

    myElementObj.set('class', ['box', 'box-container']).set('id', 'my-id-1');  

    var myChildElementObj = Dominator.create({
        type: 'p',
        attr: [{
            class: "app main"
        },
        { id: "p1" }
        ],
        child: null,
    });
    myElementObj.addChild(myChildElementObj);


    var elementsDom = Dominator(myElementObj);
    document.body.append(elementsDom);

});

