let items = [
    { name: "Item 1", quantity: 5 },
    { name: "Item 2", quantity: 10 }
];

const itemForm = document.getElementById("itemForm");
const itemNameInput = document.getElementById("itemName");
const button = document.getElementById("button");
const itemQuantityInput = document.getElementById("itemQuantity");
const tableBody = document.getElementById("tableBody");
button.addEventListener("click", () => {
    axios.post("https://odd-pear-mite-hem.cyclic.app/product", {
        name: document.getElementById("itemName").value,
        price: document.getElementById("itemPrice").value,
        description: document.getElementById("itemdescription").value,
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
})

