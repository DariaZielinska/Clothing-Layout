$(function() {

    $(".hamburger-menu").click(function(){
        $(".header_menu").slideToggle("slow");
    });

    function generateProducts() {
        let $product = $('<div class="page_product col-sm-12 col-md-6 col-lg-3">' +
            '<span><i class="fas fa-shopping-basket"></i></span>' +
            '<span><i class="far fa-heart"></i></span>' +
            '</div>');
        $('.products_container').append($product);
    }

    for (let i=1; i< 9; i++){
        generateProducts();
    }

});