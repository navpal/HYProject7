"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t) {
    "use strict";
    var s = function s(_s, o) {
        this.el = t(_s), this.options = t.extend({}, t.fn.typed.defaults, o), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.build();
    };s.prototype = { constructor: s, init: function init() {
            var t = this;t.timeout = setTimeout(function () {
                t.typewrite(t.strings[t.arrayPos], t.strPos);
            }, t.startDelay);
        }, build: function build() {
            this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.init();
        }, typewrite: function typewrite(t, s) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.typeSpeed,
                    e = this;e.timeout = setTimeout(function () {
                    var o = 0,
                        i = t.substr(s);if ("^" === i.charAt(0)) {
                        var r = 1;/^\^\d+/.test(i) && (i = /\d+/.exec(i)[0], r += i.length, o = parseInt(i)), t = t.substring(0, s) + t.substring(s + r);
                    }if ("html" === e.contentType) {
                        var n = t.substr(s).charAt(0);if ("<" === n || "&" === n) {
                            var a = "",
                                h = "";for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;) {
                                a += t.substr(s).charAt(0), s++;
                            }s++, a += h;
                        }
                    }e.timeout = setTimeout(function () {
                        if (s === t.length) {
                            if (e.options.onStringTyped(e.arrayPos), e.arrayPos === e.strings.length - 1 && (e.options.callback(), e.curLoop++, e.loop === !1 || e.curLoop === e.loopCount)) return;e.timeout = setTimeout(function () {
                                e.backspace(t, s);
                            }, e.backDelay);
                        } else {
                            0 === s && e.options.preStringTyped(e.arrayPos);var o = t.substr(0, s + 1);e.attr ? e.el.attr(e.attr, o) : e.isInput ? e.el.val(o) : "html" === e.contentType ? e.el.html(o) : e.el.text(o), s++, e.typewrite(t, s);
                        }
                    }, o);
                }, o);
            }
        }, backspace: function backspace(t, s) {
            if (this.stop !== !0) {
                var o = Math.round(70 * Math.random()) + this.backSpeed,
                    e = this;e.timeout = setTimeout(function () {
                    if ("html" === e.contentType && ">" === t.substr(s).charAt(0)) {
                        for (var o = ""; "<" !== t.substr(s).charAt(0);) {
                            o -= t.substr(s).charAt(0), s--;
                        }s--, o += "<";
                    }var i = t.substr(0, s);e.attr ? e.el.attr(e.attr, i) : e.isInput ? e.el.val(i) : "html" === e.contentType ? e.el.html(i) : e.el.text(i), s > e.stopNum ? (s--, e.backspace(t, s)) : s <= e.stopNum && (e.arrayPos++, e.arrayPos === e.strings.length ? (e.arrayPos = 0, e.init()) : e.typewrite(e.strings[e.arrayPos], s));
                }, o);
            }
        }, reset: function reset() {
            var t = this;clearInterval(t.timeout);var s = this.el.attr("id");this.el.after('<span id="' + s + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback();
        } }, t.fn.typed = function (o) {
        return this.each(function () {
            var e = t(this),
                i = e.data("typed"),
                r = "object" == (typeof o === "undefined" ? "undefined" : _typeof(o)) && o;i || e.data("typed", i = new s(this, r)), "string" == typeof o && i[o]();
        });
    }, t.fn.typed.defaults = { strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"], typeSpeed: 0, startDelay: 0, backSpeed: 0, backDelay: 500, loop: !1, loopCount: !1, showCursor: !0, cursorChar: "|", attr: null, contentType: "html", callback: function callback() {}, preStringTyped: function preStringTyped() {}, onStringTyped: function onStringTyped() {}, resetCallback: function resetCallback() {} };
}(window.jQuery);

var hamFunction = function hamFunction() {
    var nav = $('.hamNav');
    var hamburgerIcon = $('.toggle-nav');
    var navSelection = $('.hamNav li a');
    var navOpenorClose = false;

    function openNav() {
        nav.css("right", "0px");
        hamburgerIcon.css("color", "#fff");
        navOpenorClose = true;
    };

    function closeNav() {
        nav.css("right", "-150px");
        hamburgerIcon.css("color", "#fff");
        navOpenorClose = false;
    };

    function toggleNav() {
        if (navOpenorClose === true) {
            closeNav();
        } else {
            openNav();
        }
    };

    hamburgerIcon.on('click', function (e) {
        e.preventDefault();
        toggleNav();
    });

    navSelection.on('click', function (e) {
        e.preventDefault();
        toggleNav();
    });

    if (window.innerWidth > 620) {
        hamburgerIcon.on('mouseenter', function () {
            openNav();
        });
        nav.on('mouseleave', function () {
            closeNav();
        });
    }

    window.onscroll = function () {
        closeNav();
    };
};

var autoType = function autoType() {
    $(".typed").typed({
        strings: ["developer.", "semantic element.", "team player.", "tech lover.", "car enthusiast.", "music lover.", "problem solver.", "math lover."],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 40,
        // time before typing starts
        startDelay: 1000,
        // backspacing speed
        backSpeed: 20,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: false,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function callback() {},
        // starting callback function before each string
        preStringTyped: function preStringTyped() {},
        //callback for every typed string
        onStringTyped: function onStringTyped() {},
        // callback for reset
        resetCallback: function resetCallback() {}
    });
};

var scrollToTop = function scrollToTop() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
};

var smooth = function smooth() {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
};

$(function () {
    autoType();
    smooth();
    hamFunction();
    scrollToTop();
    AOS.init();
});