let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];


const changeColor = () => {
    
    let box = document.getElementsByClassName("box")[0]
    let randColor = "#"
    
    for (let index = 0; index < 6; index++) {
        let randNo = Math.floor(Math.random() * 16)
        randColor += colorCodes[randNo]
    }
    
    box.style.backgroundColor = randColor
    
}

changeColor()