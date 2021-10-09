function firstChange(amount, type){
    let re = /^\d+$/;
    let result = document.getElementById("result");
    if(re.test(amount) && amount != 0){
        result.innerHTML=type*amount;
    } else {
        result.innerHTML="Введите корректные данные";
    }
}

function changeOptions(amount, type, option){
    let result = document.getElementById("result");
    if(amount === 0){
        result.innerHTML="Введите корректные данные";
        return;
    }
    switch(option){
        case "o1":
            result.innerHTML=((type+1500)*amount);
            break;
        case "o2":
            result.innerHTML=((type+3000)*amount);
            break;
        case "o3":
            result.innerHTML=((type+5000)*amount);
    }
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let amount = 0, type = 0, flag=true;
    let result = document.getElementById("result");
    result.innerHTML="Введите данные";

    let re = /^\d+$/;

    let a = document.getElementById("amount");
    a.addEventListener("change", function(event){
        if(re.test(a.value)){
            amount=parseInt(a.value);
            if(flag){
                result.innerHTML=amount*2500;
            }
        }else{
            result.innerHTML="Введите корректные данные";
        }
    });

    let s = document.getElementsByName("list_of_goods");
    s[0].addEventListener("change", function(event){
        flag = false;
        let select = event.target;
        let radios = document.getElementById("options");
        let checkbox = document.getElementById("property");
        if(select.value=="cup"){
            radios.style.display="none";
            checkbox.style.display="none";
            type = 2500;
            firstChange(amount,type);
        }else if(select.value=="pants"){
            radios.style.display="none";
            checkbox.style.display="block";
            type = 5000;
            firstChange(amount,type);
        }else{
            radios.style.display="block";
            checkbox.style.display="none";
            type = 10000;
            firstChange(amount,type);
        }
    });
    let r = document.querySelectorAll(".options input[type=radio]");
    r.forEach(function(radio) {
      radio.addEventListener("change", function(event) {
        let r = event.target;
        changeOptions(amount,type,r.value);
        console.log(r.value);
      });    
    });
    let c = document.getElementsByName("property");
    c[0].addEventListener("change", function(event) {
      if(event.target.checked && amount !=0){    
          result.innerHTML=(type-1000)*amount;
      } else{
          firstChange(amount,type);
      }
    });
    
  });
