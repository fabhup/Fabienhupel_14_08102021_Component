/**
 * check that a number is even
 * @param {number} number
 * @returns {boolean} returns true if number is even or false if number is odd
 */
export function isEven(number) {
    return number % 2 === 0
}

/**
 * Replace all accents in a string
 * @param {string} string - is the string to modify
 * @returns {string} - is the string without accents
 */
export function replaceAccentsInString(string) {
    const regexAccents = [
        /[\300-\306]/g,
        /[\340-\346]/g, // A, a
        /[\310-\313]/g,
        /[\350-\353]/g, // E, e
        /[\314-\317]/g,
        /[\354-\357]/g, // I, i
        /[\322-\330]/g,
        /[\362-\370]/g, // O, o
        /[\331-\334]/g,
        /[\371-\374]/g, // U, u
        /[\321]/g,
        /[\361]/g, // N, n
        /[\307]/g,
        /[\347]/g, // C, c
    ]
    const lettersWithoutAccents = [
        'A',
        'a',
        'E',
        'e',
        'I',
        'i',
        'O',
        'o',
        'U',
        'u',
        'N',
        'n',
        'C',
        'c',
    ]

    for (var i = 0; i < regexAccents.length; i++) {
        string = string.replace(regexAccents[i], lettersWithoutAccents[i])
    }

    return string
}

/**
 * Capitalize the first character of a string
 * @param {string} string - is the string to modifiy
 * @returns {string} - is the string with first character capitalized
 */
export function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.substring(1)
}

/**
 * Clean the string specified for search (replaceAccentsInString Lowercase)
 * @param {string} string - is the string to clean
 * @returns {string} - is the string cleaned for display for search
 */
export function cleanStringForSearch(string) {
    string = replaceAccentsInString(string)
    string = string.toLowerCase() //to lowerCase accents to uniformized same ingredients
    string = string.replace(/[^a-z0-9-_/ ' ]/g, '')
    string = string.replace('', ' ')
    return string.trim() //replace blank spaces at the begining and the end of the string
}

/**
 * Clean data object for search
 * @param {string} string - is the string to clean
 * @returns {string} - is the string cleaned for display for search
 */
export function cleanDataForSearchEveryWhere(data) {
    return data.map((obj) => {
        return Object.fromEntries(
            Object.entries(obj).map(([k, v]) => [
                k,
                typeof v === 'string' ? cleanStringForSearch(v) : v,
            ])
        )
    })
}

/**
 * Check if a string contains all the words of a searchedString
 * @param {string} string - is the string in which we are looking for the searchedString
 * @param {string} searchedString - is the string we are looking for
 * @returns {string} - is the match result
 *          "true" (if string contains searchedString)
 *          "false" (if string not matched with searchedString)
 */
export function searchInString(string, searchedString) {
    string = ' ' + string
    /**
     * A blank space is add at the beginning of string and searchedString to return false
     * for a string that match but with a stringMatched starting at the middle of a word
     * ex : searchedString = "MON" / string = "liMONade" => return "false"
     */

    /** check if searchedString is included exactly in string */
    if (string.includes(' ' + searchedString)) {
        return true
    } else {
        /** check if all SearchedWords are included in the string */
        const searchedWords = searchedString.split(' ')
        let areAllSearchedWordsInString = true
        for (const i in searchedWords) {
            const searchedWord = searchedWords[i]
            if (!string.includes(' ' + searchedWord)) {
                areAllSearchedWordsInString = false
                break
            }
        }
        return areAllSearchedWordsInString
    }
}

/**
 * filter data of a datatable on all fields
 * @param {array} data Array of Objects for Datatable
 * @param {string} searchedString String of Searched Words
 */
export function filterDatatableOnGlobalSearch(data, searchedString) {
    return data.filter((obj) => {
        const concatAllTextFields = Object.values(obj)
            .filter((x) => x && x)
            .join(' ')
        const cleanFields = cleanStringForSearch(concatAllTextFields)
        const cleanSearchedString = cleanStringForSearch(searchedString)
        return searchInString(cleanFields, cleanSearchedString)
    })
}
