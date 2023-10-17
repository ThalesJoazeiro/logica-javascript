function catsAndAMouse(x, y, z){
    let catA = x;
    let catB = y;
    let mouse = z;

    if((Math.abs(mouse - catA)) < (Math.abs(mouse - catB))){
        return 'Cat A';
    }
    else if((Math.abs(mouse - catA)) > (Math.abs(mouse - catB))){
        return 'Cat B';
    }
    else{
        return 'Mouse';
    }
}


console.log(catsAndAMouse(1, 3, 2));