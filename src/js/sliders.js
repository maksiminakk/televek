$(window).on("load", function () {
    $('.intro-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
        slidesToShow: 1,
        dots: true,
        responsive: [{
                breakpoint: 492,
                settings: {
                    centerMode: true,
                    variableWidth: true,
                    arrows: false,
                }
            }
        ]
    });

    $('.product-card__images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.thumbs'
	});
	$('.thumbs').slick({
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 1,
		asNavFor: '.product-card__images',
		focusOnSelect: true
	});

    function resizeWindow() {
        if ($(window).width() < 492) {
            $('.certificates__content').slick({
                centerMode: true,
            });
            $('.terms__content').slick({
                centerMode: true,
            });
        } else {

        }
    }
    resizeWindow();

    $(window).resize(function () {
        resizeWindow();
    });

    // Mobile Menu
    $('.droplist > .menu-item-has-children').click(function(){
        $(this).toggleClass('opened').find('.sub-menu').stop().slideToggle(300);
    });

    $('.sub-menu .menu-item-has-children').click(function(e){
        e.stopPropagation();
        $(this).toggleClass('opened').find('.parent-sub-menu').stop().slideToggle(300);
    });

    $('.menu-item-has-children a').click(function(e){
        if( $(this).closest('.menu-item-has-children,.sub-menu .menu-item-has-children').hasClass('opened') ) {
            e.stopPropagation();
        } else {
            e.preventDefault();
        }
    })
    
    $('.sub-menu > .current-menu-item,.sub-menu > .current-menu-parent').each(function(){
        $(this).addClass('opened').find('.sub-menu').stop().slideToggle(300);
        $(this).addClass('opened').find('.parent-sub-menu').stop().slideToggle(300);
    });

        
    $('.nolink').click(function(e) {
        return false;
    });

});