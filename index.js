const slider = document.querySelector(".slider input");
const img = document.querySelector(".images .img-2");
const dragLine = document.querySelector(".drag-line");
const fimg = document.querySelector(".resizeimg");
const parentWidth = document.querySelector(".wrapper");
const sliderm = document.querySelector(".slider");
const title = document.querySelector(".Title");
const draggable = document.querySelector(".drag-line > span");

window.addEventListener("load", (event) => {
    console.log("ss");
    let resizedHt = parentWidth.clientWidth;
    fimg.style.width = resizedHt + "px";
});

slider.oninput = (e) => {
    draggable.classList.add("ccc");
    console.log("drraed");
    let sliderVal = slider.value;
    let x = (dragLine.style.left = sliderVal + "%");
    let y = parseInt(x);
    img.style.width = sliderVal + "%";

    //add spacing to left and right of img
    if (y >= 95) {
        img.style.width = "95%";
        dragLine.style.left = "95%";
    } else if (y <= 5) {
        img.style.width = "5%";
        dragLine.style.left = "5%";
    }

    //hide show title of variant
    switch (true) {
        case y >= 60:
            title.lastElementChild.classList.add("opac");
            title.firstElementChild.classList.remove("opac");
            break;
        case y <= 40:
            title.lastElementChild.classList.remove("opac");
            title.firstElementChild.classList.add("opac");
            break;
        case y >= 41 && y <= 59:
            title.lastElementChild.classList.remove("opac");
            title.firstElementChild.classList.remove("opac");
            break;
    }
};

// function process_touchmove(ev) {
// // Call preventDefault() to prevent any further handling
//     ev.preventDefault();
// }

// Doesnt matter for now awaitig confirmation

//     // Setup our function to run on various events
//         const detectEventfunction = (event) => {
//         if (event.type == 'mousedown') {
//             draggable.classList.add('oopac')
//         }
//         if (event.type == 'touchstart') {
//             draggable.classList.add('oopac')
//         }
//         if (event.type == 'touchend') {
//             draggable.classList.remove('oopac')
//         }
//         if (event.type == 'mouseup') {
//             draggable.classList.remove('oopac')
//         }
//     };
//     // Add our event listeners
//     window.addEventListener('mousedown', detectEventfunction, false);
//     window.addEventListener('mouseup', detectEventfunction, false);
//     window.addEventListener('touchstart', detectEventfunction, false);
//     window.addEventListener('touchend', detectEventfunction, false);
//
