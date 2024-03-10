//question 10

function star (row){
    for (let i=1; i<row; i++){
        let line ="";
        for (let a=1; a<=row; a++){  
            line +="* ";
        }
        console.log(line);
    } 
}
star(5);

// question 11

function one (row){
    for (let i=1; i<=row; i++){
        let line ="";
        for (let k=i; k<=row; k++){
            line += "1";
        }
        console.log(line);
    } 
}

one(4);

// question 12

/*function two (row){
    for (let i=1; i<=row; i++){
        let line = "";
        let otherLine = "";
        for (let k= i; k<=row; k++){
            line += "1";
        }
        for (let j=k+1; j<=row; j++){
            otherLine += "0";
        }
        console.log(line);
        console.log(otherLine);
    } 
}

two(4); */