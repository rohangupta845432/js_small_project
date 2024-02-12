function randomColorCode() {
    const str = "0123456789ABCDEF";
    const arr = str.split('');
    let colorCode;
    for(let i =0; i<6; i++){
        colorCode += arr(Math.random() * 16);
    }
    return colorCode;
}

export default randomColorCode;