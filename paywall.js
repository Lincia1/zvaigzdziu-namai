const paywall=document.querySelector('#paywall');
let premiumPreview=false;
function openPaywall(){if(!premiumPreview)paywall.showModal()}
document.addEventListener('click',event=>{
  if(event.target.closest('.open-paywall')||event.target.closest('.zodiac-grid button'))openPaywall();
  const dreamTrigger=event.target.closest('#dream-button,[data-dream]');
  const nameTrigger=event.target.closest('#name-button,[data-name]');
  if(dreamTrigger||nameTrigger){
    const type=dreamTrigger?'dream':'name';
    const target=document.querySelector(`#${type}-result`);
    window.setTimeout(()=>{if(!premiumPreview&&target.textContent.trim().length>30){target.innerHTML='<span class="premium-locked">Trumpa nemokama ištrauka. Pilna reikšmė ir papildomi simboliai prieinami klubo nariams.</span> <button class="open-paywall">Skaityti pilną reikšmę</button>'; }},0);
  }
});
document.querySelector('.close-modal').onclick=()=>paywall.close();
document.querySelector('#demo-unlock').onclick=()=>{
  premiumPreview=true;paywall.close();
  document.querySelector('#form-message').textContent='Demonstraciniu režimu pilnas turinys atrakintas šiai peržiūrai.';
  document.querySelectorAll('.premium-locked').forEach(item=>item.classList.remove('premium-locked'));
};
document.querySelector('#zodiac-grid').addEventListener('click',()=>window.setTimeout(()=>{
  if(!premiumPreview){const detail=document.querySelector('#daily-reading p:last-child');if(detail)detail.classList.add('premium-locked');}
},0));
