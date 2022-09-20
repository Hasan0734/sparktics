import parse from 'html-react-parser'
export const LowerCase = /(.*[a-z].*)/
export const UpperCase = /(.*[A-Z].*)/
export const Digit = /(.*\d.*)/
export const Symbol = /(.*\W.*)/


export const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
export const parseHtml = body => parse(body)
export const firstNWord = (str, n) => str.split(' ').slice(0, n).join(' ') + '..'
export const wordFirstUpperCase = (str) => {
    const arr = str.split('-')
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str2 = arr.join(" ")
    return str2;
}

export const queryValidate = (objectParsed, keyName) => {
    const parsedArray = Object.entries(objectParsed)
    const filtered = parsedArray.filter(([key, value]) => key !== 'location');
    const justStrings = Object.fromEntries(filtered);
    return justStrings;
}