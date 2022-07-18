(function (root, publicFns) {
    root.Dominator = publicFns();
})(window, function () {

    var Tag = function (type, attr, text, child) {
        this.type = type;
        this.attr = attr;
        this.text = text;
        this.child = child;
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

    Tag.prototype.addText = function (text) {
        if (typeof text !== "undefined") {
            this.text = text;
        }
    }

    var Dominator = function (obj) {

        var type = obj.type;
        if (typeof type === "undefined") {
            return "empty tag name."
        }
        var ele = document.createElement(type);

        // attributes array of objects

        var attrObj = obj.attr;
        Object.keys(attrObj).forEach(function (key) {
            var valueStr = attrObj[key];
            if (Array.isArray(valueStr)) {
                valueStr = valueStr.join(' ');
            }
            ele.setAttribute(key, valueStr);
        });

        if (typeof obj.text !== "undefined") {
            ele.innerText = obj.text;
        }

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


    Dominator.create = function (ipData) {
        var attrs = ipData.attr;
        if (!Array.isArray(attrs)) {
            return "invalid attributes.";
        }

        var flatAttr = flattenAttr(attrs);

        var childs = ipData.child;
        var newChildObjs = [];
        if (Array.isArray(childs) && (!(childs[0] instanceof Tag))) {
            childs.forEach(function (child) {
                newTag = Dominator.create(child);
                if (newTag instanceof Tag) {
                    newChildObjs.push(newTag);
                }
            })
            ipData.child = newChildObjs;
        }

        var tagObj = new Tag(ipData.type, flatAttr, ipData.text, ipData.child);

        if (tagObj instanceof Tag) {
            return tagObj;
        }
        return "Object creation failed."
    };

    return Dominator;

});