function addition(num1,num2){
    return num1+num2
}
function subtraction(num1,num2){
    return num1-num2
}
function multiple(num1,num2){
    return num1*num2
}
function division(num1,num2){
    return num1/num2
}
$(document).ready(function(){
    $("#sum").click(function(event){
        event.preventDefault()
        var number1 = parseInt($("#val1").val())
        var number2 = parseInt($("#val2").val())
        var total = addition(number1,number2)
        $(".result").text(total)
    })
    $("#subt").click(function(event){
        event.preventDefault()
        var number1 = parseInt($("#val1").val())
        var number2 = parseInt($("#val2").val())
        var total = subtraction(number1,number2)
        $(".result").text(total)
    })
    $("#mult").click(function(event){
        event.preventDefault()
        var number1 = parseInt($("#val1").val())
        var number2 = parseInt($("#val2").val())
        var total = multiple(number1,number2)
        $(".result").text(total)
    })
    $("#divn").click(function(event){
        event.preventDefault()
        var number1 = parseInt($("#val1").val())
        var number2 = parseInt($("#val2").val())
        var total = division(number1,number2)
        $(".result").text(total)
    })
})




