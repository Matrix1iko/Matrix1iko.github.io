$(document).ready(function(){
    $('.slick_courusel').slick({
        speed: 500,
        //adaptiveHeight: true,
        prevArrow: ' <button type="button" class="slick-prev"><img src="../icon/corusel/left_button.svg"></button>',
        nextArrow: ' <button type="button" class="slick-next"><img src="../icon/corusel/right_button.svg"></button>',
        
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: false,
            }
        }]
    });
    $('ul.catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
        $(this)
        .addClass('catalog_tab_active').siblings().removeClass('catalog_tab_active')
        .closest('div.container').find('div.catalog_content').removeClass('catalog_content_active').eq($(this).index()).addClass('catalog_content_active');
    });
    $('.catalog_item_link').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active');
            $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active'); 
        })
    });

    $('.catalog_item_back').each(function(i){
        $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog_item_list').eq(i).toggleClass('catalog_item_list_active');
            $('.catalog_item_content').eq(i).toggleClass('catalog_item_content_active'); 
        })
    })
});
