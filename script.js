
function increaseDecrease(ticket, isincrease){

    const input = document.getElementById(ticket +'-input');
    const count = parseInt(input.value);

    let newCount = 0;
    if( isincrease == true){
        newCount = count + 1;
    };
    if (isincrease == false && count > 0){
        newCount = count - 1;
    };
    input.value = newCount;
    ticketPrice();
};

function ticketPrice(){

    let subtotal = getInput('first') * 150 + getInput('eco') * 100;
    document.getElementById('subtotal').innerText = '$' + subtotal;

    let tax = subtotal * 0.1;
    document.getElementById('tax').innerText = '$' + tax;

    let total = subtotal + tax;
    document.getElementById('total').innerText = '$' + total;
    getInput();
};

function getInput(ticket){
    const Input = document.getElementById(ticket +'-input');
    const Count = parseInt(Input.value);
    return Count;
};


function bookingConfirmation(){
    document.getElementById('form').style.display = "none";
};

