

(function () {
    // DOM Elements
    const customerImg = document.querySelector('.img-card');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('.customer-teweet');
    const buttons = document.querySelectorAll('.btn');

    // Customer Data
    const customers = [
        { img: "https://tse4.mm.bing.net/th?id=OIP.AYXrYCrUU_WyYcceR0r8SQHaHa&pid=Api&P=0&h=180", name: "Jhon", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: "https://i.pinimg.com/736x/26/8e/76/268e76ab1ba7b628c4aeb561b05d04e8.jpg", name: "Rocky", text: "Vivamus lacinia odio vitae vestibulum vestibulum." },
        { img: "https://tse3.mm.bing.net/th?id=OIP.KdBSw8TPL34eU6T7bjhpAAHaLH&pid=Api&P=0&h=180", name: "Lov", text: "Cras placerat ac magna ut auctor. Curabitur vel risus." },
        { img: "https://english.cdn.zeenews.com/sites/default/files/2017/11/17/639329-indian-men.jpg", name: "Diki", text: "Etiam vehicula nisi eget nisi eleifend, ut efficitur orci." }
    ];

    // Current Customer Index
    let index = 0;

    // Function to Update Customer Display
    function updateCustomerDisplay() {
        customerImg.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
    }

    // Event Listener for Buttons
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            if (e.target.parentElement.classList.contains("prevBtn")) {
                index = (index === 0) ? customers.length - 1 : index - 1;
            } else if (e.target.parentElement.classList.contains("nextBtn")) {
                index = (index === customers.length - 1) ? 0 : index + 1;
            }
            updateCustomerDisplay();
        });
    });

    // Initialize Display with First Customer
    updateCustomerDisplay();
})();

