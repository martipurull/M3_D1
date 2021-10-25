/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */

const sumTwoIntegers = function (int1, int2) {
    let parsedInt1 = parseInt(int1)
    let parsedInt2 = parseInt(int2)
    if (parsedInt1 === parsedInt2) {
        return (parsedInt1 + parsedInt2) * 3
    } else {
        return int1 + int2
    }
}

console.log(sumTwoIntegers(2.2, 2.3))

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */

const checkTwoIntegers = function (int1, int2) {
    let parsedInt1 = parseInt(int1)
    let parsedInt2 = parseInt(int2)
    if (parsedInt1 === 50 || parsedInt2 === 50) {
        return true
    } else if (parsedInt1 + parsedInt2 === 50) {
        return true
    } else {
        return `Neither ${ int1 } or ${ int2 }, or the sum of both, is 50!`
    }
}

console.log(checkTwoIntegers(25, 26))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */

const removeOneCharacter = function (str, charNum) {
    let charToRemove = str.slice(charNum, charNum + 1)
    return str.replace(charToRemove, '')
}

console.log(removeOneCharacter('I love you', 5))

/* 4. Create a function to find and return the largest of three given integers. */

const findLargestInt = function (int1, int2, int3) {
    if (int1 > int2 && int1 > int3) {
        return int1
    } else if (int2 > int1 && int2 > int3) {
        return int2
    } else {
        return int3
    }
}

console.log(findLargestInt(3, 2, 3))

/* 5. Create a function to check if two numbers are in the range 40-60 or 70-100.
    Return `true` if they do, return `false` if one (or both) don't. */

const checkIfBetween = function (num1, num2) {
    if ((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        return true
    } else if ((num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100)) {
        return true
    } else {
        return "At least one of the numbers isn't inside one of the ranges."
    }
}

console.log(checkIfBetween(60, 140))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string.
    Pass the string and the number of copies as parameters. */

const createString = function (str, numOfCopies) {
    let newStr = ''
    for (let i = 0; i < numOfCopies; i++) {
        newStr = newStr.concat(str, ' ')
    }
    return newStr
}

console.log(createString('love', 10))

/* 7. Create a function to display the city name if the string begins with "Los" or "New".
    Pass the city name as a parameter. Return `false` if they start with a different string. */

const displayCityName = function (cityName) {
    if (cityName.slice(0, 3) === "Los" || cityName.slice(0, 3) === "New") {
        return cityName
    } else {
        return false
    }
}

console.log(displayCityName("Los Alamos"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements.
    Pass the array as a parameter. */

const sumArrayElements = function (threeElArr) {
    return threeElArr[0] + threeElArr[1] + threeElArr[2]
}

console.log(sumArrayElements([1, 2, 3]))

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3.
    Return `true` is it does, `false` if it doesn't. */

const includesOneOrThree = function (arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return true
    } else {
        return false
    }
}

console.log(includesOneOrThree([5, 5]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3.
    Return `true` if it doesn't, `false` if it does. */

const doesNotIncludeOneOrThree = function (arr) {
    if (arr.includes(1) || arr.includes(3)) {
        return false
    } else {
        return true
    }
}

console.log(doesNotIncludeOneOrThree([5, 3]))

/* 11. Create a function to find the longest string from a given array of strings.
    Pass the array as parameter and return the longest string. */

const returnLongestString = function (arrOfStrs) {
    let longestStr = arrOfStrs[0]
    for (let i = 0; i < arrOfStrs.length; i++) {
        if (arrOfStrs[i].length > longestStr.length) {
            longestStr = arrOfStrs[i]
        }
    }
    return longestStr
}

console.log(returnLongestString(['I love you', 'I hate you', 'I feel rather indifferent about you']))

/* 12. Create a function to find the types of a given angle:
  1. Acute angle â‡’ between 0 and 90 degrees. Return `acute`.
    2. Right angle â‡’ 90 degree. Return `right`
    3. Obtuse angle â‡’ between 90 and 180. Return `obtuse`
    4. Straight angle â‡’ 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/

const findAngleType = function (ang) {
    if (ang > 0 && ang < 90) {
        console.log(`${ ang } degrees makes for an acute angle.`)
    } else if (ang === 90) {
        console.log(`${ ang } degrees gives you a right angle.`)
    } else if (ang > 90 && ang < 180) {
        console.log(`${ ang } degrees makes for an obtuse angle.`)
    } else if (ang === 180) {
        console.log(`${ ang } degrees gives you a straight angle.`)
    } else {
        console.log(`${ ang } degrees isn't a valid parametre.`)
    }
}

findAngleType(50)

/* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */

const findIndexOfGreatestElement = function (arrOfInts) {
    let greatestInt = 0
    for (let i = 0; i < arrOfInts.length; i++) {
        if (arrOfInts[i] > greatestInt) {
            greatestInt = arrOfInts[i]
        }
    }
    return arrOfInts.indexOf(greatestInt)
}

console.log(findIndexOfGreatestElement([1, 87, 230, 45, 3, 78, 9987, 34, 908, 78]))

/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */

const findLargestEvenNum = function (arrOfInts) {
    let largestEvenNum = 2
    for (let i = 0; i < arrOfInts.length; i++) {
        if ((arrOfInts[i] % 2) === 0 && arrOfInts[i] > largestEvenNum) {
            largestEvenNum = arrOfInts[i]
        }
    }
    return `${ largestEvenNum } is the largest even number in the array`
}

console.log(findLargestEvenNum([1, 87, 230, 45, 3, 78, 9987, 34, 908, 78]))

/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative.
    Return `true` if that's the case, return `false` if it's not. */

