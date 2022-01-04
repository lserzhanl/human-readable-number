module.exports = function toReadable(number) {

    let num = String(number).split('');
    let len = num.length;
    let str = ''

    let numTy = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let numTeen = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numb = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    function getStrFromNum(num1, num2) {
        if (num2 == 0) {
            return str += numTy[num1 - 1]
        } else if (num1 == 1 && num2 > 0) {
            return str += numTeen[num2 - 1]
        } else {
            return str += numTy[num1 - 1] + ' ' + numb[num2 - 1]
        }
    }

    if (len == 3) {
        if (num[1] == 0 && num[2] == 0) {
            return str += numb[num[0] - 1] + ' hundred'
        } else if (num[1] == 0 && num[2] > 0) {
            return str += numb[num[0] - 1] + ' hundred' + ' ' + numb[num[2] - 1]
        } else {
            return str += numb[num[0] - 1] + ' hundred' + ' ' + getStrFromNum(num[1], num[2])
        }
    } else if (len == 2) {
        return getStrFromNum(num[0], num[1])
    } else if (len == 1) {
        if (num == 0) {
            return str += 'zero';
        } else {
            return str += numb[num[0] - 1]
        }
    }
}
