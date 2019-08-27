/* Script to exercise the usage of webstorage - local storage and session storage
 * Author: HartCode programmer
 * Date: 08/27/2019
 */
"Use Strict";
$(function() {

    selectedRole = localStorage.getItem("role");
    selectedUser = localStorage.getItem("name");
    $("#submitBtn").hide();
    $("#resetBtn").hide();
    $("#cancelBtn").hide();

    switch (selectedRole) {
        case 'Student':

            $("#submitBtn").show();
            $("#resetBtn").show();
            $("#user").html(`Welcome User ${selectedUser}!!`);
            break;
        case 'Instructor':
            // $("#buttons").show();
            $("#resetBtn").show();
            $("#cancelBtn").show();
            $("#user").html(`Welcome Instructor ${selectedUser}!!`);
            break;
        default:
            $("#user").html(`Sorry No One Selected!!`);
            $("#buttons").hide();
    }

})