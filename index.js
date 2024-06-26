const input=document.querySelector('input')
const button=document.querySelector('button')
const boxes=document.querySelector('.boxes')

button.addEventListener('click',()=>{
    let arr=input.value.split(',')
    boxes.innerHTML=``
    arr.forEach((i)=>{
        console.log();
      boxes.innerHTML+=`<div style="width:200px;height:200px;background:${i};margin:50px+15px"></div>`
    })
})