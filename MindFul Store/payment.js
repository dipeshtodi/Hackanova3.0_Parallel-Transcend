function calculateTotal() {
   
    const urlParams = new URLSearchParams(window.location.search);
    const productName = urlParams.get('product');
    const productAmount = parseFloat(urlParams.get('amount')) || 0;

    
    document.getElementById("tax-1").value = productAmount;

    document.getElementById("total-amount").textContent = `INR ${productAmount.toFixed(2)}`;
}
function paymentProcess() {
    
    var totalAmount = document.getElementById("total-amount").textContent;

    var options = {
        "key": "rzp_test_RkrD1X74NWT4U5",
        "amount": parseFloat(totalAmount.replace("INR ", "")) * 100,
        "currency": "INR",
        "name": "Mindful Me",
        "description": "Product Amount",
        "image": "logo.png",
        "handler": function (response) {
            savetoDB(response);
            $('#myModal').modal();
        },
        "prefill": {
            "name": "Mitesh Singh",
            "email": "miteshsingh957@gmail.com",
            "contact": "7420027576"
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#9932CC"
        }
    };

    var propay = new Razorpay(options);
    propay.open();
}
