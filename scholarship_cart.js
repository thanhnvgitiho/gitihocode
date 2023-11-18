document.write('<style>html{scroll-behavior: smooth;}.add-to-cart{cursor: pointer;}#sticked_cart{z-index: 999999; background: white; width: 167px; position: fixed; right: 20px; bottom: 45%; box-shadow: 1px 2px 8px rgba(89, 67, 67, 0.64); border-radius: 5px;}#sticked_cart .cart-header{display: flex; padding: 3px 10px; border-bottom: solid thin #C83B4C;}#sticked_cart .cart-title{display: block; line-height: 19px; margin-left: 10px; color: #C83B4C; font-size: 14px; font-weight: bold;}#sticked_cart .cart-body{padding: 10px; font-size: 14px;}#scrollToSubmit{background: #C83B4C; color: white; font-weight: bold; text-align: center; text-transform: uppercase; padding: 6px; border-radius: 6px; margin-top: 10px; cursor: pointer; transition: .3s;}#scrollToSubmit:hover{background: #bb2335}.my-button.selected{background: #8BC34A!important;}@media(max-width: 768px){#sticked_cart{bottom: 3%!important;}}</style><div id="sticked_cart"> <div class="cart-header"> <img src="https://i.imgur.com/HEouTLh.png" style="width: 19px"> <span class="cart-title">Giỏ học bổng</span> </div><div class="cart-body"> <p style="margin-bottom: 10px">Đã chọn: <strong id="numOfCart" style="color: #C83B4C">0</strong></p><p>Tá»•ng: <strong id="sumCartPrice" style="color: #C83B4C">0</strong></p><div id="scrollToSubmit" >Gửi thông tin học bổng</div></div></div>');
var course = JSON.parse(courseJson);

var combo = 0;
var default_course_ids = $('input[name="combo_course_ids"]').val();
var default_origin_price = $('input[name="origin_price"]').val();
var default_price = $('input[name="price"]').val();
$(function() {
    clearCart();
    updateCartHtmlView();
});

function clickToCart(course_id, el) {

    let sender = $(el);

    var cart_items = getCart();

    if(typeof course_id == 'number'){
        if (course.hasOwnProperty(course_id)) {
            addToCart(course[course_id], sender);
        } else {
            console.log('course not exited');
        }
    }else{
        ids = course_id.split(',');

        let check = [];
        $.each(ids,(k,id)=>{
            if (!jQuery.isEmptyObject(cart_items)) {
                if($.inArray(id,Object.keys(cart_items)) >= 0){
                    check.push(id);
                }
                else{
                    addToCart2(course[id], cart_items);
                }
            }
            else{
                addToCart2(course[id], cart_items);
            }
        })

        if(check.length >=2){
            for (let k in cart_items) {
                if (cart_items.hasOwnProperty(k) && $.inArray(k,check) >= 0) {
                    delete cart_items[k];
                    for (let h in cart_items) {
                        if($('.cart_'+h+'_'+k).length > 0){
                            $('.cart_'+h+'_'+k).removeClass('selected');
                            $('.cart_'+h+'_'+k).html('Thêm vào giỏ hàng');
                        }

                        if($('.cart_'+k+'_'+h).length > 0){
                            $('.cart_'+k+'_'+h).removeClass('selected');
                            $('.cart_'+k+'_'+h).html('Thêm vào giỏ hàng');
                        }
                    }

                    $('.cart_'+k).removeClass('selected');
                    $('.cart_'+k).html('Thêm vào giỏ hàng');
                }
            }
        }
        updateCart(cart_items);
    };

    for (let k in getCart()) {
        for (let h in getCart()) {
            if($('.cart_'+h+'_'+k).length > 0){
                $('.cart_'+h+'_'+k).addClass('selected');
                $('.cart_'+h+'_'+k).html('Đã chọn');
            }

            if($('.cart_'+k+'_'+h).length > 0){
                $('.cart_'+k+'_'+h).addClass('selected');
                $('.cart_'+k+'_'+h).html('Đã chọn');
            }
        }
    }

}

function addToCart2(course_item,cart_items){
    if (typeof(Storage) !== "undefined") {
        cart_items[course_item.id] = {
            id: course_item.id,
            first: false,
            sale_price: course_item.campaign_price,
            origin_price: course_item.origin_price
        };

        $('.cart_'+course_item.id).addClass('selected');
        $('.cart_'+course_item.id).html('Đã chọn');
    } else {
        console.log(sessionStorage.getItem("Sorry, your browser does not support Web Storage..."));
    }
}

function addToCart(course_item, sender) {
    console.log('addToCart');
    if (typeof(Storage) !== "undefined") {
        var cart_items = getCart();
        if (jQuery.isEmptyObject(cart_items)) {
            cart_items[course_item.id] = {
                id: course_item.id,
                first: true,
                sale_price: course_item.sale_price,
                origin_price: course_item.origin_price
            };
            sender.addClass('selected');
            sender.html('Đã chọn');

            $('.cart_'+course_item.id).addClass('selected');
            $('.cart_'+course_item.id).html('Đã chọn');
        } else {
            if (!cart_items.hasOwnProperty(course_item.id)) {
                cart_items[course_item.id] = {
                    id: course_item.id,
                    first: false,
                    sale_price: course_item.campaign_price,
                    origin_price: course_item.origin_price
                };
                sender.addClass('selected');
                sender.html('Đã chọn');
                $('.cart_'+course_item.id).addClass('selected');
                $('.cart_'+course_item.id).html('Đã chọn');
            } else {
                console.log(course_item);
                for (let k in cart_items) {
                    if (cart_items.hasOwnProperty(k) && k == course_item.id) {
                        delete cart_items[k];
                    }
                }
                updateCart(cart_items);
                sender.removeClass('selected');
                sender.html('Thêm vào giỏ hàng');

                $('.cart_'+course_item.id).removeClass('selected');
                $('.cart_'+course_item.id).html('Thêm vào giỏ hàng');
                console.log('course exited on cart');
            }
        }
        updateCart(cart_items);
    } else {
        console.log(sessionStorage.getItem("Sorry, your browser does not support Web Storage..."));
    }
}

function getCart() {
    var cartJson = sessionStorage.getItem("cart");
    if (cartJson != null) {
        return JSON.parse(cartJson)
    }
    return {};
}

function updateCart(newCartItem) {
    sessionStorage.setItem("cart", JSON.stringify(newCartItem));
    updateCartHtmlView();
}

function clearCart() {
    sessionStorage.removeItem("cart");
}

function updateCartHtmlView() {
    let cart_items = getCart();
    var num_of_count = getCartCount(cart_items);
    document.getElementById('numOfCart').innerHTML = num_of_count;
    var amount = getCartAmount(cart_items);
    document.getElementById('sumCartPrice').innerHTML = formatCurrencyNumber(amount) + ' VND';
    console.log('num_of_count', num_of_count);
    if (num_of_count > 0) {
        let combo_course_ids = getCourseIdsFromCart(cart_items);
        $('input[name="combo_course_ids"]').val(combo_course_ids);
        let sum_origin_price = getOriginPrice(cart_items);
        $('input[name="origin_price"]').val(sum_origin_price);
        $('input[name="price"]').val(amount);
    } else {
        $('input[name="combo_course_ids"]').val(default_course_ids);
        $('input[name="origin_price"]').val(default_origin_price);
        $('input[name="price"]').val(default_price);
    }
}

function getCourseIdsFromCart(cart_items) {
    let combo_course_ids = [];
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            combo_course_ids.push(k);
        }
    }
    return combo_course_ids.toString();
}

function getCartCount(cart_items) {
    return Object.keys(cart_items).length
}

function getCartAmount(cart_items) {
    var sum_amount = 0;

    let count = Object.keys(cart_items).length;
    // if(count == 1){
    //     sum_amount += Object.values(cart_items)[0].sale_price;
    // }
    // if(count >= 2){
    //     sum_amount = 499000 + 300000*(count - 2);
    // }
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            sum_amount += cart_items[k].sale_price
        }
    }
    return sum_amount;
}

function getOriginPrice(cart_items) {
    let sum_origin_price = 0;
    for (let k in cart_items) {
        if (cart_items.hasOwnProperty(k)) {
            sum_origin_price += cart_items[k].origin_price
        }
    }
    return sum_origin_price;
}

function formatCurrencyNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function scrollToElement(element, parent) {
    $(parent)[0].scrollIntoView(true);
    $(parent).animate({
        scrollTop: $(parent).scrollTop() + $(element).offset().top - $(parent).offset().top
    });
}
$('#scrollToSubmit').on('click', function() {
    var paretq = $('body');
    var elemq = $('#HTML_CODE1098');
    console.log('scroll to submit');
    scrollToElement(paretq, elemq);
});

$('#webform').submit((e) => {

    let str = $('input[name="combo_course_ids"]').val()
    // if(str.indexOf('99,123') < 0){
    //     $('input[name="combo_course_ids"]').val(str+',99,123');
    // }

    return true;
})
