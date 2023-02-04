let input=document.querySelector('#text');
let btn=document.querySelector('#textbtn');
let tasks=document.querySelector('.tasks');

btn.addEventListener('click',()=>{
    let div=document.createElement('div');
    div.classList.add('lists');
    let lis=document.createElement('li');
    lis.innerText=`${input.value}`;
    div.appendChild(lis);
    let checkbtn=document.createElement('button');
    checkbtn.innerHTML='<i class="fa-solid fa-check ch"></i>';
    div.appendChild(checkbtn);
    let deletebtn=document.createElement('button');
    deletebtn.innerHTML='<i class="fa-solid fa-trash-can de"></i>';
    div.appendChild(deletebtn);
    if(input.value===""){
        alert('Enter some value:(');
    }else{
    tasks.appendChild(div);

    }
    input.value="";
    checkbtn.addEventListener('click',()=>{
        checkbtn.parentElement.style.textDecoration='line-through';
    });
    deletebtn.addEventListener('click',(e)=>{
        e.target.parentElement.parentElement.remove();
    });
     
   
});