function simpleInterest(principal, rate, years) {
    return (principal * rate * years) / 100;
}

function compoundInterest(principal, rate, years) {
    return principal * Math.pow((1 + rate / 100), years);
}

module.exports = {
    simpleInterest,
    compoundInterest
};