(function (root, publicFns) {
    root.dominator = publicFns();
})(window, function () {

    var Tag = function (type, attr, child) {
        this.type = type;
        this.attr = attr;
        if (child instanceof Tag) {
            this.child = child;
        } else {
            return "Child of invalid type."
        }
    }

    Tag.prototype.set = function (key, value) {
        this.attr[key] = value;
        return this;
    };

    Tag.prototype.addChild = function (child) {
        if (!Array.isArray(this.child))
            this.child = [];
        if (child instanceof Tag) {
            this.child.push(child);
            return this;
        }
        return "Child of invalid type."
    };

    var Dominator = function (obj) {
        // perform builder operation here
        var ele = document.createElement(obj.type);

        // attributes array of objects
        obj.attr.forEach(function (attrObj) {
            Object.keys(attrObj).forEach(function (key) {
                var valueStr = attrObj[key];
                if (Array.isArray(valueStr)) {
                    valueStr = valueStr.join(' ');
                }
                ele.setAttribute(key, valueStr);
            });
        })

        // recurse on (nested) array of child nodes
        var childs = obj.child;
        if (Array.isArray(childs)) {
            childs.forEach(function (child) {
                if (child instanceof Tag) {
                    ele.appendChild(Dominator(child));
                }
            });
        }
        return ele;
    };


    function flattenAttr(data) {
        var flatObj = {};
        data.forEach(function (obj) {
            Object.keys(obj).forEach(function (key) {
                flatObj[key] = obj[key];
            });
        });
        return flatObj;
    }


    create = function (ipData) {
        var attrs = ipData.attr;
        if (!Array.isArray(attrs)) {
            return "invalid attributes.";
        }

        var flatAttr = flattenAttr(attrs);
        var tagObj = new Tag(ipData.type, flatAttr, ipData.child);

        if (tagObj instanceof Tag) {
            return tagObj;
        }
        return "Object creation failed."
    };

    return {
        Dominator: Dominator,
    }

});