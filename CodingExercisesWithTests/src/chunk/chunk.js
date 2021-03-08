// Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

function chunk(array, size) {
    let chunked = [];

    array.forEach(element => {
        const lastChunkedElement = chunked[chunked.length -1];
        if (!lastChunkedElement || lastChunkedElement.length === size) {
            chunked.push([element]);
        } else {
            lastChunkedElement.push(element);
        }
    });

    return chunked;
}

module.exports = chunk;