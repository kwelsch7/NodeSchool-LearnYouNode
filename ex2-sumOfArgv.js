let sum = 0;
for(let num of process.argv) {
    if(!(isNaN(+num))) {
        sum += parseInt(num);
    }
}
console.log(sum);