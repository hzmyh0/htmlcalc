var hcalc = {} || hcalc; 

// logs all arguments
hcalc.log = function() {
    console.log(arguments);
}

// traverse all elements of list.
// if callback returns false, traverse will be canceled.
// args 
// list: list for traverse
// callback: function to apply each elements of list
//     callback args 
//     element: element of list
//     index: index of the element
//     list: list being traversed
//
hcalc.each = function(list, callback) {
    for (i = 0; i < list.length; i++) {
        if(callback(list[i], i, list) === false) {
            return false;
        }
    }
    return true;
}
    
