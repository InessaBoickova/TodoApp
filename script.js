const val =  document.querySelector('.checklist_input'),
      addBtn = document.querySelector('.checklist_btn'),
      task =  document.querySelector('.checklist_task'),
      result = document.querySelector('.wrapper'),
      clear = document.querySelector('.checklist_clear');

let counter = 0;
function createCount(count){
    result.innerHTML =`<h4 class="checklist_count">You have padding ${count} task</h4>`
}
createCount(counter);

function addTask(count){
    let wrap = document.createElement('div');
    wrap.classList.add("checklist_case");
    wrap.id = count;
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
            createCount(task.childElementCount);  
        }) 
    })   
}  

function deliteAll(){
    for(let i = 1; i <= counter ; i++){
        document.getElementById(`${i}`).remove();
    } 
    counter = 0;
    createCount(counter);
}

val.addEventListener('keydown', function(e) {
    if (e.keyCode === 13 && (val.value != undefined && val.value != '')) {
        counter++;
        addTask(counter);  
        createCount(counter);
    }
});

clear.addEventListener('click',() => deliteAll());

addBtn.addEventListener('click',(e)=> {
    if(val.value != undefined && val.value != ''){
        counter++;
        addTask(counter);  
        createCount(counter);
    }
})


















