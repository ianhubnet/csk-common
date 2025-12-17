! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Vänligen ange endast bokstäver, siffror och understreck.",
		date: "Ange ett giltigt datum.",
		digits: "Ange endast siffror.",
		domain: "Ange ett giltigt domännamn.",
		email: "Ange en korrekt e-postadress.",
		equalTo: "Ange samma värde igen.",
		exactlength: e.validator.format("Ange exakt {0} tecken."),
		integer: "Vänligen ange ett positivt eller negativt heltal utan decimaler.",
		lettersonly: "Vänligen ange endast bokstäver.",
		max: e.validator.format("Ange ett värde som är mindre eller lika med {0}."),
		maxWords: e.validator.format("Ange högst {0} ord."),
		maxlength: e.validator.format("Du får ange högst {0} tecken."),
		min: e.validator.format("Ange ett värde som är större eller lika med {0}."),
		minWords: e.validator.format("Ange minst {0} ord."),
		minlength: e.validator.format("Du måste ange minst {0} tecken."),
		notEqualTo: "Vänligen ange ett annat värde, värdena får inte vara lika.",
		nowhitespace: "Vänligen ange inga mellanslag.",
		required: "Detta fält är obligatoriskt.",
		url: "Ange en korrekt URL.",
	}), e
});
