document.addEventListener('DOMContentLoaded',()=>{
  const body=document.body;
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.main-nav');
  const toast=document.querySelector('.toast');
  const showToast=(message)=>{toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3200)};

  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));

  const closeModal=(modal)=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');body.classList.remove('modal-open');};
  document.querySelectorAll('[data-modal-open]').forEach(button=>button.addEventListener('click',()=>{const modal=document.getElementById(button.dataset.modalOpen);modal.classList.add('open');modal.setAttribute('aria-hidden','false');body.classList.add('modal-open');modal.querySelector('input,select,textarea')?.focus();}));
  document.querySelectorAll('[data-modal-close]').forEach(button=>button.addEventListener('click',event=>{event.preventDefault();closeModal(button.closest('.modal'));}));
  document.querySelectorAll('.modal').forEach(modal=>modal.addEventListener('click',event=>{if(event.target===modal)closeModal(modal);}));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')document.querySelectorAll('.modal.open').forEach(closeModal);});

  document.querySelectorAll('[data-demo-form]').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const modal=form.closest('.modal');closeModal(modal);form.reset();showToast('Démo enregistrée — cette action sera connectée à Django.');}));

  document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(item=>item.classList.remove('active'));document.querySelectorAll('.rank-panel').forEach(panel=>panel.classList.add('hidden'));tab.classList.add('active');document.getElementById(tab.dataset.tab)?.classList.remove('hidden');}));

  const sections=[...document.querySelectorAll('main section[id]')];
  const navLinks=[...document.querySelectorAll('.main-nav a')];
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));}}),{rootMargin:'-35% 0px -55% 0px'});
  sections.forEach(section=>observer.observe(section));

  const counters=document.querySelectorAll('.stats-strip b');
  const counterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting&&!entry.target.dataset.done){entry.target.dataset.done='true';const original=entry.target.textContent;const numeric=parseFloat(original);if(Number.isNaN(numeric))return;let current=0;const step=Math.max(numeric/24,.1);const timer=setInterval(()=>{current=Math.min(current+step,numeric);entry.target.innerHTML=Number.isInteger(numeric)?Math.round(current):current.toFixed(1);if(original.includes('%'))entry.target.innerHTML+=`<span>%</span>`;if(current>=numeric)clearInterval(timer);},35);}}),{threshold:.8});
  counters.forEach(counter=>counterObserver.observe(counter));
});