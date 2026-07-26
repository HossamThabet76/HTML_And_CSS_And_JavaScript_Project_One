let star=document.getElementById('star');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let mountains7=document.getElementById('mountains7');
let hossam=document.querySelector('.name');
onscroll=function(){
    let value=scrollY;
    hossam.style.fontSize=value+'px';
    star.style.left=value + 'px';
    boat.style.left=value*3+'px';
    moon.style.top=value*3+'px';
    boat.style.top=value+'px';
    mountains3.style.top=value*2+'px';
    mountains4.style.top=value*1.5+'px';
    river.style.top=value+'px';
    if(value>60){
        hossam.style.fontSize=60+'px';
    }
    if(value>586){
        hossam.style.display='none';
    }
    else{
        hossam.style.display='block';
    }
    if(value>762){
        document.querySelector('header').style.display='none';
    }
    else{
        document.querySelector('header').style.display='block';
    }
    if(value>218){
        document.querySelector('.main').style.background='linear-gradient(#376281 ,#10001f)';
        star.style.background='linear-gradient(#376281 ,#10001f)';
    }
    else{
        document.querySelector('.main').style.background='linear-gradient(#200016 , #10001f)';
        star.style.background='linear-gradient(#200016 , #10001f)';
    }
}