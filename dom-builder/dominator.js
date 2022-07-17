(function (root, publicFns) {
    root.dominator = publicFns();
})(window, function () {

    // FIXME: how to expose Class without compromising security ?
    // FIXME: why is this available on window instead of window.dominator ??
    var Dominator = function () {
        this.type;
        this.attr;
        if (element.child instanceof Dominator) {
            this.child;
        }

        return this.build();

    };

    Dominator.prototype.create = function (data) {

        var obj = new Dominator();

    };

    Dominator.prototype.addChild = function (child) {
        // can I validate if child is obj of Dominator??
        if (!Array.isArray(this.child))
            this.child = [];
        this.child.push(child);
    };

    Dominator.prototype.set = function (key, value) {
        this.attr[key] = value;
        return this;
    };

    Dominator.prototype.build = function () {

        var ele = document.createElement(this.type);


        this.attr.forEach(attrObj => {
            Object.keys(attrObj).forEach(function (key) {
                var valueStr = attrObj[key];
                if (Array.isArray(valueStr))
                    valueStr = valueStr.join(' ');
                ele.setAttribute(key, valueStr);
            });
        })

        var childs = this.child;
        if (Array.isArray(childs)) {
            childs.forEach(function (child) {
                if (child instanceof Dominator) {
                    ele.appendChild(child.build());
                }
            });
        }

        return ele;
    };

    return {
        Dominator: Dominator,
    }
});
