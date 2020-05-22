/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
const merge = function(left, right, comparison) {
    const result = new Array();
    while ((left.length > 0) && (right.length > 0)) {
        if (comparison(left[0], right[0]) <= 0) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length > 0) { result.push(left.shift()); }
    while (right.length > 0) { result.push(right.shift()); }
    return result;
};
var merge_sort = function(array, comparison) {
    if (array.length < 2) { return array; }
    const middle = Math.ceil(array.length / 2);
    return merge(merge_sort(array.slice(0, middle), comparison), merge_sort(array.slice(middle), comparison), comparison);
};

exports.merge_sort = merge_sort;