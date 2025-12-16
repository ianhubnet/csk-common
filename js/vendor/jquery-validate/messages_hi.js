! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "कृपया केवल अक्षर, अंक और अंडरस्कोर दर्ज करें।",
		date: "कृपया एक वैध तिथि दर्ज करें।",
		digits: "कृपया केवल अंकों को दर्ज करें।",
		email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
		equalTo: "कृपया वही मान फिर से दर्ज करें।",
		exactlength: e.validator.format("कृपया ठीक {0} वर्ण दर्ज करें।"),
		integer: "कृपया एक धनात्मक या ऋणात्मक गैर-दशमलव संख्या दर्ज करें।",
		lettersonly: "कृपया केवल अक्षर दर्ज करें।",
		max: e.validator.format("कृपया {0} से कम या उसके बराबर एक मान दर्ज करें।"),
		maxWords: e.validator.format("कृपया अधिकतम {0} शब्द दर्ज करें।"),
		maxlength: e.validator.format("कृपया {0} वर्ण से अधिक न दर्ज करें।"),
		min: e.validator.format("कृपया {0} से अधिक या उसके बराबर एक मान दर्ज करें।"),
		minWords: e.validator.format("कृपया कम से कम {0} शब्द दर्ज करें।"),
		minlength: e.validator.format("कृपया कम से कम {0} वर्ण दर्ज करें।"),
		notEqualTo: "कृपया एक अलग मान दर्ज करें, मान समान नहीं हो सकते।",
		nowhitespace: "कृपया कोई रिक्त स्थान न दर्ज करें।",
		required: "यह फ़ील्ड आवश्यक है।",
		url: "कृपया एक मान्य यूआरएल दर्ज करें।",
	}), e
});