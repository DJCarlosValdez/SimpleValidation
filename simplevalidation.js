/**
 * 
 * @description Validate an array of values. You can use any tags you want to validate. 
 * Supports Min/Max Values, Equal Values, typeof Values and Include Values  
 * @param {Object[]} query array with all values to validate
 * @param {number} [query[].min] validate if number is over minimum (>)
 * @param {number} [query[].max] validate if number is under maximum (<)
 * @param {('string'|'object'|'number'|'undefined'|'boolean'|'function')} [query[].typeof] validate element type
 * @param {*} [query[].equal] validate if the element is equal to another element
 * @param {*} [query[].include] validate if something includes an element
 * @param {*} query[].value the value to validate
 * @returns {boolean} Will return if the whole array passes the validation
 */

const simpleValidation = (query) => {
    const status = query.every(el => {
        if (typeof el !== 'object' && typeof el === 'undefined') {
            return false
        } else if (typeof el !== 'object' && typeof el !== 'undefined') {
            return true
        }

        if (typeof el === 'object') {
            let valid = false
            const elementTest = Object.keys(el).every(key => {
                switch (key) {
                    case 'min':
                        if (el.value > el.min) {
                            return true
                        } else {
                            return false
                        }
                    case 'max':
                        if (el.value < el.max) {
                            return true
                        } else {
                            return false
                        }
                    case 'typeof':
                        if (typeof el.value === el.typeof) {
                            return true
                        } else {
                            return false
                        }
                    case 'equal':
                        if (el.value === el.equal) {
                            return true
                        } else {
                            return false
                        }
                    case 'include':
                        if (el.value.includes(el.include)) {
                            return true
                        } else {
                            return false
                        }
                    case 'value':
                        return true
                }

                if (valid === true) {
                    return true
                } else {
                    return false
                }
            })

            if (elementTest === true) {
                return true
            } else {
                return false
            }
        }
    })

    return status
}

module.exports = simpleValidation