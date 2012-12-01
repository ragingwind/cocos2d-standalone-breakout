//  UTIL, snippets code from cocos2d node.js

var util = {
	copy: function(obj) {
    if (obj === null) {
        return null;
    }

    var copy;

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = util.copy(obj[i]);
        }
    } else if (typeof(obj) === 'object') {
        if (typeof(obj.copy) === 'function') {
            copy = obj.copy();
        } else {
            copy = {};

            var o, x;
            for (x in obj) {
                copy[x] = util.copy(obj[x]);
            }
        }
    } else {
        // Primative type. Doesn't need copying
        copy = obj;
    }

    return copy;
	}
};
