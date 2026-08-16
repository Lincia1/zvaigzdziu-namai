const paywall = document.querySelector('#paywall');
let premiumPreview = false;

function openPaywall() {
  if (paywall) paywall.showModal();
}

document.addEventListener('click', (event) => {
  const open = event.target.closest('.open-paywall');
  if (open) openPaywall();

  const dreamTrigger = event.target.closest('#dream-button,[data-dream]');
  const nameTrigger = event.target.closest('#name-button,[data-name]');
  if (dreamTrigger || nameTrigger) {
    const type = dreamTrigger ? 'dream' : 'name';
    const target = document.querySelector(`#${type}-result`);
    window.setTimeout(() => {
      if (target && target.textContent.trim().length > 30) {
        target.innerHTML = '<span class="premium-locked">Trumpa nemokama ištrauka. Pilna reikšmė ir papildomi simboliai gali būti prieinami klubo nariams.</span>';
      }
    }, 0);
  }
});

const closeButton = document.querySelector('.close-modal');
if (closeButton && paywall) closeButton.onclick = () => paywall.close();

const demoUnlock = document.querySelector('#demo-unlock');
if (demoUnlock && paywall) {
  demoUnlock.onclick = () => {
    premiumPreview = true;
    paywall.close();
    const message = document.querySelector('#form-message');
    if (message) message.textContent = 'Demonstraciniame režime turinys atrakintas tik peržiūrai.';
  };
}
