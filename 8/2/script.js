let button = $("#button");

button.after("<h1></h1>");
button.click(function () {
    $("h1").text("");
    $("h3").text("");
    if ($("#mainInput").val() === "" || $("color").val() === "") {
        $("h3").text("Invalid text or color!");
        alert(`Error!`)
    } else {
        $("h1").css("color", `${$("#mainInputColor").val()}`).text(`${$("#mainInput").val()}`);
    }
});