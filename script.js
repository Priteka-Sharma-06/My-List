
  let form=document.querySelector("form");
  let count=0;
  let remain=0;
  
  function update(){
  document.querySelector("#remain").textContent=`${remain} of ${count} remaining `
    
  };
  
  
  
  form.addEventListener("submit", function (event){
    event.preventDefault();
    
     let input=document.querySelector("#input").value.trim();
     
    if(input==="") return;
    count++;
    remain++;
    let item=document.createElement("li");
    item.className="list";
    
    let checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.className="checkbtn";
    
    let text=document.createElement("span");
    text.textContent=input;
    
    let cancelbtn=document.createElement("button");
    cancelbtn.textContent="×";
    cancelbtn.className="cancelbtn";
    
    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(cancelbtn);
    
    
    let tasklist=document.querySelector("#list");
    tasklist.appendChild(item);
    
    
    document.querySelector("#input").value="";
    
    
    
      
    checkbox.addEventListener("change",function(){
      if(checkbox.checked){
      text.classList.add("done");
      remain--;
      update();
      }else{
        text.classList.remove("done");
        remain++;
        update();
      }
    }
      
    );
 
    
    cancelbtn.addEventListener("click", function (){
      if(!checkbox.checked)
      {
        remain--;
      }
      count--;
      item.remove();
      update();
    
  });
  
  update();

}); 
  
