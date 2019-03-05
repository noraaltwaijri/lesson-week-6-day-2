// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);
function switchGray() {
    // change background to gray
    $('body').css('background','gray');
    // change font to white
    $('body').css('color','white');
}

function switchWhite() {
    // change background to white
    $('body').css('background','white');
    // change font to black
    $('body').css('color','black');
}
