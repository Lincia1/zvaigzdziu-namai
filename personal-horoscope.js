const personalForm = document.querySelector('#personal-horoscope-form');

const personalPreviewTexts = {
  'Avinas': 'Tavo energija šiuo metu labiausiai atsiskleidžia tada, kai turi aiškią kryptį. Nemokama ištrauka rodo poreikį veikti drąsiau, bet nebandyti visko padaryti vienu metu.',
  'Jautis': 'Tavo stiprybė – nuoseklumas. Šiuo laikotarpiu verta labiau pasitikėti tuo, ką jau kuri, ir neskubėti keisti to, kas veikia.',
  'Dvyniai': 'Tavo laikotarpio akcentas – informacija, pokalbiai ir naujos mintys. Vienas netikėtas pokalbis gali padėti pamatyti situaciją kitaip.',
  'Vėžys': 'Tau svarbus vidinis saugumas ir artimi žmonės. Šiuo metu verta atkreipti dėmesį į tai, kas suteikia ramybės ir leidžia atgauti jėgas.',
  'Liūtas': 'Tavo ištraukoje ryškėja matomumo ir pasitikėjimo tema. Palanku parodyti, ką moki, tačiau kartu palikti vietos kitų žmonių idėjoms.',
  'Mergelė': 'Šiuo laikotarpiu daug gali duoti tvarka ir aiškus planas. Maži praktiški sprendimai gali padėti pajudinti didesnį tikslą.',
  'Svarstyklės': 'Svarbiausia tema – pusiausvyra. Verta ieškoti sprendimo, kuriame būtų vietos ir tavo poreikiams, ir svarbiems santykiams.',
  'Skorpionas': 'Tavo ištraukoje ryškėja intuicijos ir vidinio apsisprendimo tema. Pasitikėk tuo, ką pastebi, bet sprendimams duok pakankamai laiko.',
  'Šaulys': 'Šiuo laikotarpiu gali norėtis daugiau erdvės, naujumo ir judėjimo. Nauja patirtis ar idėja gali įkvėpti pakeisti įprastą kryptį.',
  'Ožiaragis': 'Tavo stiprybė – gebėjimas nuosekliai siekti rezultato. Dabar ypač naudinga peržiūrėti prioritetus ir pasirinkti tai, kas turi ilgalaikę vertę.',
  'Vandenis': 'Tavo laikotarpio akcentas – naujos idėjos ir savitas požiūris. Tai geras metas išsakyti mintį, kurią ilgiau laikai savyje.',
  'Žuvys': 'Tau svarbus emocinis ir kūrybinis balansas. Šiuo metu naudinga ne tik veikti, bet ir palikti vietos poilsiui bei vaizduotei.'
};

function getZodiacSign(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Avinas';
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Jautis';
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Dvyniai';
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Vėžys';
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Liūtas';
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Mergelė';
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Svarstyklės';
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Skorpionas';
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Šaulys';
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Ožiaragis';
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Vandenis';
  return 'Žuvys';
}

function formatBirthDate(value) {
  const [year, month, day] = value.split('-');
  return `${day}.${month}.${year}`;
}

function showPersonalPreview(date, time, place) {
  const preview = document.querySelector('#personal-horoscope-preview');
  if (!preview) return;

  const sign = getZodiacSign(date);
  const text = personalPreviewTexts[sign];
  const timeText = time ? ` Gimimo laikas: ${time}.` : '';

  preview.innerHTML = `
    <div class="personal-preview-card">
      <p class="eyebrow">Trumpa nemokama ištrauka</p>
      <h3>${sign} · tavo asmeninio horoskopo pradžia</h3>
      <p class="personal-preview-meta">Gimimo data: ${formatBirthDate(date)}.${timeText} Miestas: ${place}.</p>
      <p>${text}</p>
      <div class="personal-premium-card">
        <strong>Pilnas asmeninis horoskopas – mokamas</strong>
        <span>Gilesnė analizė pagal gimimo datą, laiką ir miestą: asmenybė, santykiai, darbas, pinigai ir artimiausio laikotarpio prognozė.</span>
        <button type="button" class="button open-paywall" data-premium-type="personal" data-premium-key="${date}|${time}|${place}">Skaityti, ką gausi pilnai</button>
      </div>
    </div>
  `;

  preview.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

if (personalForm) {
  personalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.querySelector('#birth-date').value;
    const time = document.querySelector('#birth-time').value;
    const place = document.querySelector('#birth-place').value.trim();

    if (!date || !place) return;

    showPersonalPreview(date, time, place);
  });
}
