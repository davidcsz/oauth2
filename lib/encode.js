exports.base64Encode = (stringToEncode) => {
    let encodedString = Buffer.from(stringToEncode, 'ascii');
    return encodedString.toString('base64')
}