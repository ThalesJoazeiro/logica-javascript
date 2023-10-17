function staircase(n){
    let inputLine = '';
    let symbol = '#';
    let inputPosition = n - 1;

    for(let lineIndex = 0; lineIndex < n; lineIndex += 1){
        for(let columnIndex = 0; columnIndex < n; columnIndex += 1){
            if(columnIndex < inputPosition){
                inputLine += ' ';
            }
            else{
                inputLine += symbol;
            }
        }
        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    }
}

staircase(6);
