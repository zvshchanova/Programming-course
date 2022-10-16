
export const checkLs = (set) => {
    if (localStorage.getItem(set)) return true;
    return false;
}
export const showMessage = text => {
    return `${text}! not found`;
}