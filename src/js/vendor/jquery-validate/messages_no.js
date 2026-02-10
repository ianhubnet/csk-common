! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Vennligst skriv kun bokstaver, tall og understreker.",
		date: "Vennligst oppgi en gyldig dato.",
		digits: "Skriv kun tall.",
		domain: "Vennligst oppgi et gyldig domenenavn.",
		email: "Angi en gyldig epostadresse.",
		equalTo: "Skriv samme verdi igjen.",
		exactlength: e.validator.format("Vennligst skriv nøyaktig {0} tegn."),
		integer: "Vennligst skriv et positivt eller negativt heltall uten desimaler.",
		lettersonly: "Vennligst skriv kun bokstaver.",
		max: e.validator.format("Angi en verdi som er mindre eller lik {0}."),
		maxWords: e.validator.format("Vennligst skriv maksimalt {0} ord."),
		maxlength: e.validator.format("Maksimalt {0} tegn."),
		min: e.validator.format("Angi en verdi som er større eller lik {0}."),
		minWords: e.validator.format("Vennligst skriv minst {0} ord."),
		minlength: e.validator.format("Minimum {0} tegn."),
		notEqualTo: "Vennligst skriv en annen verdi, verdiene kan ikke være like.",
		nowhitespace: "Vennligst ikke bruk mellomrom.",
		required: "Angi en verdi.",
		url: "Angi en gyldig URL.",
	}), e
});
