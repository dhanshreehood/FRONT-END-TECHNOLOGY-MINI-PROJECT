        function changePassword() {
            {
                const newPassword = $("#newPassword1").val();
                const newPassworrdrepeat = document.getElementById("newPassword2").value;
                const userId = 1;//sessionStorage.getItem("id");
                // alert(userId);
                if (newPassword === newPassworrdrepeat) {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:3000/user/" + userId,
                        datatype: 'json',
                        success: function (userData, textStatus, xhr) {
                            // alert(userData);
                            updateUserPassword(userData, newPassword);
                        },
                        error: function (xhr, textStatus, errorThrown) {
                            console.log('could not update passsword.');
                        }
                    });
                }
            }
        }

        function updateUserPassword(userData, newPassword) {
            // alert(3);
            $.ajax({
                type: "PATCH",
                url: "http://localhost:3000/user/" + userData.id,
                data: {
                    password: newPassword
                },
                error: function (xhr, textStatus, errorThrown) {
                    alert("could not update password.");
                }
            });
        }
