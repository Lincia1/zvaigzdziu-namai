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
  vanduo:{preview:'Vanduo sapnuose dažnai siejamas su emocijomis ir jų tėkme.',full:'Vanduo sapnuose dažnai siejamas su emocijomis ir jų tėkme. Ramus vanduo gali simbolizuoti vidinę pusiausvyrą, o audringas – stipresnius jausmus ar pokyčius. Svarbu prisiminti, kaip jauteisi sapne ir koks buvo vanduo.'},
  šuo:{preview:'Šuo dažnai simbolizuoja draugystę, ištikimybę arba pasitikėjimą.',full:'Šuo dažnai simbolizuoja draugystę, ištikimybę arba poreikį labiau pasitikėti savo aplinka. Draugiškas šuo gali priminti apie artimą žmogų, o grėsmingas – apie ribas ar nepasitikėjimą. Sapno nuotaika čia ypač svarbi.'},
  dantys:{preview:'Dantų sapnai neretai pasirodo pokyčių ar nerimo laikotarpiais.',full:'Dantų sapnai neretai pasirodo pokyčių ar nerimo laikotarpiais. Jie gali būti siejami su pasitikėjimu savimi, išvaizda, bendravimu ar jausmu, kad prarandama kontrolė. Pažiūrėkime, kas šiuo metu tavo gyvenime keičiasi.'},
  katė:{preview:'Katė sapne dažnai siejama su intuicija, savarankiškumu ir paslaptimi.',full:'Katė sapne dažnai siejama su intuicija, savarankiškumu ir paslaptimi. Meili katė gali simbolizuoti artumą ir švelnumą, o besislepianti ar agresyvi – nepasitikėjimą arba neįvardytus jausmus. Atkreipk dėmesį į katės elgesį ir savo emocijas.'},
  ugnis:{preview:'Ugnis sapnuose gali simbolizuoti energiją, aistrą arba didelį pokytį.',full:'Ugnis sapnuose gali simbolizuoti energiją, aistrą arba didelį pokytį. Šilta, jauki ugnis gali reikšti saugumą, o nekontroliuojama liepsna – stiprias emocijas ar situaciją, kurią sunku suvaldyti.'},
  gyvatė:{preview:'Gyvatė dažnai siejama su pokyčiu, atsargumu ir paslėptomis baimėmis.',full:'Gyvatė dažnai siejama su pokyčiu, atsargumu ir paslėptomis baimėmis. Kartais ji simbolizuoja atsinaujinimą, nes gyvatė keičia odą. Svarbu, ar sapne jautei baimę, smalsumą ar ramybę.'}
};

const names={
  austėja:{preview:'Austėja – lietuvių mitologijoje su bitėmis, šeimos gerove ir globa siejamas vardas.',full:'Austėja – lietuvių mitologijoje su bitėmis, šeimos gerove ir globa siejamas vardas. Vardas dažnai interpretuojamas per darbštumo, rūpestingumo ir šeimos jaukumo simboliką. Vardo istorija gražiai siejasi su lietuviška kultūra.'},
  lina:{preview:'Lina – trumpas, skambus vardas, siejamas su lietuvišku žodžiu „linas“ ir natūralumu.',full:'Lina – trumpas, skambus vardas, siejamas su lietuvišku žodžiu „linas“ ir natūralumu. Simboliškai šis vardas gali būti siejamas su paprastumu, švelnumu ir vidine tvirtybe. Vardo reikšmę galima pažvelgti ir per jo skambesį bei kultūrinį kontekstą.'},
  lukas:{preview:'Lukas – tradicinis vardas, dažnai siejamas su šviesos ir aiškumo simbolika.',full:'Lukas – tradicinis vardas, dažnai siejamas su šviesos ir aiškumo simbolika. Vardas yra paplitęs daugelyje Europos šalių ir turi ilgą istoriją. Simboliškai jis dažnai aiškinamas kaip ryžtingumo ir aiškios krypties vardas.'},
  emilija:{preview:'Emilija – lotyniškos kilmės vardas, dažnai siejamas su atkaklumu ir noru tobulėti.',full:'Emilija – lotyniškos kilmės vardas, dažnai siejamas su atkaklumu ir noru tobulėti. Vardo istorijoje slypi stipri ištvermės ir pastangų simbolika. Tai vardas, kurį galima interpretuoti kaip veržlumo ir kruopštumo derinį.'},
  matas:{preview:'Matas – hebrajiškos kilmės vardas, tradiciškai aiškinamas kaip „Dievo dovana“.',full:'Matas – hebrajiškos kilmės vardas, tradiciškai aiškinamas kaip „Dievo dovana“. Vardas turi seną biblinę istoriją ir daugelyje kultūrų išliko iki šių dienų. Simboliškai jis siejamas su dėkingumu, ramybe ir prasme.'},
  gabija:{preview:'Gabija – lietuvių mitologijoje su ugnimi ir namų židiniu siejamas vardas.',full:'Gabija – lietuvių mitologijoje su ugnimi ir namų židiniu siejamas vardas. Šio vardo simbolikoje dažnai išryškėja namų šiluma, apsauga ir gyvybingumas. Tai vienas ryškiausių lietuviškos mitologinės tradicijos vardų.'},
  nojus:{preview:'Nojus – hebrajiškos kilmės vardas, tradiciškai siejamas su ramybe ir atokvėpiu.',full:'Nojus – hebrajiškos kilmės vardas, tradiciškai siejamas su ramybe ir atokvėpiu. Vardas turi stiprią biblinę istoriją ir dažnai simboliškai siejamas su ištverme, nauja pradžia bei saugumu.'}
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

function normalizeSearch(value){
  return value.trim().toLocaleLowerCase('lt-LT').normalize('NFD').replace(/[\u0300-\u036f]/g,'');
}

const nameAliases={
  klaudija:{preview:'Klaudija – švelniai skambantis vardas, kurio interpretacijoje dera elegancija, smalsumas ir savarankiškumas.',full:'Klaudija – švelniai skambantis vardas, kurio interpretacijoje dera elegancija, smalsumas ir savarankiškumas. Simboliškai šis vardas gali būti siejamas su žmogumi, kuris moka pastebėti detales, turi savo nuomonę ir vertina artimus ryšius. Vardo interpretacija čia yra pramoginė ir paremta simbolika, o ne asmens charakterio nustatymas.'}
};

const dreamAliases={
  paukstis:{preview:'Paukštis sapne dažnai siejamas su laisve, naujienomis, mintimis ir noru pakilti virš kasdienių rūpesčių.',full:'Paukštis sapne dažnai siejamas su laisve, naujienomis, mintimis ir noru pakilti virš kasdienių rūpesčių. Skrendantis paukštis gali simbolizuoti judėjimą pirmyn, o narve esantis – ribojamą laisvę ar nepasakytą norą. Sapno prasmę labiausiai papildo tavo jausmas sapne.'}
};

function generatedNameEntry(raw){
  const name=raw.trim();
  if(!name) return null;
  const first=name.charAt(0).toLocaleUpperCase('lt-LT')+name.slice(1);
  return {
    preview:`${first} – trumpa nemokama vardo interpretacija pagal jo skambesį, nuotaiką ir simboliką. Ši ištrauka sugeneruota pagal tavo įvestą vardą, todėl gali ieškoti ir vardo, kurio nėra populiariausių sąraše.`,
    full:`${first} – išsamesnėje simbolinėje interpretacijoje dera savitumas, smalsumas ir asmeninis ryžtas. Vardo skambesys gali priminti apie žmogų, kuris nori atrasti savo kelią, vertina artimus ryšius ir nebijo pradėti iš naujo. Tai pramoginė interpretacija, todėl ji nėra skirta tiksliai apibūdinti konkretaus žmogaus charakterį ar gyvenimą.`
  };
}

function generatedDreamEntry(raw){
  const word=raw.trim();
  if(!word) return null;
  const w=normalizeSearch(word);
  const categories=[
    {keys:['vand','jura','ezer','lietus','banga','basein'],preview:'Šis sapno simbolis dažnai gali būti siejamas su emocijomis, jų kaita ir vidine būsena.',full:'Šis sapno simbolis gali būti siejamas su emocijomis, jų kaita ir vidine būsena. Ramus vaizdas dažnai interpretuojamas kaip pusiausvyra, o audringas – kaip stipresni jausmai ar pokyčiai. Pagalvok, ką tuo metu jautei ir kas vyksta tavo kasdienybėje.'},
    {keys:['nam','but','kamb','dur','lang'],preview:'Namų ir erdvių simboliai sapnuose dažnai siejami su saugumu, asmenine erdve ir gyvenimo pokyčiais.',full:'Namų ir erdvių simboliai sapnuose dažnai siejami su saugumu, asmenine erdve ir gyvenimo pokyčiais. Nauja ar nepažįstama vieta gali simbolizuoti naują etapą, o pažįstami namai – grįžimą prie svarbių prisiminimų ar jausmų.'},
    {keys:['kel','auto','masin','traukin','lektuv','skryd'],preview:'Kelionės simboliai sapnuose dažnai siejami su kryptimi, sprendimais ir noru keisti kasdienybę.',full:'Kelionės simboliai sapnuose dažnai siejami su kryptimi, sprendimais ir noru keisti kasdienybę. Važiavimas ar skridimas gali priminti apie judėjimą pirmyn, o pasiklydimas – apie neapsisprendimą. Svarbu, ar kelionė buvo maloni, ar kėlė nerimą.'},
    {keys:['gyvat','vor','bite','pauk','arkl','kate','suo','vilk','liut','mešk','gyvun'],preview:'Gyvūno simbolis sapne dažnai siejamas su instinktais, santykiais ir tuo, kaip jautiesi tam tikroje situacijoje.',full:'Gyvūno simbolis sapne dažnai siejamas su instinktais, santykiais ir tavo reakcijomis į aplinką. Draugiškas gyvūnas gali priminti apie artumą ar pasitikėjimą, o grėsmingas – apie ribas, baimę ar įtampą. Reikšmę labai keičia gyvūno elgesys ir tavo jausmas sapne.'},
    {keys:['dant','plauk','krau','liga','skaud'],preview:'Kūno simboliai sapnuose dažnai pasirodo nerimo, pokyčių ar didesnio dėmesio sau laikotarpiais.',full:'Kūno simboliai sapnuose dažnai pasirodo nerimo, pokyčių ar didesnio dėmesio sau laikotarpiais. Jie gali simboliškai atspindėti pasitikėjimą savimi, pažeidžiamumą, nuovargį ar norą kažką pakeisti. Sapno nereikėtų vertinti kaip medicininės prognozės.'},
    {keys:['ugni','gaisr','dūm','dumu','saul','žaib','snieg','led','audr'],preview:'Gamtos ir stichijų simboliai dažnai siejami su stipriomis emocijomis, energija ir pokyčiais.',full:'Gamtos ir stichijų simboliai dažnai siejami su stipriomis emocijomis, energija ir pokyčiais. Šviesa ar šiluma gali simbolizuoti gyvybingumą, o audra ar ugnis – stiprų vidinį judėjimą. Pagalvok, ar sapne jautei ramybę, baimę, susižavėjimą ar įtampą.'}
  ];
  const match=categories.find(c=>c.keys.some(k=>w.includes(k)));
  if(match) return {preview:`${word.charAt(0).toLocaleUpperCase('lt-LT')+word.slice(1)}. ${match.preview}`,full:`${word.charAt(0).toLocaleUpperCase('lt-LT')+word.slice(1)}. ${match.full}`};
  return {preview:`${word.charAt(0).toLocaleUpperCase('lt-LT')+word.slice(1)} sapne gali būti interpretuojamas kaip asmeninių minčių, emocijų ar pokyčių simbolis.`,full:`${word.charAt(0).toLocaleUpperCase('lt-LT')+word.slice(1)} sapne gali būti interpretuojamas kaip asmeninių minčių, emocijų ar pokyčių simbolis. Jo reikšmė gali priklausyti nuo to, kas vyko sapne, kokius žmones ar vietas matei ir kokias emocijas patyrei. Kartais vienas simbolis tėra dienos įspūdžių atspindys, todėl verta žiūrėti į visą sapno istoriją.`};
}

function findEntry(type,raw){
  const data=type==='dream'?dreams:names;
  const key=normalizeSearch(raw);
  if(!key) return null;
  const source={...data,...(type==='dream'?dreamAliases:nameAliases)};
  const matchedKey=Object.keys(source).find(k=>normalizeSearch(k)===key);
  if(matchedKey) return source[matchedKey];
  return type==='dream' ? generatedDreamEntry(raw) : generatedNameEntry(raw);
}

function freePreview(type){
  const input=document.querySelector(`#${type}-search`);
  const result=document.querySelector(`#${type}-result`);
  const key=normalizeSearch(input.value);
  const item=findEntry(type,input.value);
  if(!item){
    result.innerHTML='<span>Įrašyk žodį arba vardą, kurio ieškai.</span>';
    return;
  }
  const label=type==='dream'?'sapno reikšmė':'vardo reikšmė';
  result.innerHTML=`<div class="free-preview">
    <strong>Trumpa nemokama ištrauka</strong>
    <p>${item.preview}</p>
    <div class="premium-locked-card">
      <strong>Pilna ${label} – mokama</strong>
      <span>Išsamesnė interpretacija, simbolika ir papildoma informacija.</span>
      <button type="button" class="unlock-inline open-paywall" data-premium-type="${type}" data-premium-key="${key}">Skaityti visą</button>
    </div>
  </div>`;
}

function revealPremium(type,key){
  const raw=key;
  const item=findEntry(type,raw);
  const result=document.querySelector(`#${type}-result`);
  if(!item||!result) return;
  const label=type==='dream'?'sapno reikšmė':'vardo reikšmė';
  result.innerHTML=`<div class="free-preview premium-revealed">
    <strong>Visa ${label}</strong>
    <p>${item.full}</p>
  </div>`;
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
