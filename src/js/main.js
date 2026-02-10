/*!
 * Skeleton Front-End - Main JS (https://www.ianhub.net/)
 * Copyright 2025 Kader Bouyakoub (https://github.com/bkader)
 */
(function($, window, document, undefined) {
	"use strict";

	document.addEventListener("mousedown", function (e) {
		const el = e.target.closest(".no-select-on-click");
		if (el) {
			document.body.style.userSelect = "none";
		}
	});

	document.addEventListener("mouseup", function () {
		document.body.style.userSelect = "";
	});

	$(document).ready(function() {
		// See if forms have confirmation messages.
		$("form").each(function() {
			var $form = $(this),
				btn = $form.find(":submit"),
				msg = $form.data("confirm");

			$form.submit(function() {
				if (typeof btn === "object") {
					$(btn).prop("disabled", true).addClass("disabled");
				}
				if (typeof msg === "string") {
					if (confirm(msg)) {
						return true;
					} else if (typeof btn === "object") {
						$(btn).prop("disabled", false).removeClass("disabled");
					}
					return false;
				}
				setTimeout(function() {
					$(btn).prop("disabled", false).removeClass("disabled");
				}, 3000);
				return true;
			})
		});

		// select2
		if (typeof $.fn.select2 !== "undefined") {
			$("select.select2").each(function() {
				var $that = $(this),
					config = {
						width: "100%"
					};
				if ($that.hasClass("select2-modal")) {
					config.dropdownParent = $(".modal");
				}
				$that.select2(config);
			});
		}
	});
})(window.jQuery || window.Zepto, window, document);
