const val =  document.querySelector('.checklist_input'),
      addBtn = document.querySelector('.checklist_btn'),
      task =  document.querySelectorAll('.checklist_subheader'),
      result = document.querySelector('.wrapper');
      clear = document.querySelector('.checklist_clear'),
      delite = document.querySelectorAll('.checklist_button');

function createCount(count){
    if (count < 0){
        count = 0;
    }
    result.innerHTML =`<h4 class="checklist_count">You have padding ${count} task</h4>`
}

let counter = 0;
createCount(counter);

val.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && (val.value != undefined && val.value != '')) {
        counter++;
        addTask(counter - 1);  
        createCount(counter);
    }
});

addBtn.addEventListener('click',(e)=> {
    if(val.value != undefined && val.value != ''){
        counter++;
        addTask(counter - 1);  
        createCount(counter);
    }
})

clear.addEventListener('click',() => deliteAll());

delite.forEach((item,i)=>{
    item.addEventListener('click', () =>{
        counter = counter - 1 ;
        createCount(counter );
        for(let i = 0 ; i<= task.length;i++){
            task[i].innerHTML = task[i + 1].innerHTML;
            if (i === 2){
                task[3].innerHTML= task[4].innerHTML;
            }else if ( i === 3){
                task[task.length - 1].innerHTML = ``;
            }  
        }
       
    })
})

function addTask(count){
    if(counter > 5){
       alert('maybe that is it for today ?')
       counter = 5;
    }else{
        task[count].innerHTML= `<h3> ${val.value}</h3>`;
        val.value = '';
    }
}

function deliteAll(){
    counter = 0;
    createCount(counter);
    for(let i = 0 ; i <= task.length ; i++){
        task[i].innerHTML= ``;
    } 
}


















