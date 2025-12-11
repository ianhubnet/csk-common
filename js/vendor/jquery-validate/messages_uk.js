! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Будь ласка, вводьте лише літери, цифри та підкреслення.",
		digits: "Вводити потрібно лише цифри.",
		email: "Будь ласка, введіть коректну адресу електронної пошти.",
		equalTo: "Будь ласка, введіть таке ж значення ще раз.",
		exactlength: e.validator.format("Будь ласка, введіть рівно {0} символів."),
		integer: "Будь ласка, введіть додатне або від'ємне ціле число без десяткових знаків.",
		lettersonly: "Будь ласка, вводьте лише літери.",
		max: e.validator.format("Будь ласка, введіть число, менше або рівно {0}."),
		maxWords: e.validator.format("Будь ласка, введіть не більше {0} слів."),
		maxlength: e.validator.format("Будь ласка, введіть не більше {0} символів."),
		min: e.validator.format("Будь ласка, введіть число, більше або рівно {0}."),
		minWords: e.validator.format("Будь ласка, введіть не менше {0} слів."),
		minlength: e.validator.format("Будь ласка, введіть не менше {0} символів."),
		notEqualTo: "Будь ласка, введіть інше значення, значення не повинні бути однаковими.",
		nowhitespace: "Будь ласка, не вводьте пробіли.",
		required: "Це поле необхідно заповнити.",
		url: "Будь ласка, введіть коректний URL.",
	}), e
});