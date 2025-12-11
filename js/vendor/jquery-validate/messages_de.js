! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Bitte geben Sie nur Buchstaben, Zahlen und Unterstriche ein.",
		digits: "Geben Sie bitte nur Ziffern ein.",
		email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
		equalTo: "Bitte denselben Wert wiederholen.",
		exactlength: e.validator.format("Bitte geben Sie genau {0} Zeichen ein."),
		integer: "Bitte geben Sie eine positive oder negative ganze Zahl ohne Dezimalstellen ein.",
		lettersonly: "Bitte geben Sie nur Buchstaben ein.",
		max: e.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."),
		maxWords: e.validator.format("Bitte geben Sie höchstens {0} Wörter ein."),
		maxlength: e.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
		min: e.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."),
		minWords: e.validator.format("Bitte geben Sie mindestens {0} Wörter ein."),
		minlength: e.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),
		notEqualTo: "Bitte geben Sie einen anderen Wert ein, Werte dürfen nicht gleich sein.",
		nowhitespace: "Bitte verwenden Sie keine Leerzeichen.",
		required: "Dieses Feld ist ein Pflichtfeld.",
		url: "Geben Sie bitte eine gültige URL ein.",
	}), e
});