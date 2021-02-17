var tempoInicial = $('#tempo-digitacao').text()
var campo = $('.campo-digitacao')
var frase = $('.frase').text()
$(function(){
    atualizaTamanhoFrase()
    inicializaContadores()
    inicializaCronometro()
    $('#botao').click(reiniciaJogo)
    inicializaMarcadores()
})

function atualizaTamanhoFrase(){
    var frase = $('.frase').text()
    var numeroPalavras = frase.split(" ").length
    var tamanhoFrase = $('#tamanho-frase')
    tamanhoFrase.text(numeroPalavras)
}

function inicializaContadores(){
    campo.on("input", ()=>{
        var conteudo = campo.val()
        var palavras = conteudo.split(/\S+/).length -1
        var caracteres = conteudo.split("").length // OU conteudo.length
        $('#contador-palavras').text(palavras)
        $('#contador-caracteres').text(caracteres)
    })
}
function inicializaMarcadores(){
    campo.on("input", ()=>{
        var conteudo = campo.val()
        var comparavel = frase.substr(0,conteudo.length)
        var ehCorreto = (conteudo == comparavel);

        campo.toggleClass("borda-verde", ehCorreto);
        campo.toggleClass("borda-vermelha", !ehCorreto);
    })
}

function inicializaCronometro(){
    var tempoRestante = $('#tempo-digitacao').text()
    campo.one('focus', ()=>{
        $('#botao').attr("disabled", true)
        var idCronometro = setInterval(function(){
            tempoRestante--
            $('#tempo-digitacao').text(tempoRestante)
            if (tempoRestante < 1) {
                campo.attr('disabled', true)
                clearInterval(idCronometro)
                $('#botao').removeAttr("disabled")
                campo.toggleClass('campo-desativado')
            }
        },1000)
    })
}

function reiniciaJogo(){
    campo.toggleClass('campo-desativado')
    campo.attr('disabled', false)
    campo.val("")
    $('#contador-palavras').text("0")
    $('#contador-caracteres').text("0")
    $('#tempo-digitacao').text(tempoInicial)
    inicializaCronometro()
    campo.removeClass('borda-vermelha')
    campo.removeClass('borda-verde')
}
