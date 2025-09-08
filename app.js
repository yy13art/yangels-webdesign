  // плавный скролл по якорям
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      if(id.length>1){
        const el=document.querySelector(id);
        if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});} }
    });
  });

  // простая отправка формы: подготовим текст для TG/почты и предложим скопировать
  function sendBrief(e){
    e.preventDefault();
    const f=e.target;
    const name=f.name.value.trim();
    const contact=f.contact.value.trim();
    const about=f.about.value.trim();
    const text = `Новая заявка на сайт/бренд%0AИмя: ${encodeURIComponent(name)}%0AКонтакт: ${encodeURIComponent(contact)}%0AЗадача: ${encodeURIComponent(about)}`;
    // можно заменить на свой tg bot/api позже. пока — редирект в тг с черновиком сообщения
    const tg = `https://t.me/yo_dudee?text=${text}`;
    const status=document.getElementById('formStatus');
    status.textContent='Черновик сообщения готов — открою Telegram в новом окне.';
    window.open(tg,'_blank');
  }
