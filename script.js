const val =  document.querySelector('.checklist_input'),
      addBtn = document.querySelector('.checklist_btn'),
      task =  document.querySelectorAll('.checklist_subheader'),
      message = document.querySelector('.checklist_count'),
      clear = document.querySelector('.checklist_clear'),
      delite = document.querySelectorAll('.checklist_button');

let counter = 0;

addBtn.addEventListener('click',()=> {
    counter++;
    addTask(counter - 1);  
})

clear.addEventListener('click',() => deliteAll());

delite.forEach((item,i)=>{
    item.addEventListener('click', () =>{
        task[i].innerText= '';
        
        if(counter == 0 ){
            message.innerText= `You have padding 0 task`;
        }else{
            counter = counter - 1 ;
            message.innerText= `You have padding ${counter} task`;
        }
        task[i].innerText= task[counter].innerText;
        
        if(task[counter].innerText = ''){
            console.log('dfsdfsdf');
        }
    })
})

function addTask(count){
    if(counter > 5){
        alert('Oh, maybe that is enough for today?');
    }else{
        task[count].innerText= val.value;
        message.innerText= `You have padding ${count+1} task`;
        
    }
    val.value = '';
}

function deliteAll(){
   for(let i = 0 ;i<= 5;i++){
        task[i].innerText= '';
        message.innerText= `You have padding 0 task`;
        counter = 0;
   } 
}














