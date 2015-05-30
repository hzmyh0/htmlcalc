var hcalc = (function() {
    // object for namespace
    var exports = {} || exports; 

    // ----- utility methods -----
    // logs all arguments
    exports.log = function() {
        console.log(arguments);
    }

    // traverse the list and applies callback to all elements of the list.
    // if callback returns false, traverse will be canceled.
    // args 
    // list: list for traverse
    // callback: function to apply each elements of list
    //     callback args 
    //     element: element of list
    //     index: index of the element
    //     list: list being traversed
    exports.each = function(list, callback) {
        for (i = 0; i < list.length; i++) {
            if(callback(list[i], i, list) === false) {
                return false;
            }
        }
        return true;
    }
    return exports;
})();
    
// ----- initializing -----
document.addEventListener("DOMContentLoaded", function(){
    var display = document.querySelector('input');
    var buttons = document.querySelectorAll('button.digit');
    var onClick = function(e) {
        console.log(e.target.value);
    };
    hcalc.each(buttons, function(elem, index, list) {
        elem.addEventListener('click', onClick, false);
    });
}, false);
