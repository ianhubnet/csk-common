! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Пожалуйста, вводите только буквы, цифры и знаки подчеркивания.",
		date: "Пожалуйста, введите действительную дату.",
		digits: "Пожалуйста, вводите только цифры.",
		email: "Пожалуйста, введите корректный адрес электронной почты.",
		equalTo: "Пожалуйста, введите такое же значение ещё раз.",
		exactlength: e.validator.format("Пожалуйста, введите ровно {0} символов."),
		integer: "Пожалуйста, введите положительное или отрицательное целое число без десятичных знаков.",
		lettersonly: "Пожалуйста, вводите только буквы.",
		max: e.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
		maxWords: e.validator.format("Пожалуйста, введите не более {0} слов."),
		maxlength: e.validator.format("Пожалуйста, введите не больше {0} символов."),
		min: e.validator.format("Пожалуйста, введите число, большее или равное {0}."),
		minWords: e.validator.format("Пожалуйста, введите не менее {0} слов."),
		minlength: e.validator.format("Пожалуйста, введите не меньше {0} символов."),
		notEqualTo: "Пожалуйста, введите другое значение, значения не должны быть одинаковыми.",
		nowhitespace: "Пожалуйста, не вводите пробелы.",
		required: "Это поле необходимо заполнить.",
		url: "Пожалуйста, введите корректный URL.",
	}), e
});