module.exports = function toReadable (number) {
    const ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 
        'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
пш
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 20) {
        return ones[number];
    } else if (number < 100) {
        const tenPart = tens[Math.floor(number / 10)];
        const onePart = ones[number % 10];
        return onePart === 'zero' ? tenPart : `${tenPart} ${onePart}`.trim();
    } else if (number < 1000) {
        const hundredPart = ones[Math.floor(number / 100)];
        const rest = number % 100;
        if (rest === 0) {
            return `${hundredPart} hundred`;
        } else {
            return `${hundredPart} hundred ${toReadable(rest)}`;
        }
    }

    throw new Error("Number must be between 0 and 999");
}
