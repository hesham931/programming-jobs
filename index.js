let inputBar = document.getElementById("searchBar"),
    optionDiv = document.getElementById("options"),
    select =document.getElementsByClassName("select"),
    searchList = document.getElementById("searchList"),
    arrow = document.getElementById("arrow"),
    arrayList = new Array(),
    index = 0;
const option1 = document.getElementById("option1"),
      option2 = document.getElementById("option2"),
      option3 = document.getElementById("option3"),
      option4 = document.getElementById("option4"),
      option5 = document.getElementById("option5"),
      option6 = document.getElementById("option6"),
      option7 = document.getElementById("option7"),
      option8 = document.getElementById("option8"),
      option9 = document.getElementById("option9"),
      option10 = document.getElementById("option10"),
      optionArray1 = ["frontEnd","senior","html","css","javaScript"],
      optionArray2 = ["fullStack","midweight","python","react"],
      optionArray3 = ["frontEnd","junior","react","sass","javaScript"],
      optionArray4 = ["frontEnd","junior","css","javaScript"],
      optionArray5 = ["fullStack","midweight","javaScript","sass","ruby"],
      optionArray6 = ["backEnd","junior","ruby","roR"],
      optionArray7 = ["frontEnd","junior","html","sass","javaScript"],
      optionArray8 = ["frontEnd","junior","vue","javaScript","sass"],
      optionArray9 = ["fullStack","midweight","javaScript","django","python"],
      optionArray10 = ["frontEnd","junior","react","sass","javaScript"];

arrow.addEventListener("click" , getTop , false);
inputBar.addEventListener("focus" , showOptions , false);
inputBar.addEventListener("blur" , removeText , false);
inputBar.addEventListener("keyup" , putText , false);
function getTop(){
    window.scrollTo({
        top: document.getElementById("topOfPage"),
        left: 0,
        behavior: 'smooth'
      });
};
function putText(){
    inputBar.value = "Fetch what you want from the list below please , thank you for using \'Programming Jobs\'.";
}
function removeText(){
    inputBar.value = "";
}
function showOptions(){
    "use strict";
    inputBar.value = "Fetch what you want from the list below , thank you for using \'Programming Jobs\'.";
    optionDiv.classList.remove("display");
    optionDiv.classList.remove("optionHide");
}
/************************************************* */
for(var i = 0 ; i < 16 ; i++){
    select[i].addEventListener("click" , setOption , false);
}
function setOption(){
    let p = document.createElement("p"),
        img = document.createElement("img"),
        text = document.createTextNode("");

    img.src = "icon-remove.svg";
    img.alt = "removeIcon";

    switch(this.textContent){
        case "html":text.textContent = "html";img.id = "htmlIcon";p.id = "htmlP";arrayList[index] = "html";break;
        case "css":text.textContent = "css";img.id = "cssIcon";p.id = "cssP";arrayList[index] = "css";break;
        case "javaScript":text.textContent = "javaScript";img.id = "javaScriptIcon";p.id = "jsP";arrayList[index] = "javaScript";break;
        case "fullStack":text.textContent = "fullStack";img.id = "fsIcon";p.id = "fsP";arrayList[index] = "fullStack";break;
        case "frontEnd":text.textContent = "frontEnd";img.id = "feIcon";p.id = "feP";arrayList[index] = "frontEnd";break;
        case "backEnd":text.textContent = "backEnd";img.id = "beIcon";p.id = "beP";arrayList[index] = "backEnd";break;
        case "senior":text.textContent = "senior";img.id = "senIcon";p.id = "senP";arrayList[index] = "senior";break;
        case "junior":text.textContent = "junior";img.id = "jenIcon";p.id = "jenP";arrayList[index] = "junior";break;
        case "midweight":text.textContent = "midweight";img.id = "miIcon";p.id = "miP";arrayList[index] = "midweight";break;
        case "python":text.textContent = "python";img.id = "pIcon";p.id = "pP";arrayList[index] = "python";break;
        case "react":text.textContent = "react";img.id = "rIcon";p.id = "rP";arrayList[index] = "react";break;
        case "sass":text.textContent = "sass";img.id = "sIcon";p.id = "sP";arrayList[index] = "sass";break;
        case "ruby":text.textContent = "ruby";img.id = "ruIcon";p.id = "ruP";arrayList[index] = "ruby";break;
        case "roR":text.textContent = "roR";img.id = "roIcon";p.id = "roP";arrayList[index] = "roR";break;
        case "vue":text.textContent = "vue";img.id = "vuIcon";p.id = "vuP";arrayList[index] = "vue";break;
        case "django":text.textContent = "django";img.id = "dIcon";p.id = "dP";arrayList[index] = "django";break;
    }
    img.addEventListener("click" , deleteSelect , false);
    p.appendChild(text);
    p.appendChild(img);
    if(document.getElementById(p.id)){
        alert("You already choose this field from the list !!");
    }
    else{
        searchList.appendChild(p);
        index++;
        enableSearch(text.textContent);
    }
    optionDiv.classList.add("optionHide");
};
function enableSearch(element){
    if(optionArray1.indexOf(element) === -1){
        option1.style.display="none";
    }
    if(optionArray2.indexOf(element) === -1){
        option2.style.display="none";
    }
    if(optionArray3.indexOf(element) === -1){
        option3.style.display="none";
    }
    if(optionArray4.indexOf(element) === -1){
        option4.style.display="none";
    }
    if(optionArray5.indexOf(element) === -1){
        option5.style.display="none";
    }
    if(optionArray6.indexOf(element) === -1){
        option6.style.display="none";
    }
    if(optionArray7.indexOf(element) === -1){
        option7.style.display="none";
    }
    if(optionArray8.indexOf(element) === -1){
        option8.style.display="none";
    }
    if(optionArray9.indexOf(element) === -1){
        option9.style.display="none";
    }
    if(optionArray10.indexOf(element) === -1){
        option10.style.display="none";
    }
}
function disEnableSearch(element){
    if(optionArray1.indexOf(element) === -1){
        option1.style.display="flex";
    }
    if(optionArray2.indexOf(element) === -1){
        option2.style.display="flex";
    }
    if(optionArray3.indexOf(element) === -1){
        option3.style.display="flex";
    }
    if(optionArray4.indexOf(element) === -1){
        option4.style.display="flex";
    }
    if(optionArray5.indexOf(element) === -1){
        option5.style.display="flex";
    }
    if(optionArray6.indexOf(element) === -1){
        option6.style.display="flex";
    }
    if(optionArray7.indexOf(element) === -1){
        option7.style.display="flex";
    }
    if(optionArray8.indexOf(element) === -1){
        option8.style.display="flex";
    }
    if(optionArray9.indexOf(element) === -1){
        option9.style.display="flex";
    }
    if(optionArray10.indexOf(element) === -1){
        option10.style.display="flex";
    }
    for(let i = 0 ; i < arrayList.length ; i++){
        enableSearch(arrayList[i]);
    }
}
/********************************************************************* */
function deleteSelect(){
    if(confirm("Do you want to delete this field from your list??")){
         index--;
        switch(this.id){
            case "htmlIcon":searchList.removeChild(document.getElementById("htmlP"));arrayList.splice(arrayList.indexOf("html"),1);disEnableSearch("html");break;
            case "cssIcon":searchList.removeChild(document.getElementById("cssP"));arrayList.splice(arrayList.indexOf("css"),1);disEnableSearch("css");break;
            case "javaScriptIcon":searchList.removeChild(document.getElementById("jsP"));arrayList.splice(arrayList.indexOf("javaScript"),1);disEnableSearch("javaScript");break;
            case "fsIcon":searchList.removeChild(document.getElementById("fsP"));arrayList.splice(arrayList.indexOf("fullStack"),1);disEnableSearch("fullStack");break;
            case "feIcon":searchList.removeChild(document.getElementById("feP"));arrayList.splice(arrayList.indexOf("frontEnd"),1);disEnableSearch("frontEnd");break;
            case "beIcon":searchList.removeChild(document.getElementById("beP"));arrayList.splice(arrayList.indexOf("backEnd"),1);disEnableSearch("backEnd");break;
            case "senIcon":searchList.removeChild(document.getElementById("senP"));arrayList.splice(arrayList.indexOf("senior"),1);disEnableSearch("senior");break;
            case "jenIcon":searchList.removeChild(document.getElementById("jenP"));arrayList.splice(arrayList.indexOf("junior"),1);disEnableSearch("junior");break;
            case "miIcon":searchList.removeChild(document.getElementById("miP"));arrayList.splice(arrayList.indexOf("midweight"),1);disEnableSearch("midweight");break;
            case "pIcon":searchList.removeChild(document.getElementById("pP"));arrayList.splice(arrayList.indexOf("python"),1);disEnableSearch("python");break;
            case "rIcon":searchList.removeChild(document.getElementById("rP"));arrayList.splice(arrayList.indexOf("react"),1);disEnableSearch("react");break;
            case "sIcon":searchList.removeChild(document.getElementById("sP"));arrayList.splice(arrayList.indexOf("sass"),1);disEnableSearch("sass");break;
            case "ruIcon":searchList.removeChild(document.getElementById("ruP"));arrayList.splice(arrayList.indexOf("ruby"),1);disEnableSearch("ruby");break;
            case "roIcon":searchList.removeChild(document.getElementById("roP"));arrayList.splice(arrayList.indexOf("roR"),1);disEnableSearch("roR");break;
            case "vuIcon":searchList.removeChild(document.getElementById("vuP"));arrayList.splice(arrayList.indexOf("vue"),1);disEnableSearch("vue");break;
            case "dIcon":searchList.removeChild(document.getElementById("dP"));arrayList.splice(arrayList.indexOf("django"),1);disEnableSearch("django");break;
        }
    }
}
window.addEventListener("scroll",scrolledAnimation,false);
function scrolledAnimation(){
    let scrolled = window.scrollY;
    if(scrolled > 500){
        arrow.classList.add("arrowOption");
    }
    else{
        arrow.style = "visibility: hidden";
        arrow.classList.remove("arrowOption");
    }
    if(scrolled < 100)
        option1.classList.add("animation");
    if(scrolled > 200)
        option2.classList.add("animation");
    if(scrolled > 300)
        option3.classList.add("animation");
    if(scrolled > 400)
        option4.classList.add("animation");
    if(scrolled > 500)
        option5.classList.add("animation");
}