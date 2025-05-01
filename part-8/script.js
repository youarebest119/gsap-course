function snap(snapArray, target) {

    let nearestValue = snapArray[0] || target;

    for (let i = 1; i <= snapArray.length - 1; i++) {

        let currentNumber = snapArray[i];

        if (Math.abs(target - currentNumber) < Math.abs(target - nearestValue)) {

            nearestValue = currentNumber;

        }

    }

    return nearestValue;
}

let output = snap([100, 50, 500, 303], 305);
console.log('output: ', output);