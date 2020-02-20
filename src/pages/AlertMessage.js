import React from "react";

function deleteMyself(e) {
    console.log(e.target);
    var div = e.target.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
}

function generateAlert () {
    let tmp = window.sessionStorage.error;
    window.sessionStorage.removeItem("error");

    if (tmp) {
        if (tmp.includes("alert:")) {
            return (
                <div class="alert">
                <span class="closebtn" onClick={(e) => deleteMyself(e)}>&times;</span>  
                <strong>{tmp.replace("alert:", "")}</strong>
                </div>
            )
        } else if (tmp.includes("alert success:")) {
            return (
                <div class="alert success">
                <span class="closebtn" onClick={(e) => deleteMyself(e)}>&times;</span>  
                <strong>{tmp.replace("alert success:", "")}</strong>
                </div>
            )
        } else if (tmp.includes("alert info:")) {
            return (
                <div class="alert info">
                <span class="closebtn" onClick={(e) => deleteMyself(e)}>&times;</span>  
                <strong>{tmp.replace("alert info:", "")}</strong>
                </div>
            )
        } else if (tmp.includes("alert warning:")) {
            return (
                <div class="alert warning">
                <span class="closebtn" onClick={(e) => deleteMyself(e)}>&times;</span>  
                <strong>{tmp.replace("alert warning:", "")}</strong>
                </div>
            )
        }
    }

    return null;
}

export default generateAlert;