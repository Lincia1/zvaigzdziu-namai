const paywall = document.querySelector('#paywall');
let premiumPreview = false;
let currentPremiumType = 'premium';
let currentPremiumKey = '';

function openPaywall(type='premium', key='') {
  if (!paywall) return;
  currentPremiumType = type;
  currentPremiumKey = key;
  const title = paywall.querySelector('h2');
  const text = paywall.querySelector('p:not(.eyebrow)');
  const price = paywall.querySelector('.modal-price');
  if (type === 'name') {
    if (title) title.textContent = 'Pilna vardo reikšmė';
    if (text) text.textContent = 'Trumpa vardo reikšmė prieinama nemokamai. Pilną interpretaciją gali perskaityti po apmokėjimo.';
  } else if (type === 'dream') {
    if (title) title.textContent = 'Pilna sapno reikšmė';
    if (text) text.textContent = 'Trumpa sapno simbolio reikšmė prieinama nemokamai. Išsamesnę interpretaciją gali perskaityti po apmokėjimo.';
  } else {
    if (title) title.textContent = 'Atrakink daugiau „Žvaigždžių namų“';
    if (text) text.textContent = 'Čia lankytojas pasirinks mokamą turinį ir apmokės už pasirinktą paslaugą. Mokėjimų sistema bus prijungta prieš paleidžiant tikrus mokėjimus.';
  }
  if (price) price.innerHTML = '<strong>Mokamas turinys</strong><span>Kaina rodoma prieš apmokėjimą</span>';
  const demo = document.querySelector('#demo-unlock');
  if (demo) demo.textContent = (type === 'premium') ? 'Išbandyti atrakinimą' : 'Peržiūrėti pilną tekstą (demonstracija)';
  paywall.showModal();
}

document.addEventListener('click', (event) => {
  const open = event.target.closest('.open-paywall');
  if (open) openPaywall(open.dataset.premiumType || 'premium', open.dataset.premiumKey || '');
});

const closeButton = document.querySelector('.close-modal');
if (closeButton && paywall) closeButton.onclick = () => paywall.close();

const demoUnlock = document.querySelector('#demo-unlock');
if (demoUnlock && paywall) {
  demoUnlock.onclick = () => {
    premiumPreview = true;
    paywall.close();
    if (currentPremiumType !== 'premium' && typeof revealPremium === 'function') {
      revealPremium(currentPremiumType, currentPremiumKey);
    }
  };
}
