const selectedSeatEl = document.getElementById('selected-seat');
const totalBooked = document.getElementById('total-booked');
const availableSeatEl = document.getElementById('available-seat');
const totalPriceEl = document.getElementById('total-price');
const inputCouponEl = document.getElementById('input-coupon-field');
const couponBtn = document.getElementById('coupon-btn');
const defaultNoSeatTextEl = document.getElementById('default-no-seat-text');
const grandTotalEl = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');

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

        // remove No Seat Booked Text
        defaultNoSeatTextEl.classList.add('hidden');


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
        return alert('Maximum seat booked');
    }

}

// coupon button function
document.getElementById('coupon-btn').addEventListener('click',function(){
    const couponInputValue = inputCouponEl.value;
    let couponSave = 0;

    if (couponInputValue !== 'NEW50' && couponInputValue !== 'Coupon 20'){
        return alert('Your provided coupon is invalid');
    }

    if (couponInputValue === 'NEW50'){
        couponSave = totalPrice * 0.15;
    }
    else if(couponInputValue === 'Coupon 20'){
        couponSave = totalPrice * 0.20;
    }

    const showCouponPriceEl = document.getElementById('show-coupon-price');
    showCouponPriceEl.innerHTML = `
            <p>Discount</p>
            <p>
                <span>-BDT:</span>
                <span>${couponSave.toFixed(2)}</span>
            </p>`

    
    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);
    
})


phoneNumberEl.addEventListener('input',function(e){
        const inputValue = e.target.value;
        if (inputValue.length >= 11){
            nextBtnEl.removeAttribute('disabled');
        }
})

document.getElementById('continue-btn').addEventListener('click', function(){
    window.location.reload();
})
