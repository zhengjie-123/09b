function zjRem(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+'px';
}
zjRem()
window.onresize=zjRem;
