var option1 = document.getElementById("option1"),
    option2 = document.getElementById("option2"),
    option3 = document.getElementById("option3"),
    option4 = document.getElementById("option4"),
    option_active = null;

var container1 = document.getElementById("documents-container"),
    container2 = document.getElementById("vehicle-plate-container"),
    container3 = document.getElementById("reports-container"),
    container4 = document.getElementById("callouts-container"),
    container_active = document.getElementById("none");

var ex_callout_button = document.getElementById("ex-callout"),
    ex_callout_content = document.getElementById("ex-callout-content"),
    callout_active = null;

function option_change(option_changin, container_changin,){
    if(option_active != null){
        option_active.classList.add("option");
        option_active.classList.remove("option-active");
    };

    container_active.classList.remove("option-container-active");
    container_active.classList.add("option-container");

    option_changin.classList.remove("option");
    option_changin.classList.add("option-active");

    container_changin.classList.remove("option-container");
    container_changin.classList.add("option-container-active");

    option_active = option_changin;
    container_active = container_changin;  
};

function callout_show(callout_button_changin, callout_content_changin){
    if (callout_active != null){
        callout_active.classList.remove("callout-active");
        callout_active.classList.add("callout");
    };
    callout_button_changin.classList.remove("callout");
    callout_button_changin.classList.add("callout-active");

    callout_content_changin.classList.remove("callout-content");
    callout_content_changin.classList.add("callout-content-active");

    callout_active = callout_button_changin;
};

option1.addEventListener("click", function(){option_change(option1, container1);}, null);
option2.addEventListener("click", function(){option_change(option2, container2);}, null);
option3.addEventListener("click", function(){option_change(option3, container3);}, null);
option4.addEventListener("click", function(){option_change(option4, container4);}, null);

ex_callout_button.addEventListener("click", function(){ callout_show(ex_callout_button, ex_callout_content);}, null)