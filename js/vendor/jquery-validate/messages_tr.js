! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Lütfen sadece harf, rakam ve alt çizgi giriniz.",
		digits: "Lütfen sadece sayısal karakterler giriniz.",
		email: "Lütfen geçerli bir e-posta adresi giriniz.",
		equalTo: "Lütfen aynı değeri tekrar giriniz.",
		exactlength: e.validator.format("Lütfen tam olarak {0} karakter uzunluğunda bir değer giriniz."),
		integer: "Lütfen pozitif veya negatif ondalıksız bir sayı giriniz.",
		lettersonly: "Lütfen sadece harf giriniz.",
		max: e.validator.format("Lütfen {0} değerine eşit ya da daha küçük bir değer giriniz."),
		maxWords: e.validator.format("Lütfen en fazla {0} kelime giriniz."),
		maxlength: e.validator.format("Lütfen en fazla {0} karakter uzunluğunda bir değer giriniz."),
		min: e.validator.format("Lütfen {0} değerine eşit ya da daha büyük bir değer giriniz."),
		minWords: e.validator.format("Lütfen en az {0} kelime giriniz."),
		minlength: e.validator.format("Lütfen en az {0} karakter uzunluğunda bir değer giriniz."),
		notEqualTo: "Lütfen farklı bir değer giriniz, değerler aynı olmamalıdır.",
		nowhitespace: "Lütfen boşluk kullanmayınız.",
		required: "Bu alanın doldurulması zorunludur.",
		url: "Lütfen geçerli bir web adresi (URL) giriniz.",
	}), e
});