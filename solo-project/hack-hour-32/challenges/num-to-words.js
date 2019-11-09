$_$wp(1);
function numToWords(num) {
    $_$wf(1);
    if ($_$w(1, 0), !num) {
        return $_$w(1, 1), 'Need valid input';
    }
    const thousandths = ($_$w(1, 2), [
        'hundred',
        'thousand',
        'million',
        'billion'
    ]);
    const twenties = ($_$w(1, 3), [
        '',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]);
    const tens = ($_$w(1, 4), [
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]);
    const oneDigit = ($_$w(1, 5), [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]);
    const str = ($_$w(1, 6), num.toString());
    if ($_$w(1, 7), num < 20) {
        return $_$w(1, 8), oneDigit[num];
    }
    if ($_$w(1, 9), str.length == 3) {
        return $_$w(1, 10), oneDigit[Number(str[0])] + thousandths[0] + twenties[Number(str[1])] + oneDigit[Number(str[2])];
    }
    if ($_$w(1, 11), str.length == 4) {
    }
}
$_$w(1, 12), $_$tracer.log(numToWords(181), 'numToWords(181)', 1, 12);
$_$w(1, 13), module.exports = numToWords;
$_$wpe(1);