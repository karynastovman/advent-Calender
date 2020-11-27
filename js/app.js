const  calendarButton = document.querySelector(".btn-start");
const calendarContainer = document.querySelector(".container");
const calendarDays = 24;

calendarButton.addEventListener("click", (event)=>{
for(let i = 0; i < calendarDays; i++){
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");
    calendarDoor.classList.add("image");
    calendarDoorText.classList.add("text");
    calendarDoor.style.gridArea = "Day" + (i+1);
    calendarDoorText.innerHTML = i + 1;

    calendarDoor.appendChild(calendarDoorText);
    calendarContainer.appendChild(calendarDoor);

    let picNumber = i+1;
    let picPath = `./img/pic${picNumber}.jpg`;
    console.log(picPath);

    calendarDoorText.addEventListener("click", (event)=>{
        console.log("test");
        event.target.parentNode.style.backgroundImage = `url("${picPath}")`;
        event.target.style.opacity = 0;
        event.target.style.backgroundColor = "#333";
        event.preventDefault();
    });
}



    event.preventDefault();
});
