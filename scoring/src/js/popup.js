function showPopup() {
    $('[data-popup]').click(function () {
        var popupId = $(this).attr('data-popup');
        $('#' + popupId).addClass('popup_show');
        $('html').addClass('lock');
        $('html').addClass('popup-show');
    });
}

$('.popup__close').click(function () {
    $(this).closest('.popup').removeClass('popup_show');
    $('html').removeClass('lock');
    $('html').removeClass('popup-show');
});