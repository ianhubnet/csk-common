! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Prosím zadejte pouze písmena, číslice a podtržítka.",
		digits: "Prosím, zadávejte pouze číslice.",
		email: "Prosím, zadejte platný e-mail.",
		equalTo: "Prosím, zadejte znovu stejnou hodnotu.",
		exactlength: e.validator.format("Prosím zadejte přesně {0} znaků."),
		integer: "Prosím zadejte kladné nebo záporné celé číslo bez desetinných míst.",
		lettersonly: "Prosím zadejte pouze písmena.",
		max: e.validator.format("Prosím, zadejte hodnotu menší nebo rovnu {0}."),
		maxWords: e.validator.format("Prosím zadejte nejvíce {0} slov."),
		maxlength: e.validator.format("Prosím, zadejte nejvíce {0} znaků."),
		min: e.validator.format("Prosím, zadejte hodnotu větší nebo rovnu {0}."),
		minWords: e.validator.format("Prosím zadejte nejméně {0} slov."),
		minlength: e.validator.format("Prosím, zadejte nejméně {0} znaků."),
		notEqualTo: "Prosím zadejte jinou hodnotu, hodnoty nesmí být stejné.",
		nowhitespace: "Prosím nevkládejte mezery.",
		required: "Tento údaj je povinný.",
		url: "Prosím, zadejte platné URL.",
	}), e
});