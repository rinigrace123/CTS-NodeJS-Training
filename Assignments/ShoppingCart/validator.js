export function isValidName(name) {
    return typeof name === 'string' && name.length > 0;
}

export function isValidPrice(price) {
    return typeof price === 'number' && price > 0;
}

export function isValidQuantity(quantity) {
    return Number.isInteger(quantity) && quantity > 0;
}