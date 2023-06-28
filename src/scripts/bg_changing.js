
let myTime = new Date;
let currMon = myTime.getMonth();
 let currTime = myTime.getHours();

let imgIndex = 1;
let bgImgsArr = ['coldBG.jpg', 'appBG.jpg', 'cloudyBG.jpg', 'sunsetBG.jpg', 'sunsetBG_2.jpg', 'nightBG.jpg'];


if((currMon > 10 || currMon < 3) && (currTime < 10 || currTime > 16)) {
    imgIndex = 0;
} else if(currMon > 3 && currMon < 7 && currTime > 16 && currTime < 20) {
    imgIndex = 3;
} else if(currMon > 6 && currMon < 10 && currTime > 16 && currTime < 20) {
    imgIndex = 4;
} else if(currMon > 6 && currMon < 10 && currTime > 9 && currTime < 13) {
    imgIndex = 2;
} else if(currTime > 19 || currTime < 6) {
    imgIndex = 5;
}

if(imgIndex != 1) {

    mainArea_Window.style.backgroundImage = "url('src/Assets/images/" + bgImgsArr[imgIndex] + "')";
    web_Footer.style.backgroundImage = "url('src/Assets/images/" + bgImgsArr[imgIndex] + "')";
}
