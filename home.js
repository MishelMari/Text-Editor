function f1() {

    document.getElementById("textarea1").style.fontWeight = "bold";

}

function f2() {

    document.getElementById("textarea1").style.fontStyle = "italic";

}

function f3() {

    document.getElementById("textarea1").style.textAlign = "left";

}

function f4() {

    document.getElementById("textarea1").style.textAlign = "center";

}

function f5() {

    document.getElementById("textarea1").style.textAlign = "right";

}

function f6() {

    document.getElementById("textarea1").style.textTransform = "uppercase";

}

function f7() {

    document.getElementById("textarea1").style.textTransform = "lowercase";

}

function f8() {

    document.getElementById("textarea1").style.textTransform = "capitalize";

}

function f9() {

    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";



}













///download///
var fileName = document.getElementById("txtHeader");
var fileContent = document.getElementById("textarea1");

fileName.value = "";
fileContent.value = "";

function downloadFile() {
    if (fileName.value === "" || fileContent.value === "")
        window.alert("Please enter File name and content");
    else {
        var e = fileContent.value;
        var c = document.createElement("a");
        c.download = fileName.value + ".txt";
        var t = new Blob([e], {
            type: "text/plain"
        });
        c.href = window.URL.createObjectURL(t);
        c.click();
    }
}