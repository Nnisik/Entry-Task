import {encoded, translations} from './data.js'

console.log("Let's rock")
console.log(encoded, translations)

const decodeData = () => {
    const decoded = new Set();
    encoded.forEach(obj => {
        let newDecodedObj = {};
        for (const key in obj) {
            if (key == "groupId" || !key.includes("Id")) {
                newDecodedObj[key] = obj[key];
            }
            else {
                let decodedKey = key.replace("Id", "");
                newDecodedObj[decodedKey] = (obj[key] === null) ? obj[key] : translations[obj[key]];
            }
            unigueIds.add(key);
        }
        decoded.add(newDecodedObj);
        return;
    });
    return decoded;
}

const unigueIds = new Set(); 
const decoded = decodeData();
console.log(decoded, unigueIds)