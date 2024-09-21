const selectedSeatEl = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');

let selectedSeat = [];

function handleSeatElement (event){
    // console.log(event.innerText);
    // console.log(event);
    event.classList.add('bg-primary');
    event.classList.add('text-white');
    selectedSeat.push(event.innerText);
    totalBooked.innerText = selectedSeat.length;
    //decrease available seat
    const availableSeatValue = parseInt(availableSeatEl.innerText) ;
    const newAvailableSeatValue = availableSeatValue -1;
    availableSeatEl.innerText = newAvailableSeatValue;
    

    // selectedSeatEl.innerHTML = `<li class="text-base font-normal flex justify-between">
    // <span>${event.innerText}</span>
    // <span>Economy</span>
    // <span>550</span>
    // </li>`
}