! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Παρακαλώ εισάγετε μόνο γράμματα, αριθμούς και υπογραμμίσεις.",
		date: "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.",
		digits: "Παρακαλώ εισάγετε μόνο αριθμητικά ψηφία.",
		email: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
		equalTo: "Παρακαλώ εισάγετε την ίδια τιμή ξανά.",
		exactlength: e.validator.format("Παρακαλώ εισάγετε ακριβώς {0} χαρακτήρες."),
		integer: "Παρακαλώ εισάγετε έναν θετικό ή αρνητικό ακέραιο αριθμό χωρίς δεκαδικά.",
		lettersonly: "Παρακαλώ εισάγετε μόνο γράμματα.",
		max: e.validator.format("Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση του {0}."),
		maxWords: e.validator.format("Παρακαλώ εισάγετε το πολύ {0} λέξεις."),
		maxlength: e.validator.format("Παρακαλώ εισάγετε μέχρι και {0} χαρακτήρες."),
		min: e.validator.format("Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση του {0}."),
		minWords: e.validator.format("Παρακαλώ εισάγετε τουλάχιστον {0} λέξεις."),
		minlength: e.validator.format("Παρακαλώ εισάγετε τουλάχιστον {0} χαρακτήρες."),
		notEqualTo: "Παρακαλώ εισάγετε διαφορετική τιμή, οι τιμές δεν πρέπει να είναι ίδιες.",
		nowhitespace: "Παρακαλώ μην εισάγετε κενά διαστήματα.",
		required: "Αυτό το πεδίο είναι υποχρεωτικό.",
		url: "Παρακαλώ εισάγετε ένα έγκυρο URL.",
	}), e
});