//to change profile pic
var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);
};

//to change password
$(document).ready(function () {
    $(".btn").click(function () {
        id = $("#tId").val();

        let record = {

            title: $("#ttitle").val(),
            author: $("#tauthor").val()
        }
        $.ajax({
            type: 'PUT',
            dataType: 'json',
            url: 'http://localhost:3000/input/' + id,
            data: record,
            success: function (data) {
                console.log(data)
            }
        })
    });
});