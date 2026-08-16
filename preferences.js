const translations={
  lt:{nav:['Horoskopai','Sapnininkas','Vardai','Testai'],hero:['Tavo mažas kasdienis ritualas','Įkvėpimas, kuris prasideda nuo smalsumo.','Atrask dienos horoskopą, sapnų simbolius, vardų istorijas ir lengvus testus vienoje jaukioje vietoje.','Rasti savo ženklą →'],sections:['Maži atradimai kiekvienai nuotaikai','Rask savo žvaigždžių ženklą','Sapnai kalba simboliais','Kiekvienas vardas turi savo istoriją','Kelios minutės sau','Daugiau erdvės tavo smalsumui'],membership:'Nemokamai gali skaityti trumpas įžvalgas. Klubo nariai mato pilnas interpretacijas, išsamius horoskopus ir specialius testus.'},
  en:{nav:['Horoscopes','Dream Dictionary','Names','Quizzes'],hero:['Your little daily ritual','Inspiration begins with curiosity.','Discover your daily horoscope, dream symbols, name stories and light-hearted quizzes in one welcoming place.','Find your sign →'],sections:['Little discoveries for every mood','Find your zodiac sign','Dreams speak in symbols','Every name has its story','A few minutes for yourself','More room for your curiosity'],membership:'Read short insights for free. Members unlock full interpretations, detailed horoscopes and special quizzes.'},
  ru:{nav:['Гороскопы','Сонник','Имена','Тесты'],hero:['Ваш маленький ежедневный ритуал','Вдохновение начинается с любопытства.','Откройте ежедневный гороскоп, символы снов, истории имён и лёгкие тесты в одном уютном месте.','Найти свой знак →'],sections:['Небольшие открытия для любого настроения','Найдите свой знак зодиака','Сны говорят символами','У каждого имени своя история','Несколько минут для себя','Больше пространства для любопытства'],membership:'Короткие идеи доступны бесплатно. Участники получают полные толкования, подробные гороскопы и специальные тесты.'}
};
const languageSelect=document.querySelector('#language-select');
function applyLanguage(lang){const t=translations[lang];document.documentElement.lang=lang;document.querySelectorAll('nav a').forEach((node,i)=>node.textContent=t.nav[i]);const hero=document.querySelector('.hero-copy');hero.querySelector('.eyebrow').textContent=t.hero[0];hero.querySelector('h1').textContent=t.hero[1];hero.querySelector('.lead').textContent=t.hero[2];hero.querySelector('.button').textContent=t.hero[3];const headings=[document.querySelector('#today-title'),document.querySelector('#horoscope-title'),document.querySelector('#dream-title'),document.querySelector('#name-title'),document.querySelector('#quiz-title'),document.querySelector('#membership-title')];headings.forEach((node,i)=>node.textContent=t.sections[i]);document.querySelector('.membership>div:first-child>p:not(.eyebrow)').textContent=t.membership;localStorage.setItem('language',lang)}
languageSelect.value=localStorage.getItem('language')||'lt';applyLanguage(languageSelect.value);languageSelect.addEventListener('change',event=>applyLanguage(event.target.value));
const themeToggle=document.querySelector('#theme-toggle');
function applyTheme(theme){document.documentElement.dataset.theme=theme;themeToggle.textContent=theme==='dark'?'☀':'☾';themeToggle.setAttribute('aria-label',theme==='dark'?'Įjungti šviesų foną':'Įjungti tamsų foną');localStorage.setItem('theme',theme)}
applyTheme(localStorage.getItem('theme')||'light');themeToggle.addEventListener('click',()=>applyTheme(document.documentElement.dataset.theme==='dark'?'light':'dark'));


const cookieBanner = document.querySelector('#cookie-banner');
const cookieAccept = document.querySelector('#cookie-accept');
const cookieReject = document.querySelector('#cookie-reject');

function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.hidden = true;
    cookieBanner.setAttribute('aria-hidden', 'true');
  }
}

if (localStorage.getItem('zvaigzdziu-cookie-choice')) hideCookieBanner();
if (cookieAccept) cookieAccept.addEventListener('click', () => {
  localStorage.setItem('zvaigzdziu-cookie-choice', 'accepted');
  hideCookieBanner();
});
if (cookieReject) cookieReject.addEventListener('click', () => {
  localStorage.setItem('zvaigzdziu-cookie-choice', 'rejected');
  hideCookieBanner();
});
const cookieSettings = document.querySelector('#cookie-settings');
if (cookieSettings) cookieSettings.addEventListener('click', () => {
  localStorage.removeItem('zvaigzdziu-cookie-choice');
  if (cookieBanner) {
    cookieBanner.hidden = false;
    cookieBanner.setAttribute('aria-hidden', 'false');
  }
});
