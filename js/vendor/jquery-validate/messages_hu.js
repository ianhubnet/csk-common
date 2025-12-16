! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Kérjük, csak betűket, számokat és aláhúzást adjon meg.",
		date: "Kérjük, adjon meg egy érvényes dátumot.",
		digits: "Csak számjegyek lehetnek.",
		email: "Érvényes e-mail címnek kell lennie.",
		equalTo: "Meg kell egyeznie a két értéknek.",
		exactlength: e.validator.format("Kérjük, pontosan {0} karaktert adjon meg."),
		integer: "Kérjük, adjon meg egy pozitív vagy negatív egész számot tizedesjegyek nélkül.",
		lettersonly: "Kérjük, csak betűket adjon meg.",
		max: e.validator.format("Nem lehet nagyobb, mint {0}."),
		maxWords: e.validator.format("Kérjük, legfeljebb {0} szót adjon meg."),
		maxlength: e.validator.format("Legfeljebb {0} karakter hosszú legyen."),
		min: e.validator.format("Nem lehet kisebb, mint {0}."),
		minWords: e.validator.format("Kérjük, legalább {0} szót adjon meg."),
		minlength: e.validator.format("Legalább {0} karakter hosszú legyen."),
		notEqualTo: "Kérjük, adjon meg másik értéket, az értékek nem lehetnek azonosak.",
		nowhitespace: "Kérjük, ne használjon szóközöket.",
		required: "Kötelező megadni.",
		url: "Érvényes URL-nek kell lennie.",
	}), e
});