const squareArea = (length, width) => {
    return length * width;
};

const roundSquare = (length, width) => {
    return 2 * (length + width);
}

module.exports = {
    squareArea,
    roundSquare,
}