$(document).ready(function(){
    let mainInput = $("#mainInput");
    let ourBtn = $("#btn");
    
    
    ourBtn.click(function(){
        mainInput.before("<h1>Hello there Petko!</h1>")
    })

})