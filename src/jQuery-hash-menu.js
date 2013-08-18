$(document).ready(function () {

    $("[data-page]").addClass("hide");
    showPage(location.hash);

    $(window).on('hashchange', function () {
        var newPage = location.hash;
        showPage(newPage);
    });
});

function showPage (hash) {

    if (!hash) {
        // TODO Default settings
        hash = "#home";
    }

    var $menuItem = $("[href='" + hash + "']");
    var page = hash.substring(1);

    var $nav = $(".nav");
    $nav.find("li").removeClass("active");
    $menuItem.parent().addClass("active");

    var $pages = $(".pages");

    var $newPage = $pages.find("[data-page='" + page + "']");
    var $activePage = $pages.find("[data-page].active");

    if (!$activePage.length) {
        $newPage.addClass("active").hide().fadeIn();
    }

    $activePage.fadeOut(function () {
        $activePage.removeClass("active");
        $newPage.addClass("active").hide().fadeIn();
    });
}
