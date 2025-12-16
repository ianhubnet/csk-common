! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "文字、数字、アンダースコアのみを入力してください。",
		date: "有効な日付を入力してください。",
		digits: "数字のみを入力してください。",
		email: "有効なEメールアドレスを入力してください。",
		equalTo: "同じ値をもう一度入力してください。",
		exactlength: e.validator.format("正確に {0} 文字を入力してください。"),
		integer: "正または負の非小数点数を入力してください。",
		lettersonly: "文字のみを入力してください。",
		max: e.validator.format("{0} 以下の値を入力してください。"),
		maxWords: e.validator.format("{0} 単語以下で入力してください。"),
		maxlength: e.validator.format("{0} 文字以内で入力してください。"),
		min: e.validator.format("{0} 以上の値を入力してください。"),
		minWords: e.validator.format("最低 {0} 単語を入力してください。"),
		minlength: e.validator.format("{0} 文字以上で入力してください。"),
		notEqualTo: "異なる値を入力してください、値は同じであってはなりません。",
		nowhitespace: "空白を使用しないでください。",
		required: "このフィールドは必須です。",
		url: "有効なURLを入力してください。",
	}), e
});