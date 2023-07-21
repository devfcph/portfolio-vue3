const { numbers } = require("../helpers/constants");

export function percentExperience(number, isYear = true) {
    return (number * 100) / ( isYear ? numbers.YEARS_OF_EXPERIENCE : numbers.MONTHS ); 
}