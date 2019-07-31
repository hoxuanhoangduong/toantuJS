function something() {
    let inputWidth;
    let inputHeight;

    inputHeight = prompt('Enter the Height : ')
    inputWidth = prompt('Enter the Width : ')
    let width = parseInt(inputWidth)
    let height = parseInt(inputHeight)

    let arena = width * height
    document.write('The arena is ' + arena)
}