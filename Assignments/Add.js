document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    let aElement = document.querySelector("#a");
    a = aElement.value.trim();

    let bElement = document.querySelector("#b");
    b = bElement.value.trim();

    let numA = parseFloat(a) || 0;
    let numB = parseFloat(b) || 0;

    let c = numA + numB;
    alert(`The sum is: ${c}`);
});