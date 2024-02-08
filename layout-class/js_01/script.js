function recalculationTemperature(celciusValue, fahrenheitValue) {
    console.log(`${celciusValue} по Цельсию - это ${(celciusValue * (9/5)) + 32} по Фаренгейту`)
    console.log(`${fahrenheitValue} по Фаренгейту - это ${(fahrenheitValue - 32) * (5/9)} по Цельсию`)
}

// recalculationTemperature(40, 50)

function isTriangleAble(a, b, c) {
    let p = (a + b + c) / 2
    let s = Math.sqrt(p* (p - a) * (p - b) * (p - c))

    if (s) {
        console.log(`Треугольник существует, его периметр равен ${p*2}, 
        площадь равна ${s.toFixed(2)}, соотнощение периметра к площади равна ${(p/s).toFixed(2)}`)
    } else {
        console.log('Треугольник не существует')
    }

    
}

// isTriangleAble(5, 20, 30)
// isTriangleAble(15, 20, 30)

function fizzBuzz(n) {
    for( let i = 0; i < (n + 1); i++) {
        console.log(i)
        if ( !(i % 5)) console.log('fizz buzz')
        else if ( !(i % 2)) console.log('buzz')
        else console.log('fizz')
    }
}

// fizzBuzz(10)

function createTree(n) {
    let treeBase = ""
    for(let i = 1; i < n; i++) {
        if (i%2) {
            for(let j = 1; j < i+1; j++) {
                treeBase += "*"
            }
            treeBase += "\n"
            continue
        } else {
            let currentString = ''
            for(let j = 1; j < i+1; j++) {
                
                treeBase += "#"
            }
            treeBase += "\n"
            continue
        } 
    }

    treeBase += "||"

    console.log(treeBase)
}
// createTree(12)
// console.log(`*\n##\n***\n####\n||`)

function isDivisileNumber(n, x, y) {
    if ( n / x === y) console.log(true)
    else console.log(false)
}

// isDivisileNumber(10, 5, 2)
// isDivisileNumber(10, 4, 2)

function checkQuarter(month) {
    if ( month < 4) console.log(`Это 1 квартал`)
    else if ( 3 < month && month < 7) console.log(`Это 2 квартал`)
    else if ( 6 < month && month < 10) console.log(`Это 3 квартал`)
    else console.log(`Это 4 квартал`)
}

// checkQuarter(1)
// checkQuarter(2)
// checkQuarter(3)
// checkQuarter(4)
// checkQuarter(5)
// checkQuarter(6)
// checkQuarter(7)
// checkQuarter(8)
// checkQuarter(9)
// checkQuarter(10)
// checkQuarter(11)
// checkQuarter(12)

function raiseToPower(n) {
    for(let i = 0; i < n+1; i++) {
        console.log(2**i)
    }
}

// raiseToPower(8)