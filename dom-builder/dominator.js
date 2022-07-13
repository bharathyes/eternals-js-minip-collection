(function (root, publicFns) {
    root.dominator = publicFns();
}(window, function () {

    var Dominator = function (element) {
        this.type = element.type;
        this.attr = element.attr;
        this.child = element.child;
    };

    Dominator.prototype.addChild = function (child) {
        // can I validate if child is obj of Dominator??
        if (!Array.isArray(this.child))
            this.child = [];
        this.child.push(child);
    }

    Dominator.prototype.set = function (key, value) {
        this.attr[key] = value;
    }

    Dominator.prototype.build = function () {

        var ele = document.createElement(this.type);

        Object.keys(this.attr).forEach(key => {
            var valueStr = this.attr[key];
            if (Array.isArray(valueStr))
                valueStr = valueStr.join(' ');
            ele.setAttribute(key, valueStr);
        });

        var childs = this.child;
        if (Array.isArray(childs)) {
            childs.forEach(child => {
                ele.appendChild(child.build());
            });
        }

        return ele;
    };

    return {
        Dominator: Dominator,
    }
}));
