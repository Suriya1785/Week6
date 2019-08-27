/* Script to exercise the usage of webstorage - local storage and session storage
 * Author: HartCode programmer
 * Date: 08/27/2019
 */
"Use Strict";
$(function() {
    let name = $("#inputName").val();
    let userRole = $("input[name='role']:checked").val();
    $("#enterBtn").on("click", function() {
        let name = $("#inputName").val();
        let userRole = $("input[name='role']:checked").val();
        localStorage.setItem("role", userRole);
        localStorage.setItem("name", name);
        let addCourseUrl = "subPage.html";
        window.location.replace(addCourseUrl, "_self");
    })

})