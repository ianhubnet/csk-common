! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "โปรดป้อนตัวอักษร ตัวเลข และขีดล่างเท่านั้น",
		digits: "โปรดระบุจำนวนเต็มที่ถูกต้อง",
		email: "โปรดระบุที่อยู่อีเมล์ที่ถูกต้อง",
		equalTo: "โปรดระบุค่าเดิมอีกครั้ง",
		exactlength: e.validator.format("โปรดระบุความยาว {0} อักขระพอดี"),
		integer: "โปรดระบุจำนวนเต็มบวกหรือลบที่ไม่ใช่ทศนิยม",
		lettersonly: "โปรดป้อนตัวอักษรเท่านั้น",
		max: e.validator.format("โปรดระบุค่าน้อยกว่าหรือเท่ากับ {0}"),
		maxWords: e.validator.format("โปรดระบุไม่เกิน {0} คำ"),
		maxlength: e.validator.format("โปรดอย่าระบุค่าที่ยาวกว่า {0} อักขระ"),
		min: e.validator.format("โปรดระบุค่ามากกว่าหรือเท่ากับ {0}"),
		minWords: e.validator.format("โปรดระบุอย่างน้อย {0} คำ"),
		minlength: e.validator.format("โปรดอย่าระบุค่าที่สั้นกว่า {0} อักขระ"),
		notEqualTo: "โปรดระบุค่าที่แตกต่าง ค่าต้องไม่เหมือนกัน",
		nowhitespace: "โปรดอย่าใช้ช่องว่าง",
		required: "โปรดระบุ",
		url: "โปรดระบุ URL ที่ถูกต้อง",
	}), e
});