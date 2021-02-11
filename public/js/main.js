var frase = $('.frase').text()
var numeroPalavras = frase.split(" ").length
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numeroPalavras)

var campo = $('.campo-digitacao')
campo.on("input", ()=>{
    var conteudo = campo.val()
    var palavras = conteudo.split(/\S+/).length -1
    var caracteres = conteudo.split("").length // OU conteudo.length

    $('#contador-palavras').text(palavras)
    $('#contador-caracteres').text(caracteres)
})
