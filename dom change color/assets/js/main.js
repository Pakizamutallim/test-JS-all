const text = document.getElementsByClassName("name"); 
const clr = document.getElementsByClassName("colorname"); 
const button = document.getElementById("btn"); 

// clr.addEventListener('change', function () {
//     text.value.style.color = this.value
// })










function change() {
    if (text.value.trim() != "") {
            students.push(text.value.trim().toLowerCase());
            console.log(text.value);
            text.value = "";
            fillList();
            
            // input1.value.style.color = input2.value
            // console.log(input1.value.style.color);
            // input2.value = "";
        }

    else {
        alert("enter name ")
    }
}

