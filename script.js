const toggle=document.querySelector('#menuToggle');const nav=document.querySelector('#primaryNav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
const form=document.querySelector('.contact-form');
if(form&&location.protocol==='file:'){form.addEventListener('submit',event=>{event.preventDefault();alert('Form preview only. Deploy this folder to Netlify to receive inquiries.');});}
