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
  const names={
austėja:{
preview:'Austėja – lietuvių kilmės vardas, siejamas su bitėmis, šeimos gerove, globa ir darbštumu.',
full:'Austėja – lietuvių mitologijoje siejama su bičių globėja ir šeimos gerove. Vardo simbolikoje atsiskleidžia darbštumas, rūpestingumas, šeimos jaukumas ir gebėjimas kurti saugią aplinką.'
},
lina:{
preview:'Lina – trumpas lietuviškas vardas, siejamas su linu, natūralumu, paprastumu ir švelnumu.',
full:'Lina – vardas, siejamas su lietuvišku žodžiu „linas“. Jo simbolikoje galima įžvelgti natūralumą, paprastumą, švelnumą ir vidinę tvirtybę. Tai vardas, kuriame dera ramybė ir atkaklumas.'
},
lukas:{
preview:'Lukas – tradicinis vardas, siejamas su šviesa, aiškumu ir ryžtingumu.',
full:'Lukas – plačiai paplitęs vardas, turintis ilgą istoriją. Jo simbolikoje dažnai išryškėja šviesa, aiškumas, ryžtas ir gebėjimas pasirinkti savo kelią.'
},
emilija:{
preview:'Emilija – vardas, siejamas su atkaklumu, ambicingumu ir noru tobulėti.',
full:'Emilija – lotyniškos kilmės vardas. Jo simbolikoje dažnai išryškėja atkaklumas, kruopštumas, ambicija ir noras pasiekti daugiau. Tai vardas, kuriame dera jautrumas ir stiprus vidinis užsispyrimas.'
},
matas:{
preview:'Matas – hebrajiškos kilmės vardas, tradiciškai aiškinamas kaip „Dievo dovana“.',
full:'Matas – senas hebrajiškos kilmės vardas, tradiciškai aiškinamas kaip „Dievo dovana“. Jo simbolikoje atsiskleidžia dėkingumas, ramybė, pasitikėjimas ir gyvenimo prasmės paieškos.'
},
gabija:{
preview:'Gabija – lietuvių mitologinis vardas, siejamas su ugnimi, namų židiniu ir apsauga.',
full:'Gabija – lietuvių mitologijoje su namų židiniu ir ugnimi siejama būtybė. Vardo simbolikoje išryškėja šiluma, gyvybingumas, apsauga, stipri valia ir gebėjimas saugoti tai, kas brangu.'
},
nojus:{
preview:'Nojus – hebrajiškos kilmės vardas, siejamas su ramybe, atokvėpiu ir nauja pradžia.',
full:'Nojus – hebrajiškos kilmės vardas, tradiciškai siejamas su ramybe ir atokvėpiu. Jo simbolikoje atsiskleidžia ištvermė, saugumas, gebėjimas išgyventi pokyčius ir pradėti naują gyvenimo etapą.'
},
laura:{
preview:'Laura – vardas, siejamas su lauru, pergale, garbe ir pasitikėjimu savimi.',
full:'Laura – vardas, siejamas su lotynišku lauro medžiu. Senovėje lauro vainikas simbolizavo pergalę ir garbę. Vardo simbolikoje galima įžvelgti ambiciją, pasitikėjimą savimi ir norą pasiekti užsibrėžtą tikslą.'
},
faustas:{
preview:'Faustas – lotyniškos kilmės vardas, siejamas su palankumu, sėkme ir geru likimu.',
full:'Faustas – lotyniškos kilmės vardas, siejamas su palankia lemtimi ir sėkme. Vardo simbolikoje išryškėja optimizmas, smalsumas, ryžtas ir noras išnaudoti gyvenimo suteikiamas galimybes.'
},
klaudija:{
preview:'Klaudija – lotyniškos kilmės vardas, siejamas su tvirtumu, santūrumu ir vidine stiprybe.',
full:'Klaudija – lotyniškos kilmės vardas. Jo simbolikoje galima įžvelgti santūrumą, stiprų charakterį, savarankiškumą ir gebėjimą išlaikyti savo kryptį net sudėtingomis aplinkybėmis.'
},
aleksiejus:{
preview:'Aleksiejus – graikiškos kilmės vardas, siejamas su gynėjo, globėjo ir saugotojo simbolika.',
full:'Aleksiejus – graikiškos kilmės vardas, siejamas su gynėjo ir saugotojo reikšme. Vardo simbolikoje atsiskleidžia atsakomybė, ištikimybė, stipri valia ir noras padėti artimiems žmonėms.'
},
andrius:{
preview:'Andrius – graikiškos kilmės vardas, tradiciškai siejamas su vyriškumu, drąsa ir stiprybe.',
full:'Andrius – graikiškos kilmės vardas. Tradiciškai jis siejamas su vyriškumu ir stiprybe. Simboliškai tai ryžto, drąsos, savarankiškumo ir gebėjimo veikti vardas.'
},
antanas:{
preview:'Antanas – senas vardas, siejamas su išskirtinumu, atkaklumu ir stipriu charakteriu.',
full:'Antanas – ilgametę istoriją turintis vardas. Jo simbolikoje galima įžvelgti atkaklumą, stabilumą, atsakomybę ir stiprų charakterį.'
},
artūras:{
preview:'Artūras – vardas, siejamas su drąsa, lyderyste, kilnumu ir ryžtu.',
full:'Artūras – ilga istorija pasižymintis vardas. Jo simbolikoje dažnai išryškėja drąsa, lyderystė, garbė, atsakomybė ir noras ginti tai, kas svarbu.'
},
darius:{
preview:'Darius – vardas, siejamas su stiprybe, ryžtu, atkaklumu ir gebėjimu siekti tikslo.',
full:'Darius – seną istoriją turintis vardas. Jo simbolikoje atsiskleidžia ryžtas, atsakomybė, atkaklumas ir noras kurti stabilų gyvenimą.'
},
dominykas:{
preview:'Dominykas – lotyniškos kilmės vardas, siejamas su priklausymu Dievui ir vidine ramybe.',
full:'Dominykas – lotyniškos kilmės vardas. Jo simbolikoje dažnai atsiskleidžia ramybė, atsakomybė, principingumas ir stiprus vidinis pasaulis.'
},
edvinas:{
preview:'Edvinas – germaniškos kilmės vardas, siejamas su turtais, draugyste ir sėkme.',
full:'Edvinas – germaniškos kilmės vardas. Jo simbolikoje galima įžvelgti draugiškumą, praktiškumą, siekį kurti gerovę ir stiprius ryšius su aplinkiniais.'
},
erikas:{
preview:'Erikas – skandinaviškos kilmės vardas, siejamas su valdžia, stiprybe ir lyderyste.',
full:'Erikas – skandinaviškos kilmės vardas, siejamas su galingo valdovo simbolika. Vardo energijoje atsiskleidžia savarankiškumas, ambicija, drąsa ir noras būti savo gyvenimo šeimininku.'
},
giedrius:{
preview:'Giedrius – lietuviškas vardas, siejamas su giedrumu, šviesa ir ramia nuotaika.',
full:'Giedrius – lietuviškas vardas, siejamas su giedru dangumi ir šviesia nuotaika. Jo simbolikoje atsiskleidžia optimizmas, atvirumas, ramybė ir gebėjimas į gyvenimą žvelgti šviesiau.'
},
ignas:{
preview:'Ignas – vardas, siejamas su vidine ugnimi, energija ir stipriu charakteriu.',
full:'Ignas – vardas, kurio simbolikoje galima įžvelgti vidinę ugnį, energiją, ryžtą ir stiprų charakterį. Tai vardas, tinkantis žmogui, kuris nebijo veikti ir siekti savo.'
},
jokūbas:{
preview:'Jokūbas – hebrajiškos kilmės vardas, siejamas su atkaklumu, ištverme ir gyvenimo kelio paieškomis.',
full:'Jokūbas – senas hebrajiškos kilmės vardas. Jo istorijoje svarbi atkaklumo ir gyvenimo kelio simbolika. Vardas gali būti siejamas su ištverme, ryžtu ir gebėjimu nepasiduoti.'
},
jonas:{
preview:'Jonas – hebrajiškos kilmės vardas, tradiciškai siejamas su malone ir Dievo dovana.',
full:'Jonas – vienas seniausių ir plačiausiai paplitusių vardų. Jo simbolikoje atsiskleidžia ramybė, gerumas, ištikimybė ir gebėjimas būti atrama kitiems.'
},
karolis:{
preview:'Karolis – vardas, siejamas su laisve, stipriu charakteriu ir savarankiškumu.',
full:'Karolis – germaniškos kilmės vardas. Jo simbolikoje galima įžvelgti savarankiškumą, stiprų charakterį, atsakomybę ir norą pačiam spręsti savo gyvenimo kryptį.'
},
mantas:{
preview:'Mantas – lietuviškas vardas, siejamas su sumanumu, ryžtu ir gebėjimu veikti.',
full:'Mantas – lietuviškas vardas, kurio simbolikoje galima įžvelgti sumanumą, praktiškumą, atkaklumą ir gebėjimą greitai prisitaikyti prie gyvenimo aplinkybių.'
},
martynas:{
preview:'Martynas – vardas, siejamas su kovingumu, drąsa ir stipria valia.',
full:'Martynas – lotyniškos kilmės vardas, siejamas su karo dievo Marso simbolika. Vardo energijoje atsiskleidžia drąsa, ryžtas, atkaklumas ir gebėjimas kovoti už tai, kas svarbu.'
},
paulius:{
preview:'Paulius – lotyniškos kilmės vardas, siejamas su kuklumu, ramybe ir vidine stiprybe.',
full:'Paulius – lotyniškos kilmės vardas. Jo simbolikoje atsiskleidžia santūrumas, išmintis, kantrybė ir gebėjimas išlaikyti savo vertybes.'
},
rokas:{
preview:'Rokas – vardas, siejamas su tvirtumu, stabilumu ir gebėjimu išlikti stipriam.',
full:'Rokas – vardas, kurio simbolikoje galima įžvelgti uolos tvirtumą. Tai stabilumo, ištvermės, patikimumo ir vidinės stiprybės simbolika.'
},
tadas:{
preview:'Tadas – vardas, siejamas su drąsa, atkaklumu ir stipriu charakteriu.',
full:'Tadas – seną istoriją turintis vardas. Jo simbolikoje galima įžvelgti atkaklumą, drąsą, ištikimybę ir gebėjimą laikytis savo pasirinkimų.'
},
tomas:{
preview:'Tomas – aramėjų kilmės vardas, siejamas su dvynio simbolika ir smalsumu.',
full:'Tomas – aramėjų kilmės vardas, tradiciškai siejamas su „dvynio“ reikšme. Jo simbolikoje galima įžvelgti smalsumą, gebėjimą abejoti ir ieškoti savo atsakymo.'
},
vaidas:{
preview:'Vaidas – lietuviškas vardas, siejamas su vedimu, kryptimi ir ryžtu.',
full:'Vaidas – lietuviškas vardas, kurio simbolikoje galima įžvelgti krypties, vedimo ir sprendimų priėmimo temą. Tai savarankiškumo ir ryžto simbolika.'
},
vilius:{
preview:'Vilius – vardas, siejamas su ryžtu, valia ir stipriu charakteriu.',
full:'Vilius – vardas, kurio simbolikoje išryškėja valia, ryžtas ir gebėjimas siekti pasirinkto tikslo. Tai savarankiškumo ir vidinės stiprybės simbolika.'
},
agne:{
preview:'Agnė – vardas, siejamas su tyrumu, nuoširdumu ir vidine ramybe.',
full:'Agnė – vardas, kurio simbolikoje dažnai išryškėja tyrumas, nuoširdumas, jautrumas ir vidinė ramybė. Kartu tai gali būti ir stipraus charakterio simbolis.'
},
akvilė:{
preview:'Akvilė – lotyniškos kilmės vardas, siejamas su erelio simbolika, laisve ir stiprybe.',
full:'Akvilė – lotyniškos kilmės vardas, siejamas su erelio simbolika. Joje atsiskleidžia laisvė, aukštas skrydis, ryžtas, savarankiškumas ir gebėjimas matyti plačiau.'
},
amelija:{
preview:'Amelija – vardas, siejamas su darbštumu, ryžtu ir atkaklumu.',
full:'Amelija – vardas, kurio simbolikoje atsiskleidžia darbštumas, atkaklumas, ambicija ir noras kurti geresnį gyvenimą. Tai švelnumo ir stiprios valios derinys.'
},
barbora:{
preview:'Barbora – senas vardas, siejamas su išskirtinumu, savarankiškumu ir stipriu charakteriu.',
full:'Barbora – ilga istorija pasižymintis vardas. Jo simbolikoje galima įžvelgti savarankiškumą, išskirtinumą, tvirtą nuomonę ir gebėjimą nebijoti būti savimi.'
},
beata:{
preview:'Beata – lotyniškos kilmės vardas, siejamas su laime, palaima ir pozityviu požiūriu.',
full:'Beata – lotyniškos kilmės vardas, siejamas su palaima ir laime. Jo simbolikoje atsiskleidžia optimizmas, šviesus požiūris ir gebėjimas pastebėti gyvenimo dovanas.'
},
diana:{
preview:'Diana – vardas, siejamas su gamta, laisve, nepriklausomybe ir stipria intuicija.',
full:'Diana – vardas, susijęs su senąja romėnų deivės simbolika. Joje atsiskleidžia gamtos artumas, nepriklausomybė, intuicija ir stiprus moteriškas charakteris.'
},
ieva:{
preview:'Ieva – biblinis vardas, siejamas su gyvybe, pradžia ir moteriška stiprybe.',
full:'Ieva – senas biblinis vardas, siejamas su gyvybe. Jo simbolikoje atsiskleidžia nauja pradžia, gyvybingumas, smalsumas ir gebėjimas kurti naują gyvenimo etapą.'
},
inga:{
preview:'Inga – vardas, siejamas su stiprybe, savarankiškumu ir vidiniu stabilumu.',
full:'Inga – vardas, kurio simbolikoje galima įžvelgti vidinį stabilumą, savarankiškumą ir gebėjimą išlaikyti savo nuomonę. Tai ramios, bet tvirtos asmenybės simbolika.'
},
justina:{
preview:'Justina – vardas, siejamas su teisingumu, sąžiningumu ir stipriu vertybių jausmu.',
full:'Justina – lotyniškos kilmės vardas. Jo simbolikoje atsiskleidžia teisingumas, sąžiningumas, principingumas ir noras elgtis taip, kaip atrodo teisinga.'
},
kamile:{
preview:'Kamilė – vardas, siejamas su atsidavimu, jautrumu ir vidine elegancija.',
full:'Kamilė – vardas, kurio simbolikoje galima įžvelgti atsidavimą, jautrumą, rūpestingumą ir stiprų ryšį su artimais žmonėmis.'
},
karolina:{
preview:'Karolina – vardas, siejamas su laisve, savarankiškumu ir stipria valia.',
full:'Karolina – vardas, kurio simbolikoje atsiskleidžia laisvės poreikis, savarankiškumas, stipri valia ir gebėjimas pačiai pasirinkti savo gyvenimo kelią.'
},
kristina:{
preview:'Kristina – vardas, siejamas su tikėjimu, ištikimybe ir stipriomis vertybėmis.',
full:'Kristina – vardas, turintis ilgą krikščionišką istoriją. Jo simbolikoje išryškėja ištikimybė, vertybės, jautrumas ir gebėjimas laikytis to, kuo tiki.'
},
monika:{
preview:'Monika – vardas, siejamas su išmintimi, ramybe ir stipriu vidiniu pasauliu.',
full:'Monika – vardas, kurio simbolikoje galima įžvelgti išmintį, santūrumą, jautrumą ir stiprų vidinį pasaulį. Tai žmogaus, kuris daug jaučia ir daug apmąsto, simbolika.'
},
natalija:{
preview:'Natalija – vardas, siejamas su gimimu, nauja pradžia ir gyvenimo džiaugsmu.',
full:'Natalija – lotyniškos kilmės vardas, siejamas su gimimu ir naujo gyvenimo pradžia. Jo simbolikoje atsiskleidžia atsinaujinimas, gyvybingumas ir gebėjimas pradėti iš naujo.'
},
rūta:{
preview:'Rūta – lietuviškas vardas, siejamas su augalu, gamta, ištverme ir lietuviška tradicija.',
full:'Rūta – lietuviškas vardas, siejamas su rūtos augalu ir lietuviška kultūra. Vardo simbolikoje atsiskleidžia gamtos artumas, ištvermė, paprastumas ir tradicijų puoselėjimas.'
},
simona:{
preview:'Simona – vardas, siejamas su klausymusi, jautrumu ir gebėjimu suprasti kitus.',
full:'Simona – vardas, turintis seną tradiciją. Jo simbolikoje galima įžvelgti jautrumą, gebėjimą klausytis, suprasti kitus ir išlaikyti stiprų emocinį ryšį.'
},
viktorija:{
preview:'Viktorija – lotyniškos kilmės vardas, tiesiogiai siejamas su pergale.',
full:'Viktorija – lotyniškos kilmės vardas, siejamas su pergalės simbolika. Vardo energijoje atsiskleidžia ambicija, atkaklumas, pasitikėjimas savimi ir noras įveikti kliūtis.'
},
vilma:{
preview:'Vilma – vardas, siejamas su ryžtu, valia ir stipriu charakteriu.',
full:'Vilma – vardas, kurio simbolikoje išryškėja valia, ryžtas, savarankiškumas ir gebėjimas nepasiduoti. Tai stiprios, bet jautrios asmenybės simbolika.'
}
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
