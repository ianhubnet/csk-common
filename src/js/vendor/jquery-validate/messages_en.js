! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Letters, numbers, and underscores only please.",
		date: "Please enter a valid date.",
		digits: "Please enter only digits.",
		domain: "Please enter a valid domain name.",
		email: "Please enter a valid email address.",
		equalTo: "Please enter the same value again.",
		exactlength: e.validator.format("Please enter exactly {0} characters."),
		integer: "A positive or negative non-decimal number please.",
		ipv4: "Please enter a valid IP v4 address.",
		ipv6: "Please enter a valid IP v6 address.",
		lettersonly: "Letters only please.",
		max: e.validator.format("Please enter a value less than or equal to {0}."),
		maxWords: e.validator.format("Please enter {0} words or less."),
		maxlength: e.validator.format("Please enter no more than {0} characters."),
		min: e.validator.format("Please enter a value greater than or equal to {0}."),
		minWords: e.validator.format("Please enter at least {0} words."),
		minlength: e.validator.format("Please enter at least {0} characters."),
		notEqualTo: "Please enter a different value, values must not be the same.",
		nowhitespace: "No white space please",
		required: "This field is required.",
		url: "Please enter a valid URL.",
	}), e
});
