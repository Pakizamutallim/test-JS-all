


const input1 = document.querySelector("input"); 

// const input1 = document.getElementsByClassName("box-name")
const input2 = document.getElementsByClassName("box-color")
const ls = document.getElementById("list");


input2.addEventListener('change', function () {
    input1.value.style.color = this.value
})























// ---------------------------------------------------------------------
// const input2 = document.getElementsByClassName("box-color")
// const bt = document.getElementsByClassName("btn");


// document.querySelector("input1").style.color = 'input2' 

// bt.addEventListener('mouseover', function handlemouseover() {
//     bt.style.color = 'yellow'
// })
// -------------------------------------------------------------------------



let students = [];
function change() {
    if (input1.value.trim() != "") {
            students.push(input1.value.trim().toLowerCase());
            console.log(input1.value);
            input1.value = "";
            fillList();
            
            // input1.value.style.color = input2.value
            // console.log(input1.value.style.color);
            // input2.value = "";
        }

    else {
        alert("enter name ")
    }
}
function fillList() {
    
    let res1 = students.reduce(

        (result, val) => result += `<li>${val}</li>`, ''
    );


    ls.innerHTML = res1; 
}

