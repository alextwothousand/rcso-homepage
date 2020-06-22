if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $("#ref1").attr("data-aos", "fade-right");
    $("#ref2").attr("data-aos", "fade-left");
    $("#ref3").attr("data-aos", "fade-right");
    $("#ref4").attr("data-aos", "fade-left");
}

let cookie = Cookies.get("dark");

if (cookie === undefined) {
    Cookies.set("dark", "no", { "expires": 28 });
    cookie = Cookies.get("dark");
} else if (cookie === "yes") {
    if (!$("#heroL1").hasClass("is-dark")) {
        $("#heroL1").addClass("is-dark");
    }
        
    if (!$("#heroL2").hasClass("is-dark")) {
        $("#heroL2").addClass("is-dark");
    }

    $("#dark #text").text("Light");
    
    if ($("#dark").hasClass("is-light")) {
        $("#dark").removeClass("is-light");
    }

    if (!$("#twitter").hasClass("is-dark")) {
        $("#twitter").addClass("is-dark");
    }
    
    $("#dark").addClass("is-dark");
}

$("#dark").on("click", function () {
    if (cookie === undefined || cookie === "no") {
        console.log("dark mode on");
        if (!$("#heroL1").hasClass("is-dark")) {
            $("#heroL1").addClass("is-dark");
        }

        if (!$("#heroL2").hasClass("is-dark")) {
            $("#heroL2").addClass("is-dark");
        }

        $("#dark #text").text("Light");

        if ($("#dark").hasClass("is-light")) {
            $("#dark").removeClass("is-light");
        }
        
        $("#dark").addClass("is-dark");

        if (!$("#twitter").hasClass("is-dark")) {
            $("#twitter").addClass("is-dark");
        }

        Cookies.set("dark", "yes", { "expires": 28 });
        cookie = Cookies.get("dark");
    } else {
        console.log("dark mode off");

        if ($("#heroL1").hasClass("is-dark")) {
            $("#heroL1").removeClass("is-dark");
        }
            
        if ($("#heroL2").hasClass("is-dark")) {
            $("#heroL2").removeClass("is-dark");
        }

        $("#dark #text").text("Dark");

        if ($("#dark").hasClass("is-dark")) {
            $("#dark").removeClass("is-dark");
        }

        if ($("#twitter").hasClass("is-dark")) {
            $("#twitter").removeClass("is-dark");
        }
            
        $("#dark").addClass("is-light");

        Cookies.set("dark", "no", { "expires": 28 });
        cookie = Cookies.get("dark");
    }
});

$("#cookie").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    $(".modal").addClass("is-active");
    $("html").addClass("is-clipped");
});

$(".modal-close").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    $(".modal").removeClass("is-active");
    $("html").removeClass("is-clipped");
});