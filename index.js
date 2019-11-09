const SSLCommerz = require('sslcommerz-nodejs');
 
// embeded js code for running the ssl page to our site
(function (window, document) {
    var loader = function () {
        var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
        script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
        tag.parentNode.insertBefore(script, tag);
    };
    window.addEventListener ? window.addEventListener("load", loader, false) : window.attachEvent("onload", loader);
})(window, document);



let settings = {
    isSandboxMode: true, //false if live version
    store_id: "edute5dc3bb6eb7e6e",
    store_passwd: "edute5dc3bb6eb7e6e@ssl"
}



let sslcommerz = new SSLCommerz(settings);
let post_body = {};
post_body['total_amount'] = 100.26;
post_body['currency'] = "BDT";
post_body['tran_id'] = "12345";
post_body['success_url'] = "your success url";
post_body['fail_url'] = "your fail url";
post_body['cancel_url'] = "your cancel url";
post_body['emi_option'] = 0;
post_body['cus_name'] = "test";
post_body['cus_email'] = "test@test.com";
post_body['cus_phone'] = "01700000000";
post_body['cus_add1'] = "customer address";
post_body['cus_city'] = "Dhaka";
post_body['cus_country'] = "Bangladesh";
post_body['shipping_method'] = "NO";
post_body['multi_card_name'] = ""
post_body['num_of_item'] = 1;
post_body['product_name'] = "Test";
post_body['product_category'] = "Test Category";
post_body['product_profile'] = "general";

sslcommerz.init_transaction(post_body).then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});







$('.sslDiv').css('background', 'lightsteelblue');
// $('.sslDiv').click(function () {
//     $('.sslDiv').css('background', 'red');

// });