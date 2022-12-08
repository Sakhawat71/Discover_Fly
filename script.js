

document.getElementById("increase").addEventListener('click',function(){
    increaseDecrease(true);
});
document.getElementById("decrease").addEventListener('click',function(){
    increaseDecrease(false);
});
document.getElementById("ecoIncrease").addEventListener('click',function(){
    increaseDecrease2(true);
});
document.getElementById("ecoDecrease").addEventListener('click',function(){
    increaseDecrease2(false);
});

function increaseDecrease(isincrease){

    const Input = document.getElementById("input");
    const Count = parseInt(Input.value);
    let NewCount = 0;
    if( isincrease == true){
        NewCount = Count + 1;
    };
    if (isincrease == false && Count > 0){
        NewCount = Count - 1;
    };
    Input.value = NewCount;

};
function increaseDecrease2(isincrease){

    const Input = document.getElementById("ecoInput");
    const Count = parseInt(Input.value);
    let NewCount = 0;
    if( isincrease == true){
        NewCount = Count + 1;
    };
    if (isincrease == false && Count > 0){
        NewCount = Count - 1;
    };
    Input.value = NewCount;

};



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