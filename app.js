const signs=[
  ['♈','Avinas','03.21–04.19','Imkitės vieno mažo, bet drąsaus žingsnio – jis gali pakeisti visą dienos kryptį.'],
  ['♉','Jautis','04.20–05.20','Neskubėkite. Šiandien didžiausia stiprybė slypi jūsų ramybėje ir nuoseklume.'],
  ['♊','Dvyniai','05.21–06.20','Pokalbis, kurio nesitikėjote, gali įkvėpti naujai idėjai. Būkite smalsūs.'],
  ['♋','Vėžys','06.21–07.22','Skirkite laiko tam, kas jus pripildo jaukumo. Maža pertrauka yra produktyvi.'],
  ['♌','Liūtas','07.23–08.22','Leiskite sau būti matomiems – jūsų entuziazmas šiandien užkrečiamas.'],
  ['♍','Mergelė','08.23–09.22','Atlaisvinkite vietos galvoje: vienas užrašytas planas suteiks daug aiškumo.'],
  ['♎','Svarstyklės','09.23–10.22','Ieškokite pusiausvyros tarp „reikia“ ir „noriu“. Abu balsai svarbūs.'],
  ['♏','Skorpionas','10.23–11.21','Pasitikėkite nuojauta, ypač spręsdami mažą, bet seniai atidėtą klausimą.'],
  ['♐','Šaulys','11.22–12.21','Naujas maršrutas ar nauja mintis atneš gaivaus oro į įprastą dieną.'],
  ['♑','Ožiaragis','12.22–01.19','Įvertinkite jau nuveiktus darbus. Jūsų kantrybė duoda daugiau nei matote.'],
  ['♒','Vandenis','01.20–02.18','Pasidalinkite netikėta idėja – ji gali rasti puikų bendraminčių ratą.'],
  ['♓','Žuvys','02.19–03.20','Kūryba šiandien yra jūsų kompasas. Sekite tai, kas sužadina vaizduotę.']
];

const dreams={
  vanduo:'Vanduo sapnuose dažnai siejamas su emocijomis ir jų tėkme. Prisiminkite, ar jis buvo ramus, ar audringas.',
  šuo:'Šuo dažnai simbolizuoja draugystę, ištikimybę arba poreikį labiau pasitikėti savo aplinka.',
  dantys:'Dantų sapnai neretai pasirodo pokyčių ar nerimo laikotarpiais. Tai kvietimas švelniai pasirūpinti savimi.'
};

const names={
  austėja:'Austėja – lietuvių mitologijoje su bitėmis, šeimos gerove ir globa siejamas vardas.',
  lukas:'Lukas – vardas, siejamas su šviesa; jo kilmė siejama su graikų kalbos žodžiu „šviesus“.',
  emilija:'Emilija – lotyniškos kilmės vardas, dažnai siejamas su atkaklumu ir noru tobulėti.',
  matas:'Matas – hebrajiškos kilmės vardas, tradiciškai aiškinamas kaip „Dievo dovana“.',
  gabija:'Gabija – lietuvių mitologijos ugnies ir namų židinio globėjos vardas.',
  nojus:'Nojus – hebrajiškos kilmės vardas, siejamas su ramybe ir atokvėpiu.'
};

const grid=document.querySelector('#zodiac-grid');
const reading=document.querySelector('#daily-reading');
const today=new Intl.DateTimeFormat('lt-LT',{year:'numeric',month:'long',day:'numeric'}).format(new Date());
const heroDate=document.querySelector('#hero-date');
if(heroDate) heroDate.textContent=today;

signs.forEach(([symbol,name,date,text])=>{
  const b=document.createElement('button');
  b.innerHTML=`<span class="zodiac-symbol">${symbol}</span><strong>${name}</strong><small>${date}</small>`;
  b.addEventListener('click',()=>{
    document.querySelectorAll('.zodiac-grid button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    reading.innerHTML=`<p class="reading-label">${name} · DIENOS HOROSKOPAS</p><p class="reading-date">${today}</p><h3>${text}</h3>`;
    reading.classList.add('visible');
  });
  grid.append(b);
});

document.querySelector('#show-all-signs').addEventListener('click',()=>grid.scrollIntoView({behavior:'smooth',block:'center'}));

function freePreview(type){
  const input=document.querySelector(`#${type}-search`);
  const result=document.querySelector(`#${type}-result`);
  const data=type==='dream'?dreams:names;
  const key=input.value.trim().toLocaleLowerCase('lt');
  const value=data[key];
  if(!value){
    result.textContent=`Kol kas neturime įrašo apie „${input.value.trim()||'šį žodį'}“. Ši skiltis netrukus pildysis.`;
    return;
  }
  const firstSentence=value.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() || value;
  const label=type==='dream'?'sapno reikšmė':'vardo reikšmė';
  result.innerHTML=`<div class="free-preview"><strong>Trumpa nemokama ištrauka</strong><p>${firstSentence}</p><div class="premium-locked-card"><strong>Pilna ${label} – mokama</strong><span>Perskaityk išsamesnę interpretaciją ir papildomą informaciją.</span><button type="button" class="unlock-inline open-paywall" data-premium-type="${type}">Skaityti visą</button></div></div>`;
}

document.querySelector('#dream-button').onclick=()=>freePreview('dream');
document.querySelector('#name-button').onclick=()=>freePreview('name');
document.querySelectorAll('[data-dream]').forEach(b=>b.onclick=()=>{document.querySelector('#dream-search').value=b.dataset.dream;freePreview('dream')});
document.querySelectorAll('[data-name]').forEach(b=>b.onclick=()=>{document.querySelector('#name-search').value=b.dataset.name;freePreview('name')});

document.querySelectorAll('.quiz-options button').forEach(b=>b.onclick=()=>{document.querySelector('#quiz-result').textContent=`Tavo rezultatas: ${b.dataset.result}. Geriausiai pailsi klausydamasis savęs.`});
document.querySelector('#newsletter-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#form-message').textContent='Ačiū! Pirmasis laiškas netrukus pasieks tavo paštą.';e.target.reset()});
const menu=document.querySelector('.menu-button'),nav=document.querySelector('#nav');
menu.onclick=()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)};
nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();
