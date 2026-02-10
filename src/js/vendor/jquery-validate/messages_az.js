! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Zəhmət olmasa, yalnız hərflər, rəqəmlər və alt xətlər daxil edin.",
		date: "Zəhmət olmasa etibarlı bir tarix daxil edin.",
		digits: "Zəhmət olmasa, yalnız rəqəm daxil edin.",
		domain: "Zəhmət olmasa etibarlı bir domen adı daxil edin.",
		email: "Zəhmət olmasa, düzgün elektron poçt daxil edin.",
		equalTo: "Zəhmət olmasa, eyni mənanı bir daha daxil edin.",
		exactlength: e.validator.format("Zəhmət olmasa, tam olaraq {0} simvol daxil edin."),
		integer: "Zəhmət olmasa, onluq hissəsi olmayan müsbət və ya mənfi tam ədəd daxil edin.",
		lettersonly: "Zəhmət olmasa, yalnız hərflər daxil edin.",
		max: e.validator.format("Zəhmət olmasa, {0} və ondan kiçik rəqəm daxil edin."),
		maxWords: e.validator.format("Zəhmət olmasa, ən çox {0} söz daxil edin."),
		maxlength: e.validator.format("Zəhmət olmasa, {0} simvoldan çox olmayaraq daxil edin."),
		min: e.validator.format("Zəhmət olmasa, {0} və ondan böyük rəqəm daxil edin."),
		minWords: e.validator.format("Zəhmət olmasa, ən az {0} söz daxil edin."),
		minlength: e.validator.format("Zəhmət olmasa, {0} simvoldan az olmayaraq daxil edin."),
		notEqualTo: "Zəhmət olmasa, fərqli məna daxil edin, mənalar eyni olmamalıdır.",
		nowhitespace: "Zəhmət olmasa, boşluq daxil etməyin.",
		required: "Bu xana mütləq doldurulmalıdır.",
		url: "Zəhmət olmasa, düzgün URL daxil edin.",
	}), e
});
