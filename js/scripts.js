(function(e, t, n, r) {
    e.fn.phizzForms = function(t) {
        var n = e.extend({backgroundColour: "#fff",formColour: "#edeff1",iconBackgroundColour: "#2ecc71",iconColour: "#fff",progressBar: true,progressBarColor: "#34495e",progressBarFontColor: "#fff",tooltipColor: "#34495e"}, t);
        var r = n.tileWidth;
        var i = n.backgroundColour;
        var s = n.formColour;
        var o = n.iconBackgroundColour;
        var u = n.iconColour;
        var a = n.progressBar;
        var f = n.progressBarColor;
        var l = n.progressBarFontColor;
        var c = n.tooltipColor;
        return this.each(function() {
            if (n.backgroundColour) {
                e("body").css("backgroundColor", i)
            }
            if (n.formColour) {
                e(".form").css("backgroundColor", s)
            }
            if (n.iconBackgroundColour) {
                e(".inputAddOn").css("backgroundColor", o)
            }
            if (n.iconColour) {
                e(".inputAddOn i").css("color", u)
            }
            if (n.progressBar) {
                e(".journeyProgress").css("display", "block")
            }
            if (n.progressBarColor) {
                e(".journeyProgress").css("backgroundColor", f)
            }
            if (n.progressBarFontColor) {
                e(".journeyProgress li").css("color", l)
            }
            if (n.tooltipColor) {
                e(".tooltip").css("backgroundColor", c);
                e(".tooltip i").css("color", c)
            }
            var t = e("#phizzForm form").outerHeight();
            e("#phizzForm").css("height", t + 31);
            e("#phizzForm form").css("height", t - 19);
            var r = e(".journeyProgress ul").find("li").outerWidth(true);
            var a = e(".journeyProgress ul").find("li").length;
            var h = a * 30;
            var p = r * a + h;
            e(".journeyProgress ul").css("width", p);
            var d = e(".formPanel").outerWidth(true);
            e("body").on("click", ".buttonNext", function(t) {
                e(".formPanel:visible").animate({left: "-=" + d}, 500);
                e(".journeyProgress").find(".currentStep").switchClass("currentStep", "", 500).next().switchClass("", "currentStep", 500);
                return false
            });
            e("body").on("click", ".buttonPrev", function(t) {
                e("form").animate({left: "+=" + d}, 500);
                e(".journeyProgress").find(".currentStep").switchClass("currentStep", "", 500).prev().switchClass("", "currentStep", 500);
                return false
            });
            e(".tooltip").each(function() {
                var t = e(this).height() + 27;
                e(this).css("top", -t)
            });
            e("#phizzForm input, #phizzForm textarea").focus(function() {
                e(this).parent().find(".tooltip").fadeIn(500)
            }).blur(function() {
                e(this).parent().find(".tooltip").fadeOut(500)
            });
            e(".tile .tileIcon").each(function() {
                var t = e(this).height() / 2;
                e(this).css("marginTop", -t)
            })
        })
    }
})(jQuery, window, document)
