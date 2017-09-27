var switchMainPain = function (/* string */ id) {
    $.each($(".mainPane"), function (index, item) {
        var display;
        if (item.id == id) display = "block";
        else display = "none";

        item.style.display = display;
    });

    console.log("Switched main pane to " + id);
};
