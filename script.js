const val =  document.querySelector('.checklist_input'),
      addBtn = document.querySelector('.checklist_btn'),
      task =  document.querySelector('.checklist_task'),
      result = document.querySelector('.wrapper'),
      clear = document.querySelector('.checklist_clear');

let counter = task.childElementCount;
function createCount(){
    result.innerHTML =`<h4 class="checklist_count">You have padding ${task.childElementCount} task</h4>`
}
createCount();

function addTask(){
    let wrap = document.createElement('div');
    wrap.classList.add("checklist_case");
    wrap.id = task.childElementCount;
    task.appendChild(wrap);
    wrap.innerHTML = `
        <div class="checklist_subheader">${val.value}</div>
        <button class="checklist_button"> </button>
    `
    val.value = '';
    let delite = document.querySelectorAll('.checklist_button');
    delite.forEach((item)=>{
        item.addEventListener('click',()=>{
            item.parentNode.remove();
            createCount(task.childElementCount)
        }) 
    })   
}  

function deliteAll(count){
    for(let i = 0; i < count ; i++){
        document.getElementById(`${i}`).remove();
    } 
    counter = 0;
    createCount();
}

val.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && (val.value != undefined && val.value != '')) {
        addTask();  
        createCount();
    }
});

clear.addEventListener('click',() => deliteAll(task.childElementCount));

addBtn.addEventListener('click',(e)=> {
    if(val.value != undefined && val.value != ''){
        addTask();  
        createCount();
    }
})



















