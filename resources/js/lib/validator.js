/**
* Validate that an attribute has been given.
*
* @return {boolean}
*/
export function required(value, _attribute) {
    return (value != undefined && value != null && value != '');
}

/**
* Validate that an attribute is a valid date format.
* This validation rule implies the attribute is "required".
*
* @return {boolean}
*/
export function date(value, _attribute) {
    let isValidDate = Date.parse(value);
    return !(isNaN(isValidDate));
}

/**
* Validate that an attribute is a valid email address.
* This validation rule implies the attribute is "required".
*
* @return {boolean}
*/
export function email(value, _attribute) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return value.match(validRegex);
}

/**
* Validate that an attribute is a valid telephone number.
* This validation rule implies the attribute is "required".
*
* @return {boolean}
*/
export function telefon(value, _attribute) {
    var validRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

    return value.match(validRegex);
}

/**
* Validate that an attribute is a valid image format.
* This validation rule implies the attribute is "required".
*
* @return {boolean}
*/
export function imatge(value, _attribute) {
    return !(value != 'image/png' && value != 'image/jpeg');
}

/**
* Validate that an attribute has been accepted.
* This validation rule implies the attribute is "required".
*
* @return {boolean}
*/
export function accepted(value, _attribute) {
    var validRegex = /^(?:(yes|on|1|true))$/i;

    return validRegex.test(value);
}


/**
* Create a validation instance with usable methods.
* This validation rule implies the attribute is "required".
*
* @return {object}
*/
export default function createValidator(rules) {
    let errors = {};

    /**
    * Checks if all rules given pass with the values of the form.
    *
    * @return {boolean}
    */
    function passes(values) {
        for (const rule in rules) {
            for (const funct of rules[rule]) {
                if (!funct(values[rule], rule)) {
                    errors[rule] = 'error';
                }
            }
        }
        return Object.keys(errors).length == 0;
    }

    /**
    * Checks if there is an error for a given attribute.
    *
    * @return {boolean}
    */
    function error(attribute) {
        return attribute in errors
    }

    return { passes, error }
}