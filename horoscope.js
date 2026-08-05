const monthlyReadings={
  'Avinas':'Rugpjūtis kviečia kryptingai užbaigti vieną svarbų darbą. Nepamirškite palikti vietos spontaniškam susitikimui.',
  'Jautis':'Šį mėnesį stiprėja noras kurti jaukumą. Maža investicija į save ar namus suteiks daug džiaugsmo.',
  'Dvyniai':'Pokalbiai ir naujos pažintys atveria įdomias galimybes. Užsirašykite idėjas, kurios kartojasi.',
  'Vėžys':'Rugpjūtis padeda švelniai peržiūrėti prioritetus. Rinkitės tai, kas jums iš tiesų suteikia ramybės.',
  'Liūtas':'Jūsų metas spindėti. Drąsiai pristatykite idėją ar projektą, kurį ilgai brandinote.',
  'Mergelė':'Ateina aiškumo mėnuo. Maži tvarkos pokyčiai kasdienybėje atlaisvins vietos didesniems planams.',
  'Svarstyklės':'Draugystė ir bendradarbiavimas tampa svarbiausi. Nebijokite paprašyti pagalbos, kai jos reikia.',
  'Skorpionas':'Dėmesys krypsta į ambicijas. Nuoseklus žingsnis kasdien padės pastebėti apčiuopiamą pažangą.',
  'Šaulys':'Norisi praplėsti akiratį. Nauja knyga, kelionė ar kursas gali tapti šio mėnesio atradimu.',
  'Ožiaragis':'Mėnuo palankus finansų ir ilgalaikių planų peržiūrai. Aiškus planas suteiks daugiau laisvės.',
  'Vandenis':'Ryšiai yra šio mėnesio raktas. Atviras pokalbis gali pakeisti seną situacijos matymą.',
  'Žuvys':'Skirkite dėmesio kasdieniam ritmui ir poilsiui. Kūnas bei vaizduotė padėkos už lėtesnį tempą.'
};
let horoscopePeriod='daily';
document.querySelectorAll('.horoscope-tabs button').forEach(button=>button.addEventListener('click',()=>{horoscopePeriod=button.dataset.period;document.querySelectorAll('.horoscope-tabs button').forEach(item=>item.classList.toggle('active',item===button));const active=document.querySelector('.zodiac-grid button.active');if(active)active.click();}));
document.querySelector('#zodiac-grid').addEventListener('click',event=>{const sign=event.target.closest('button');if(!sign||horoscopePeriod==='daily')return;window.setTimeout(()=>{const name=sign.querySelector('strong').textContent;const reading=document.querySelector('#daily-reading');reading.innerHTML=`<p class="reading-period">${name} · rugpjūčio mėnesio horoskopas</p><h3>${monthlyReadings[name]}</h3><p class="premium-locked">Pilnoje versijoje: santykiai, darbai, pinigai ir palankiausios mėnesio dienos.</p><button class="unlock-inline open-paywall">Atrakinti pilną mėnesio horoskopą</button>`;},0)});
