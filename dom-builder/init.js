// program flow - data init ?

var Dominator = dominator.Dominator;

// FIXME: how to call without `new` operator?
var myElementObj = new Dominator({
    type: "div",
    attr: {
        class: "app main",
    },
    child: null,
});

myElementObj.set('class', ['box', 'box-container']);
myElementObj.set('id', 'my-id-1');

var myChildElementObj = new Dominator({
    type: 'p',
    attr: {
        class: "app main",
    },
    child: null,
});

myElementObj.addChild(myChildElementObj);


var elementsDom = myElementObj.build();
document.body.append(elementsDom);

