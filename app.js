function redudant(string) {
    let s = string;
    function check() {
        return s;
    }
    return check;
}

console.log(redudant("apple"));
console.log(redudant("pear"));
console.log(redudant(""));