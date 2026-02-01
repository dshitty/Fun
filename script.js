const btn= document.querySelector('.btn1');
const form1=document.querySelector('.container')
const sim=document.querySelector('.sim')
const pop=document.querySelector('.pop')

btn.addEventListener('click',()=>{
  form1.style.display='none';
  sim.style.display='inline-block';
  pop.style.display='inline-block'
});
