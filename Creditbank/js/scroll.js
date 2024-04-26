$(function () {
    const wrapper = $('#wrapper')
    const contentRightInner = $('#contentRightInner').offset().top;
    const aside = 'aside-fixed-top'

    $(window).scroll(function() {
        const scrolled = $(this).scrollTop();

        if (scrolled > contentRightInner) {
            wrapper.addClass(aside)
        } else if (scrolled < contentRightInner) {
            wrapper.removeClass(aside)
        }
    });
});
