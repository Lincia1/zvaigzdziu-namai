const personalForm = document.querySelector('#personal-horoscope-form');

if (personalForm) {
  personalForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const date = document.querySelector('#birth-date').value;
    const time = document.querySelector('#birth-time').value;
    const place = document.querySelector('#birth-place').value.trim();

    if (!date || !place) return;

    const paywall = document.querySelector('#paywall');
    if (paywall) {
      const title = paywall.querySelector('h2');
      const text = paywall.querySelector('p:not(.eyebrow)');
      const price = paywall.querySelector('.modal-price');
      if (title) title.textContent = 'Asmeninio horoskopo užsakymas';
      if (text) text.textContent = `Užsakymas paruoštas pagal gimimo datą ${date}${time ? `, ${time}` : ''} ir gimimo miestą ${place}. Prieš apmokėjimą bus pateikta galutinė kaina ir paslaugos sąlygos.`;
      if (price) price.innerHTML = '<strong>Asmeninis horoskopas</strong><span>Galutinė kaina rodoma prieš apmokėjimą</span>';
      paywall.showModal();
    }
  });
}
