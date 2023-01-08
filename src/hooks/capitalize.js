function Capitalize(word){
    let zero = word.charAt(0).toUpperCase()
    let one = word.slice(1).toLowerCase()
    return zero+one
}

export default Capitalize