// console.log("Ajax tutorial");
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

let popBtn = document.getElementById('backupBtn');
popBtn.addEventListener('click',popHandler);

function buttonClickHandler(){
    console.log('clicked');
    //Instantiate xhr object
    const xhr = new XMLHttpRequest();
    
    //Open the object
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true);
    xhr.getResponseHeader('Content-type','application/json')

    //What to do on progress(optional)
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ready state is',xhr.readyState);
    // }

    //What to do when response is ready
    xhr.onload = function(){
        if(this.status==200){
            console.log(this.responseText);            
        }else{
            console.log("Some error occurred");
        }
    }
    params=`{"name":"test","salary":"123","age":"23"}`;
    //send the request
    xhr.send(params);

    console.log("We are done!");
}

function popHandler(){
    console.log('pophandler clicked');
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET','https://dummy.restapiexample.com/api/v1/employees',true);

    xhr.onload = function(){
        if(this.status===200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let data = obj.data;
            // console.log(data);
            let list = document.getElementById('list');
            str="";
            for(let i=0;i<data.length;i++){
                // console.log(obj.data[i]);
                str += `<li>${data[i].employee_name}</li>`;
            }
            list.innerHTML=str;
        }else{
            console.log('some error occurred ');
        }
    }

    xhr.send();
}