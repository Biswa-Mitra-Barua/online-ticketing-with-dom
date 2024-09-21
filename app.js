const selectedSeatEl = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const inputCouponEl = document.getElementById('input-coupon-field');
const couponBtn = document.getElementById('coupon-btn');

let selectedSeat = [];
let totalPrice = 0;

function handleSeatElement(event) {
    // checking that one seat only selected once
    const value = event.innerText;
    if (selectedSeat.includes(value)) {
        return alert('Seat already added')
    }else if(selectedSeat.length < 4){
        event.classList.add('bg-primary');
        event.classList.add('text-white');
        selectedSeat.push(event.innerText);
        totalBooked.innerText = selectedSeat.length;

        //decrease available seat
        const availableSeatValue = parseInt(availableSeatEl.innerText);
        const newAvailableSeatValue = availableSeatValue - 1;
        availableSeatEl.innerText = newAvailableSeatValue;


        selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`

        // update total price
        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        // activating coupon button
        if (selectedSeat.length > 3) {
            inputCouponEl.removeAttribute('disabled');
            couponBtn.removeAttribute('disabled');
        }
    }else{
        return alert('Maximum seat booked')
    }

}