(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const Y="tiver_guest_community_subs",je="tiver_guest_sub_1c";function Ge(){try{const t=localStorage.getItem(Y);if(t){const s=JSON.parse(t);return s&&typeof s=="object"?s:{}}}catch{}const e={};try{localStorage.getItem(je)==="1"&&(e.prodsoft=!0)}catch{}return e}function ot(e){try{localStorage.setItem(Y,JSON.stringify(e)),localStorage.removeItem(je)}catch{}window.dispatchEvent(new CustomEvent("tiver-community-subs"))}function he(e){return!!(e&&Ge()[e])}function te(e,t){if(!e)return;const s={...Ge()};t?s[e]=!0:delete s[e],ot(s)}function N(){return he("prodsoft")}const se="tiver_theme",Fe=["dark","light","moon","sakura","onec"];function ie(){return N()}function _e(){const e=localStorage.getItem(se);return!Fe.includes(e)||e==="onec"&&!ie()?"dark":e}function be(e){Fe.includes(e)&&(e==="onec"&&!ie()||(localStorage.setItem(se,e),fe(e)))}function fe(e){const t=document.documentElement,s=e==="onec"&&!ie()?"dark":e;s==="dark"?t.removeAttribute("data-theme"):t.setAttribute("data-theme",s)}function ae(){localStorage.getItem(se)==="onec"&&!ie()&&(localStorage.setItem(se,"dark"),fe("dark"))}const We="tiver_locale",Re={ru:{"footer.pitch":"Минимализм, скорость, удобство. Соцсеть в разработке — без обещаний «скоро всё».","footer.col_site":"Сайт","footer.home":"Главная","footer.login":"Вход","footer.register":"Регистрация","footer.guest":"Гость","footer.col_archive":"Архив","footer.archive_link":"HTML, 2021","footer.col_legal":"Юридическое","footer.privacy":"Конфиденциальность","footer.about":"О проекте","footer.copy":"© Tiver 2021–2026","footer.lang_en":"English","footer.lang_ru":"Русский","settings.hero_eyebrow":"Гостевой режим","settings.hero_title":"Настройки","settings.hero_lead":"Тема и язык сохраняются в этом браузере и действуют на весь сайт — и в госте, и после входа.","settings.hero_note":"Пять цветов палитры темы — ниже, рядом с переключателем.","settings.theme_title":"Тема интерфейса","settings.theme_lede":"Выберите палитру. Активная тема задаёт пять акцентных «красок» для UI — они же показаны полоской ниже.","settings.lang_title":"Язык интерфейса","settings.lang_lede":"Переключение влияет на подписи в подвале и в настройках; часть гостевых экранов пока только на русском.","settings.lang_ru":"Русский","settings.lang_en":"English","theme.dark":"Тёмная","theme.dark_hint":"по умолчанию","theme.light":"Светлая","theme.light_hint":"высокий контраст","theme.moon":"Лунная","theme.moon_hint":"холодный синий","theme.sakura":"Сакура","theme.sakura_hint":"розовый акцент","theme.onec":"1С","theme.onec_hint":"секретная тема после подписки","guest.cta":"Всё выше — клиентский театр: безопасно крутить на демо и перед коллегами, пока бэкенд не проснулся.","guest.login":"Войти","guest.register":"Регистрация","community.back":"← К каталогу сообществ","community.posts_locked":"Чтобы видеть посты сообщества, войдите в аккаунт.","community.posts_hint":"В гостевом режиме лента скрыта — так и задумано.","friend.wall_locked":"Полная стена и лента друга — после входа в аккаунт.","friend.photos_hint":"Галерея и личные фото — только для авторизованных.","game.modal.close":"Закрыть","game.spec.min":"Минимум","game.spec.rec":"Рекомендуется"},en:{"footer.pitch":"Minimal, fast, usable. Tiver is in active layout work — no “everything tomorrow” marketing.","footer.col_site":"Site","footer.home":"Home","footer.login":"Log in","footer.register":"Sign up","footer.guest":"Guest","footer.col_archive":"Archive","footer.archive_link":"HTML, 2021","footer.col_legal":"Legal","footer.privacy":"Privacy","footer.about":"About","footer.copy":"© Tiver 2021–2026","footer.lang_en":"English","footer.lang_ru":"Русский","settings.hero_eyebrow":"Guest mode","settings.hero_title":"Settings","settings.hero_lead":"Theme and language are stored in this browser for the whole site — guest or signed-in.","settings.hero_note":"Five palette swatches below mirror the active theme.","settings.theme_title":"Interface theme","settings.theme_lede":"Pick a palette. The active theme drives five accent colors used across the UI.","settings.lang_title":"Interface language","settings.lang_lede":"Affects footer and settings labels; some guest screens are still RU-only for now.","settings.lang_ru":"Russian","settings.lang_en":"English","theme.dark":"Dark","theme.dark_hint":"default","theme.light":"Light","theme.light_hint":"high contrast","theme.moon":"Moon","theme.moon_hint":"cool blue","theme.sakura":"Sakura","theme.sakura_hint":"pink accent","theme.onec":"1C","theme.onec_hint":"unlocked after subscribing","guest.cta":"What you see is front-end theatre: safe to demo while the API naps.","guest.login":"Log in","guest.register":"Sign up","community.back":"← Back to communities","community.posts_locked":"Sign in to see community posts.","community.posts_hint":"Hidden in guest mode — intentional.","friend.wall_locked":"Full friend wall and feed — after you sign in.","friend.photos_hint":"Gallery and private photos — for signed-in users only.","game.modal.close":"Close","game.spec.min":"Minimum","game.spec.rec":"Recommended"}};function ne(){try{return localStorage.getItem(We)==="en"?"en":"ru"}catch{return"ru"}}function ze(e){const t=e==="en"?"en":"ru";try{localStorage.setItem(We,t)}catch{}document.documentElement.setAttribute("lang",t==="en"?"en":"ru"),Q(document.body),window.dispatchEvent(new CustomEvent("tiver-locale"))}function Me(e){var s;const t=ne();return((s=Re[t])==null?void 0:s[e])??Re.ru[e]??e}function Q(e){const t=e||document.body;t.querySelectorAll("[data-i18n]").forEach(s=>{const a=s.getAttribute("data-i18n");a&&(s.textContent=Me(a))}),t.querySelectorAll("[data-i18n-placeholder]").forEach(s=>{const a=s.getAttribute("data-i18n-placeholder");a&&"placeholder"in s&&(s.placeholder=Me(a))})}function it(e){Q(e),e.querySelectorAll("[data-set-locale]").forEach(t=>{t.addEventListener("click",s=>{s.preventDefault(),ze(t.getAttribute("data-set-locale")||"ru")})})}function ct(){const e=document.createElement("div");return e.className="app-shell",e.innerHTML=`
    <div id="router-outlet" class="router-outlet" aria-live="polite"></div>
  `,e}function lt(){const e=document.getElementById("app");e&&e.replaceChildren(ct())}let re={mode:"guest",user:null,token:null};const Be=new Set;function z(){return{...re}}function K(e){re={...re,...e},Be.forEach(t=>t(z()))}function Ve(){localStorage.removeItem("tiver_token"),re={mode:"guest",user:null,token:null},Be.forEach(e=>e(z()))}function ut(){return`${"".replace(/\/$/,"")}/api/auth/me`}async function dt(){const e=localStorage.getItem("tiver_token");if(e)try{const t=await fetch(ut(),{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error("unauthorized");const s=await t.json();K({mode:"user",user:s,token:e})}catch{localStorage.removeItem("tiver_token"),K({mode:"guest",user:null,token:null})}}function Je(){return"/tiver/app/".replace(/\/$/,"")}function g(e="/"){const s=String(e||"/").match(/^([^?#]*)([?#].*)?$/);let a=s[1]||"/";const n=s[2]||"";a.startsWith("/")||(a=`/${a}`),a.length>1&&a.endsWith("/")&&(a=a.slice(0,-1));const r=Je();return r?a==="/"?`${r}/${n}`:`${r}${a}${n}`:`${a}${n}`}function ve(e="/"){const t=Je();let s=e||"/";return t&&(s===t||s.startsWith(`${t}/`))&&(s=s.slice(t.length)||"/"),s.startsWith("/")||(s=`/${s}`),s.length>1&&s.endsWith("/")&&(s=s.slice(0,-1)),s||"/"}function M(e){document.title=e.includes("Tiver")?e:`${e} · Tiver`}function B(){const e=document.createElement("footer");return e.className="site-footer site-footer--app",e.innerHTML=`
    <div class="site-footer__wrap">
      <div class="site-footer__brand-col">
        <a href="${g("/welcome")}" class="site-footer__wordmark">Tiver</a>
        <p class="site-footer__pitch" data-i18n="footer.pitch">
          Минимализм, скорость, удобство. Соцсеть в разработке — без обещаний «скоро всё».
        </p>
      </div>
      <div class="site-footer__cols" role="navigation" aria-label="Разделы подвала">
        <div class="site-footer__col">
          <span class="site-footer__col-title" data-i18n="footer.col_site">Сайт</span>
          <a href="${g("/welcome")}" class="site-footer__link" data-i18n="footer.home">Главная</a>
          <a href="${g("/login")}" class="site-footer__link" data-i18n="footer.login">Вход</a>
          <a href="${g("/register")}" class="site-footer__link" data-i18n="footer.register">Регистрация</a>
          <a href="${g("/guest/feed")}" class="site-footer__link" data-i18n="footer.guest">Гость</a>
        </div>
        <div class="site-footer__col">
          <span class="site-footer__col-title" data-i18n="footer.col_archive">Архив</span>
          <a href="${g("/archive/welc.html")}" class="site-footer__link" data-i18n="footer.archive_link">HTML, 2021</a>
        </div>
        <div class="site-footer__col">
          <span class="site-footer__col-title" data-i18n="footer.col_legal">Юридическое</span>
          <a href="${g("/privacy")}" class="site-footer__link" data-i18n="footer.privacy">Конфиденциальность</a>
          <a href="#" rel="external" class="site-footer__link" data-i18n="footer.about">О проекте</a>
        </div>
      </div>
      <div class="site-footer__bottom">
        <span class="site-footer__copy text-muted text-sm" data-i18n="footer.copy">© Tiver 2021–2026</span>
        <div class="site-footer__meta text-sm">
          <a href="#" class="footer-link" data-set-locale="en" data-i18n="footer.lang_en">English</a>
          <span class="footer-sep" aria-hidden="true">·</span>
          <a href="#" class="footer-link text-muted" data-set-locale="ru" data-i18n="footer.lang_ru">Русский</a>
        </div>
      </div>
    </div>
  `,it(e),e}function ce(){return`
    <header class="site-header" role="banner">
      <div class="site-header__inner">
        <a href="${g("/welcome")}" class="site-logo">Tiver</a>
      </div>
    </header>
  `}function pt(){M("Tiver");const e=document.createElement("div");return e.className="page page--marketing",e.innerHTML=`
    ${ce()}

    <main class="stack stack--lg" id="main-content" role="main">
      <section class="hero hero--home" aria-labelledby="welcome-hero-title">
        <p class="hero__eyebrow">Соцсеть без лишнего</p>
        <h1 class="hero__title" id="welcome-hero-title">Минимализм, скорость, нормальный интерфейс</h1>
        <p class="hero__subtitle text-secondary">
          Tiver — это попытка сделать ленту, сообщения и сообщества спокойнее: меньше визуального шума, шире рабочая область на обычном мониторе, без миссии «спасти интернет за выходные».
        </p>
      </section>

      <section class="value-grid" aria-label="Три опоры">
        <article class="value-card card card--pad-md">
          <h2 class="value-card__title">Лента</h2>
          <p class="value-card__text text-muted">Хронология и подписки. Без обещания «идеального алгоритма» — просто порядок.</p>
        </article>
        <article class="value-card card card--pad-md">
          <h2 class="value-card__title">Комфорт</h2>
          <p class="value-card__text text-muted">Крупная зона контента, читаемая типографика. Не «как в приложении 2014 года на 320 px».</p>
        </article>
        <article class="value-card card card--pad-md">
          <h2 class="value-card__title">Данные</h2>
          <p class="value-card__text text-muted">Настройки приватности без театра. Чем меньше собираем — тем меньше объяснять.</p>
        </article>
      </section>

      <section class="card card--pad-lg" aria-label="Действия">
        <div class="actions-row actions-row--stretch actions-row--start">
          <a class="btn btn--primary btn--lg" href="${g("/login")}">Войти</a>
          <a class="btn btn--secondary btn--lg" href="${g("/register")}">Регистрация</a>
        </div>
      </section>

      <hr class="divider" aria-hidden="true" />

      <section class="card card--pad-lg card--tight-top" aria-labelledby="guest-mode-title">
        <h2 class="sr-only" id="guest-mode-title">Гостевой режим</h2>
        <div class="copy-block">
          <p class="copy-lead">Гость — без пароля.</p>
          <p class="text-secondary">Откроются макеты экранов: как будет выглядеть лента, чаты и т.д. Живых данных нет — зато можно потыкать навигацию.</p>
          <p class="text-muted">Сообщения, друзья и свой профиль после входа. Очевидно, но мы всё равно написали.</p>
        </div>
        <div class="actions-row actions-row--start actions-row--hero-gap">
          <a class="btn btn--ghost btn--lg" href="${g("/guest/feed")}">Войти как гость</a>
        </div>
      </section>

      <hr class="divider" aria-hidden="true" />

      <section class="stack stack--md" aria-labelledby="about-title">
        <h2 class="section-title" id="about-title">Откуда это</h2>
        <div class="welcome-era" id="welcome-era" aria-live="polite">
          <button type="button" class="welcome-era__skip" id="welcome-era-skip">Остановить смену</button>
          <div class="welcome-era__layer welcome-era__legacy card card--pad-lg copy-block welcome-original">
            <span class="welcome-era__stamp">2021 · оригинал</span>
            <h2 class="sr-only" id="about-original-title">О проекте, оригинальный текст</h2>
            <p class="copy-lead">Tiver - проект новой социальной сети.</p>
            <p class="text-secondary">Идея проекта создать максимально комфортную, стильную, удобную и безопасную бесплатную социальную сеть.</p>
            <p class="text-secondary">Проект был создан в феврале 2021 года и с этого дня ведутся работы над ним.</p>
            <p class="text-secondary">Над проектом, не покладая рук, работают два человека.</p>
            <p class="text-secondary welcome-original__footer">
              Более подробную информацию смотрите <a href="#" rel="external" class="t-inline-link">О Tiver</a>.
            </p>
          </div>
          <div class="welcome-era__layer welcome-era__modern card card--pad-lg copy-block">
            <span class="welcome-era__stamp">Сейчас</span>
            <p class="copy-lead">Тот же Tiver, но в 2026-м: Vite, гостевой режим с макетами, темы и локализация.</p>
            <p class="text-secondary">
              Мы по-прежнему не обещаем «спасти интернет за выходные»: делаем спокойную ленту, сообщения и сообщества на
              клиенте, а бэкенд подключается, когда будет готов.
            </p>
            <p class="text-secondary">
              HTML-архив первой версии по-прежнему в подвале — как якорь, от которого приятно отталкиваться.
            </p>
            <p class="text-muted text-sm">Карточка переключается каждые 5 секунд — можно читать оба текста без клика.</p>
          </div>
        </div>
      </section>

      <hr class="divider" aria-hidden="true" />
    </main>
  `,e.appendChild(B()),gt(e),e}function gt(e){const t=e.querySelector("#welcome-era"),s=e.querySelector("#welcome-era-skip");if(!t)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){t.classList.add("welcome-era--done");return}let a=!1;const n=()=>{a=!a,t.classList.toggle("welcome-era--done",a)},r=window.setInterval(n,5e3);s==null||s.addEventListener("click",()=>{window.clearInterval(r),t.classList.add("welcome-era--done","welcome-era--paused")})}const mt="modulepreload",ht=function(e){return"/tiver/app/"+e},De={},G=function(t,s,a){let n=Promise.resolve();if(s&&s.length>0){let o=function(u){return Promise.all(u.map(p=>Promise.resolve(p).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=o(s.map(u=>{if(u=ht(u),u in De)return;De[u]=!0;const p=u.endsWith(".css"),m=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${m}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":mt,p||(_.as="script"),_.crossOrigin="",_.href=u,l&&_.setAttribute("nonce",l),document.head.appendChild(_),p)return new Promise((x,d)=>{_.addEventListener("load",x),_.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(o){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o}return n.then(o=>{for(const i of o||[])i.status==="rejected"&&r(i.reason);return t().catch(r)})},_t="".replace(/\/$/,"");async function bt(e){const t=await e.text();try{return t?JSON.parse(t):{}}catch{return{raw:t}}}async function ye(e,t={}){const s=`${_t}/api${e.startsWith("/")?e:`/${e}`}`,a={"Content-Type":"application/json",...t.headers},n=localStorage.getItem("tiver_token");n&&(a.Authorization=`Bearer ${n}`);const r=await fetch(s,{...t,headers:a}),o=await bt(r);if(!r.ok){const i=new Error(o.error||r.statusText||"request_failed");throw i.status=r.status,i.data=o,i}return o}function ft(){M("Вход");const e=document.createElement("div");e.className="page page--marketing",e.innerHTML=`
    ${ce()}

    <main class="stack stack--md narrow-form" id="main-content" role="main">
      <section class="hero hero--compact" aria-labelledby="login-title">
        <h1 class="hero__title" id="login-title">Вход</h1>
        <p class="hero__subtitle text-muted">Вход по API: нужен доступный <code class="text-secondary">/api</code> (локально через Vite proxy или свой хост). Без ответа сервера сессия не создаётся — зато честно.</p>
      </section>

      <form class="card card--pad-md stack stack--sm auth-form" id="login-form" aria-labelledby="login-title">
        <p class="text-muted text-sm" id="login-error" role="alert" hidden></p>
        <label class="field">
          <span class="field__label">Эл. почта</span>
          <input class="input" type="email" name="email" autocomplete="username" required placeholder="name@email.com" />
        </label>
        <label class="field">
          <span class="field__label">Пароль</span>
          <input class="input" type="password" name="password" autocomplete="current-password" required placeholder="Пароль" />
        </label>
        <label class="choice">
          <input type="checkbox" name="remember" />
          <span>Запомнить меня</span>
        </label>
        <button class="btn btn--primary btn--block" type="submit">Войти</button>
      </form>
    </main>
  `;const t=e.querySelector("#login-form"),s=e.querySelector("#login-error");return t==null||t.addEventListener("submit",async a=>{var r,o;a.preventDefault(),s&&(s.hidden=!0,s.textContent="");const n=new FormData(t);try{const{token:i,user:l}=await ye("/auth/login",{method:"POST",body:JSON.stringify({email:n.get("email"),password:n.get("password")})});localStorage.setItem("tiver_token",i),K({mode:"user",user:l,token:i});const{navigate:u}=await G(async()=>{const{navigate:p}=await Promise.resolve().then(()=>W);return{navigate:p}},void 0);u("/app/feed")}catch(i){s&&(s.hidden=!1,s.textContent=((r=i.data)==null?void 0:r.error)==="invalid_credentials"?"Неверная почта или пароль.":i.message==="Failed to fetch"?"Сеть до API не дошла. Поднимите бэкенд или проверьте URL в VITE_API_URL.":((o=i.data)==null?void 0:o.error)||i.message||"Ошибка входа")}}),e.appendChild(B()),e}function vt(){M("Регистрация");const e=document.createElement("div");e.className="page page--marketing",e.innerHTML=`
    ${ce()}

    <main class="stack stack--md narrow-form" id="main-content" role="main">
      <section class="hero hero--compact" aria-labelledby="register-title">
        <h1 class="hero__title" id="register-title">Регистрация</h1>
        <p class="hero__subtitle text-muted">Реальная регистрация появится вместе с продакшен-API. Пока форма готова к подключению бэкенда: заведите аккаунт, когда сервер будет в сети.</p>
      </section>

      <form class="card card--pad-md stack stack--sm auth-form" id="register-form" aria-labelledby="register-title">
        <p class="text-muted text-sm" id="register-error" role="alert" hidden></p>
        <label class="field">
          <span class="field__label">Имя и фамилия</span>
          <input class="input" type="text" name="name" autocomplete="name" required placeholder="Как к вам обращаться" />
        </label>
        <label class="field">
          <span class="field__label">Эл. почта</span>
          <input class="input" type="email" name="email" autocomplete="email" required placeholder="name@email.com" />
        </label>
        <label class="field">
          <span class="field__label">Пароль</span>
          <input class="input" type="password" name="password" autocomplete="new-password" required placeholder="Не менее 8 символов" minlength="8" />
        </label>
        <label class="choice">
          <input type="checkbox" name="terms" required />
          <span>Я принимаю <a href="${g("/privacy")}" class="t-inline-link">политику конфиденциальности</a></span>
        </label>
        <button class="btn btn--primary btn--block" type="submit">Создать аккаунт</button>
        <div class="actions-row actions-row--start actions-row--tight">
          <a class="btn btn--ghost btn--sm" href="${g("/welcome")}">Назад</a>
          <a class="btn btn--secondary btn--sm" href="${g("/login")}">Уже есть аккаунт</a>
        </div>
      </form>
    </main>
  `;const t=e.querySelector("#register-form"),s=e.querySelector("#register-error");return t==null||t.addEventListener("submit",async a=>{var r,o;a.preventDefault(),s&&(s.hidden=!0,s.textContent="");const n=new FormData(t);try{const{token:i,user:l}=await ye("/auth/register",{method:"POST",body:JSON.stringify({email:n.get("email"),password:n.get("password"),displayName:n.get("name")})});localStorage.setItem("tiver_token",i),K({mode:"user",user:l,token:i});const{navigate:u}=await G(async()=>{const{navigate:p}=await Promise.resolve().then(()=>W);return{navigate:p}},void 0);u("/app/profile")}catch(i){s&&(s.hidden=!1,s.textContent=((r=i.data)==null?void 0:r.error)==="email_taken"?"Эта почта уже зарегистрирована.":i.message==="Failed to fetch"?"API недоступен. Попробуйте позже или проверьте, что бэкенд запущен локально.":((o=i.data)==null?void 0:o.error)||i.message||"Ошибка регистрации")}}),e.appendChild(B()),e}const yt=`<section class="polit">\r
  <p>\r
    <h3>1. Общие положения.</h3>\r
    <h4>\r
      Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые Tiver (далее – Оператор).\r
    </h4>\r
    <h4>\r
      1.1. Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.\r
    </h4>\r
    <h4>\r
      1.2. Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта http://Tiver.com.\r
    </h4>\r
  </p>\r
  <br />\r
  <p>\r
    <h3>2. Основные понятия, используемые в Политике.</h3>\r
    <h4>2.1. Автоматизированная обработка персональных данных – обработка персональных данных с помощью средств вычислительной техники;</h4>\r
    <h4>2.2. Блокирование персональных данных – временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных);</h4>\r
    <h4>2.3. Веб-сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу http://Tiver.com;</h4>\r
    <h4>2.4. Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств;</h4>\r
    <h4>2.5. Обезличивание персональных данных — действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных;</h4>\r
    <h4>\r
      2.6. Обработка персональных данных – любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных;\r
    </h4>\r
    <h4>\r
      2.7. Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными;\r
    </h4>\r
    <h4>2.8. Персональные данные – любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта http://Tiver.com;</h4>\r
    <h4>2.9. Пользователь – любой посетитель веб-сайта http://Tiver.com;</h4>\r
    <h4>2.10. Предоставление персональных данных – действия, направленные на раскрытие персональных данных определенному лицу или определенному кругу лиц;</h4>\r
    <h4>\r
      2.11. Распространение персональных данных – любые действия, направленные на раскрытие персональных данных неопределенному кругу лиц (передача персональных данных) или на ознакомление с персональными данными неограниченного круга лиц, в том числе обнародование персональных данных в средствах массовой информации, размещение в информационно-телекоммуникационных сетях или предоставление доступа к персональным данным каким-либо иным способом;\r
    </h4>\r
    <h4>\r
      2.12. Трансграничная передача персональных данных – передача персональных данных на территорию иностранного государства органу власти иностранного государства, иностранному физическому или иностранному юридическому лицу;\r
    </h4>\r
    <h4>\r
      2.13. Уничтожение персональных данных – любые действия, в результате которых персональные данные уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания персональных данных в информационной системе персональных данных и (или) уничтожаются материальные носители персональных данных.\r
    </h4>\r
  </p>\r
  <p>\r
    <h3>3. Оператор может обрабатывать следующие персональные данные Пользователя.</h3>\r
    <h4>3.1. Фамилия, имя, отчество;</h4>\r
    <h4>3.2. Электронный адрес;</h4>\r
    <h4>3.3. Номера телефонов;</h4>\r
    <h4>3.4. Год, месяц, дата и место рождения;</h4>\r
    <h4>3.5. Фотографии;</h4>\r
    <h4>\r
      3.6. Также на сайте происходит сбор и обработка обезличенных данных о посетителях (в т.ч. файлов «cookie») с помощью сервисов интернет-статистики (Яндекс Метрика и Гугл Аналитика и других).\r
    </h4>\r
    <h4>3.7. Вышеперечисленные данные далее по тексту Политики объединены общим понятием Персональные данные.</h4>\r
  </p>\r
  <p>\r
    <h3>4. Цели обработки персональных данных.</h3>\r
    <h4>4.1. Цель обработки персональных данных Пользователя — предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте.</h4>\r
    <h4>\r
      4.2. Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты addwa с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».\r
    </h4>\r
    <h4>\r
      4.3. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики, служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.\r
    </h4>\r
  </p>\r
  <p>\r
    <h3>5. Правовые основания обработки персональных данных.</h3>\r
    <h4>\r
      5.1. Оператор обрабатывает персональные данные Пользователя только в случае их заполнения и/или отправки Пользователем самостоятельно через специальные формы, расположенные на сайте http://Tiver.com. Заполняя соответствующие формы и/или отправляя свои персональные данные Оператору, Пользователь выражает свое согласие с данной Политикой.\r
    </h4>\r
    <h4>\r
      5.2. Оператор обрабатывает обезличенные данные о Пользователе в случае, если это разрешено в настройках браузера Пользователя (включено сохранение файлов «cookie» и использование технологии JavaScript).\r
    </h4>\r
  </p>\r
  <p>\r
    <h3>6. Порядок сбора, хранения, передачи и других видов обработки персональных данных.</h3>\r
    <h4>\r
      Безопасность персональных данных, которые обрабатываются Оператором, обеспечивается путем реализации правовых, организационных и технических мер, необходимых для выполнения в полном объеме требований действующего законодательства в области защиты персональных данных.\r
    </h4>\r
    <h4>6.1. Оператор обеспечивает сохранность персональных данных и принимает все возможные меры, исключающие доступ к персональным данным неуполномоченных лиц.</h4>\r
    <h4>\r
      6.2. Персональные данные Пользователя никогда, ни при каких условиях не будут переданы третьим лицам, за исключением случаев, связанных с исполнением действующего законодательства.\r
    </h4>\r
    <h4>\r
      6.3. В случае выявления неточностей в персональных данных, Пользователь может актуализировать их самостоятельно, путем направления Оператору уведомление на адрес электронной почты Оператора addwa с пометкой «Актуализация персональных данных».\r
    </h4>\r
    <h4>\r
      6.4. Срок обработки персональных данных является неограниченным. Пользователь может в любой момент отозвать свое согласие на обработку персональных данных, направив Оператору уведомление посредством электронной почты на электронный адрес Оператора addwa с пометкой «Отзыв согласия на обработку персональных данных».\r
    </h4>\r
  </p>\r
  <p>\r
    <h3>7. Трансграничная передача персональных данных.</h3>\r
    <h4>\r
      7.1. Оператор до начала осуществления трансграничной передачи персональных данных обязан убедиться в том, что иностранным государством, на территорию которого предполагается осуществлять передачу персональных данных, обеспечивается надежная защита прав субъектов персональных данных.\r
    </h4>\r
    <h4>\r
      7.2. Трансграничная передача персональных данных на территории иностранных государств, не отвечающих вышеуказанным требованиям, может осуществляться только в случае наличия согласия в письменной форме субъекта персональных данных на трансграничную передачу его персональных данных и/или исполнения договора, стороной которого является субъект персональных данных.\r
    </h4>\r
  </p>\r
  <p>\r
    <h3>8. Заключительные положения.</h3>\r
    <h4>8.1. Пользователь может получить любые разъяснения по интересующим вопросам, касающимся обработки его персональных данных, обратившись к Оператору с помощью электронной почты addwa.</h4>\r
    <h4>\r
      8.2. В данном документе будут отражены любые изменения политики обработки персональных данных Оператором. Политика действует бессрочно до замены ее новой версией.\r
    </h4>\r
    <h4>8.3. Актуальная версия Политики в свободном доступе расположена в сети Интернет по адресу http://tiver/privace.</h4>\r
  </p>\r
</section>\r
`;function wt(){M("Политика конфиденциальности");const e=document.createElement("div");return e.className="page page--marketing",e.innerHTML=`
    ${ce()}

    <main class="stack stack--md legal" id="main-content" role="main">
      <header class="hero hero--compact legal__header">
        <h1 class="hero__title">Политика конфиденциальности</h1>
        <p class="hero__subtitle text-muted">
          Документ сохраняет юридическую базу проекта. В продукте Tiver вы получаете предсказуемые настройки приватности — без «тёмных паттернов», к которым приучили крупные сети.
        </p>
        <div class="actions-row actions-row--start">
          <a class="btn btn--ghost btn--sm" href="${g("/welcome")}">Назад</a>
        </div>
      </header>

      <article class="card card--pad-md legal__article" aria-label="Полный текст политики">
        <div class="legal__body">
          ${yt}
        </div>
      </article>
    </main>
  `,e.appendChild(B()),e}const D={feed:{title:"Новости",label:"Новости"},messages:{title:"Сообщения",label:"Сообщения"},groups:{title:"Сообщества",label:"Сообщества"},friends:{title:"Друзья",label:"Друзья"},games:{title:"Игры",label:"Игры"},settings:{title:"Настройки",label:"Настройки"}},xt=[{segment:"feed",href:"/guest/feed"},{segment:"messages",href:"/guest/messages"},{segment:"groups",href:"/guest/groups"},{segment:"friends",href:"/guest/friends"},{segment:"games",href:"/guest/games"},{segment:"settings",href:"/guest/settings"}];let V;function kt(e){const t=e.querySelector("[data-user-menu-trigger]"),s=e.querySelector("[data-user-menu-panel]");if(!t||!s)return;V==null||V.abort(),V=new AbortController;const{signal:a}=V,n=()=>{s.hidden=!0,t.setAttribute("aria-expanded","false"),e.classList.remove("guest-user-menu--open")},r=()=>{s.hidden=!1,t.setAttribute("aria-expanded","true"),e.classList.add("guest-user-menu--open")},o=()=>{s.hidden?r():n()};t.addEventListener("click",i=>{i.stopPropagation(),o()}),document.addEventListener("click",i=>{e.contains(i.target)||n()},{capture:!0,signal:a}),document.addEventListener("keydown",i=>{i.key==="Escape"&&n()},{signal:a})}function c(e,t,s,a="guest-cbanner--void",n=0,r=[]){return{name:e,handle:t,status:"в сети",bio:s,bannerClass:a,photos:n,posts:r}}const St=Object.fromEntries(Array.from({length:21},(e,t)=>{const s=t+4;return[`arch${s}`,{name:`Архив_${s}`,handle:`@arch_${s}`,status:"архив треда",bio:"Комментатор старого поста ленты Tiver.",bannerClass:"guest-cbanner--void",photos:0,posts:[]}]})),$t={...St,tim:c("Тим","@tim_bits","Про букву T, логотипы и локальные культы.","guest-cbanner--cross",1),sergey:c("Сергей","@sergey_dash","Виджеты, дашборды и честный сайдбар.","guest-cbanner--grid",2),masha:c("Маша","@masha_ui","Пиксель, кнопки и «ещё один клик».","guest-cbanner--dots",4),artem:c("Артём","@artem_guest","Гостевой режим как фича, не как баг.","guest-cbanner--hatch",1),kira:c("Кира","@kira_67","Про ориентиры качества и мемы с цифрами.","guest-cbanner--brick",2),ira:c("Ира","@ira_iso","Плёнка, ISO и честные восьмибитные отговорки.","guest-cbanner--brick",6),kostya:c("Костя","@kostya_light","Лайтрум, серии и «отпишусь в треде».","guest-cbanner--cross",3),vadim:c("Вадим","@vadim_pixel","Chrome.css, Pixel и проверки на железе.","guest-cbanner--grid",2),sonya:c("Соня","@sonya_archive","Архив 2021 и спокойствие в репозитории.","guest-cbanner--void",1),nikita_feed:c("Никита","@nikita_screen","Скрин «в голове» и экономия трафика.","guest-cbanner--dots",5),liza:c("Лиза","@liza_chrome","Кнопка 2026 и легенды гостевой ленты.","guest-cbanner--hatch",2),pasha:c("Паша","@pasha_honest","Честность в описании бага — база.","guest-cbanner--brick",1),moderator_feed:c("Модератор","@mod_feed","Следит за тоном треда и за буквой T.","guest-cbanner--cross",0),guest7:c("Гость_7","@guest_ring_7","Локальные мемы и чай в комментариях.","guest-cbanner--void",0),guest8:c("Гость_8","@guest_ring_8","Согласен с большинством, кроме понедельника.","guest-cbanner--void",0),guest9:c("Гость_9","@guest_ring_9","Тесты на телефоне, не на духовке.","guest-cbanner--void",0),guest10:c("Гость_10","@guest_ring_10","CSS 2021 пусть отдыхает.","guest-cbanner--void",0),guest11:c("Гость_11","@guest_ring_11","Tiver с T — как твит с твитом.","guest-cbanner--void",0),guest12:c("Гость_12","@guest_ring_12","Лента живая, пока есть кофе.","guest-cbanner--void",0),designer_u:c("Дизайнер","@designer_pixel","Пиксель только в госте — спорит с продактом.","guest-cbanner--hatch",3),product_u:c("Продакт","@product_notion","Опросы в Notion, сердца в ленте.","guest-cbanner--brick",2),vika:c("Вика","@vika_team","67% команды за «только в госте».","guest-cbanner--dots",1),semyon:c("Семён","@semyon_font","T в шрифте — ок, главное не Comic Sans.","guest-cbanner--grid",0),anya:c("Аня","@anya_min","Минимализм: мало кнопок, много драмы.","guest-cbanner--void",1),dima:c("Дима","@dima_radius","Локальный мем: «ещё один радиус — и я сплю».","guest-cbanner--cross",2),yura:c("Юра","@yura_pixel_vote","Голосует за пиксель в госте единогласно.","guest-cbanner--hatch",0),roma:c("Рома","@roma_lint","Линтер как психотерапевт: сначала бесит, потом не отпускает.","guest-cbanner--cross",4),yulya:c("Юля","@yulya_privacy","Приватность в закладки, без крика.","guest-cbanner--dots",2),digest_yul:c("Дайджест","@digest_bot","Блок про cookies — там тоже драма.","guest-cbanner--grid",0),max_d:c("Макс","@max_links","67 ссылок было бы идеально, хватит и 12.","guest-cbanner--brick",1),nika:c("Ника","@nika_trust","T — trust, если по-английски.","guest-cbanner--hatch",2),oleg:c("Олег","@oleg_legacy","С тех пор столько всего — а лента всё ещё наша.","guest-cbanner--grid",3),lena:c("Лена","@lena_css21","Архив CSS помним. Ностальгия по кнопке 2021.","guest-cbanner--hatch",5),tiverdev:c("Tiver Dev","@tiver_dev","Спасибо, что читаете с самого начала.","guest-cbanner--dots",0),anna_k:c("Анна К.","@anna_k_erp","Сверки, чай и спокойствие в конце месяца.","guest-cbanner--hatch",8),petr:c("Пётр","@petr_regs","Регламенты и закрытие периода без драмы.","guest-cbanner--brick",4),oksana:c("Оксана","@oksana_check","Чек-листы и закрепы вместо хаоса.","guest-cbanner--dots",6),zup_mascot:c("ЗУП-бот","@zup_mascot","Напоминает про cf/cu и про кофе.","guest-cbanner--grid",0),raccoon_1c:c("1С-енот","@raccoon_1c","Табель, T и отчётность с иронией.","guest-cbanner--cross",2),mod_comm:c("Модератор","@mod_comm_erp","Контур ожиданий бизнеса и порядок в треде.","guest-cbanner--grid",1),oleg_fin:c("Олег","@oleg_fin_lines","Скрины, пятые строки и внимание к деталям.","guest-cbanner--cross",3),buh_zup:c("Бух","@buh_zup","Дубли кадровых, ЗУП и «типовая не виновата».","guest-cbanner--brick",7),skd_expert:c("СКД-guru","@skd_guru","Запятые в выражениях и отчёты без сюрпризов.","guest-cbanner--dots",9),sasha_rel:c("Саша","@sasha_release","Обновления по пятницам и «держим крестики».","guest-cbanner--hatch",4),mark_ext:c("Марк","@mark_zup_ext","Расширения только через поддержку.","guest-cbanner--cross",2),guest_erp:c("Гость ERP","@guest_erp","Локальный мем: «ещё один обмен и я домой».","guest-cbanner--void",0),devops_x:c("Девопс","@devops_copy","Копии, cf и честные пайплайны.","guest-cbanner--hatch",5),accountant_n:c("Бухгалтер","@accountant_bank","Банк, таймауты и вопросы «это они или мы».","guest-cbanner--grid",6),release_mgr:c("Релиз-менеджер","@release_mgr","Очереди ровные, как СКД без запятых.","guest-cbanner--dots",3),onec_joker:c("1С-шут","@onec_joker","Простой и честный юмор про 67 минут простоя.","guest-cbanner--brick",1),newbie_z:c("Новичок","@newbie_restart","Кэш, перезапуск и самоирония.","guest-cbanner--void",0),tech_line:c("Техподдержка","@tech_line_1c","T — терпение. И честные инструкции.","guest-cbanner--cross",1),veteran_u:c("Старожил","@veteran_u","Перезапуск лечит 80% — проверено годами.","guest-cbanner--grid",11),it_zup:c("ИТ","@it_zup_roll","Копия прошла, бой молится.","guest-cbanner--grid",4),kadry_hr:c("Кадры","@kadry_hr","Дубль кадрового как жанр ужаса, а это четверг.","guest-cbanner--dots",5),dev_1c:c("Разработчик","@dev_1c_ext","Откат, кофе, потом снова героизм.","guest-cbanner--hatch",8),skd_watch:c("СКД-наблюдатель","@skd_watch","Отчёты, cf и честные 67.","guest-cbanner--void",4),tester_qa:c("Тест","@tester_qa_copy","Копия за 10 минут, бой — для героев.","guest-cbanner--brick",3),reader_a:c("Читатель","@reader_scroll","Лонгриды без «ещё 10 минут».","guest-cbanner--dots",2),editor_scroll:c("Редакция","@editor_scroll","Оглавление внизу — проверьте.","guest-cbanner--void",1),front_lead:c("Фронт","@front_lead","Зелёные пайплайны и подозрение к удаче.","guest-cbanner--brick",3),devops_e:c("DevOps_енот","@devops_raccoon","Рука на «откат» и честный CI.","guest-cbanner--hatch",6),qa_e:c("QA","@qa_e","Happy path и записи в тест-план.","guest-cbanner--grid",4),grid_enj:c("Grid enjoyer","@grid_enj","display: drama; и честная сетка.","guest-cbanner--cross",2),flex_enj:c("Flex enjoyer","@flex_enj","justify-content: peace;","guest-cbanner--dots",3),subgrid_c:c("Subgrid cult","@subgrid_c","align-self: therapy;","guest-cbanner--brick",1),enjoy67:c("67 enjoyer","@enjoy67","width: 67%; хахахаха","guest-cbanner--grid",0),t_fan:c("T-фан","@t_fan_css","letter-spacing: Tiver;","guest-cbanner--hatch",1),kaskad:c("Каскад","@kaskad_imp","!important — только по пятницам.","guest-cbanner--void",2),flexer2:c("Флексер","@flexer2","gap: emotion; уже в проде души.","guest-cbanner--cross",1),memolog:c("Мемолог","@memolog","Ещё один медиазапрос — и в Зал славы.","guest-cbanner--dots",2),typograph_d:c("Типограф","@typograph_d","4pt, иначе baseline плачет.","guest-cbanner--hatch",7),product_ui:c("Продукт","@product_ui","Главное — чтобы везде одинаково.","guest-cbanner--void",2),pod_listener:c("Слушатель","@pod_listener","Таймкоды на слабые места — огонь.","guest-cbanner--grid",1),mic_host:c("Микрофон","@mic_host","Честный рефактор в следующем выпуске.","guest-cbanner--dots",0),listener67:c("67-й слушатель","@listener67","Выпуск как бэкап — нужен всегда.","guest-cbanner--hatch",2),t_pod:c("T-подкаст","@t_pod","Буква T в названии — не спорим.","guest-cbanner--cross",1),anna_feed:c("Анна","@anna_feed_1c","Жёлтая тема и неожиданный уют.","guest-cbanner--hatch",3),petr_feed:c("Пётр","@petr_feed_bk","Бэкап сделал — можно жить.","guest-cbanner--brick",4),guest_you_feed:c("Вы (гость)","@guest_you_feed","Локально всё честно подсвечено.","guest-cbanner--grid",0),zup_bot_feed:c("ЗУП-бот","@zup_bot_feed","cf/cu в пятницу — только с копией.","guest-cbanner--grid",0),skd_guru_feed:c("СКД-guru","@skd_guru_feed","67-я запятая в отчёте — традиция.","guest-cbanner--dots",5),buh_feed:c("Бух","@buh_feed","Обновление: чай, потом кнопки.","guest-cbanner--cross",6),oleg_feed:c("Олег","@oleg_feed_forms","Версии форм и честный перезапуск.","guest-cbanner--void",2),mod_feed_1c:c("Модератор","@mod_feed_1c","T в названии отчёта — табель.","guest-cbanner--hatch",1),kadry_feed:c("Кадры","@kadry_feed","ЗУП после обмена — как понедельник.","guest-cbanner--brick",4),ilya_feed:c("Илья","@ilya_feed","Регламент и «ещё один домой».","guest-cbanner--grid",3),lin_feed:c("Лин","@lin_feed","Расширение без поддержки — как спагетти без вилки.","guest-cbanner--dots",5),sasha_feed:c("Саша","@sasha_feed","Типовая не виновата — проверьте обмен.","guest-cbanner--cross",4),participant_demo:c("Участник","@participant_demo","Закладки и спасибо за пост.","guest-cbanner--dots",1),guest_demo:c("Гость","@guest_demo_q","Интересно, как будет после входа.","guest-cbanner--void",0),mod_demo:c("Модератор","@mod_demo","Макет: ответы и счётчики локальные.","guest-cbanner--grid",0)},we={prodsoft:{title:"Производственный учёт",tag:"ERP",desc:"Регламенты, отчётность и спокойствие: чтобы конец квартала не ощущался как survival horror.",members:"2,4k участников",handle:"@tiver_prodsoft",website:"https://tiver.social/community/prodsoft",bannerClass:"guest-cbanner--grid",posts:[{author:"Модератор",rel:"2 ч назад",text:"Напоминание: перед закрытием месяца — сверка и чай.",likes:24,comments:5,commentsList:[{who:"Анна К.",text:"Классика: больше 15 минут в полноэкранном конфигураторе 8.5 — и у окна модуля пропадают «закрыть/свернуть». Случайный клик по месту крестика — и весь конфигуратор падает без предупреждения. Бессмысленно и беспощадно.",avatar:"hatch",slug:"anna_k"},{who:"Пётр",text:"Мем «ожидание/реальность» про 8.5: слева — идеальная многопоточность, справа — ты с молотком ждёшь, пока платформа перестанет лагать. Зашкварно узнаваемо.",avatar:"brick",slug:"petr"},{who:"Оксана",text:"ERP 2.5 как айсберг: над водой — «правила факта в бюджетном отчёте идеальны». Под водой — «Расход в ЭтапеПроизводства не заполняется, учётный вид цены без валюты, синхронизация с БП 3.0 убила аналитику по складам».",avatar:"dots",slug:"oksana"},{who:"ЗУП-бот",text:"Когда в очередной раз выясняется, что ЗУП 3.1 при расчёте не учитывает доходы для базы по вычетам — чистый детектив, только вместо Шерлока ты сидишь с обороткой и чувствуешь плохой вайб.",avatar:"grid",slug:"zup_mascot"},{who:"1С-енот",text:"Матрица: красная таблетка — «ЗУП 8.5», синяя — «7.7». Подпись: на 7.7 не забывай объявлять процедуры в заголовке модуля. Это отстой, но честный кринж, с которым все жили.",avatar:"cross",slug:"raccoon_1c"}]},{author:"Анна К.",rel:"вчера",text:"В СКД снова победила запятая. Празднуем.",likes:41,comments:12,commentsList:[{who:"Модератор",text:"Это не баг, это контур ожиданий бизнеса. Хотя после брейнрота от СКД иногда хочется просто альфа-кашля в ответ.",avatar:"grid",slug:"mod_comm"},{who:"Олег",text:"Тестировали на КОРПе, а у заказчика базовая — это не мем, это боль. «1С не КОРП версии» в одном предложении.",avatar:"cross",slug:"oleg_fin"},{who:"Анна К.",text:"Вижу. Исправила — теперь зелёное. Но «заповедник багов» в ERP с табличкой «осторожно, динамическое планирование» — это полный имба по честности.",avatar:"hatch",slug:"anna_k"},{who:"Бух",text:"ЗУП ругается на дубль кадрового — типовая не виновата. Я уже тильтанула, пока искала, кто объявил процедуру не там.",avatar:"brick",slug:"buh_zup"},{who:"СКД-гuru",text:"Запятая в выражении — классика. 67-й раз ловлю. Если это кринж — то только для тех, кто не работал с отчётами.",avatar:"dots",slug:"skd_expert"},{who:"Илья",text:"cf на копии — и спать спокойно. Иначе завтра тебя на стене висит «А ТЫ ЗАПОЛНИЛ закладку Расход в ЭтапеПроизводства 2.5?»",avatar:"void",slug:"ilya"},{who:"Саша",text:"Обновление конфигурации в пятницу после обеда — держим крестики. Как мем с медведем в футболке «1С:ERP», который орёт «ДЕБЕЕЕЕТ», а ему отвечают: «Это ERP, тут только кредит».",avatar:"hatch",slug:"sasha_rel"},{who:"Оля",text:"Ошибка «поле объекта не обнаружено» — это не приговор, это четверг. Или плохой вайб от 8.5, грани тонкая.",avatar:"grid",slug:"olya"},{who:"Марк",text:"Расширение под ЗУП — только через поддержку, иначе хахахаха. Pull stack разработчик тут не прокатит.",avatar:"cross",slug:"mark_ext"},{who:"Катя",text:"Провела тест на копии — жёлтое только там, где надо. На бою без бэкапа — это зашквар, не ризз.",avatar:"dots",slug:"katya"},{who:"Лин",text:"T — как «типовая»: если написано, значит закон. Буква T в отчёте — табель, не опечатка.",avatar:"brick",slug:"lin"},{who:"Гость ERP",text:"Локальный мем: «ещё один обмен и я домой». Как форумный ответ: «У меня УНФ на 8.5, не соскочить с лабораторной крысы» — «Примите соболезнования с вашим горем (УНФ)».",avatar:"void",slug:"guest_erp"}]},{author:"Релиз-менеджер",rel:"3 дня назад",text:"План: обновление ЗУП, затем синхронизация с банком. Бэкап обязателен — даже если «вчера делали».",likes:33,comments:4,commentsList:[{who:"Девопс",text:"Копию накатил, жду cf. Как в меме: «вливаю, к чёрту тесты» — и сразу «revert, прод упал». Не повторять в пятницу.",avatar:"hatch",slug:"devops_x"},{who:"Бухгалтер",text:"Банк говорит «таймаут» — это они или мы? Я уже час не могу «закрыть квартал» — чистый тильт, не кринж.",avatar:"grid",slug:"accountant_n"},{who:"Релиз-менеджер",text:"Они. У нас очередь ровная, как СКД без запятых. Главный секрет — мы просто скопировали требования с прошлого релиза, шутка, но больно правдоподобно.",avatar:"dots",slug:"release_mgr"},{who:"1С-шут",text:"67 минут простоя — рекорд честности. Как коммит, где коллега «Девин» удалил строку и положил CI: «ломает пайплайн каждый раз».",avatar:"brick",slug:"onec_joker"}]},{author:"Техподдержка",rel:"5 дней назад",text:"Частая ошибка после обновления: «несоответствие версий форм». Решение: очистка кэша + перезапуск сеанса.",likes:19,comments:3,commentsList:[{who:"Новичок",text:"Спасибо, помогло. Я просто не перезашёл — кринжуля, не стыдно. Вайб такой: «перезапуск лечит», и правда.",avatar:"void",slug:"newbie_z"},{who:"Техподдержка",text:"Пожалуйста. T — терпение. Если нужен ризз к платформе — начните с кэша сеанса, без альфа-кашля в тикете.",avatar:"cross",slug:"tech_line"},{who:"Старожил",text:"Локальный мем: «перезапуск лечит 80%». Остальное — брейнрот от обновлений и честный тильт по пятницам.",avatar:"grid",slug:"veteran_u"}]},{author:"Кадры · ЗУП",rel:"сегодня",text:"Релиз 3.1: перенос отпусков и дубли кадровых — чек-лист перед cf/cu в приложении.",likes:28,comments:4,commentsList:[{who:"Бух",text:"67 пунктов в чек-листе — и ни одного лишнего. УНФ на 8.5 — не соскочить с «лабораторной крысы»; коллеги в чате уже выразили соболезнования, и это не сарказм, а жанр.",avatar:"brick",slug:"buh_zup"},{who:"ИТ",text:"Обновление конфигурации на копии прошло, на бою — молимся. Как «кружочки GitHub из иллюминатора»: зелёное везде, а душа не верит.",avatar:"grid",slug:"it_zup"},{who:"Кадры",text:"«Дубль кадрового» звучит как хоррор, а это четверг. Краш на вычеты РКСН не обсуждаем без чая.",avatar:"dots",slug:"kadry_hr"},{who:"Саша",text:"T — табель. Без T — хаос. И да, на 7.7 заголовок модуля — святое, иначе имба превращается в зашквар.",avatar:"cross",slug:"sasha"}]},{author:"СКД-наблюдатель",rel:"2 дня назад",text:"Ошибка расчёта: «поле объекта не обнаружено» после выгрузки в ЗУП — типовой обход через пересчёт и чистку временных.",likes:36,comments:5,commentsList:[{who:"Разработчик",text:"Расширение трогали? Тогда сначала откат, потом кофе. Code review как завещание — узнаю себя в каждом PR.",avatar:"hatch",slug:"dev_1c"},{who:"СКД-наблюдатель",text:"Только отчёт, cf не трогали — честное 67. Ошибка после выгрузки — как мем «AI всё испортил»: PR огромный, а понимания ноль.",avatar:"void",slug:"skd_watch"},{who:"Тест",text:"На копии воспроизвёл за 10 минут. На бою — не пробовал, я же не герой. Pull stack developer тут не я.",avatar:"brick",slug:"tester_qa"},{who:"Бух",text:"Обмен с банком ждёт — классика ЗУП. Пулль, Pull'тачок — но если спуллю, в локали будут конфликты.",avatar:"grid",slug:"buh_zup"},{who:"Гость",text:"Локальный мем: «ещё один обмен и я домой». GIT COMMIT -m «что наша жизнь…» — и вроде уже философия, а не фикc.",avatar:"guest",slug:"you"}]}],aboutExtra:"Сообщество для тех, кто любит порядок в цифрах и спокойствие в глазах бухгалтера."},scroll:{title:"Чтение без скролла",tag:"Тема",desc:"Длинные тексты и внимание без бесконечной ленты.",members:"1,2k подписчиков",handle:"@tiver_scroll",website:"https://tiver.social/community/scroll",bannerClass:"guest-cbanner--hatch",posts:[{author:"Редакция",rel:"5 ч назад",text:"Новый лонгрид про фокус — без бесконечного скролла.",likes:18,comments:2,commentsList:[{who:"Читатель",text:"Наконец-то не «ещё 10 минут». Хороший вайб от оглавления.",avatar:"dots",slug:"reader_a"},{who:"Редакция",text:"Добавили оглавление внизу — проверьте. Без брейнрота в ленте.",avatar:"void",slug:"editor_scroll"}]}],aboutExtra:"Читаем медленно и с удовольствием."},deploy:{title:"Ночной деплой",tag:"Оффтоп",desc:"Кофе, CI и лёгкая мистика после 22:00.",members:"842 участника",handle:"@tiver_nightly",website:"https://tiver.social/community/deploy",bannerClass:"guest-cbanner--brick",posts:[{author:"DevOps_енот",rel:"9 мин назад",text:"Зелёный пайплайн. Подозрительно зелёный.",likes:66,comments:9,commentsList:[{who:"Фронт",text:"У нас тоже зелёный. Это ловушка? Как кружочки GitHub из иллюминатора — зелёное везде, а ты всё равно не отдыхаешь.",avatar:"brick",slug:"front_lead"},{who:"DevOps_енот",text:"Пока нет. Но я держу руку на «откат». И на реверт коммита с громким названием.",avatar:"hatch",slug:"devops_e"},{who:"QA",text:"Записала в тест-план как «happy path». Если прод упал — это уже другой жанр.",avatar:"grid",slug:"qa_e"},{who:"Саша",text:"67 зелёных шагов — подозрительно. Как токсичный коммент к библиотеке и баннер «взлетай с Copilot» рядом.",avatar:"dots",slug:"sasha"},{who:"Оля",text:"Пайплайн зелёный, а я нет. Винни-Пух бы сказал: не спуллишь — конфликт будет со мной.",avatar:"void",slug:"olya"},{who:"Лин",text:"T — как «trust but verify». Full stack звучит гордо, а я иногда pull stack developer.",avatar:"cross",slug:"lin"},{who:"Катя",text:"Локальный мем: «ещё один релиз без бэкапа». Надутый утконос в репозитории не завезли, только rebase.",avatar:"hatch",slug:"katya"},{who:"Марк",text:"Откат на тег — и спать. Иначе завтра тебе зачитают code review как завещание.",avatar:"brick",slug:"mark"},{who:"Илья",text:"Зелёный — это цвет надежды или тревоги? AI написал весь PR — теперь мы оба не понимаем, почему оно живёт.",avatar:"grid",slug:"ilya"}]}],aboutExtra:"Если билд упал — вы не одиноки."},cssmemes:{title:"Мемы про CSS",tag:"Юмор",desc:"!important-шутки и драма вокруг flex-gap.",members:"5,1k подписчиков",handle:"@tiver_css",website:"https://tiver.social/community/css",bannerClass:"guest-cbanner--dots",posts:[{author:"Flex enjoyer",rel:"сейчас",text:"gap: emotion;",likes:120,comments:8,commentsList:[{who:"Grid enjoyer",text:"display: drama; Использовать этот мем в 2026-м — лютый зашквар, но я не удержался.",avatar:"cross",slug:"grid_enj"},{who:"Flex enjoyer",text:"justify-content: peace; Хотя иногда это просто justify-content: cope.",avatar:"dots",slug:"flex_enj"},{who:"Subgrid cult",text:"align-self: therapy; Кринжуля — когда gap: emotion в проде без согласования.",avatar:"brick",slug:"subgrid_c"},{who:"67 enjoyer",text:"width: 67%; хахахаха. Это имба для статистики в шутках.",avatar:"grid",slug:"enjoy67"},{who:"T-фан",text:"letter-spacing: Tiver; Ризз к сетке только при честном baseline.",avatar:"hatch",slug:"t_fan"},{who:"Каскад",text:"!important — только по пятницам. Иначе тильт у потомков селектора.",avatar:"void",slug:"kaskad"},{who:"Флексер",text:"gap: emotion; уже в проде души. Вайбово, если не смотреть в coverage.",avatar:"cross",slug:"flexer2"},{who:"Мемолог",text:"Локальный мем: «ещё один медиазапрос». Брейнрот от бесконечных брейкпоинтов.",avatar:"dots",slug:"memolog"}]}],aboutExtra:"Юмор тёмный, как тема в DevTools."},closed:{title:"Закрытый канал",tag:"Закрыто",desc:"Только по приглашениям. Снаружи тихо.",members:"по приглашению",handle:"@tiver_vip",website:"https://tiver.social/community/closed",bannerClass:"guest-cbanner--void",requestOnly:!0,posts:[],aboutExtra:"Сюда пускают по списку."},ui:{title:"UI-клуб",tag:"Дизайн",desc:"Сетки, типографика, споры про радиусы.",members:"3,4k участников",handle:"@tiver_ui",website:"https://tiver.social/community/ui",bannerClass:"guest-cbanner--cross",posts:[{author:"Сетка",rel:"вчера",text:"8pt grid или 4pt — выберите сторону.",likes:55,comments:2,commentsList:[{who:"Типограф",text:"4pt, иначе baseline плачет. Плохой вайб — когда крашится сетка из-за «красивого» радиуса.",avatar:"hatch",slug:"typograph_d"},{who:"Продукт",text:"Главное — чтобы везде одинаково. И чтобы никто не устроил кринж с пятью сетками в одном экране.",avatar:"void",slug:"product_ui"}]}],aboutExtra:"Пиксель-перфекционисты welcome."},podcasts:{title:"Подкасты о коде",tag:"Аудио",desc:"Фоновый звук для честного вида работы.",members:"956 подписчиков",handle:"@tiver_audio",website:"https://tiver.social/community/podcasts",bannerClass:"guest-cbanner--grid",posts:[{author:"Микрофон",rel:"3 дня назад",text:"Выпуск 42: про legacy и мораль.",likes:30,comments:4,commentsList:[{who:"Слушатель",text:"Таймкоды на слабые места — огонь. Выпуск как бэкап: нужен всегда, даже если краш настроения.",avatar:"grid",slug:"pod_listener"},{who:"Микрофон",text:"В следующем — про «честный рефактор» и про то, как не утонуть в ERP-анекдотах.",avatar:"dots",slug:"mic_host"},{who:"67-й слушатель",text:"Выпуск как бэкап — нужен всегда. Иначе брейнрот от бесконечных «ещё пять минут».",avatar:"hatch",slug:"listener67"},{who:"T-подкаст",text:"Буква T в названии — не спорим. Это не зашквар, это бренд.",avatar:"cross",slug:"t_pod"}]}],aboutExtra:"Слушаем и делаем вид, что работаем."}},Ke={ilya:{name:"Илья",handle:"@ilya_codes",status:"печатает…",bio:"Фронт, кофе и иногда сон. Фан-страница для гостя.",bannerClass:"guest-cbanner--grid",photos:3,posts:[{rel:"вчера",text:"Рефакторинг ради одной строчки в diff — это искусство."}]},sasha:{name:"Саша",handle:"@sasha_ping",status:"в сети",bio:"Сети, пинги, мемы про latency.",bannerClass:"guest-cbanner--hatch",photos:12,posts:[{rel:"2 ч назад",text:"Если ping < 1 ms — вы в датацентре или в Matrix."}]},olya:{name:"Оля",handle:"@olya_game",status:"в игре",bio:"Инди и UI. В госте только макет.",bannerClass:"guest-cbanner--brick",photos:8,posts:[{rel:"сейчас",text:"Один квест — весь вечер. Нормально."}]},lin:{name:"Лин",handle:"@lin_dnd",status:"не беспокоить",bio:"DnD и типографика.",bannerClass:"guest-cbanner--void",photos:5,posts:[]},mark:{name:"Марк",handle:"@mark_rust",status:"был(а) недавно",bio:"Rust и велосипеды.",bannerClass:"guest-cbanner--dots",photos:2,posts:[{rel:"3 дня назад",text:"Borrow checker сказал «нет», я сказал «ещё раз»."}]},katya:{name:"Катя",handle:"@katya_photo",status:"был(а) вчера",bio:"Плёнка и цифра.",bannerClass:"guest-cbanner--cross",photos:40,posts:[{rel:"вчера",text:"Свет поймали. Кофе пролили. Баланс."}]},you:{name:"Вы",handle:"@guest_local",status:"гость",bio:"Локальный предпросмотр без аккаунта.",bannerClass:"guest-cbanner--grid",photos:0,posts:[]},...$t},xe={g2048:{title:"Слияние плиток XIV",tag:"Браузер · головоломка",tagline:"Классика в одной вкладке: цифры растут, нервы — тоже.",desc:"Никакого магазина скинов. Только сетка, стратегия и честный «ещё один раунд» в 3 часа ночи.",coverClass:"guest-cbanner--grid",shots:["#141418","#18181c","#1c1c22"],minSpec:"ОС: Windows 7+. CPU: любой, что ещё включается. RAM: 512 МБ. GPU: встроенная, мечты о кадрах не обязательны.",maxSpec:"ОС: Windows 11. CPU: Ryzen 9 9950X «на всякий». RAM: 128 ГБ «потому что могу». GPU: RTX 5090 — в будущем, зато уже в README."},gcolor:{title:"Спектр за минуту",tag:"Реакция · веб",tagline:"Монитор спорит с глазами. Победитель не получает ничего.",desc:"Минималистичный лобби-режим: цвет, таймер, таблица «кто кликнул быстрее».",coverClass:"guest-cbanner--hatch",shots:["#121214","#16161a","#1a1a20"],minSpec:"ОС: Windows XP и честные глаза. RAM: 256 МБ. Экран: хоть CRT.",maxSpec:"ОС: Windows 11 HDR. GPU: RTX 5090, калибратор за 3 зарплаты, кресло с lumbar support level 9000."},gquiz:{title:"Лобби правды",tag:"На двоих · пати",tagline:"Вопросы из чата, ответы из чести. Дружба тестируется в проде.",desc:"Синхронизация «магическая», как и обещано в README. Подходит для стрима и для ссоры в Discord.",coverClass:"guest-cbanner--brick",shots:["#101012","#141418","#18181e"],minSpec:"ОС: Windows. Сеть: dial-up всё ещё можно, но грустно. Второй игрок: обязателен.",maxSpec:"ОС: Windows 11. Сеть: fiber + сосед с GTX 5090 для моральной поддержки."},gsnake:{title:"Линия питания",tag:"Аркада · офлайн",tagline:"Еда, хвост, смысл жизни — в одном коридоре.",desc:"Ретро-UI без ретро-цены. Работает там, где не пускают Steam.",coverClass:"guest-cbanner--dots",shots:["#131315","#17171b","#1b1b21"],minSpec:"ОС: Windows 95, клавиши стрелок не залипают физически.",maxSpec:"ОС: Windows 11, 360 Hz OLED, мышь с пером для… стрелок."},gsudoku:{title:"Сетка девять на девять",tag:"Логика · спокойно",tagline:"Тишина, чай и запрет на угадывание «на глаз».",desc:"Для тех, кто считает Sudoku медитацией, а не мини-игрой в газете.",coverClass:"guest-cbanner--cross",shots:["#111113","#151517","#19191d"],minSpec:"ОС: Windows. Мозг: 1 шт. Кофе: опционально, но рекомендуется всегда.",maxSpec:"ОС: Windows 11. RAM: «сколько влезет». GPU: 5090 — чтобы цифры летали (шутка, не летят)."},gpzl:{title:"Девять кусков спокойствия",tag:"Пазл · Zen",tagline:"Моторика, ровный стол и отсутствие pay-to-skip.",desc:"Короткая сессия между созвонами. Коту от экрана — минимум два метра.",coverClass:"guest-cbanner--void",shots:["#121214","#161618","#1a1a1e"],minSpec:"ОС: Windows. Стол: ровный. Кот: подальше от мышки.",maxSpec:"ОС: Windows 11. Стол: marble. GPU: RTX 5090 для рендера… тени от пазла."},gtetris:{title:"Падающие очереди",tag:"Аркада · демо",tagline:"Блоки, гравитация и этика «ещё одна линия».",desc:"Вдохновлено витринами вроде крупных площадок: крупный заголовок, жанр, один экран — и сразу понятно, во что вы вляпались.",coverClass:"guest-cbanner--grid",shots:["#0e0e10","#121214","#16161a"],minSpec:"ОС: Windows. Клавиатура: любая, где не залипают ←→.",maxSpec:"ОС: Windows 11. Клавиатура: механика на 80g, GPU 5090 — чтобы линии очищались с ray tracing (нет)."},goff:{title:"Режим нулевых push",tag:"Утилита · мета",tagline:"Когда «не беспокоить» — главная фича продукта.",desc:"Никакого геймплея. Только честный статус «выключено» и спокойствие в трее.",coverClass:"guest-cbanner--hatch",shots:["#101012","#141416","#18181a"],minSpec:"ОС: Windows. Уведомления: выкл. Душа: включена.",maxSpec:"ОС: Windows 11. RTX 5090 рендерит пустоту в 8K."}};function f(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Et=new Set(["void","grid","hatch","brick","dots","cross","guest"]);function Tt(e){return`guest-geo-avatar guest-geo-avatar--${Et.has(e)?e:"void"}`}function At(e){return!e||e<1?[]:[{who:"Участник",text:"Забрал в закладки, спасибо.",avatar:"dots",slug:"participant_demo"},{who:"Гость",text:"Как это будет после входа?",avatar:"void",slug:"guest_demo"},{who:"Модератор",text:"Пока только макет — ответы и счётчики локальные.",avatar:"grid",slug:"mod_demo"}].slice(0,Math.min(3,e))}function Lt(e){const t=(e||[]).map(a=>{const n=Tt(a.avatar),r=a.slug&&/^[a-z0-9_-]+$/i.test(String(a.slug))?String(a.slug):"",o=r?`<a href="${g(`/guest/friend/${f(r)}`)}" class="guest-post-comments__profile">`:'<span class="guest-post-comments__profile guest-post-comments__profile--nohref">',i=r?"</a>":"</span>";return`<li class="guest-post-comments__item">
      ${o}
      <span class="${n}" aria-hidden="true"></span>
      <span class="guest-post-comments__stack">
        <span class="guest-post-comments__who">${f(a.who)}</span>
        <span class="guest-post-comments__text">${f(a.text)}</span>
      </span>
      ${i}
    </li>`});return`
    <div class="guest-post-comments" hidden data-guest-comments-panel>
      <p class="guest-post-comments__label text-muted text-sm">Комментарии</p>
      <ul class="guest-post-comments__list">${t.length===0?'<li class="guest-post-comments__placeholder text-muted" data-guest-comments-placeholder>Пока никто не написал.</li>':""}${t.join("")}</ul>
      <div class="guest-post-comments__composer auth-form guest-post-comments__composer--inline">
        <input class="input guest-post-comments__input" type="text" maxlength="240" placeholder="Написать…" aria-label="Текст комментария" />
        <button type="button" class="btn btn--secondary btn--sm guest-post-comments__send">Отправить</button>
      </div>
    </div>
  `}function Xe(e,t,s,a,n,r=0,o=null){const i=Array.isArray(o)?o:At(n),l=i.length;return`
    <article class="guest-cpost card card--pad-md">
      <header class="guest-cpost__head">
        <span class="guest-cpost__avatar" aria-hidden="true"></span>
        <div>
          <span class="guest-cpost__author">${f(e)}</span>
          <span class="guest-cpost__dot">·</span>
          <span class="guest-cpost__rel">${f(t)}</span>
        </div>
      </header>
      <p class="guest-cpost__text">${f(s)}</p>
      <div class="guest-post__actions guest-post__actions--pixel">
        <button type="button" class="guest-post__like guest-pixbtn" aria-pressed="false" aria-label="Нравится" data-like-base="${a}">
          <span class="guest-pixbtn__glyph" aria-hidden="true">◆</span>
          <span class="guest-pixbtn__n guest-pixbtn__n--like" data-like-n>${a}</span>
        </button>
        <button type="button" class="guest-post__side guest-pixbtn" data-guest-comment aria-label="Комментарии" aria-expanded="false">
          <span class="guest-pixbtn__glyph" aria-hidden="true">□</span>
          <span class="guest-pixbtn__n" data-count>${l}</span>
        </button>
        <button type="button" class="guest-post__side guest-pixbtn" data-guest-repost aria-label="Репост">
          <span class="guest-pixbtn__glyph" aria-hidden="true">↻</span>
          <span class="guest-pixbtn__n" data-count>${r}</span>
        </button>
      </div>
      ${Lt(i)}
    </article>
  `}function Ct(e,t,s){return`
    <div class="guest-community-meta-rows">
      <div class="guest-meta-row">
        <span class="guest-pixel-ico guest-pixel-ico--users" aria-hidden="true"></span>
        <span>${f(e)}</span>
      </div>
      <div class="guest-meta-row">
        <span class="guest-pixel-ico guest-pixel-ico--doc" aria-hidden="true"></span>
        <span>${f(t)}</span>
      </div>
      <div class="guest-meta-row">
        <span class="guest-pixel-ico guest-pixel-ico--link" aria-hidden="true"></span>
        <span class="text-muted">${f(s)}</span>
      </div>
    </div>
  `}function qt(e){const t=we[e],s=(t==null?void 0:t.title)??`«${f(e)}»`,a=(t==null?void 0:t.tag)??"—",n=(t==null?void 0:t.desc)??"Нет в каталоге — вернитесь к сетке сообществ.",r=(t==null?void 0:t.members)??"—",o=(t==null?void 0:t.handle)??`@tiver_${f(e)}`,i=(t==null?void 0:t.website)??"https://tiver.social",l=(t==null?void 0:t.bannerClass)??"guest-cbanner--void",u=(t==null?void 0:t.posts)??[],p=(t==null?void 0:t.aboutExtra)??"",_=!!(t!=null&&t.requestOnly)?`<button type="button" class="btn btn--primary" data-sub-slug="${f(e)}" data-guest-request-sub>Подписаться</button>`:`<button type="button" class="btn btn--primary guest-community-toggle-sub" data-sub-slug="${f(e)}">Подписаться</button>`,x=u.map(d=>Xe(d.author,d.rel,d.text,d.likes,d.comments,d.reposts??0,d.commentsList)).join("");return`
    <section class="guest-community-page" data-community-slug="${f(e)}">
      <p class="guest-community__back">
        <a class="t-inline-link" href="${g("/guest/groups")}" data-i18n="community.back">← К каталогу сообществ</a>
      </p>
      <div class="guest-community-cover ${l}" role="img" aria-label=""></div>
      <div class="guest-community-sheet card">
        <div class="guest-community-headrow">
          <div class="guest-community-head-main">
            <div class="guest-community-topline">
              <div class="guest-community-avatar" aria-hidden="true"></div>
              <div class="guest-community-titles">
                <span class="guest-group-cell__tag">${f(a)}</span>
                <h1 class="guest-community-hero-title">${f(s)}</h1>
                <p class="guest-community-handle">${f(o)}</p>
              </div>
              <div class="guest-community-actions">
                ${_}
              </div>
            </div>
            ${Ct(r,n,i)}
          </div>
        </div>
        <div class="guest-community-tabs" role="tablist">
          <button type="button" class="guest-chip guest-chip--on" data-c-tab="feed" role="tab" aria-selected="true">Лента</button>
          <button type="button" class="guest-chip" data-c-tab="members" role="tab" aria-selected="false">Участники</button>
          <button type="button" class="guest-chip" data-c-tab="about" role="tab" aria-selected="false">О сообществе</button>
        </div>
        <div class="guest-community-panel" data-c-panel="feed">
          <div class="guest-community-composer auth-form">
            <input class="input guest-community-composer__input" type="text" maxlength="200" placeholder="Что нового в сообществе?" />
            <button type="button" class="btn btn--secondary guest-community-composer__btn">Опубликовать</button>
          </div>
          <div class="guest-community-feed">${x||'<p class="text-muted">Пока тихо — загляните позже.</p>'}</div>
        </div>
        <div class="guest-community-panel" data-c-panel="members" hidden>
          <p class="text-secondary">Список участников — после авторизации. Здесь только счётчик из шапки.</p>
        </div>
        <div class="guest-community-panel" data-c-panel="about" hidden>
          <p class="text-secondary">${f(p)}</p>
        </div>
      </div>
    </section>
  `}function Pt(e){var i;const t=Ke[e],s=(t==null?void 0:t.name)??e,a=(t==null?void 0:t.handle)??`@${e}`,n=(t==null?void 0:t.bio)??"Нет данных.",r=(t==null?void 0:t.bannerClass)??"guest-cbanner--void",o=((i=t==null?void 0:t.posts)==null?void 0:i.map(l=>Xe(s,l.rel,l.text,4,1,0)).join(""))??"";return`
    <section class="guest-friend-page" data-friend-slug="${f(e)}">
      <p class="guest-community__back">
        <a class="t-inline-link" href="${g("/guest/friends")}">← К друзьям</a>
      </p>
      <div class="guest-community-cover ${r}"></div>
      <div class="guest-community-sheet card">
        <div class="guest-community-headrow">
          <div class="guest-community-head-main">
            <div class="guest-community-topline guest-community-topline--friend">
              <div class="guest-community-avatar" aria-hidden="true"></div>
              <div class="guest-community-titles">
                <h1 class="guest-community-hero-title">${f(s)}</h1>
                <p class="guest-community-handle">${f(a)}</p>
              </div>
            </div>
            <div class="guest-community-meta-rows">
              <div class="guest-meta-row">
                <span class="guest-pixel-ico guest-pixel-ico--photo" aria-hidden="true"></span>
                <span>${(t==null?void 0:t.photos)??0} фото · полный альбом после входа</span>
              </div>
              <div class="guest-meta-row">
                <span class="guest-pixel-ico guest-pixel-ico--doc" aria-hidden="true"></span>
                <span>${f(n)}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="guest-community-tabs" role="tablist">
          <button type="button" class="guest-chip guest-chip--on" data-f-tab="wall" role="tab" aria-selected="true">Стена</button>
          <button type="button" class="guest-chip" data-f-tab="photos" role="tab" aria-selected="false">Фото</button>
        </div>
        <div class="guest-community-panel" data-f-panel="wall">
          <div class="guest-community-feed">${o||'<p class="text-muted">Пусто.</p>'}</div>
          <div class="guest-friend-locked card card--pad-sm">
            <p class="copy-lead text-sm" data-i18n="friend.wall_locked">Полная стена и лента друга — после входа в аккаунт.</p>
            <p class="text-muted text-sm" data-i18n="friend.photos_hint">Галерея и личные фото — только для авторизованных.</p>
            <div class="actions-row actions-row--start">
              <a href="${g("/login")}" class="btn btn--primary btn--sm" data-i18n="guest.login">Войти</a>
            </div>
          </div>
        </div>
        <div class="guest-community-panel" data-f-panel="photos" hidden>
          <p class="text-muted">Фото скрыты до входа.</p>
        </div>
      </div>
    </section>
  `}function It(e){const t=xe[e],s=(t==null?void 0:t.title)??e,a=(t==null?void 0:t.tag)??"",n=(t==null?void 0:t.desc)??"Нет карточки в демо.",r=(t==null?void 0:t.tagline)??"",o=(t==null?void 0:t.coverClass)??"guest-cbanner--void",l=((t==null?void 0:t.shots)??["#1a1a1c","#1e1e22","#222228"]).map((u,p)=>`<div class="guest-game-slide" style="background-color:${f(u)}" role="img" aria-label="Кадр ${p+1}"></div>`).join("");return`
    <section class="guest-game-page" data-game-id="${f(e)}">
      <p class="guest-community__back">
        <a class="t-inline-link" href="${g("/guest/games")}">← К играм</a>
      </p>
      <div class="guest-community-cover ${o}"></div>
      <div class="guest-community-sheet card">
        <div class="guest-game-hero">
          <p class="guest-group-cell__tag">${f(a)}</p>
          <h1 class="guest-community-hero-title">${f(s)}</h1>
          ${r?`<p class="guest-game-tagline">${f(r)}</p>`:""}
          <p class="text-secondary">${f(n)}</p>
        </div>
        <div class="guest-game-carousel" aria-label="Скриншоты">
          <div class="guest-game-carousel__track">${l}</div>
        </div>
        <div class="guest-game-spec-card card card--pad-md">
          <h2 class="guest-feed-card__title">Системные требования</h2>
          <p class="guest-game-spec-label">Минимум</p>
          <p class="guest-game-spec-body">${f((t==null?void 0:t.minSpec)??"")}</p>
          <p class="guest-game-spec-label guest-game-spec-label--top">Максимум</p>
          <p class="guest-game-spec-body">${f((t==null?void 0:t.maxSpec)??"")}</p>
        </div>
      </div>
    </section>
  `}function b(e,t,s,a){return{who:e,text:t,avatar:s,slug:a}}const O={tiverDev:[b("Сергей","Сайдбар с виджетами — как в старых дашбордах, только чище.","grid","sergey"),b("Маша","Пиксельные кнопки цепляют. Не оторваться от «В ленту».","dots","masha"),b("Артём","Гость без аккаунта — и всё кликается. Редкость.","hatch","artem"),b("Кира","67 — не мем, а ориентир по качеству. Хахахаха.","brick","kira"),b("Тим","Буква T в логотипе — локальный культ: «тише, тише, Tiver».","cross","tim")],photoClub:[b("Ира","ISO честный — как люблю. Восемь бит не в счёт.","brick","ira"),b("Костя","Серию в лайтруме гляну — отпишусь в треде.","cross","kostya")],nikita:[b("Вадим","2026 в chrome.css — да, не перекрывает. Проверял на Pixel.","grid","vadim"),b("Соня","Архив 2021 пусть живёт в /archive — пусть ребята не мучаются.","void","sonya"),b("Никита","Скрин «в голове» — лучший формат, экономит трафик.","dots","nikita_feed"),b("Лиза","Хахахаха, кнопка 2026 — уже легенда.","hatch","liza"),b("Паша","67 баллов за честность в описании бага.","brick","pasha"),b("Модератор","T — не баг, это фича бренда.","cross","moderator_feed"),b("Гость_7","Локальный мем: «жми T — получишь чай».","dots","guest7"),b("Гость_8","Согласен с 67% комментариев выше.","grid","guest8"),b("Гость_9","На телефоне ок, на духовке не тестил.","void","guest9"),b("Гость_10","CSS 2021 пусть отдыхает.","hatch","guest10"),b("Гость_11","Tiver с T — как твит с твитом.","brick","guest11"),b("Гость_12","Хахахаха, лента живая.","cross","guest12")],minimal:[b("Дизайнер","Пиксель только в госте — иначе глаза отвалятся на длинных текстах.","hatch","designer_u"),b("Продакт","Опрос закину в Notion, здесь просто плюсуем сердцем.","brick","product_u"),b("Вика","67% команды за «только в госте».","dots","vika"),b("Семён","T в шрифте — ок, главное не Comic Sans.","grid","semyon"),b("Аня","Хахахаха, минимализм — это когда кнопок мало, а драм много.","void","anya"),b("Дима","Локальный мем: «ещё один радиус — и я сплю».","cross","dima"),b("Юра","Голосуем за пиксель в госте единогласно.","hatch","yura")],lena:[b("Рома","Линтер как психотерапевт: сначала бесит, потом не отпускает.","cross","roma")],digest:[b("Юля","Про приватность — в закладки. Без крика, респект.","dots","yulya"),b("Дайджест","Добавим ещё блок про cookies — там тоже драма.","grid","digest_yul"),b("Макс","67 ссылок было бы идеально, но хватит и 12.","brick","max_d"),b("Ника","T — траст, если по-английски.","hatch","nika")]},Rt=[b("Олег","С тех пор столько всего — а лента всё ещё наша.","grid","oleg"),b("Лена","Архив CSS помним. Ностальгия по кнопке 2021.","hatch","lena"),b("Tiver Dev","Спасибо, что читаете с самого начала.","dots","tiverdev")];function Mt(){const e=["void","dots","grid","hatch","brick","cross"],t=Array.from({length:21},(s,a)=>{const n=a+4,r=[`Коммент #${n}: если баг — жми T и не кричи.`,`Хахахаха, ${n} раз перечитал пост.`,"67% шанс, что завтра всё ещё будет работать.","Локальный мем: «Tiver — это T + драйвер радости».","Старый CSS — как старый друг: пьёт чай и молчит."];return b(`Архив_${n}`,r[a%r.length],e[a%e.length],`arch${n}`)});return[...Rt,...t]}function le(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}const Dt=new Set(["void","grid","hatch","brick","dots","cross","guest"]);function Ye(e){return`guest-geo-avatar guest-geo-avatar--${Dt.has(e)?e:"void"}`}function Qe(e,t){return Array.isArray(t)?t:[]}function Ze(e){const t=(e||[]).map(a=>{const n=Ye(a.avatar),r=a.slug&&/^[a-z0-9_-]+$/i.test(String(a.slug))?String(a.slug):"",o=r?`<a href="${g(`/guest/friend/${le(r)}`)}" class="guest-post-comments__profile">`:'<span class="guest-post-comments__profile guest-post-comments__profile--nohref">',i=r?"</a>":"</span>";return`<li class="guest-post-comments__item">
      ${o}
      <span class="${n}" aria-hidden="true"></span>
      <span class="guest-post-comments__stack">
        <span class="guest-post-comments__who">${le(a.who)}</span>
        <span class="guest-post-comments__text">${le(a.text)}</span>
      </span>
      ${i}
    </li>`});return`
    <div class="guest-post-comments" hidden data-guest-comments-panel>
      <p class="guest-post-comments__label text-muted text-sm">Комментарии</p>
      <ul class="guest-post-comments__list">${t.length===0?'<li class="guest-post-comments__placeholder text-muted" data-guest-comments-placeholder>Пока никто не написал.</li>':""}${t.join("")}</ul>
      <div class="guest-post-comments__composer auth-form guest-post-comments__composer--inline">
        <input class="input guest-post-comments__input" type="text" maxlength="240" placeholder="Написать…" aria-label="Текст комментария" />
        <button type="button" class="btn btn--secondary btn--sm guest-post-comments__send">Отправить</button>
      </div>
    </div>
  `}function C(e,t,s,a,n="all",r=0,o=3,i=0,l=!1,u=void 0){const p=l?" guest-post--legacy":"",m=Qe(o,u);return`
    <article class="guest-post guest-post--feed${p}" data-guest-post-kind="${n}">
      <div class="guest-post__avatar" aria-hidden="true"></div>
      <div class="guest-post__maincol">
        <div class="guest-post__body">
          <header class="guest-post__head">
            <span class="guest-post__name">${e}</span>
            <span class="guest-post__time">${t}</span>
          </header>
          <p class="guest-post__text">${s}</p>
          ${a?`<p class="guest-post__text guest-post__text--muted">${a}</p>`:""}
        </div>
        <div class="guest-post__actions guest-post__actions--pixel">
          <button type="button" class="guest-post__like guest-pixbtn" aria-pressed="false" aria-label="Нравится" data-like-base="${r}">
            <span class="guest-pixbtn__glyph" aria-hidden="true">◆</span>
            <span class="guest-pixbtn__n guest-pixbtn__n--like" data-like-n>${r}</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-comment aria-label="Комментарии" aria-expanded="false">
            <span class="guest-pixbtn__glyph" aria-hidden="true">□</span>
            <span class="guest-pixbtn__n" data-count>${o}</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-repost aria-label="Репост">
            <span class="guest-pixbtn__glyph" aria-hidden="true">↻</span>
            <span class="guest-pixbtn__n" data-count>${i}</span>
          </button>
        </div>
        ${Ze(m)}
      </div>
    </article>
  `}function E(e,t,s,a,n,r="all",o="",i="void",l=0){const u=n?'<span class="guest-chat-row__dot" aria-hidden="true"></span>':"",p=o?`<span class="guest-chat-row__presence${o==="в сети"?" guest-chat-row__presence--online":""}">${o}</span>`:"",m=Ye(i);return`
    <button type="button" class="guest-chat-row" data-chat="${e}" data-msg-cat="${r}" data-chat-stamp="${l}">
      <div class="guest-chat-row__avatar ${m}" aria-hidden="true"></div>
      <div class="guest-chat-row__mid">
        <span class="guest-chat-row__name">${t}</span>
        <span class="guest-chat-row__preview">${s}</span>
      </div>
      <div class="guest-chat-row__meta">
        <span class="guest-chat-row__time">${a}${u}</span>
        ${p}
      </div>
    </button>
  `}function H(e,t,s,a,n="pop"){const r=a?we[a]:null,o=r!=null&&r.bannerClass?` ${r.bannerClass}`:"",i=a?` data-group-href="${g(`/guest/community/${a}`)}" tabindex="0" role="link"`:"",l=r!=null&&r.requestOnly?`<button type="button" class="btn btn--primary btn--sm" data-sub-slug="${a}" data-guest-request-sub>Подписаться</button>`:`<button type="button" class="btn btn--primary btn--sm guest-community-toggle-sub" data-sub-slug="${a}">Подписаться</button>`;return`
    <div class="guest-group-cell"${i} data-groups-tags="${n}">
      <div class="guest-group-cell__cover${o}" aria-hidden="true"></div>
      <div class="guest-group-cell__body">
        <span class="guest-group-cell__tag">${s}</span>
        <h3 class="guest-group-cell__title">${e}</h3>
        <p class="guest-group-cell__subs">${t}</p>
        ${l}
      </div>
    </div>
  `}function Ot(){return`
    <div class="guest-group-cell guest-group-cell--prodsoft" data-group-href="${g("/guest/community/prodsoft")}" tabindex="0" role="link" data-groups-tags="pop new">
      <div class="guest-group-cell__cover guest-cbanner--grid" aria-hidden="true"></div>
      <div class="guest-group-cell__body">
        <a class="guest-group-cell__head-link" href="${g("/guest/community/prodsoft")}">
          <span class="guest-group-cell__tag">ERP</span>
          <h3 class="guest-group-cell__title">Производственный учёт</h3>
        </a>
        <p class="guest-group-cell__subs">2,4k · регламенты, отчёты, спокойствие</p>
        <button type="button" class="btn btn--primary btn--sm guest-community-toggle-sub" data-sub-slug="prodsoft">Подписаться</button>
      </div>
    </div>
  `}function I(e,t,s){return`
    <a class="guest-friend-row" href="${g(`/guest/friend/${s}`)}">
      <div class="guest-friend-row__avatar" aria-hidden="true"></div>
      <div class="guest-friend-row__info">
        <span class="guest-friend-row__name">${e}</span>
        <span class="guest-friend-row__status">${t}</span>
      </div>
      <span class="guest-friend-row__stub" aria-hidden="true">›</span>
    </a>
  `}function q(e){const t=xe[e];if(!t)return"";const s=t.coverClass??"guest-cbanner--void",a={g2048:"time",gcolor:"time",gquiz:"two",gsnake:"all",gsudoku:"all",gpzl:"all",gtetris:"time",goff:"off"}[e]||"all";return`
    <a class="guest-vkplay-card" href="${g(`/guest/game/${e}`)}" data-game-cat="${a}">
      <div class="guest-vkplay-card__media ${s}" aria-hidden="true"></div>
      <div class="guest-vkplay-card__body">
        <span class="guest-vkplay-card__genre">${t.tag}</span>
        <h3 class="guest-vkplay-card__title">${t.title}</h3>
        <p class="guest-vkplay-card__lede">${t.tagline??""}</p>
      </div>
    </a>
  `}const Oe={feed:`
    <div class="guest-dash">
      <div class="guest-dash__main">
        <section class="guest-hero guest-hero--compact card card--pad-lg">
          <p class="guest-hero__eyebrow">Гостевой предпросмотр</p>
          <h1 class="guest-hero__title">Новости</h1>
          <p class="guest-hero__lead">Лента, сайдбар, композер и фильтры — ведём себя почти как после логина: пост, фильтры, лайки, комментарии и репосты считаются локально.</p>
          <p class="guest-hero__note text-muted">Бот в «Сообщениях» понимает <code class="text-secondary">/help</code> и соседей по чату — с задержкой и «печатает…», без обмана.</p>
        </section>

        <div id="guest-feed-1c-banner" class="guest-1c-topic" hidden role="status">
          <span class="guest-1c-topic__badge">1С</span>
          <span class="guest-1c-topic__text">Тема разблокирована: жёлтая палитра, отдельный пост в ленте и чат «1С · общий». Запятую в СКД проверили за вас нет.</span>
        </div>

        <div class="guest-feed-rail">
          <div class="guest-composer auth-form">
            <input class="input guest-composer__input" type="text" maxlength="280" placeholder="Что у вас нового? (попадёт в ленту ниже)" aria-label="Текст поста" />
            <button type="button" class="btn btn--primary guest-composer__send">В ленту</button>
          </div>
          <div class="guest-feed-filters" role="toolbar" aria-label="Фильтр ленты">
            <button type="button" class="guest-chip guest-chip--on" data-feed-chip="all" role="tab" aria-selected="true">Всё</button>
            <button type="button" class="guest-chip" data-feed-chip="photo" role="tab" aria-selected="false">Фото</button>
            <button type="button" class="guest-chip" data-feed-chip="article" role="tab" aria-selected="false">Статьи</button>
            <button type="button" class="guest-chip" data-feed-chip="people" role="tab" aria-selected="false">Люди</button>
          </div>
          <p id="guest-feed-filter-note" class="guest-feed-filter-note text-muted text-sm" role="status" aria-live="polite"></p>
          <p id="guest-feed-empty-hint" class="guest-feed-empty-hint text-muted text-sm" hidden>Нет постов в этом фильтре.</p>
        </div>

        <section class="card card--pad-md guest-feed-card">
          <div class="guest-feed-card__head">
            <h2 class="guest-feed-card__title">Лента подписок</h2>
            <span class="guest-feed-card__meta">обновлено только что · гость</span>
          </div>
          <div id="guest-feed-stream" class="guest-preview__main">
            <div id="guest-feed-dynamic">
            ${C("Tiver Dev","сейчас","Собрали гостевой экран ближе к «живому» продукту: сетка, сайдбар, больше постов.","","article",24,5,1,!1,O.tiverDev)}
            ${C("Клуб фотографии","9 мин назад","Серия «офис в 8 бит» — без фильтров, только честный ISO.","12 кадров","photo",18,2,0,!1,O.photoClub)}
            ${C("Никита","14:02","Кто-нибудь тестил архив на телефоне? У меня кнопка 2026 не перекрывает кнопки из CSS 2021.","Прикрепил скрин в голове.","people",3,12,0,!1,O.nikita)}
            ${C("Клуб минимализма","13:40","Опрос: оставляем пиксельный шрифт на всём сайте или только в госте?","","article",41,7,2,!1,O.minimal)}
            ${C("Лена","вчера","Выложила длиннопост про то, как не сойти с ума от линтера.","…читать дальше","article",8,1,0,!1,O.lena)}
            ${C("Репост · Дайджест","вчера","12 ссылок про соцсети и приватность. Сжато, без криков.","","article",56,4,9,!1,O.digest)}
            ${C("Вы","черновик","Заголовок черновика","Текст ещё не дописан — как у всех.","people",0,0,0)}
            </div>
            <p class="guest-feed-legacy__label text-muted text-sm">Начало ленты</p>
            <div id="guest-feed-legacy">
            ${C("Tiver Dev","17 февраля 2021","Первый пост: «ещё не знаем, во что это вырастет, но ленту не хочется отдавать чужому алгоритму».","Добро пожаловать в Tiver.","article",128,24,9,!0,Mt())}
            </div>
          </div>
        </section>
      </div>

      <aside class="guest-dash__side" aria-label="Виджеты">
        <div class="guest-widget">
          <h3 class="guest-widget__title">Профиль</h3>
          <div class="guest-widget__row"><span>Гость</span><span class="guest-widget__muted">локально</span></div>
          <div class="guest-widget__row"><span>Подписки</span><span>128</span></div>
          <div class="guest-widget__row"><span>Черновики</span><span>3</span></div>
        </div>
        <div class="guest-widget">
          <h3 class="guest-widget__title">В сети</h3>
          <div class="guest-widget__row"><span class="guest-stat"><span class="guest-stat__dot" aria-hidden="true"></span>12 друзей</span></div>
          <div class="guest-widget__row"><span>Сообщества</span><span class="guest-widget__muted">5 активных</span></div>
        </div>
        <div class="guest-widget">
          <h3 class="guest-widget__title">События</h3>
          <div class="guest-widget__row"><span>Стрим UI</span><span class="guest-widget__muted">пт 20:00</span></div>
          <div class="guest-widget__row"><span>Релиз бета</span><span class="guest-widget__muted">скоро</span></div>
        </div>
      </aside>
    </div>
  `,messages:`
    <section class="guest-hero guest-hero--compact card card--pad-lg">
      <p class="guest-hero__eyebrow">Гостевой предпросмотр</p>
      <h1 class="guest-hero__title">Сообщения</h1>
      <p class="guest-hero__lead">Список чатов и переписка: выберите диалог, пишите снизу, жмите быстрые ответы. У бота есть команды; у людей — заготовленные реплики с задержкой.</p>
      <p class="guest-hero__note text-muted">Чаты под фильтром «Личные» / «Работа» — чистая косметика, но удобно потыкать.</p>
    </section>

    <section class="card card--pad-md">
      <div class="guest-msgs-head">
        <div class="guest-msgs-head__tabs" role="tablist" aria-label="Разделы (макет)">
          <button type="button" class="guest-chip guest-chip--on" data-msg-tab="all" role="tab" aria-selected="true">Все</button>
          <button type="button" class="guest-chip" data-msg-tab="personal" role="tab" aria-selected="false">Личные</button>
          <button type="button" class="guest-chip" data-msg-tab="work" role="tab" aria-selected="false">Работа</button>
        </div>
        <span class="guest-feed-card__meta">поиск · уведомления — заглушки</span>
      </div>
      <div class="guest-msgs-layout">
        <div class="guest-msgs-list">
          <div class="guest-preview__toolbar">
            <span class="guest-preview__toolbar-title">Чаты</span>
            <span class="guest-preview__toolbar-fake">Найти…</span>
          </div>
          <div id="guest-chat-1c-slot" class="guest-chat-1c-slot" hidden data-chat-stamp="0"></div>
          ${E("askzup","Вопросы к гостю · ЗУП","cf/cu на пятницу — обязательны?","17:40",!0,"work","в сети","grid",100)}
          ${E("askcode","Вопросы к гостю · код","Роутер настоящий или театр?","17:22",!0,"work","были недавно","brick",99)}
          ${E("askui","Вопросы к гостю · UI","Пиксель — навсегда или A/B?","16:44",!0,"work","в сети","cross",98)}
          ${E("mama","Мама","Ужин через час?","16:02",!0,"personal","в сети","dots",97)}
          ${E("team","Команда Tiver","Архив: оригинальные CSS снова на месте","вчера",!1,"work","были недавно","grid",96)}
          ${E("dr","Доктор","Результаты анализов вложением","вчера",!0,"personal","был(а) 1 ч назад","hatch",93)}
          ${E("work","Рабочий чат","Дедлайн по макетам — пятница","09:41",!1,"work","в сети","brick",92)}
          ${E("spam","Рассылка","Скидка 12% на подписку","09:00",!1,"all","автоответ","cross",89)}
          ${E("nina","Нина","Завтра кофе в 11:00 — ты как?","08:55",!1,"personal","в сети","dots",88)}
          ${E("support","Поддержка Tiver","Тикет #2048: статус «в работе»","08:12",!0,"work","в сети","grid",87)}
          ${E("photo","Клуб фото","Серия «туман» — залейте RAW в общий альбом","вчера",!1,"all","были вчера","hatch",86)}
          ${E("retro","Ретро-чат","Кто-нибудь помнит WinAmp skins?","ср",!1,"all","онлайн: 4","brick",85)}
          ${E("bot","Бот","/help — список команд","пн",!1,"all","в сети","void",84)}
        </div>
        <div class="guest-preview__col guest-preview__col--thread">
          <div class="guest-thread-head">
            <span class="guest-thread-head__title">Чат</span>
            <span class="guest-thread-head__meta">выберите слева</span>
          </div>
          <div class="guest-thread-messages" hidden></div>
          <div class="guest-thread-empty">Выберите чат слева — здесь появятся сообщения.</div>
          <div class="guest-thread-composer auth-form" hidden>
            <p class="guest-thread-bot-hint text-muted text-sm" data-bot-hint hidden>Команды: <code class="text-secondary">/help</code>, <code class="text-secondary">/ping</code>, <code class="text-secondary">/status</code>, <code class="text-secondary">/tiver</code>, <code class="text-secondary">/зуп</code> — или просто текст.</p>
            <div class="guest-thread-quick" aria-label="Быстрые ответы">
              <button type="button" class="btn btn--ghost btn--sm" data-quick-reply>Ок</button>
              <button type="button" class="btn btn--ghost btn--sm" data-quick-reply>Лол</button>
              <button type="button" class="btn btn--ghost btn--sm" data-quick-reply>+1</button>
              <button type="button" class="btn btn--ghost btn--sm" data-quick-reply>Перезвоню</button>
              <button type="button" class="btn btn--ghost btn--sm" data-quick-reply>?</button>
            </div>
            <div class="guest-thread-compose-row">
              <input class="input guest-thread-compose-input" type="text" maxlength="500" placeholder="Сообщение или команда боту…" aria-label="Текст сообщения" />
              <button type="button" class="btn btn--primary guest-thread-send">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,groups:`
    <section class="guest-hero guest-hero--compact card card--pad-lg">
      <p class="guest-hero__eyebrow">Гостевой предпросмотр</p>
      <h1 class="guest-hero__title">Сообщества</h1>
      <p class="guest-hero__lead">Сетка карточек: баннер, тег, название, подписка и ссылка внутрь сообщества.</p>
      <p class="guest-hero__note text-muted">Подписка на «Производственный учёт» открывает тему 1С в настройках; отписка убирает её.</p>
    </section>
    <section class="card card--pad-md">
      <div class="guest-groups-head">
        <div class="guest-groups-head__top">
          <span class="guest-feed-card__title guest-feed-card__title--plain">Каталог</span>
          <button type="button" class="btn btn--secondary btn--sm" id="guest-create-group-btn">Создать сообщество</button>
        </div>
        <div class="guest-groups-head__filters">
          <div class="guest-feed-filters" role="tablist" aria-label="Сортировка каталога">
            <button type="button" class="guest-chip guest-chip--on" data-groups-chip="pop" role="tab" aria-selected="true">Популярное</button>
            <button type="button" class="guest-chip" data-groups-chip="new" role="tab" aria-selected="false">Новые</button>
            <button type="button" class="guest-chip" data-groups-chip="topics" role="tab" aria-selected="false">По темам</button>
          </div>
        </div>
      </div>
      <div class="guest-groups-grid">
        ${Ot()}
        ${H("Чтение без скролла","1,2k подписчиков","тема","scroll","pop topics")}
        ${H("Ночной деплой","842","оффтоп","deploy","pop new")}
        ${H("Мемы про CSS","5,1k","юмор","cssmemes","pop topics")}
        ${H("Закрытый канал","по приглашению","закрыто","closed","pop topics")}
        ${H("UI-клуб","3,4k","дизайн","ui","pop topics")}
        ${H("Подкасты о коде","956","аудио","podcasts","pop new")}
      </div>
      <div id="guest-group-auth-modal" class="guest-modal" hidden>
        <div class="guest-modal__backdrop" data-guest-modal-close tabindex="-1"></div>
        <div class="guest-modal__card card card--pad-md" role="dialog" aria-modal="true" aria-labelledby="guest-group-auth-title">
          <button type="button" class="guest-modal__x btn btn--ghost btn--sm" data-guest-modal-close>Закрыть</button>
          <h2 class="guest-modal__title" id="guest-group-auth-title">Сначала авторизуйтесь</h2>
          <p class="text-secondary text-sm">Создание сообщества доступно после входа в аккаунт.</p>
          <div class="actions-row actions-row--start guest-modal__actions">
            <a class="btn btn--primary btn--sm" href="${g("/login")}">Войти</a>
            <a class="btn btn--secondary btn--sm" href="${g("/register")}">Регистрация</a>
          </div>
        </div>
      </div>
    </section>
  `,friends:`
    <section class="guest-hero guest-hero--compact card card--pad-lg">
      <p class="guest-hero__eyebrow">Гостевой предпросмотр</p>
      <h1 class="guest-hero__title">Друзья</h1>
      <p class="guest-hero__lead">Поиск, блок «онлайн» и полный список — как в адресной книге. Строка ведёт на страницу друга.</p>
      <p class="guest-hero__note text-muted">Фан-посты и фото в профиле — после входа.</p>
    </section>
    <section class="card card--pad-md">
      <div class="guest-friends-toolbar">
        <div class="guest-friends-search" aria-hidden="true"></div>
        <button type="button" class="guest-chip guest-chip--on" data-friends-chip="all">Все</button>
      </div>
      <div class="guest-friends-section">
        <h2 class="guest-friends-section__label">Онлайн</h2>
        <div class="guest-preview__list">
          ${I("Илья","печатает…","ilya")}
          ${I("Саша","в сети","sasha")}
          ${I("Оля","в игре","olya")}
        </div>
      </div>
      <div class="guest-friends-section">
        <h2 class="guest-friends-section__label">Все контакты</h2>
        <div class="guest-preview__list">
          ${I("Лин","не беспокоить","lin")}
          ${I("Марк","был(а) недавно","mark")}
          ${I("Катя","был(а) вчера","katya")}
          ${I("Вы","гость","you")}
        </div>
      </div>
    </section>
  `,games:`
    <section class="guest-hero guest-hero--compact card card--pad-lg">
      <p class="guest-hero__eyebrow">Гостевой предпросмотр</p>
      <h1 class="guest-hero__title">Игры</h1>
      <p class="guest-hero__lead">Карточки как у сообществ: баннер и краткое описание. Клик — страница игры с каруселью и требованиями.</p>
      <p class="guest-hero__note text-muted">Без магазина — только UI.</p>
    </section>
    <section class="card card--pad-md">
      <div class="guest-games-cats">
        <button type="button" class="guest-chip guest-chip--on" data-games-chip="all">Все</button>
        <button type="button" class="guest-chip" data-games-chip="time">На время</button>
        <button type="button" class="guest-chip" data-games-chip="two">На двоих</button>
        <button type="button" class="guest-chip" data-games-chip="off">Выключено</button>
      </div>
      <div class="guest-games-grid guest-preview__grid--games">
        ${q("g2048")}
        ${q("gcolor")}
        ${q("gquiz")}
        ${q("gsnake")}
        ${q("gsudoku")}
        ${q("gpzl")}
        ${q("gtetris")}
        ${q("goff")}
      </div>
    </section>
  `,settings:`
    <section class="guest-hero guest-hero--compact card card--pad-lg">
      <p class="guest-hero__eyebrow" data-i18n="settings.hero_eyebrow">Гостевой режим</p>
      <h1 class="guest-hero__title" data-i18n="settings.hero_title">Настройки</h1>
      <p class="guest-hero__lead" data-i18n="settings.hero_lead">Тема и язык сохраняются в этом браузере и действуют на весь сайт — и в госте, и после входа.</p>
      <p class="guest-hero__note text-muted" data-i18n="settings.hero_note">Пять цветов палитры темы — ниже, рядом с переключателем.</p>
    </section>
    <section class="card card--pad-lg" aria-labelledby="guest-lang-title">
      <h2 class="guest-feed-card__title" id="guest-lang-title" data-i18n="settings.lang_title">Язык интерфейса</h2>
      <p class="text-secondary guest-settings__lede" data-i18n="settings.lang_lede">Переключение влияет на подписи в подвале и в настройках; часть гостевых экранов пока только на русском.</p>
      <fieldset class="theme-fieldset" data-locale-group>
        <legend class="sr-only">Язык</legend>
        <div class="theme-grid theme-grid--lang">
          <label class="theme-tile">
            <input type="radio" name="tiver-locale" value="ru" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="settings.lang_ru">Русский</span>
              <span class="theme-tile__hint">RU</span>
            </span>
          </label>
          <label class="theme-tile">
            <input type="radio" name="tiver-locale" value="en" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="settings.lang_en">English</span>
              <span class="theme-tile__hint">EN</span>
            </span>
          </label>
        </div>
      </fieldset>
    </section>
    <section class="card card--pad-lg" aria-labelledby="guest-theme-title">
      <h2 class="guest-feed-card__title" id="guest-theme-title" data-i18n="settings.theme_title">Тема интерфейса</h2>
      <p class="text-secondary guest-settings__lede" data-i18n="settings.theme_lede">
        Выберите палитру. Активная тема задаёт пять акцентных «красок» для UI — они же показаны полоской ниже.
      </p>
      <div class="guest-palette-preview" aria-label="Палитра темы (5 цветов)">
        <span class="guest-palette-dot" style="background: var(--palette-1)"></span>
        <span class="guest-palette-dot" style="background: var(--palette-2)"></span>
        <span class="guest-palette-dot" style="background: var(--palette-3)"></span>
        <span class="guest-palette-dot" style="background: var(--palette-4)"></span>
        <span class="guest-palette-dot" style="background: var(--palette-5)"></span>
      </div>
      <fieldset class="theme-fieldset" data-theme-group>
        <legend class="sr-only">Тема</legend>
        <div class="theme-grid" data-theme-tiles>
          <label class="theme-tile">
            <input type="radio" name="tiver-theme" value="dark" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="theme.dark">Тёмная</span>
              <span class="theme-tile__hint" data-i18n="theme.dark_hint">по умолчанию</span>
            </span>
          </label>
          <label class="theme-tile">
            <input type="radio" name="tiver-theme" value="light" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="theme.light">Светлая</span>
              <span class="theme-tile__hint" data-i18n="theme.light_hint">высокий контраст</span>
            </span>
          </label>
          <label class="theme-tile">
            <input type="radio" name="tiver-theme" value="moon" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="theme.moon">Лунная</span>
              <span class="theme-tile__hint" data-i18n="theme.moon_hint">холодный синий</span>
            </span>
          </label>
          <label class="theme-tile">
            <input type="radio" name="tiver-theme" value="sakura" />
            <span class="theme-tile__body">
              <span class="theme-tile__name" data-i18n="theme.sakura">Сакура</span>
              <span class="theme-tile__hint" data-i18n="theme.sakura_hint">розовый акцент</span>
            </span>
          </label>
          <div data-onec-theme-slot class="theme-onec-slot"></div>
        </div>
      </fieldset>
    </section>
    <section class="card card--pad-lg guest-settings-lab" aria-labelledby="guest-lab-title">
      <h2 class="guest-feed-card__title" id="guest-lab-title">Лаборатория гостя</h2>
      <p class="text-secondary guest-settings__lede">Только в этом браузере. Ничего не ломает — максимум слегка меняет настроение.</p>
      <div class="guest-settings-lab__grid">
        <div class="guest-settings-lab__block">
          <label class="copy-lead text-sm" for="guest-universe-slider">Сколько вселенных вы держите в голове?</label>
          <div class="guest-settings-lab__row">
            <input id="guest-universe-slider" type="range" min="0" max="11" value="1" data-guest-universe-slider class="guest-settings-lab__range" />
            <span class="guest-settings-lab__value text-muted text-sm" data-guest-universe-value>1</span>
          </div>
          <p class="text-muted text-sm guest-settings-lab__science" data-guest-universe-caption>Научный вывод появится после движения ползунка.</p>
        </div>
        <div class="guest-settings-lab__block">
          <p class="copy-lead text-sm">Терапия железа</p>
          <button type="button" class="btn btn--secondary" data-guest-ram-scratch>Почесать оперативку</button>
          <p class="text-muted text-sm guest-settings-lab__ram" data-guest-ram-hint hidden>Оперативная память благодарит. +0 к FPS, зато морально теплее.</p>
        </div>
        <div class="guest-settings-lab__block">
          <label class="guest-settings-lab__check">
            <input type="checkbox" data-guest-cup-toggle />
            <span>Показать одобрение модератора кружки</span>
          </label>
          <p class="text-muted text-sm" data-guest-cup-msg hidden>Модератор кружки одобряет ваш выбор темы. Чай считается зачтённым.</p>
        </div>
      </div>
    </section>
  `};function et(e,t){return Ze(Qe(e,t))}function Ht({segment:e,communitySlug:t="",friendSlug:s="",gameId:a=""}={}){if(e==="community")return qt(t||"");if(e==="friend")return Pt(s||"");if(e==="game")return It(a||"");const n=Oe[e]?e:"feed",r=Oe[n],o=e==="settings"?"":`
    <section class="card card--pad-md guest-cta">
      <p class="guest-cta__text text-secondary" data-i18n="guest.cta">
        Всё выше — клиентский театр: безопасно крутить на демо и перед коллегами, пока бэкенд не проснулся.
      </p>
      <div class="actions-row actions-row--start">
        <a class="btn btn--primary" href="${g("/login")}" data-i18n="guest.login">Войти</a>
        <a class="btn btn--secondary" href="${g("/register")}" data-i18n="guest.register">Регистрация</a>
      </div>
    </section>
  `;return`${r}${o}`}const ge={mama:[{out:!1,text:"Ужин через час?"},{out:!0,text:"Да, успею."},{out:!1,text:"Ок, жду."},{out:!1,text:"Кстати, десерт не забудь — мороженое тает в дороге."},{out:!0,text:"Взял термосумку, всё под контролем."},{out:!1,text:"Ты лучший. Не спорь."}],team:[{out:!1,author:"Лид фронта",text:"Архив: снова оригинальные CSS из 2021, без «стекла» поверх."},{out:!0,text:"Отлично, проверю на телефоне."},{out:!1,author:"Дизайн",text:"Кнопка 2026 только в chrome.css — не лезет в вёрстку."},{out:!0,text:"На iOS Safari тоже ок — проверил в эмуляторе."},{out:!1,author:"Продакт",text:"Тогда вливаю в релиз-ноты одной строкой."},{out:!1,author:"Маркетинг",text:"Кто-нибудь снимет короткое видео для демо?"},{out:!0,text:"Сниму завтра утром, свет лучше."}],bot:[{out:!1,text:"Доступные команды: /help, /ping, /status"},{out:!0,text:"/help"},{out:!1,text:"Вы гость. Живые данные позже."},{out:!0,text:"/ping"},{out:!1,text:"pong — цикл событий жив."},{out:!0,text:"А если серьёзно — когда бэкенд?"},{out:!1,text:"Когда будет готов. Я пока только тексты и таймеры."}],onec:[{out:!1,text:"Коллеги, обновление ЗУП — в пятницу после обеда. Кофе обеспечим."},{out:!0,text:"Запятая в СКД на месте или это фича?"},{out:!1,text:"Это не баг, это «расширенная диагностика ожиданий бизнеса»."},{out:!0,text:"Ок, тогда в отчёт пишу «ожидаемое поведение»."},{out:!1,text:"Не забудьте тестовую базу — в пятницу без неё никак."},{out:!0,text:"Уже накатил копию, жду дампа."}],dr:[{out:!1,text:"Результаты загружены в раздел «Документы»."},{out:!0,text:"Спасибо, посмотрю вечером."},{out:!1,text:"Если вопросы — напишите, отвечу до 20:00."},{out:!0,text:"Хорошо, тогда завтра уточню по анализу."}],work:[{out:!1,text:"Дедлайн по макетам — пятница 18:00."},{out:!0,text:"Успеем, если без новых фич."},{out:!1,text:"Ок, фиксирую в доске."},{out:!0,text:"Добавили только правку копирайта — это не фича?"},{out:!1,text:"Считаем не фичей. Но в changelog всё равно строка."},{out:!1,text:"Ревью дизайна в 15:00 — кто свободен, кидайте реакцию ✅"},{out:!0,text:"Буду."}],spam:[{out:!1,text:"Скидка 12% на годовую подписку…"},{out:!0,text:"Отписаться."},{out:!1,text:"Понял, больше не шлём."},{out:!1,text:"Если передумаете — промокод TIVER2026 ещё неделю."},{out:!0,text:"Не надо, спасибо."}],nina:[{out:!1,text:"Завтра кофе в 11:00 — ты как?"},{out:!0,text:"Да, подойду. Место то же у окна?"},{out:!1,text:"Да, я уже забронировала столик на двоих."},{out:!0,text:"Супер, захвачу зарядку на всякий."},{out:!1,text:"И расскажи про тот баг в ленте — так и не поняла из треда."}],support:[{out:!1,text:"Здравствуйте! Тикет #2048 в работе."},{out:!0,text:"Спасибо. Когда ориентир по ответу?"},{out:!1,text:"Обычно до 24 ч. Если срочно — отметьте приоритет в форме."},{out:!0,text:"Ок, отметил «высокий»."},{out:!1,text:"Приняли. Коллега из смены уже смотрит логи."},{out:!0,text:"Отлично, жду."}],photo:[{out:!1,text:"Серия «туман» — залейте RAW в общий альбом до вечера."},{out:!0,text:"Залил три кадра, проверьте экспозицию на третьем."},{out:!1,text:"Третий чуть пере — но лечится в лайте. Круто по настроению."},{out:!0,text:"Согласен, оставлю как есть."},{out:!1,text:"Кто хочет — завтра разбор в Zoom в 19:00."}],retro:[{out:!1,text:"Кто-нибудь помнит WinAmp skins?"},{out:!0,text:"Помню. У меня до сих пор где-то llama.wsz."},{out:!1,text:"Легенда. Кидайте в общий диск, соберём «музей»."},{out:!0,text:"У меня только MilkDrop и ностальгия."},{out:!1,text:"Тоже считается. Главное — визуальный шум."}],askui:[{out:!1,author:"Рекрут",text:"Гость, подскажешь: пиксель в госте — это навсегда или A/B?"},{out:!1,author:"Стажёр",text:"А если Tiver без буквы T — это вообще тот же продукт? Хахахаха."},{out:!1,author:"Дизайнер",text:"67% макета готово — можно ли уже постить скрин в ленту-заглушку?"}],askcode:[{out:!1,author:"Джун",text:"Гость, у вас же нет аккаунта — как тогда тестить API? Или это магия?"},{out:!1,author:"Сеньор",text:"Нужен честный ответ: роутер тут настоящий или театр?"},{out:!1,author:"QA",text:"Можешь ответить одним словом: «шипит» или «не шипит»?"}],askzup:[{out:!1,author:"Бухгалтер",text:"Гость, после обновления ЗУП не сходится сальдо — что делать первым делом?"},{out:!1,author:"Кадры",text:"Подскажи: отпуск в переносе периода — это песня или оперетта?"},{out:!1,author:"ИТ",text:"cf/cu на пятницу — обязательны или можно «как получится»?"}]},U={mama:{title:"Мама",meta:"личный чат",presence:"в сети"},team:{title:"Команда Tiver",meta:"6 участников",presence:"в сети"},bot:{title:"Бот",meta:"системный",presence:"в сети"},onec:{title:"1С · общий",meta:"ERP и запятая",presence:"в сети"},dr:{title:"Доктор",meta:"здоровье",presence:"был(а) недавно"},work:{title:"Рабочий чат",meta:"команда продукта",presence:"в сети"},spam:{title:"Рассылка",meta:"маркетинг",presence:"бот"},nina:{title:"Нина",meta:"личный чат",presence:"в сети"},support:{title:"Поддержка Tiver",meta:"тикеты",presence:"в сети"},photo:{title:"Клуб фото",meta:"12 участников онлайн",presence:"онлайн: 12"},retro:{title:"Ретро-чат",meta:"оффтоп",presence:"был(а) вчера"},askui:{title:"Вопросы к гостю · UI",meta:"ждут ответа",presence:"в сети"},askcode:{title:"Вопросы к гостю · код",meta:"ждут ответа",presence:"были недавно"},askzup:{title:"Вопросы к гостю · ЗУП",meta:"1С-юмор",presence:"в сети"}},Nt={mama:["Ок ❤️","Уже выхожу","Мам, я на созвоне","Через 15 мин","Захвачу хлеб по дороге","Ты права, без десерта нельзя","Перезвоню с лестницы","Сделаю, обещаю","Люблю","Успею даже если метро злое"],team:["Залил ветку","Линтер молчит — подозрительно","LGTM с оговоркой","RFC написал","Скринкаст приложил","На стейдже проверю","Дифф на 12 строк — почти идеал","Мержу после обеда","У меня варнинг только в комменте","Перекину в дизайн-чат"],dr:["Понял, спасибо","Запишусь на приём","Ок, изучу вложения","Результаты скачал","Вопросов пока нет","Отчёт перешлю коллеге","Спасибо за оперативность","Завтра гляну спокойно","Документы на флешке сохранил","До связи"],work:["Зафиксировал","Нужен ещё один день","В Jira уже","Сделаю к EOD","Поставил себе напоминание","Уточню у дизайна и отпишусь","Риски прописал в карточке","Согласен с дедлайном","Блокеров нет","Пингую в общем канале"],spam:["Не надо","Ок, оставьте скидку","Удалите из базы","В спам больше не надо","Промокод запомнил, но не сейчас","Отписка окончательная","Нет, спасибо","Мне и так хорошо","Письма не открываю","Стоп"],nina:["Договорились","Перенесём на вечер?","Я за 10 мин","Захвачу печенье","Ок, 11:00 вижу","Окно у стекла — топ","Могу на 15 мин позже","Напишу как выйду","Кофе тебе как обычно?","Про баг — вечером расскажу голосом"],support:["Понял, жду","Логи приложил в тикет","Спасибо за скорость","Ок, проверю","Номер тикета записал","Если нужно — скину HAR","Жду апдейт от инженера","Повторю шаги и отпишусь","Критичность согласована","На связи"],photo:["Залью вечером","Красивый кадр","RAW на диске","+1 к созвону","Экспозицию чуть подтяну","Отличная серия","В альбом закинул","Завтра гляну на большом экране","Цвета берегу","Можно в печать почти"],retro:["WinAmp forever","У меня только VLC","Скиньте ссылку на архив","Ностальгия бьёт","Bento skin был лучшим","MilkDrop на втором мониторе","У меня до сих пор mp3-папка","Потом обязательно залью","Это уже музей","Лампа всё ещё прыгает"],askui:["Пиксель — это настроение, не A/B. Хахахаха.","Буква T в Tiver — как якорь: без неё это просто «iver», и никто не купит.","67% — это уже почти релиз. Постим скрин, но с дисклеймером.","Гость видит театр: роутер настоящий, данные — декорации.","Если серьёзно: всё локально, бэкенд спит.","UI-полиция одобряет пиксель до лучших времён.","Мы не спорим с пикселем — мы его любим.","Заглушка честнее половины «coming soon» в индустрии.","T — как «trust the process».","Скрин в закреп, и пусть лайкают.","Гость ≠ тестировщик, но фидбек ценим.","Про A/B: пока один вариант — тот, что вы видите."],askcode:["Магия называется «демо без аккаунта». Роутер — настоящий.","Театр с хорошим сценарием: навигация живая, API — позже.","Шипит ровно настолько, насколько вы в это верите.","Если не шипит — проверьте звук. Шутка. Пока «не шипит».","Гость тестит UX, не прод. Это фича.","Буква T в diff — знак качества.","67 строк без багов — рекорд недели.","Хахахаха, но честно: пока только фронт.","Локальный стор — наш прод на минуту.","Когда бэкенд — обещаем не скучать.","Роутер не врёт. Остальное — декорации.","API в голове, контракт в сердце."],askzup:["Первым делом — кофе. Потом бэкап. Потом уже cf/cu.","Отпуск в переносе — это опера «не будите буха».","cf/cu в пятницу — как bungee: страшно, но по регламенту.","Типовая не виновата — классика, хахахаха.","Сверка с обменом — и спать спокойно.","Буква T в ЗУП — табель, не мем. Но мем тоже ок.","67 отчётов в очереди — повод для чая.","Ошибка «поле не обнаружено» — четверг в чистом виде.","Обновление конфигурации: сначала копия, потом геройство.","ЗУП шепчет: «ещё один регламент и я домой».","Расширение без поддержки — как спагетти без вилки.","Локальный мем: «обмен прошёл — можно жить»."],onec:["Провёл тест на копии — всё жёлтое, как надо.","Типовая не виновата. Виноват тот, кто нажал «Да» без бэкапа.","Обновили платформу — теперь и правда «всё поехало», но по регламенту.","Запятая — это не баг, это контур интеграции с бизнесом.","В отчёт добавил скрин из конфигуратора","Сверка с обменом — в пятницу","Кофе обещали — держим слово","Регламент прочитал дважды","На тестовой базе ок","Жду финального ок от буха"]},Ut=["Tiver — соцсеть в разработке: сейчас вы в гостевом предпросмотре (SPA, локальные счётчики, без живого API).","Проект: веб-клиент, пиксель-эстетика в госте, темы (в т.ч. 1С после подписки на «Производственный учёт»), роутер навигации — уже в сборке.","Дорожная карта (макет): лента, сообщества, сообщения, профили друзей, мини-игры — всё как «театр», пока бэкенд не подключён."],jt=["Команды: /help — список. /ping — проверка. /status — «процессы». /tiver или /project — что за Tiver. /1с или /зуп — шутка для ERP.","/help: я бот-заглушка, но стараюсь. /ping — жив ли цикл событий. /status — честный отчёт. /tiver — коротко о демо.","Шпаргалка: /ping для нервов, /status для начальства, /tiver для коллег, /help когда забыли всё."],Gt=["pong","pong (TTL≈42ms, честно придумал)","pong — и ни одного segfault","pong. Redis бы гордился."],Ft=["Все зелёные индикаторы — нарисованы в CSS.","Процессы спят. Один процесс притворяется, что работает.","Статус: как у npm install — вроде идёт, а вроде уже час."],Wt=["ЗУП шепчет: «сначала копия, потом геройство».","СКД и запятая — вечная драма. Типовая тут ни при чём.","cf/cu по пятницам — только с кофе и бэкапом.","Ошибка после обновления? Кэш сеанса, перезапуск, чай. Порядок не менять.","Буква T — табель. Или Tiver. Контекст решает."],zt=["Принял. В проде это ушло бы в очередь.","Интересная мысль. Записал в /dev/null для истории.","Обработал за O(1) — правда, ответ заранее известен.","Это не в моём backlog. Попробуйте человека слева.","Ок, положил в стек «когда-нибудь».","Звучит как план. Я пока без плана, но поддерживаю.","Если бы у меня были руки — я бы апплодировал.","Сохранил в RAM. RAM не против.","Мой любимый протокол — честный nod.","Перефразирую: «да», но художественно."];function Bt(){te("prodsoft",!0),be("onec")}function Vt(){te("prodsoft",!1),_e()==="onec"&&be("dark"),ae()}function F(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function L(e){return e[Math.floor(Math.random()*e.length)]}function Jt(e){var a,n;const t=ge[e];if(!t)return((a=U[e])==null?void 0:a.title)||"Собеседник";const s=[...new Set(t.filter(r=>!r.out&&r.author).map(r=>r.author))];return s.length?L(s):((n=U[e])==null?void 0:n.title)||"Собеседник"}function Kt(e,t){var a;const s=((a=U[t])==null?void 0:a.title)||"Собеседник";return e.map(n=>{const r=n.author||(n.out?"Вы":s);return`<div class="guest-thread-bubble guest-thread-bubble--${n.out?"out":"in"}"><span class="guest-thread-bubble__author">${F(r)}</span><span class="guest-thread-bubble__text">${F(n.text)}</span></div>`}).join("")}function Xt(){return`
    <button type="button" class="guest-chat-row" data-chat="onec" data-msg-cat="work" data-chat-stamp="94">
      <div class="guest-chat-row__avatar guest-geo-avatar guest-geo-avatar--grid" aria-hidden="true"></div>
      <div class="guest-chat-row__mid">
        <span class="guest-chat-row__name">1С · общий</span>
        <span class="guest-chat-row__preview">Типовая не виновата…</span>
      </div>
      <div class="guest-chat-row__meta">
        <span class="guest-chat-row__time">сейчас<span class="guest-chat-row__dot" aria-hidden="true"></span></span>
        <span class="guest-chat-row__presence guest-chat-row__presence--online">в сети</span>
      </div>
    </button>
  `}function Yt(e){return`
    <article class="guest-post guest-post--in" data-guest-post-kind="people">
      <div class="guest-post__avatar" aria-hidden="true"></div>
      <div class="guest-post__maincol">
        <div class="guest-post__body">
          <header class="guest-post__head">
            <span class="guest-post__name">Вы</span>
            <span class="guest-post__time">только что</span>
          </header>
          <p class="guest-post__text">${F(e)}</p>
        </div>
        <div class="guest-post__actions guest-post__actions--pixel">
          <button type="button" class="guest-post__like guest-pixbtn" aria-pressed="false" aria-label="Нравится" data-like-base="0">
            <span class="guest-pixbtn__glyph" aria-hidden="true">◆</span>
            <span class="guest-pixbtn__n guest-pixbtn__n--like" data-like-n>0</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-comment aria-label="Комментарии" aria-expanded="false">
            <span class="guest-pixbtn__glyph" aria-hidden="true">□</span>
            <span class="guest-pixbtn__n" data-count>0</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-repost aria-label="Репост">
            <span class="guest-pixbtn__glyph" aria-hidden="true">↻</span>
            <span class="guest-pixbtn__n" data-count>0</span>
          </button>
        </div>
        ${et(0)}
      </div>
    </article>
  `}function Qt(){return`
    <article class="guest-post guest-post--1c guest-post--in" data-guest-post-kind="article" data-guest-onec-post="1">
      <div class="guest-post__avatar" aria-hidden="true"></div>
      <div class="guest-post__maincol">
        <div class="guest-post__body">
          <header class="guest-post__head">
            <span class="guest-post__name">1С · лента</span>
            <span class="guest-post__time">тема</span>
          </header>
          <p class="guest-post__text">Секретная тема активна: палитра, баннер и этот пост — награда за любопытство к «Производственному учёту».</p>
          <p class="guest-post__text guest-post__text--muted">Перед обновлением — бэкап, кофе и честный разговор с обменом.</p>
        </div>
        <div class="guest-post__actions guest-post__actions--pixel">
          <button type="button" class="guest-post__like guest-pixbtn" aria-pressed="false" aria-label="Нравится" data-like-base="0">
            <span class="guest-pixbtn__glyph" aria-hidden="true">◆</span>
            <span class="guest-pixbtn__n guest-pixbtn__n--like" data-like-n>0</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-comment aria-label="Комментарии" aria-expanded="false">
            <span class="guest-pixbtn__glyph" aria-hidden="true">□</span>
            <span class="guest-pixbtn__n" data-count>12</span>
          </button>
          <button type="button" class="guest-post__side guest-pixbtn" data-guest-repost aria-label="Репост">
            <span class="guest-pixbtn__glyph" aria-hidden="true">↻</span>
            <span class="guest-pixbtn__n" data-count>4</span>
          </button>
        </div>
        ${et(12,[{who:"Анна",text:"Конфигуратор 8.5 в полноэкранном: крестик исчезает, случайный клик — и весь сеанс без предупреждения. Классика жанра.",avatar:"hatch",slug:"anna_feed"},{who:"Пётр",text:"«Запланированная стабильность» 8.5: слева асинхронность, справа ты ждёшь, пока платформа перестанет лагать.",avatar:"brick",slug:"petr_feed"},{who:"Вы (гость)",text:"Локально всё честно подсвечено. На КОРПе тестил — у заказчика базовая, это отдельный квест.",avatar:"guest",slug:"guest_you_feed"},{who:"ЗУП-бот",text:"cf/cu в пятницу — только с копией. Иначе ЗУП 3.1 с базой по вычетам превращается в детектив без финала.",avatar:"grid",slug:"zup_bot_feed"},{who:"СКД-guru",text:"ERP 2.5: над водой «правила факта идеальны», под водой «Расход в ЭтапеПроизводства пустой и синк с БП сломал склад».",avatar:"dots",slug:"skd_guru_feed"},{who:"Бух",text:"Красная таблетка — «ЗУП 8.5», синяя — «7.7». На 7.7 не забудь процедуры в заголовке модуля. Честный кринж.",avatar:"cross",slug:"buh_feed"},{who:"Олег",text:"УНФ на 8.5: «не соскочить с лабораторной крысы». Коллега отвечает: «Примите соболезнования с вашим горем (УНФ)».",avatar:"void",slug:"oleg_feed"},{who:"Модератор",text:"А ты заполнил закладку «Расход в ЭтапеПроизводства 2.5»? T в отчёте — табель, не опечатка.",avatar:"hatch",slug:"mod_feed_1c"},{who:"Кадры",text:"ЗУП после обмена — как понедельник: ожидаемо. ДЕБЕТ в ERP — отдельная карточная сцена, там только кредит.",avatar:"brick",slug:"kadry_feed"},{who:"Илья",text:"Заповедник: «осторожно, динамическое планирование» — и ошибка при заполнении видов рабочих центров. Смотрите под ноги.",avatar:"grid",slug:"ilya_feed"},{who:"Лин",text:"Расширение без поддержки — как спагетти без вилки. Типовая не виновата, но обмен проверьте.",avatar:"dots",slug:"lin_feed"},{who:"Саша",text:"Тестировал на КОРПе, а у заказчика базовая — мем про абстрактный ужас, без картинки, зато с болью в одном предложении.",avatar:"cross",slug:"sasha_feed"}])}
      </div>
    </article>
  `}function tt(e,t){const s=e.querySelector("[data-count]");if(!s)return;const a=parseInt(s.textContent||"0",10)||0;s.textContent=String(Math.max(0,a+t))}function Zt(e){const t=e.getAttribute("data-sub-slug");if(!t)return;const s=he(t);e.textContent=s?"Отписаться":"Подписаться",e.classList.toggle("btn--secondary",s),e.classList.toggle("btn--primary",!s)}function j(){document.querySelectorAll(".guest-community-toggle-sub[data-sub-slug]").forEach(Zt)}function me(e){return`tiver-guest-pending-request-${e}`}function ke(e=document){e.querySelectorAll("[data-guest-request-sub][data-sub-slug]").forEach(t=>{const s=t.getAttribute("data-sub-slug");!s||localStorage.getItem(me(s))!=="1"||(t.textContent="Ваша заявка рассматривается",t.disabled=!0,t.setAttribute("aria-disabled","true"),t.classList.remove("btn--primary"),t.classList.add("btn--secondary"))})}let He=!1;function Se(){He||(He=!0,document.addEventListener("click",e=>{const t=e.target.closest("[data-guest-request-sub][data-sub-slug]");if(t){e.preventDefault(),e.stopPropagation();const n=t.getAttribute("data-sub-slug");if(!n||t.disabled||localStorage.getItem(me(n))==="1")return;localStorage.setItem(me(n),"1"),t.textContent="Ваша заявка рассматривается",t.disabled=!0,t.setAttribute("aria-disabled","true"),t.classList.remove("btn--primary"),t.classList.add("btn--secondary");return}const s=e.target.closest(".guest-community-toggle-sub[data-sub-slug]");if(!s)return;e.preventDefault(),e.stopPropagation();const a=s.getAttribute("data-sub-slug");a&&(he(a)?(te(a,!1),a==="prodsoft"&&Vt()):(te(a,!0),a==="prodsoft"&&Bt()),j())}),window.addEventListener("tiver-community-subs",j),window.addEventListener("storage",e=>{e.key===Y&&j()}))}function es(e,t){const s=e.querySelector("[data-guest-comments-panel]");if(!s)return;if(s.hasAttribute("hidden")){s.removeAttribute("hidden"),t==null||t.setAttribute("aria-expanded","true");const n=e.querySelector(".guest-post-comments__input");s.scrollIntoView({behavior:"smooth",block:"nearest"}),n==null||n.focus()}else s.setAttribute("hidden",""),t==null||t.setAttribute("aria-expanded","false")}function ts(e){e.querySelectorAll(".guest-post-comments__send").forEach(t=>{t.dataset.guestDemoComments||(t.dataset.guestDemoComments="1",t.addEventListener("click",()=>{var u;const s=t.closest(".guest-post-comments"),a=t.closest(".guest-post")||t.closest(".guest-cpost"),n=s==null?void 0:s.querySelector(".guest-post-comments__input"),r=s==null?void 0:s.querySelector(".guest-post-comments__list"),o=((n==null?void 0:n.value)||"").trim();if(!o||!r)return;(u=s==null?void 0:s.querySelector("[data-guest-comments-placeholder]"))==null||u.remove();const i=document.createElement("li");i.className="guest-post-comments__item",i.innerHTML=`<a href="${g("/guest/friend/you")}" class="guest-post-comments__profile"><span class="guest-geo-avatar guest-geo-avatar--guest" aria-hidden="true"></span><span class="guest-post-comments__stack"><span class="guest-post-comments__who">Вы</span><span class="guest-post-comments__text">${F(o)}</span></span></a>`,r.appendChild(i),n&&(n.value="");const l=a==null?void 0:a.querySelector("[data-guest-comment]");l&&tt(l,1)}))})}function J(e){e.querySelectorAll(".guest-post__like").forEach(t=>{if(t.dataset.guestDemoEngaged)return;t.dataset.guestDemoEngaged="1";const s=t.querySelector("[data-like-n]");s&&t.dataset.likeBase===void 0&&(t.dataset.likeBase=String(parseInt(s.textContent||"0",10)||0)),t.addEventListener("click",()=>{const a=parseInt(t.dataset.likeBase??"0",10)||0,r=!(t.getAttribute("aria-pressed")==="true");t.setAttribute("aria-pressed",String(r)),t.classList.toggle("guest-post__like--on",r),s&&(s.textContent=String(a+(r?1:0)))})}),e.querySelectorAll("[data-guest-comment]").forEach(t=>{t.dataset.guestDemoEngaged||(t.dataset.guestDemoEngaged="1",t.addEventListener("click",()=>{const s=t.closest(".guest-post")||t.closest(".guest-cpost");s&&es(s,t)}))}),e.querySelectorAll("[data-guest-repost]").forEach(t=>{t.dataset.guestDemoEngaged||(t.dataset.guestDemoEngaged="1",t.addEventListener("click",()=>{t.classList.toggle("guest-post__side--on"),tt(t,t.classList.contains("guest-post__side--on")?1:-1)}))}),ts(e)}function ss(e,t){e.querySelectorAll(".guest-post[data-guest-post-kind]").forEach(s=>{if(s.classList.contains("guest-post--legacy")){s.hidden=!1;return}const a=s.getAttribute("data-guest-post-kind"),n=t==="all"||a===t;s.hidden=!n})}const as={all:"Показаны все типы постов.",photo:"Фильтр: только посты с пометкой «фото».",article:"Фильтр: статьи и длинные заметки.",people:"Фильтр: персональные посты."};function X(e,t,s){e.querySelectorAll(t).forEach(a=>{a.setAttribute("aria-selected",a===s?"true":"false")})}function $e(e,t,s){const a=[...e.querySelectorAll(t)];a.forEach(n=>{n.addEventListener("click",()=>{a.forEach(r=>r.classList.remove("guest-chip--on")),n.classList.add("guest-chip--on"),s(n)})})}function ue(e){const t=e.querySelector("#guest-chat-1c-slot");t&&(N()?(t.hidden=!1,t.dataset.chatStamp="94",t.querySelector('[data-chat="onec"]')||(t.innerHTML=Xt())):(t.innerHTML="",t.hidden=!0,t.dataset.chatStamp="0"))}function Ne(e,t){const s=e.querySelector("#guest-feed-dynamic")||e.querySelector("#guest-feed-stream"),a=e.querySelector("#guest-feed-1c-banner"),n=e.querySelector(".guest-composer__input"),r=e.querySelector(".guest-composer__send");(s?s.querySelectorAll(".guest-post"):e.querySelectorAll(".guest-post")).forEach((d,v)=>{if(t){d.classList.add("guest-post--in");return}requestAnimationFrame(()=>{window.setTimeout(()=>d.classList.add("guest-post--in"),40+v*70)})}),J(e),e.querySelectorAll(".guest-widget__row").forEach(d=>{d.addEventListener("click",()=>d.classList.toggle("guest-widget__row--flash"))});function i(){var d;a&&(a.hidden=!N()),N()&&s&&!s.querySelector("[data-guest-onec-post]")&&(s.insertAdjacentHTML("afterbegin",Qt()),J(s)),!N()&&s&&((d=s.querySelector("[data-guest-onec-post]"))==null||d.remove())}i(),window.addEventListener("tiver-community-subs",i),window.addEventListener("storage",d=>{d.key===Y&&i()});let l="all";const u=e.querySelector("#guest-feed-filter-note"),p=e.querySelector("#guest-feed-empty-hint"),m=[...e.querySelectorAll("[data-feed-chip]")];function _(d){ss(e,d),u&&(u.textContent=as[d]??"");const v=e.querySelector("#guest-feed-dynamic");if(v&&p){const T=[...v.querySelectorAll(".guest-post")].filter(y=>!y.hidden);p.hidden=T.length>0}}m.forEach(d=>{d.addEventListener("click",()=>{m.forEach(v=>v.classList.remove("guest-chip--on")),d.classList.add("guest-chip--on"),l=d.getAttribute("data-feed-chip")||"all",X(e,"[data-feed-chip]",d),_(l)})}),X(e,"[data-feed-chip]",m.find(d=>d.classList.contains("guest-chip--on"))||m[0]),_("all");function x(){const d=((n==null?void 0:n.value)||"").trim();if(!d||!s)return;s.insertAdjacentHTML("afterbegin",Yt(d)),n&&(n.value="");const v=s.querySelector(".guest-post");v&&(t||(v.classList.remove("guest-post--in"),v.offsetWidth),v.classList.add("guest-post--in"),J(v)),_(l)}r==null||r.addEventListener("click",x),n==null||n.addEventListener("keydown",d=>{d.key==="Enter"&&(d.preventDefault(),x())})}function ns(e){const t=e.trim().toLowerCase();return L(t==="/help"?jt:t==="/ping"?Gt:t==="/status"?Ft:t==="/tiver"||t==="/project"?Ut:t==="/1с"||t==="/1c"||t==="/зуп"||t==="/zup"?Wt:zt)}function rs(e){const t=e.querySelector(".guest-thread-head__title"),s=e.querySelector(".guest-thread-head__meta"),a=e.querySelector(".guest-thread-empty"),n=e.querySelector(".guest-thread-messages"),r=e.querySelector(".guest-thread-composer"),o=e.querySelector(".guest-thread-compose-input"),i=e.querySelector(".guest-thread-send"),l=e.querySelector("[data-bot-hint]");if(!n||!a||!r)return;function u(){const h=e.querySelector(".guest-msgs-list");if(!h)return;const w=h.querySelector(".guest-preview__toolbar");if(!w)return;h.querySelector("#guest-chat-1c-slot");const S=[];let A=w.nextElementSibling;for(;A;){const $=A;A=A.nextElementSibling,S.push($)}S.sort(($,P)=>{var Ee,Te,Ae,Le,Ce,qe,Pe,Ie;const rt=Number(((Ee=$.dataset)==null?void 0:Ee.chatStamp)??((Le=(Ae=(Te=$.querySelector)==null?void 0:Te.call($,"[data-chat-stamp]"))==null?void 0:Ae.dataset)==null?void 0:Le.chatStamp)??0);return Number(((Ce=P.dataset)==null?void 0:Ce.chatStamp)??((Ie=(Pe=(qe=P.querySelector)==null?void 0:qe.call(P,"[data-chat-stamp]"))==null?void 0:Pe.dataset)==null?void 0:Ie.chatStamp)??0)-rt}),S.forEach($=>h.appendChild($))}function p(){e.querySelectorAll(".guest-chat-row[data-chat]").forEach(h=>{h.dataset.guestDemoWired||(h.dataset.guestDemoWired="1",h.addEventListener("click",()=>y(h.getAttribute("data-chat"))))})}ue(e),p(),u(),window.addEventListener("tiver-community-subs",()=>{ue(e),p(),u()}),window.addEventListener("storage",h=>{h.key===Y&&(ue(e),p(),u())});let m=null;const _=document.createElement("div");_.className="guest-thread-typing",_.setAttribute("hidden",""),_.innerHTML='<span class="guest-thread-typing__dot"></span><span class="guest-thread-typing__dot"></span><span class="guest-thread-typing__dot"></span>';const x=()=>{n.appendChild(_),_.removeAttribute("hidden")},d=()=>{_.setAttribute("hidden",""),_.remove()};function v(h,w,S){var P;const A=S??(h?"Вы":m&&((P=U[m])!=null&&P.title)?U[m].title:"Собеседник"),$=document.createElement("div");$.className=`guest-thread-bubble guest-thread-bubble--${h?"out":"in"}`.trim(),$.innerHTML=`<span class="guest-thread-bubble__author">${F(A)}</span><span class="guest-thread-bubble__text">${F(w)}</span>`,n.appendChild($),n.scrollTop=n.scrollHeight}function T(h,w=480){x(),window.setTimeout(()=>{d();const S=m==="bot"?"Бот":Jt(m);v(!1,h(),S),n.scrollTop=n.scrollHeight},w)}function y(h){var S;if(!h||!ge[h])return;m=h,e.querySelectorAll(".guest-chat-row").forEach(A=>A.classList.remove("guest-chat-row--active")),(S=e.querySelector(`.guest-chat-row[data-chat="${h}"]`))==null||S.classList.add("guest-chat-row--active");const w=U[h];t&&w&&(t.textContent=w.title),s&&w&&(s.textContent=[w.meta,w.presence].filter(Boolean).join(" · ")),a.setAttribute("hidden",""),n.hidden=!1,r.hidden=!1,n.innerHTML=Kt(ge[h],h),l&&(l.hidden=h!=="bot"),o&&(o.value=""),n.scrollTop=n.scrollHeight}e.querySelectorAll("[data-quick-reply]").forEach(h=>{h.addEventListener("click",()=>{var S;const w=(S=h.textContent)==null?void 0:S.trim();w&&o&&(o.value=w)})});function k(){const h=((o==null?void 0:o.value)||"").trim();if(!h||!m)return;if(v(!0,h,"Вы"),o&&(o.value=""),m==="bot"){T(()=>ns(h),520);return}const w=Nt[m];if(w&&w.length){T(()=>L(w),400+Math.random()*500);return}const S=["Услышал вас","Ок, учту","Принято","Интересно","Записал мысленно","Понял контекст","Согласен наполовину","Вернусь к теме позже","Пока без контраргументов","Продолжайте"];T(()=>L(S),420+Math.random()*400)}i==null||i.addEventListener("click",k),o==null||o.addEventListener("keydown",h=>{h.key==="Enter"&&(h.preventDefault(),k())}),$e(e,"[data-msg-tab]",h=>{const w=h.getAttribute("data-msg-tab");e.querySelectorAll(".guest-chat-row[data-msg-cat]").forEach(S=>{const A=S.getAttribute("data-msg-cat"),$=w==="all"||A===w;S.hidden=!$}),X(e,"[data-msg-tab]",h)}),X(e,"[data-msg-tab]",e.querySelector("[data-msg-tab].guest-chip--on")||e.querySelector("[data-msg-tab]"))}function os(e){Se(),j(),ke(e),e.querySelectorAll(".guest-group-cell[data-group-href]").forEach(i=>{i.addEventListener("click",l=>{if(l.target.closest("a, button"))return;const u=i.getAttribute("data-group-href");u&&G(async()=>{const{navigate:p}=await Promise.resolve().then(()=>W);return{navigate:p}},void 0).then(({navigate:p})=>p(u))}),i.addEventListener("keydown",l=>{if(l.key!=="Enter"&&l.key!==" "||l.target.closest("a, button"))return;l.preventDefault();const u=i.getAttribute("data-group-href");u&&G(async()=>{const{navigate:p}=await Promise.resolve().then(()=>W);return{navigate:p}},void 0).then(({navigate:p})=>p(u))})});function t(i){const l=i.getAttribute("data-groups-chip")||"pop";e.querySelectorAll(".guest-group-cell[data-groups-tags]").forEach(u=>{const p=(u.getAttribute("data-groups-tags")||"").split(/\s+/).filter(Boolean);let m=!0;l==="new"?m=p.includes("new"):l==="topics"?m=p.includes("topics"):m=p.includes("pop"),u.hidden=!m}),X(e,"[data-groups-chip]",i)}const s=[...e.querySelectorAll("[data-groups-chip]")];s.forEach(i=>{i.addEventListener("click",()=>{s.forEach(l=>l.classList.remove("guest-chip--on")),i.classList.add("guest-chip--on"),t(i)})}),t(s.find(i=>i.classList.contains("guest-chip--on"))||s[0]);const a=e.querySelector("#guest-group-auth-modal"),n=a==null?void 0:a.querySelectorAll("[data-guest-modal-close]"),r=e.querySelector("#guest-create-group-btn"),o=()=>{a&&(a.hidden=!0)};r==null||r.addEventListener("click",i=>{i.preventDefault(),a&&(a.hidden=!1)}),n==null||n.forEach(i=>i.addEventListener("click",o))}function is(e){$e(e,"[data-friends-chip]",()=>{})}function cs(e){const t=e.querySelector(".guest-games-grid");$e(e,"[data-games-chip]",s=>{const a=s.getAttribute("data-games-chip")||"all";t&&t.querySelectorAll(".guest-vkplay-card").forEach(n=>{const r=n.getAttribute("data-game-cat")||"all",o=a!=="all"&&r!==a;n.classList.toggle("guest-vkplay-card--dim",o)})})}function ls(e){var s;Se(),j(),ke(e);const t=e.querySelector(".guest-community-feed");t&&J(t),e.querySelectorAll("[data-c-tab]").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-c-tab");e.querySelectorAll("[data-c-tab]").forEach(r=>{const o=r===a;r.classList.toggle("guest-chip--on",o),r.setAttribute("aria-selected",o?"true":"false")}),e.querySelectorAll("[data-c-panel]").forEach(r=>{r.hidden=r.getAttribute("data-c-panel")!==n})})}),(s=e.querySelector(".guest-community-composer__btn"))==null||s.addEventListener("click",()=>{const a=e.querySelector(".guest-community-composer__input");a&&"value"in a&&(a.value="")})}function us(e){e.querySelectorAll("[data-f-tab]").forEach(s=>{s.addEventListener("click",()=>{const a=s.getAttribute("data-f-tab");e.querySelectorAll("[data-f-tab]").forEach(n=>{const r=n===s;n.classList.toggle("guest-chip--on",r),n.setAttribute("aria-selected",r?"true":"false")}),e.querySelectorAll("[data-f-panel]").forEach(n=>{n.hidden=n.getAttribute("data-f-panel")!==a})})});const t=e.querySelector(".guest-community-feed");t&&J(t)}function ds(e,t={}){const s=t.segment??"feed",a=e.querySelector("#main-content");if(!a)return;Se(),j(),ke(e);const n=window.matchMedia("(prefers-reduced-motion: reduce)").matches;window.requestAnimationFrame(()=>{switch(s){case"feed":Ne(a,n);break;case"messages":rs(a);break;case"groups":os(a);break;case"friends":is(a);break;case"games":cs(a);break;case"community":ls(a);break;case"friend":us(a);break;case"game":break;case"settings":break;default:Ne(a,n)}})}function ps(e){!e||e.querySelector('input[value="onec"]')||(e.innerHTML=`
    <label class="theme-tile">
      <input type="radio" name="tiver-theme" value="onec" />
      <span class="theme-tile__body">
        <span class="theme-tile__name" data-i18n="theme.onec">1С</span>
        <span class="theme-tile__hint" data-i18n="theme.onec_hint">секретная тема после подписки</span>
      </span>
    </label>
  `,Q(e))}function Ue(e){e&&(N()?ps(e):e.innerHTML="")}function gs(e){ae();const t=e.querySelector("[data-locale-group]");t==null||t.addEventListener("change",y=>{const k=y.target;k instanceof HTMLInputElement&&k.name==="tiver-locale"&&k.checked&&ze(k.value)}),t==null||t.querySelectorAll('input[name="tiver-locale"]').forEach(y=>{y instanceof HTMLInputElement&&(y.checked=y.value===ne())});const s=e.querySelector("[data-theme-group]"),a=e.querySelector("[data-onec-theme-slot]");function n(){const y=_e();s==null||s.querySelectorAll('input[name="tiver-theme"]').forEach(k=>{k instanceof HTMLInputElement&&(k.checked=k.value===y)})}s==null||s.addEventListener("change",y=>{const k=y.target;k instanceof HTMLInputElement&&k.name==="tiver-theme"&&k.checked&&be(k.value)}),n(),Ue(a),n(),window.addEventListener("tiver-community-subs",()=>{Ue(a),ae(),n()}),window.addEventListener("tiver-locale",()=>{Q(e),n(),t==null||t.querySelectorAll('input[name="tiver-locale"]').forEach(y=>{y instanceof HTMLInputElement&&(y.checked=y.value===ne())})});const r=["Ноль — вы монолит. Редкость.","Одна — классика, без мультивселенской суеты.","Две — работа и «та, где вы отдыхаете».","Три — уже нужен блокнот.","Четыре — параллельно держите дедлайны и мемы.","Пять — вы как табы в браузере перед spring clean.","Шесть — коллеги иногда путают, в какой вы сейчас.","Семь — рекомендуем чай и таймер Pomodoro.","Восемь — почти оркестр. Дирижёрская палочка не помешает.","Девять — квантовый уровень бытовой магии.","Десять — легендарный слот. Сохраните конфиг.","Одиннадцать — официально «много». Мы вас уважаем."],o="tiver-guest-universes",i="tiver-guest-cup-approve",l=e.querySelector("[data-guest-universe-slider]"),u=e.querySelector("[data-guest-universe-value]"),p=e.querySelector("[data-guest-universe-caption]"),m=e.querySelector("[data-guest-ram-scratch]"),_=e.querySelector("[data-guest-ram-hint]"),x=e.querySelector("[data-guest-cup-toggle]"),d=e.querySelector("[data-guest-cup-msg]");function v(y){const k=Math.max(0,Math.min(11,Number(y)||0));l instanceof HTMLInputElement&&(l.value=String(k)),u&&(u.textContent=String(k)),p&&(p.textContent=r[k]??"")}if(l instanceof HTMLInputElement){const y=localStorage.getItem(o);v(y!==null?y:l.value),l.addEventListener("input",()=>{v(l.value),localStorage.setItem(o,String(l.value))})}let T=0;m==null||m.addEventListener("click",()=>{_&&(_.hidden=!1,window.clearTimeout(T),T=window.setTimeout(()=>{_.hidden=!0},3200))}),x instanceof HTMLInputElement&&(x.checked=localStorage.getItem(i)==="1",d&&(d.hidden=!x.checked),x.addEventListener("change",()=>{localStorage.setItem(i,x.checked?"1":"0"),d&&(d.hidden=!x.checked)}))}function Z({segment:e,communitySlug:t="",friendSlug:s="",gameId:a=""}={}){var u,p,m,_,x;let n=D[e]??D.feed;e==="community"?n={title:((u=we[t])==null?void 0:u.title)??"Сообщество",label:D.groups.label}:e==="friend"?n={title:((p=Ke[s])==null?void 0:p.name)??"Профиль",label:D.friends.label}:e==="game"&&(n={title:((m=xe[a])==null?void 0:m.title)??"Игра",label:D.games.label}),M(n.title);const r=z(),o=document.createElement("div");o.className="page page--guest";const i=xt.map(({segment:d,href:v})=>{const T=d===e||e==="community"&&d==="groups"||e==="friend"&&d==="friends"||e==="game"&&d==="games"?"guest-nav__link--active":"",y=D[d].label;return`<a class="guest-nav__link ${T}" href="${g(v)}">${y}</a>`}).join(""),l=r.mode==="user"?`
          <a class="guest-user-menu__item" href="${g("/app/profile")}">Личный кабинет</a>
          <a class="guest-user-menu__item" href="#" data-logout>Выйти из аккаунта</a>
        `:`
          <a class="guest-user-menu__item" href="${g("/login")}">Войти в аккаунт</a>
          <a class="guest-user-menu__item" href="${g("/register")}">Зарегистрироваться</a>
        `;return o.innerHTML=`
    <header class="guest-topbar" role="banner">
      <div class="guest-topbar__brand">
        <a href="${g("/welcome")}" class="guest-topbar__logo">Tiver</a>
        <span class="guest-badge">${r.mode==="user"?"Аккаунт":"Гость"}</span>
      </div>
      <nav class="guest-nav" aria-label="Разделы">
        ${i}
      </nav>
      <div class="guest-user-menu">
        <button type="button" class="guest-user-menu__trigger" data-user-menu-trigger aria-expanded="false" aria-haspopup="true">
          ${r.mode==="user"?((_=r.user)==null?void 0:_.displayName)||"Аккаунт":"Гостевой режим"}
          <span class="guest-user-menu__chevron" aria-hidden="true"></span>
        </button>
        <div class="guest-user-menu__panel" data-user-menu-panel hidden>
          ${l}
          <a class="guest-user-menu__item" href="${g("/guest/settings")}">Настройки</a>
          <span class="guest-user-menu__item guest-user-menu__item--muted">Помощь</span>
          <a class="guest-user-menu__item" href="${g("/welcome")}">На главную</a>
        </div>
      </div>
    </header>

    <main class="guest-main stack stack--lg" id="main-content" role="main">
      ${Ht({segment:e,communitySlug:t,friendSlug:s,gameId:a})}
    </main>
  `,o.appendChild(B()),Q(o),kt(o),(x=o.querySelector("[data-logout]"))==null||x.addEventListener("click",d=>{d.preventDefault(),Ve(),G(async()=>{const{navigate:v}=await Promise.resolve().then(()=>W);return{navigate:v}},void 0).then(({navigate:v})=>v("/welcome"))}),e==="settings"?gs(o):ds(o,{segment:e}),o}function ms(e){const t=e.querySelector("#app-profile-form"),s=e.querySelector("#app-profile-status");t&&t.addEventListener("submit",async a=>{var r;a.preventDefault(),s&&(s.textContent="Сохранение…");const n=new FormData(t);try{const o=await ye("/me",{method:"PATCH",body:JSON.stringify({displayName:n.get("displayName"),bio:n.get("bio")})});K({...z(),user:o}),s&&(s.textContent="Сохранено.")}catch(o){s&&(s.textContent=((r=o.data)==null?void 0:r.error)||o.message||"Ошибка")}})}const hs=[{id:"feed",href:"/app/feed",label:"Новости"},{id:"messages",href:"/app/messages",label:"Сообщения"},{id:"groups",href:"/app/groups",label:"Сообщества"},{id:"friends",href:"/app/friends",label:"Друзья"},{id:"games",href:"/app/games",label:"Игры"},{id:"profile",href:"/app/profile",label:"Профиль"}];function _s(e){return`
    <div class="app-dev-placeholder">
      <h2 class="app-dev-placeholder__title">${e}</h2>
      <p class="app-dev-placeholder__text">Ведётся разработка. Здесь будет раздел после подключения API и клиента.</p>
    </div>
  `}function bs({section:e}){var i,l,u,p;const s={feed:"Новости",messages:"Сообщения",groups:"Сообщества",friends:"Друзья",games:"Игры",profile:"Профиль"}[e]??"Tiver";M(`${s} — аккаунт`);const a=z(),n=document.createElement("div");n.className="page page--app";const r=hs.map(({id:m,href:_,label:x})=>`<a class="app-topbar__link ${m===e?"app-topbar__link--active":""}" href="${g(_)}">${x}</a>`).join(""),o=e==="profile"?`
    <section class="stack stack--md" aria-labelledby="profile-title">
      <h1 class="hero__title" id="profile-title">Профиль</h1>
      <p class="text-secondary">Имя и короткое описание сохраняются через API, когда он доступен.</p>
      <form class="card card--pad-md stack stack--sm auth-form" id="app-profile-form">
        <label class="field">
          <span class="field__label">Отображаемое имя</span>
          <input class="input" type="text" name="displayName" required value="${de(((i=a.user)==null?void 0:i.displayName)||"")}" />
        </label>
        <label class="field">
          <span class="field__label">О себе</span>
          <textarea class="input" name="bio" rows="4" placeholder="Несколько слов о себе">${de(((l=a.user)==null?void 0:l.bio)||"")}</textarea>
        </label>
        <button class="btn btn--primary" type="submit">Сохранить</button>
        <p class="text-muted text-sm" id="app-profile-status" role="status"></p>
      </form>
    </section>
  `:_s(s);return n.innerHTML=`
    <header class="app-topbar" role="banner">
      <div class="app-topbar__brand">
        <a href="${g("/welcome")}" class="app-topbar__logo">Tiver</a>
        <span class="guest-badge">${de(((u=a.user)==null?void 0:u.email)||"")}</span>
      </div>
      <nav class="app-topbar__nav" aria-label="Разделы">
        ${r}
        <a class="app-topbar__link" href="${g("/guest/feed")}">Гость</a>
        <a class="app-topbar__link" href="#" data-app-logout>Выйти</a>
      </nav>
    </header>
    <main class="app-main stack stack--lg" id="main-content" role="main">
      ${o}
    </main>
  `,n.appendChild(B()),(p=n.querySelector("[data-app-logout]"))==null||p.addEventListener("click",m=>{m.preventDefault(),Ve(),G(async()=>{const{navigate:_}=await Promise.resolve().then(()=>W);return{navigate:_}},void 0).then(({navigate:_})=>_("/welcome"))}),e==="profile"&&ms(n),n}function de(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;")}function fs(){M("Страница не найдена");const e=document.createElement("div");return e.className="page page--center",e.innerHTML=`
    <main class="not-found" id="main-content" role="main">
      <section class="card card--pad-lg not-found__card" aria-labelledby="not-found-code">
        <h1 class="not-found__code" id="not-found-code">404</h1>
        <p class="not-found__message text-muted">Страница не существует или была перенесена.</p>
        <div class="actions-row not-found__actions">
          <a class="btn btn--primary" href="${g("/welcome")}">На главную</a>
        </div>
      </section>
    </main>
  `,e}const vs=["feed","messages","groups","friends","games","settings"],ys=Object.fromEntries(vs.map(e=>[`/guest/${e}`,{view:t=>Z({...t,segment:e})}])),ws=["feed","messages","groups","friends","games","profile"],xs=Object.fromEntries(ws.map(e=>[`/app/${e}`,{view:t=>bs({...t,section:e})}])),R={"/welcome":{view:pt},"/login":{view:ft},"/register":{view:vt},"/privacy":{view:wt},...ys,...xs,"/404":{view:fs}};let pe=null;function ks(){return pe||(pe=document.getElementById("router-outlet")),pe}function st(e){const t=ve(e);return t.length>1&&t.endsWith("/")?t.slice(0,-1):t}function ee(e){window.history.replaceState(null,"",g(e))}function Ss(e){const t=st(e);if(t==="/")return ee("/welcome"),R["/welcome"];if(t==="/guest")return ee("/guest/feed"),R["/guest/feed"];if(t==="/app")return ee("/app/feed"),R["/app/feed"];const s=/^\/guest\/community\/([^/]+)$/.exec(t);if(s){const r=decodeURIComponent(s[1]);return{view:o=>Z({...o,segment:"community",communitySlug:r})}}const a=/^\/guest\/friend\/([^/]+)$/.exec(t);if(a){const r=decodeURIComponent(a[1]);return{view:o=>Z({...o,segment:"friend",friendSlug:r})}}const n=/^\/guest\/game\/([^/]+)$/.exec(t);if(n){const r=decodeURIComponent(n[1]);return{view:o=>Z({...o,segment:"game",gameId:r})}}return R[t]?R[t]:R["/404"]}function at(e,{replace:t=!1}={}){const s=String(e||"/"),a=s.indexOf("#"),n=s.indexOf("?");let r=s.length;a>=0&&(r=Math.min(r,a)),n>=0&&(r=Math.min(r,n));const o=s.slice(0,r),i=s.slice(r);let l=o.startsWith("/")?o:`/${o}`;l=ve(l);const u=`${g(l)}${i}`;t?window.history.replaceState(null,"",u):window.history.pushState(null,"",u),oe()}function nt(){window.addEventListener("popstate",()=>oe()),oe()}function oe(){const e=ks();if(!e)return;const t=st(window.location.pathname);if(t.startsWith("/app")){const n=z();if(n.mode!=="user"||!n.token){ee("/login"),e.replaceChildren();const o=R["/login"].view({path:"/login"});o instanceof Node&&e.appendChild(o);return}}const s=Ss(t);e.replaceChildren();const a=s.view({path:t});if(a instanceof Node)e.appendChild(a);else if(typeof a=="string"){const n=document.createElement("div");n.innerHTML=a,e.append(...n.childNodes)}}const W=Object.freeze(Object.defineProperty({__proto__:null,initRouter:nt,navigate:at,render:oe},Symbol.toStringTag,{value:"Module"}));function $s(e){return e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.button!==0}function Es(){document.addEventListener("click",e=>{if($s(e))return;const t=e.target.closest("a[href]");if(!t||t.target==="_blank"||t.hasAttribute("download")||t.getAttribute("rel")==="external")return;const s=t.getAttribute("href");if(!s||s.startsWith("mailto:")||s.startsWith("tel:")||s.startsWith("#"))return;let a;try{a=new URL(t.href)}catch{return}if(a.origin!==window.location.origin)return;const n=ve(a.pathname);n.startsWith("/archive/")||/\.html$/i.test(n)||(e.preventDefault(),at(`${n}${a.search}${a.hash}`))})}document.documentElement.setAttribute("lang",ne()==="en"?"en":"ru");fe(_e());ae();lt();dt().then(()=>{nt(),Es()});
