var CONSTANTS = {
    defaultPage: "#home",
    classes: {
        active: "active"
    },
    pages: ".pages",
    menu: ".nav",
    menuItem: "li"
};

var DATA_PAGE = "data-page";

$(document).ready(function () {

    $("[" + DATA_PAGE + "]").show();
    showPage(location.hash);

    $(window).on("hashchange", function () {
        var newPage = location.hash;
        showPage(newPage);
    });
});

function showPage (hash) {

    if (!hash) {
        hash = CONSTANTS.defaultPage;
    }

    var $menuItem = $("[href='" + hash + "']");
    var page = hash.substring(1);

    var $nav = $(CONSTANTS.menu);
    $nav.find(CONSTANTS.menuItem).removeClass(CONSTANTS.classes.active);
    $menuItem.parent().addClass(CONSTANTS.classes.active);

    var $pages = $(CONSTANTS.pages);

    var $newPage = $pages.find("[" + DATA_PAGE + "='" + page + "']");
    var $activePage = $pages.find("[" + DATA_PAGE + "].active");

    if (!$activePage.length) {
        $newPage.addClass(CONSTANTS.classes.active).hide().fadeIn();
    }

    $activePage.fadeOut(function () {
        $activePage.removeClass(CONSTANTS.classes.active);
        $newPage.addClass(CONSTANTS.classes.active).hide().fadeIn();
    });
}
