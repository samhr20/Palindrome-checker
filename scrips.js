const input = document.getElementById("input");
const btn = document.querySelector(".btn");

function check() { 
    const inputValue = input.value.trim().toLowerCase();
    const reversedValue = inputValue.split('').reverse().join('')

    if (inputValue === '') {
        alert("Enter a word");
        return;
    } else if (inputValue === reversedValue) {
        alert("Palindrome!");
    } else {
        alert("Not a Palindrome!");
    }
}

btn.addEventListener("click", check); 

input.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        check();
    }
});
