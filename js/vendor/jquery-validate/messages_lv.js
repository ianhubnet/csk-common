! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Lūdzu, ievadiet tikai burtus, ciparus un pasvītrojumzīmes.",
		date: "Lūdzu, ievadiet derīgu datumu.",
		digits: "Lūdzu, ievadiet tikai ciparus.",
		email: "Lūdzu, ievadiet derīgu e-pasta adresi.",
		equalTo: "Lūdzu, ievadiet to pašu vēlreiz.",
		exactlength: e.validator.format("Lūdzu, ievadiet tieši {0} rakstzīmes."),
		integer: "Lūdzu, ievadiet pozitīvu vai negatīvu veselu skaitli bez decimāldaļām.",
		lettersonly: "Lūdzu, ievadiet tikai burtus.",
		max: e.validator.format("Lūdzu, ievadiet skaitli, kurš ir mazāks vai vienāds ar {0}."),
		maxWords: e.validator.format("Lūdzu, ievadiet ne vairāk kā {0} vārdus."),
		maxlength: e.validator.format("Lūdzu, ievadiet ne vairāk kā {0} rakstzīmes."),
		min: e.validator.format("Lūdzu, ievadiet skaitli, kurš ir lielāks vai vienāds ar {0}."),
		minWords: e.validator.format("Lūdzu, ievadiet vismaz {0} vārdus."),
		minlength: e.validator.format("Lūdzu, ievadiet vismaz {0} rakstzīmes."),
		notEqualTo: "Lūdzu, ievadiet citu vērtību, vērtības nedrīkst būt vienādas.",
		nowhitespace: "Lūdzu, neievadiet tukšumus.",
		required: "Šis lauks ir obligāts.",
		url: "Lūdzu, ievadiet derīgu URL adresi.",
	}), e
});