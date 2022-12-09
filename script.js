

// document.getElementById("increase").addEventListener('click',function(){
//     ;
// });
// document.getElementById("decrease").addEventListener('click',function(){
//     increaseDecrease(false);
// });

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
    const input = document.getElementById('first-input');
    const count = parseInt(input.value);
    const input2 = document.getElementById('eco-input');
    const count2 = parseInt(input2.value); 

    let subtotal = (count * 150) + (count2 * 100);   
    document.getElementById('subtotal').innerText = '$' + subtotal;

    let tax = subtotal * 0.1;
    document.getElementById('tax').innerText = '$' + tax;

    let total = subtotal + tax;
    document.getElementById('total').innerText = '$' + total;
};

// function getInput (ticket){
//     const Input = document.getElementById(ticket +'-input');
//     const Count = parseInt(Input.value);
//     return Count;
// };


// function increaseDecrease2(isincrease){

//     const Input = document.getElementById("ecoInput");
//     const Count = parseInt(Input.value);
//     let NewCount = 0;
//     if( isincrease == true){
//         NewCount = Count + 1;
//     };
//     if (isincrease == false && Count > 0){
//         NewCount = Count - 1;
//     };
//     Input.value = NewCount;

// };



// function increaseItem(){
//     document.getElementById("increase").addEventListener('click',)

// };

// document.getElementById("firstClassIncrease").addEventListener('click',function(){

//     const firstClassInput = document.getElementById('firstClassInput');
//     const firstClassCount = parseInt(firstClassInput.value);
//     const firstClassNewCount = firstClassCount + 1;
//     firstClassInput.value = firstClassNewCount;

// });

// document.getElementById("firstClassDecrease").addEventListener('click',function(){

//     const firstClassInput = document.getElementById("firstClassInput");
//     const firstClassCount = parseInt(firstClassInput.value);
//     let firstClassNewCount = firstClassCount - 1;
//     firstClassInput.value = firstClassNewCount;

// });


// function decrease(){

//     const Input = document.getElementById("input");
//     const Count = parseInt(Input.value);
//     let NewCount = Count - 1;
//     Input.value = NewCount;
//     // const subtotal = increase() * 150 + decrease() * 100;
//     // document.getElementById('subtotal').innerText = subtotal;

//     // const tax = subtotal * 0.1;
//     // document.getElementById('tax').innerText = tax;

//     // const total = subtotal + tax;
//     // document.getElementById('total').innerText = total;

// };

// function Total(){
//     const subtotal = increase() * 150 + decrease() * 100;
//     document.getElementById('subtotal').innerText = subtotal;

//     const tax = subtotal * 0.1;
//     document.getElementById('tax').innerText = tax;

//     const total = subtotal + tax;
//     document.getElementById('total').innerText = total;

// };