module.exports = function zeros(expression) {
    let factArr = expression.split("*");
    let fivesCounter = 0;
    let twosCounter = 0;
    let result = [0, 0];
    let factType;
    if (factArr[0].includes('!!')) {
        factArr[0] = factArr[0].slice(0, -2);
        factType = 2;
    } else {
        factArr[0] = factArr[0].slice(0, -1);
        factType = 1;
    }
    for (let i = 0; i < factArr.length;) {
        if (factArr[i] > 0) {
            if (factArr[i] % 5 == 0) {
                factArr[i] /= 5;
                fivesCounter++;
                continue;
            }
            if (factArr[i] % 2 == 0) {
                factArr[i] /= 2;
                twosCounter++;
                continue;
            }
        }
        factArr[i] *= Math.pow(2, twosCounter);
        result[1] += twosCounter;
        twosCounter = 0;
        factArr[i] *= Math.pow(5, fivesCounter);
        result[0] += fivesCounter;
        fivesCounter = 0;
        factArr[i] -= factType;
        if (factArr[i] < 2) {
            i++;
            if (i < factArr.length) {
                if (factArr[i].includes('!!')) {
                    factArr[i] = factArr[i].slice(0, -2);
                    factType = 2;
                } else {
                    factArr[i] = factArr[i].slice(0, -1);
                    factType = 1;
                }
            }
        }
    }
    return Math.min(...result);
}