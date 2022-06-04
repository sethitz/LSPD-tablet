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

function option1_change(){
    if(option_active != null){
        option_active.classList.add("option");
        option_active.classList.remove("option-active");
    };

    container_active.classList.remove("option-container-active");
    container_active.classList.add("option-container");

    option1.classList.remove("option");
    option1.classList.add("option-active");

    container1.classList.remove("option-container");
    container1.classList.add("option-container-active");

    option_active = option1;
    container_active = container1;
};

function option2_change(){
    if(option_active != null){
        option_active.classList.add("option");
        option_active.classList.remove("option-active");
    };

    container_active.classList.remove("option-container-active");
    container_active.classList.add("option-container");

    option2.classList.remove("option");
    option2.classList.add("option-active");

    container2.classList.remove("option-container");
    container2.classList.add("option-container-active");

    option_active = option2;
    container_active = container2;
};

function option3_change(){
    if(option_active != null){
        option_active.classList.add("option");
        option_active.classList.remove("option-active");
    };

    container_active.classList.remove("option-container-active");
    container_active.classList.add("option-container");

    option3.classList.remove("option");
    option3.classList.add("option-active");

    container3.classList.remove("option-container");
    container3.classList.add("option-container-active");

    option_active = option3;
    container_active = container3;
};

function option4_change(){
    if(option_active != null){
        option_active.classList.add("option");
        option_active.classList.remove("option-active");
    };

    container_active.classList.remove("option-container-active");
    container_active.classList.add("option-container");

    option4.classList.remove("option");
    option4.classList.add("option-active");

    container4.classList.remove("option-container");
    container4.classList.add("option-container-active");

    option_active = option4;
    container_active = container4;
};

function ex_callout_show(){
    if (callout_active != null){
        callout_active.classList.remove("callout-active")
        callout_active.classList.add("callout")
    }
    ex_callout_button.classList.remove("callout")
    ex_callout_button.classList.add("callout-active")

    ex_callout_content.classList.remove("callout-content")
    ex_callout_content.classList.add("callout-content-active")

    callout_active = ex_callout_button;
}

option1.addEventListener("click", option1_change,null);
option2.addEventListener("click", option2_change,null);
option3.addEventListener("click", option3_change,null);
option4.addEventListener("click", option4_change,null);
ex_callout_button.addEventListener("click", ex_callout_show, null)