! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "문자, 숫자 및 밑줄만 입력하세요.",
		digits: "숫자만 입력 가능합니다.",
		email: "유효하지 않은 E-Mail주소입니다.",
		equalTo: "같은 값을 다시 입력하세요.",
		exactlength: e.validator.format("정확히 {0}자를 입력하세요."),
		integer: "양수 또는 음수의 비소수점 숫자를 입력하세요.",
		lettersonly: "문자만 입력하세요.",
		max: e.validator.format("{0} 이하의 값을 입력하세요."),
		maxWords: e.validator.format("{0} 단어 이하로 입력하세요."),
		maxlength: e.validator.format("{0}자를 넘을 수 없습니다."),
		min: e.validator.format("{0} 이상의 값을 입력하세요."),
		minWords: e.validator.format("최소 {0} 단어를 입력하세요."),
		minlength: e.validator.format("{0}자 이상 입력하세요."),
		notEqualTo: "다른 값을 입력하세요, 값은 같을 수 없습니다.",
		nowhitespace: "공백을 사용하지 마세요.",
		required: "필수 항목입니다.",
		url: "유효하지 않은 URL입니다.",
	}), e
});