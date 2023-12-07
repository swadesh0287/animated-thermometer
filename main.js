{/* <span id="temp" class="fa"></span> */}

const textDiv = () => {
    let mainDiv = document.querySelector('.main-heading');

    // Check if the mainDiv is found
    if (!mainDiv) {
        console.error("Main heading element not found!");
        return;
    }

    console.log("Changing color to white");
    mainDiv.style.color = "white";

    setTimeout(() => {
        console.log("Changing color to yellow");
        mainDiv.style.color = "yellow";
    }, 1000);

    setTimeout(() => {
        console.log("Changing color to orange");
        mainDiv.style.color = "orange";
    }, 2000);

    setTimeout(() => {
        console.log("Changing color to red");
        mainDiv.style.color = "red";
    }, 3000);
}

const tempLoad = () =>{
    let temp = document.querySelector('#temp');
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "white";

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "yellow";
    },1000)

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "orange";
    },2000)

    setTimeout(()=>{
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red";
    },3000)
}
tempLoad()
setInterval(tempLoad,5000)

textDiv()
setInterval(textDiv,5000)


