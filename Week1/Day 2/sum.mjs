let myarray = [5,10,20,30,50]

function sumarray(myarray){
        let sum = 0;
        for(var ind of myarray){
            sum+=ind
        }
        return sum
}

console.log(sumarray(myarray))
