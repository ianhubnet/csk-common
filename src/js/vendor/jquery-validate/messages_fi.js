! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Syötä vain kirjaimia, numeroita ja alaviivoja.",
		date: "Syötä kelvollinen päivämäärä.",
		digits: "Syötä pelkästään numeroita.",
		domain: "Syötä kelvollinen verkkotunnus.",
		email: "Syötä oikea sähköpostiosoite.",
		equalTo: "Syötä sama arvo uudestaan.",
		exactlength: e.validator.format("Syötä täsmälleen {0} merkkiä."),
		integer: "Syötä positiivinen tai negatiivinen kokonaisluku ilman desimaaleja.",
		lettersonly: "Syötä vain kirjaimia.",
		max: e.validator.format("Syötä arvo, joka on enintään {0}."),
		maxWords: e.validator.format("Syötä enintään {0} sanaa."),
		maxlength: e.validator.format("Voit syöttää enintään {0} merkkiä."),
		min: e.validator.format("Syötä arvo, joka on vähintään {0}."),
		minWords: e.validator.format("Syötä vähintään {0} sanaa."),
		minlength: e.validator.format("Vähintään {0} merkkiä."),
		notEqualTo: "Syötä eri arvo, arvot eivät voi olla samat.",
		nowhitespace: "Älä käytä välilyöntejä.",
		required: "Tämä kenttä on pakollinen.",
		url: "Syötä oikea URL-osoite.",
	}), e
});
