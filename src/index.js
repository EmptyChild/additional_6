module.exports = function zeros(expression) {
    let ExpArr = expression.split("*");
    let factArr = [];
    let doubleFactArr = [];
    for (let exp of ExpArr) {
        if (exp.includes('!!')) {
            doubleFactArr.push(exp.slice(0, -2));
        } else {
            factArr.push(exp.slice(0, -1));
        }
    }
    let fivesCounter = 0;
    let fivesChecked = false;
    let twosCounter = 0;
    let result = [0, 0];
    for (let i = 0; i < factArr.length;) {
        if (!fivesChecked) {
            if (factArr[i] % 5 == 0 && factArr[i] > 0) {
                factArr[i] /= 5;
                fivesCounter++;
                continue;
            }
            factArr[i] *= Math.pow(5, fivesCounter);
            result[0] += fivesCounter;
            fivesCounter = 0;
            fivesChecked = true;
        }
        if (factArr[i] % 2 == 0 && factArr[i] > 0) {
            factArr[i] /= 2;
            twosCounter++;
            continue;
        }
        factArr[i] *= Math.pow(2, twosCounter);
        result[1] += twosCounter;
        twosCounter = 0;
        fivesChecked = false;
        factArr[i]--;
        if (factArr[i] < 2) {
            i++;
        }
    }
    for (let i = 0; i < doubleFactArr.length;) {
        if (!fivesChecked) {
            if (doubleFactArr[i] % 5 == 0 && doubleFactArr[i] > 0) {
                doubleFactArr[i] /= 5;
                fivesCounter++;
                continue;
            }
            doubleFactArr[i] *= Math.pow(5, fivesCounter);
            result[0] += fivesCounter;
            fivesCounter = 0;
            fivesChecked = true;
        }
        if (doubleFactArr[i] % 2 == 0 && doubleFactArr[i] > 0) {
            doubleFactArr[i] /= 2;
            twosCounter++;
            continue;
        }
        doubleFactArr[i] *= Math.pow(2, twosCounter);
        result[1] += twosCounter;
        twosCounter = 0;
        fivesChecked = false;
        doubleFactArr[i] -= 2;
        if (doubleFactArr[i] < 2) {
            i++;
        }
    }
    return Math.min(...result);
}