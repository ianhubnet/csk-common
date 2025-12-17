! function(e) {
	"function" == typeof define && define.amd ? define(["jquery", "../jquery.validate.min"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
	return e.extend(e.validator.messages, {
		alphanumeric: "Por favor, introduza apenas letras, números e sublinhados.",
		date: "Por favor, insira uma data válida.",
		digits: "Por favor, introduza apenas dígitos.",
		domain: "Por favor, insira um nome de domínio válido.",
		email: "Por favor, introduza um endereço eletrónico válido.",
		equalTo: "Por favor, introduza de novo o mesmo valor.",
		exactlength: e.validator.format("Por favor, insira exatamente {0} caracteres."),
		integer: "Por favor, introduza um número inteiro positivo ou negativo sem decimais.",
		lettersonly: "Por favor, introduza apenas letras.",
		max: e.validator.format("Por favor, introduza um valor menor ou igual a {0}."),
		maxWords: e.validator.format("Por favor, introduza no máximo {0} palavras."),
		maxlength: e.validator.format("Por favor, não introduza mais do que {0} caracteres."),
		min: e.validator.format("Por favor, introduza um valor maior ou igual a {0}."),
		minWords: e.validator.format("Por favor, introduza pelo menos {0} palavras."),
		minlength: e.validator.format("Por favor, introduza pelo menos {0} caracteres."),
		notEqualTo: "Por favor, introduza um valor diferente, os valores não podem ser iguais.",
		nowhitespace: "Por favor, não introduza espaços em branco.",
		required: "Campo de preenchimento obrigatório.",
		url: "Por favor, introduza um URL válido.",
	}), e
});
