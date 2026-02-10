! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Indtast venligst kun bogstaver, tal og understreger.",
		date: "Indtast venligst en gyldig dato.",
		digits: "Indtast kun cifre.",
		domain: "Indtast venligst et gyldigt domænenavn.",
		email: "Indtast en gyldig email-adresse.",
		equalTo: "Indtast den samme værdi igen.",
		exactlength: e.validator.format("Indtast venligst præcis {0} tegn."),
		integer: "Angiv et ikke-decimaltal, der er positivt eller negativt.",
		lettersonly: "Angiv venligst kun bogstaver.",
		max: e.validator.format("Angiv en værdi der højst er {0}."),
		maxWords: e.validator.format("Indtast venligst højst {0} ord."),
		maxlength: e.validator.format("Indtast højst {0} tegn."),
		min: e.validator.format("Angiv en værdi der mindst er {0}."),
		minWords: e.validator.format("Indtast venligst mindst {0} ord."),
		minlength: e.validator.format("Indtast mindst {0} tegn."),
		notEqualTo: "Angiv en anden værdi, værdierne må ikke være det samme.",
		nowhitespace: "Må ikke indeholde mellemrum.",
		required: "Dette felt er påkrævet.",
		url: "Indtast en gyldig URL.",
	}), e
});
