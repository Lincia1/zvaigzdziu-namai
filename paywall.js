const paywall = document.querySelector('#paywall');
let premiumPreview = false;

function openPaywall(type='premium') {
  if (!paywall) return;
  const title = paywall.querySelector('h2');
  const text = paywall.querySelector('p:not(.eyebrow)');
  const price = paywall.querySelector('.modal-price');
  if (type === 'name') {
    if (title) title.textContent = 'Pilna vardo reikšmė';
    if (text) text.textContent = 'Trumpa vardo reikšmė prieinama nemokamai. Pilną interpretaciją ir papildomą informaciją gali perskaityti po apmokėjimo.';
  } else if (type === 'dream') {
    if (title) title.textContent = 'Pilna sapno reikšmė';
    if (text) text.textContent = 'Trumpa sapno simbolio reikšmė prieinama nemokamai. Išsamesnę interpretaciją ir papildomus paaiškinimus gali perskaityti po apmokėjimo.';
  } else {
    if (title) title.textContent = 'Atrakink daugiau „Žvaigždžių namų“';
    if (text) text.textContent = 'Čia lankytojas pasirinks mokamą turinį ir apmokės už pasirinktą paslaugą. Mokėjimų sistema bus prijungta prieš paleidžiant tikrus mokėjimus.';
  }
  if (price) price.innerHTML = '<strong>Mokamas turinys</strong><span>Kaina rodoma prieš apmokėjimą</span>';
  paywall.showModal();
}

document.addEventListener('click', (event) => {
  const open = event.target.closest('.open-paywall');
  if (open) openPaywall(open.dataset.premiumType || 'premium');
});

const closeButton = document.querySelector('.close-modal');
if (closeButton && paywall) closeButton.onclick = () => paywall.close();

const demoUnlock = document.querySelector('#demo-unlock');
if (demoUnlock && paywall) {
  demoUnlock.onclick = () => {
    premiumPreview = true;
    paywall.close();
  };
}
