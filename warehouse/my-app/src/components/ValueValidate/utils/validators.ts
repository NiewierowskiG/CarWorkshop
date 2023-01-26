export const isValidId = (id: string | number): boolean => {
    if (id < 0) {
        return false;
    }
    return true;
};
function checkDecimalPlaces(number: number) {
    const [integer, decimal] = number.toString().split('.');
    if (!decimal) {
        return 0;
    }
    return decimal.length;
}
export const isValidPrice = (number: string | number): boolean => {
    if (number < 0) {
        return false;
    }
    if (checkDecimalPlaces(Number(number)) > 2){
        return false;
    }
    return true;
};
export const isValidInteger = (number: string | number): boolean => {
    if (number < 0) {
        return false;
    }
    if (!Number.isInteger(Number(number))){
        return false;
    }
    return true;

};
export const isValidDateFormat = (dateString: string | number): boolean => {
    if (typeof dateString !== 'string') {
        return true;
    }
    const dateParts = dateString.split('-');
    if (dateParts.length !== 3) {
        return true;
    }
    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    if (
        !Number.isInteger(year) ||
        !Number.isInteger(month) ||
        !Number.isInteger(day)
    ) {
        return true;
    }
    if (month < 1 || month > 12) {
        return true;
    }
    if (day < 1 || day > 31) {
        return true;
    }
    return false;
};