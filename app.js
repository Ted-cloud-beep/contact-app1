const btnOpenModal=document.querySelector('.btn-open-modal');
const btnCancel=document.querySelector('.btn-cancel');
const btnAdd=document.querySelector('.btn-add');
const modal=document.querySelector('.modal')
const blackBackground=document.querySelector('.full');
const input1=document.querySelector('.input-1');
const input2=document.querySelector('.input-2');
const input3=document.querySelector('.input-3');
const listContainer=document.querySelector('.list-container ul');

const contacts=[];


function popup(){
  modal.classList.add('show');
  blackBackground.classList.add('visible');
  //toggleBackground();

}
const test=()=>{
  alert('test')
}
function toggleBackground(){
  blackBackground.classList.toggle('full');
}
const close=()=>{
  modal.classList.remove('show');
  blackBackground.classList.remove('visible');
  //toggleBackground();
}
const deleteList=(ID)=>{
  let count=-1;
  for (var contact of contacts) {
    count++;
    if(contact.id===ID){
      break;
    }
  }
  contacts.splice(count,1);
  listContainer.children[count].remove();
  console.log(count);
}
const renderList=(id,inputList1,inputList2,inputList3)=>{
  const list=document.createElement('li');
  list.className='vision';
  list.innerHTML=`${inputList1} &nbsp; &nbsp; &nbsp; &nbsp;  | ${inputList2} &nbsp; &nbsp; &nbsp; &nbsp;   | ${inputList3}
  <button type="button" name="button">Delete</button>`;
  listContainer.append(list);
  const btn=list.querySelector('button');
  btn.addEventListener('click',deleteList.bind(null,id))
  const lists=document.querySelectorAll('li');
  const searchInput=document.querySelector('.search');
  searchInput.addEventListener('input',(e)=>{
    for (let i = 0; i < lists.length; i++) {
      let a=lists[i];
      // console.log(a.innerHTML);
      if(a.innerHTML.includes(e.target.value) ||
        a.innerHTML.toLowerCase().includes(e.target.value) ||a.innerHTML.toUpperCase().includes(e.target.value) ){
        a.style.display='';
      }
      else{
        a.style.display='none';
      }
    }

  })
}
const AddList=()=>{
    let inputList1=input1.value;
    let inputList2=input2.value;
    let inputList3=input3.value;
    if (inputList1.trim()=='' || inputList2.trim()=='' || inputList3.trim()=='') {
      alert('Please write some input');
      return
    }
    const obj={
      id:Math.random(),
      name:inputList1,
      phoneNum:inputList2,
      address:inputList3
    }
    input1.value='';
    input2.value='';
    input3.value='';
    contacts.push(obj);
    console.log(contacts);
    renderList(obj.id,obj.name,obj.phoneNum,obj.address);
    close();
}
btnAdd.addEventListener('click',AddList);
btnOpenModal.addEventListener('click',popup);
btnCancel.addEventListener('click',close);
