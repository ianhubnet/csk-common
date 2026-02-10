! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "தயவுசெய்து எழுத்துகள், எண்கள், வெற்றிடங்கள் மற்றும் கீழ்கோடுகள் மட்டும் உள்ளிடவும்.",
		date: "சரியான தேதியை உள்ளிடவும்.",
		digits: "தயவுசெய்து எண்கள் மட்டுமே உள்ளிடவும்.",
		domain: "சரியான டொமைன் பெயரை உள்ளிடவும்.",
		email: "தயவுசெய்து செல்லுபடியாகும் மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
		equalTo: "தயவுசெய்து அதே மதிப்பை உள்ளிடவும்.",
		exactlength: e.validator.format("தயவுசெய்து சரியாக {0} எழுத்துகள் உள்ளிடவும்."),
		integer: "தயவுசெய்து முழு எண் (பொதுமை/எதிர்மறை) உள்ளிடவும்.",
		lettersonly: "தயவுசெய்து எழுத்துகள் மட்டுமே உள்ளிடவும்.",
		max: e.validator.format("தயவுசெய்து {0}க்கு குறைவோ சமமோ மதிப்பை உள்ளிடவும்."),
		maxWords: e.validator.format("தயவுசெய்து அதிகபட்சம் {0} வார்த்தைகள் உள்ளிடவும்."),
		maxlength: e.validator.format("தயவுசெய்து அதிகபட்சம் {0} எழுத்துகள் உள்ளிடவும்."),
		min: e.validator.format("தயவுசெய்து {0}க்கு சமமோ அதற்கு மேற்பட்ட மதிப்பை உள்ளிடவும்."),
		minWords: e.validator.format("தயவுசெய்து குறைந்தது {0} வார்த்தைகள் உள்ளிடவும்."),
		minlength: e.validator.format("தயவுசெய்து குறைந்தது {0} எழுத்துகள் உள்ளிடவும்."),
		notEqualTo: "தயவுசெய்து வேறு மதிப்பை உள்ளிடவும், மதிப்புகள் ஒரே மாதிரியாக இருக்கக்கூடாது.",
		nowhitespace: "தயவுசெய்து வெற்றிடம் இல்லாமல் உள்ளிடவும்.",
		required: "இந்த புலம் தேவைப்படுகிறது.",
		url: "தயவுசெய்து செல்லுபடியாகும் URL ஐ உள்ளிடவும்.",
	}), e
});
