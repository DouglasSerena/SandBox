function fat(n) {
    let fat = 1
    for (i = n;i > 1;i--){
        fat *= i
        console.log(fat)
    }
    return fat
}
console.log(fat(5))