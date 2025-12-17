! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Molimo unesite samo reči, brojeve i donje crte.",
		date: "Molimo unesite važeći datum.",
		digits: "Unesite samo cifre.",
		domain: "Molimo unesite važeće ime domena.",
		email: "Unesite ispravnu e-mejl adresu.",
		equalTo: "Unesite istu vrednost ponovo.",
		exactlength: e.validator.format("Molimo unesite tačno {0} karaktera."),
		integer: "Molimo unesite pozitivan ili negativan ceo broj bez decimala.",
		lettersonly: "Molimo unesite samo reči.",
		max: e.validator.format("Unesite vrednost manju ili jednaku {0}."),
		maxWords: e.validator.format("Molimo unesite najviše {0} reči."),
		maxlength: e.validator.format("Unesite manje od {0} karaktera."),
		min: e.validator.format("Unesite vrednost veću ili jednaku {0}."),
		minWords: e.validator.format("Molimo unesite najmanje {0} reči."),
		minlength: e.validator.format("Unesite barem {0} karaktera."),
		notEqualTo: "Molimo unesite drugačiju vrednost, vrednosti ne smeju biti iste.",
		nowhitespace: "Molimo ne unosite razmake.",
		required: "Polje je obavezno.",
		url: "Unesite ispravan URL.",
	}), e
});
