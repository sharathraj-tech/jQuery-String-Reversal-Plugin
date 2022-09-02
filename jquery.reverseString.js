/*
Author: Sharath Raj
Use Case: Reverse a Given String
*/
(function ($) {
  $.fn.extend({
    reverseString: function (options) {
      var defaults = {
        backgroundColor: "",
        textColor: "",
        fontSize: "",
        bold: false,
      };

      options = $.extend(defaults, options);

      var $this = $(this);
      var value = $this.text();
      var splitString = "";
      var reverseString = "";
      var FinalString = "";
      if (value != "") {
        splitString = value.split("");
        reverseString = splitString.reverse();
        for (i = 0; i <= reverseString.length - 1; i++) {
          FinalString += reverseString[i];
        }
        //console.log(FinalString);
        if (options.backgroundColor != "") {
          $this.css("background-color", options.backgroundColor);
        }
        if (options.textColor != "") {
          $this.css("color", options.textColor);
        }
        if (options.fontSize != "") {
          $this.css("font-size", options.fontSize);
        }
        if (options.bold) {
          $this.css("font-weight", "bold");
        }
        $this.text(FinalString);
      } else {
        console.log("ReverseString: element Contains no string!");
      }
    },
  });
})(jQuery);
