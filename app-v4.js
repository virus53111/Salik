(function(){
"use strict";
var works=window.CENA_WORKS||[], cats=window.CENA_CATS||[], sources=window.CENA_SOURCES||{};
var STORE="cenaradar-active-v1", SAVED="cenaradar-saved-v1", LANG="cenaradar-lang-v1";
var lang="lv", cat="all", search="", sort="featured", currentId=null, lines=[], fields={}, visibleCount=12, priceMode="mid"; var PRICE_MODE="cenaradar-price-mode-v1";
var $=function(id){return document.getElementById(id);};
var langTexts={
 lv:{
 notice:"2026. gada publisko cenrāžu dati",notice2:"Cenas bez PVN un materiāliem, ja nav norādīts citādi",
 navPrices:"Cenu katalogs",navEstimate:"Tāmes studija",navHow:"Kā tas darbojas",createEstimate:"Izveidot tāmi",
 heroOverline:"NEATKARĪGS CENU RADARS / LATVIJA",heroTitle:"Remonts maksā.<br><em>Minējumi — vairāk.</em>",
 heroDesc:"Salīdzini darbu izcenojumus, saliec savu projektu pa pozīcijām un izveido skaidru tāmi. Bez reģistrācijas. Bez slēptām izmaksām.",
 explorePrices:"Izpētīt cenas",makeEstimate:"Sastādīt tāmi",heroProof:"darbu izcenojumi vienuviet",radarStatus:"Dati atrasti",
 priceData:"CENU DATUBĀZE",catalogTitle:"Atrodi darbu.<br><em>Uzzini cenu.</em>",
 catalogIntro:"Orientējoši darbu izcenojumi no Latvijas uzņēmumu atklātajiem cenrāžiem. Katram darbam ir norādīts avots.",
 catalogNote:"Cenas par darbu, bez PVN*",catalogFoot:"* Cenas ir informatīvas; galīgā cena atkarīga no apjoma un objekta.",methodLink:"Datu metodika ↗",
 emptyTitle:"Nav atrasts neviens darbs",emptyText:"Izmēģini citu meklēšanas vārdu vai kategoriju.",
 bridgeTitle:"No aptuvenas cenas<br>līdz <em>gatavai tāmei.</em>",studioLabel:"TĀMES STUDIJA",
 estimateTitle:"Tava projekta<br><em>cipari, tavos noteikumos.</em>",
 estimateIntro:"Pievieno darbus, pielāgo daudzumus un cenas, iekļauj materiālus un PVN. Izdrukā, saglabā PDF vai nosūti pasūtītājam.",
 newEstimate:"Jauna tāme",savedLocally:"Saglabājas šajā pārlūkā",fresh:"Jauna",save:"Saglabāt",myEstimates:"Manas tāmes",import:"Importēt",
 projectName:"Projekta nosaukums",clientName:"Klients / objekts",estimateDate:"Datums",estimateNr:"Tāmes Nr.",
 positions:"Darbu pozīcijas",positionsHelp:"Maini darbu cenu, daudzumu un materiālu izmaksas",
 work:"Darbs",qty:"Daudz.",labor:"Darbs €/vien.",materials:"Materiāli €/vien.",sum:"Kopā",
 addYourFirst:"Sāc ar pirmo darbu",addYourFirstHelp:"Atrodi cenu katalogā un nospied “+ Tāmē”",chooseFromCatalog:"Izvēlēties no kataloga →",addCustom:"Pievienot savu pozīciju",clearAll:"Notīrīt",estimateNotes:"Piezīmes tāmē",
 costOverview:"Izmaksu pārskats",laborCost:"Darba izmaksas",materialCost:"Materiāli",subtotal:"Starpsumma",reserve:"Rezerve neparedzētajam",reserveSum:"Rezerve",addVat:"Pievienot PVN (21%)",vatHelp:"Ja tas attiecas uz konkrēto tāmi",
 total:"KOPĀ APMAKSAI",estimateDisclaimer:"Orientējoša tāme, nevis komercpiedāvājums",
 printPdf:"Drukāt / saglabāt PDF",share:"Dalīties",export:"Eksportēt",sendEmail:"Nosūtīt e-pastā",localNote:"Dati paliek tavā pārlūkā. Tie netiek nosūtīti serverim.",
 whyLabel:"KĀ TAS STRĀDĀ",howTitle:"Mazāk pārsteigumu.<br><em>Vairāk skaidrības.</em>",
 how1Title:"Pārbaudi cenas",how1:"Salīdzini publiskus cenu diapazonus ar atsaucēm uz to avotiem.",
 how2Title:"Sastādi tāmi",how2:"Izvēlies darbus un ievadi reālo platību, apjomu, materiālus un rezerves.",
 how3Title:"Paņem līdzi",how3:"Saglabā rediģējamu failu, izdrukā PDF vai nosūti summu ar e-pastu.",
 guides:"Cenas tuvplānā",guide1:"Kas ietekmē flīzēšanas cenu un kā plānot budžetu?",guide2:"Kā atšķirt krāsošanu no pilnas sienu sagatavošanas?",guide3:"Punkti, kabeļi, sadales skapji — kas ietilpst cenā?",
 faqTitle:"Bieži jautā.<br><em>Mēs izskaidrojam.</em>",fullMethod:"Lasīt pilnu metodiku ↗",
 q1:"Vai cenas ir precīzas?",a1:"Tās ir orientējošas cenas no publiskiem uzņēmumu cenrāžiem, nevis garantēts piedāvājums. Aptuvenās izmaksas var mainīties pēc apsekošanas.",
 q2:"Vai cenās ietilpst materiāli un PVN?",a2:"Parasti nē. Tāmes studijā var atsevišķi pievienot materiālus un vajadzības gadījumā PVN.",
 q3:"Vai tāmes saglabāšana ir bez maksas?",a3:"Jā. Tāmes glabājas tikai šajā pārlūkā un ir eksportējamas JSON failā. PDF var saglabāt ar pārlūka drukas funkciju.",
 q4:"Kā nosūtīt tāmi citam cilvēkam?",a4:"Izmanto kopīgošanas pogu, e-pasta uzmetumu vai izdrukā tāmi PDF un pievieno to ziņai. Automātiska e-pasta nosūtīšana no servera nav nepieciešama.",
 footerStatement:"Mazāk minējumu. Labāki lēmumi. Latvija.",rights:"Informatīvs cenu salīdzināšanas rīks.",methodLink2:"Metodika un avoti",footerEstimate:"Tāmes kalkulators",modalHint:"Tāmes saglabātas šajā ierīcē, nevis mākoņkrātuvē.",
 results:"Darbu katalogs",resultsCount:"darbi",priceFrom:"Cenas diapazons · bez PVN",addToEstimate:"+ Tāmē",source:"Avots",noSaved:"Nav saglabātu tāmju",open:"Atvērt",delete:"Dzēst",confirmNew:"Vai sākt jaunu tāmi? Pašreizējās nesaglabātās izmaiņas tiks aizstātas.",confirmClear:"Vai dzēst visas tāmes pozīcijas?",
 added:"Darbs pievienots tāmei",saved:"Tāme saglabāta",emptyEstimate:"Vispirms pievieno vismaz vienu darbu",imported:"Tāme importēta",invalidFile:"Neizdevās nolasīt tāmes failu",copied:"Tāmes kopsavilkums nokopēts",shareFail:"Neizdevās kopīgot. Izmanto eksportu vai e-pastu.",saveError:"Pārlūka glabātuve nav pieejama — eksportē tāmi failā",
 custom:"Jauns darbs",noName:"Bez nosaukuma",totalWork:"Pozīcijas",emailSubject:"Būvdarbu tāme",pdfTip:"Drukas logā izvēlies “Saglabāt kā PDF”",fileDownloaded:"Tāmes fails lejupielādēts",
 searchPlaceholder:"Meklē: flīzes, krāsošana, elektrība...",sortFeatured:"Populārākie",sortLow:"Cena: augoši",sortHigh:"Cena: dilstoši",sortAz:"A–Z",
 projectPlaceholder:"Dzīvokļa remonts / Projekts #01",clientPlaceholder:"Adrese vai pasūtītājs",notesPlaceholder:"Darba nosacījumi, termiņi, materiālu precizējumi...",
 titleDoc:"BŪVDARBU TĀME",footerDoc:"Orientējošs aprēķins. Cenas bez materiāliem un PVN, ja nav ievadīts citādi. Galīgās izmaksas saskaņojamas ar izpildītāju."
 },
 ru:{
 notice:"Данные открытых прайс-листов за 2026 год",notice2:"Цены без НДС и материалов, если не указано другое",
 navPrices:"Каталог цен",navEstimate:"Студия смет",navHow:"Как это работает",createEstimate:"Создать смету",
 heroOverline:"НЕЗАВИСИМЫЙ РАДАР ЦЕН / ЛАТВИЯ",heroTitle:"Ремонт стоит денег.<br><em>Догадки — дороже.</em>",
 heroDesc:"Сравнивай расценки, собирай проект по позициям и делай понятную смету. Без регистрации. Без скрытых расходов.",
 explorePrices:"Смотреть цены",makeEstimate:"Создать смету",heroProof:"расценок в одном месте",radarStatus:"Данные найдены",
 priceData:"БАЗА РАСЦЕНОК",catalogTitle:"Найди работу.<br><em>Узнай цену.</em>",
 catalogIntro:"Ориентировочные расценки из открытых прайсов компаний Латвии. Для каждой позиции указан источник.",
 catalogNote:"Стоимость работ, без НДС*",catalogFoot:"* Цены справочные; итоговая стоимость зависит от объёма и объекта.",methodLink:"Методика и источники ↗",
 emptyTitle:"Ничего не найдено",emptyText:"Попробуй другой запрос или категорию.",
 bridgeTitle:"От примерной цены<br>до <em>готовой сметы.</em>",studioLabel:"СТУДИЯ СМЕТ",
 estimateTitle:"Цифры твоего проекта.<br><em>Условия — твои.</em>",
 estimateIntro:"Добавляй работы, меняй объёмы и цены, учитывай материалы и НДС. Печатай, сохраняй PDF или отправляй заказчику.",
 newEstimate:"Новая смета",savedLocally:"Сохраняется в этом браузере",fresh:"Новая",save:"Сохранить",myEstimates:"Мои сметы",import:"Импорт",
 projectName:"Название проекта",clientName:"Клиент / объект",estimateDate:"Дата",estimateNr:"Номер сметы",
 positions:"Позиции сметы",positionsHelp:"Меняй цену, количество и стоимость материалов",
 work:"Работа",qty:"Кол-во",labor:"Работа €/ед.",materials:"Материалы €/ед.",sum:"Всего",
 addYourFirst:"Добавь первую работу",addYourFirstHelp:"Найди её в каталоге и нажми «+ В смету»",chooseFromCatalog:"Выбрать из каталога →",addCustom:"Добавить свою позицию",clearAll:"Очистить",estimateNotes:"Примечания к смете",
 costOverview:"Расчёт стоимости",laborCost:"Стоимость работ",materialCost:"Материалы",subtotal:"Промежуточная сумма",reserve:"Резерв на непредвиденное",reserveSum:"Резерв",addVat:"Добавить НДС (21%)",vatHelp:"Если он применим к этой смете",
 total:"ИТОГО К ОПЛАТЕ",estimateDisclaimer:"Предварительная смета, не оферта",
 printPdf:"Печать / сохранить PDF",share:"Поделиться",export:"Экспорт",sendEmail:"Отправить по email",localNote:"Данные остаются в твоём браузере. На сервер они не передаются.",
 whyLabel:"КАК ЭТО РАБОТАЕТ",howTitle:"Меньше сюрпризов.<br><em>Больше ясности.</em>",
 how1Title:"Проверь цены",how1:"Сравни открытые диапазоны цен со ссылками на источники.",
 how2Title:"Составь смету",how2:"Выбирай работы, вводи площадь, объёмы, материалы и резерв.",
 how3Title:"Сохрани и отправь",how3:"Скачай редактируемый файл, распечатай PDF или отправь данные по email.",
 guides:"Цены под микроскопом",guide1:"От чего зависит стоимость укладки плитки?",guide2:"Чем покраска отличается от полной подготовки стен?",guide3:"Электроточки, кабели, щиты — что входит в цену?",
 faqTitle:"Часто спрашивают.<br><em>Мы объясняем.</em>",fullMethod:"Полная методика ↗",
 q1:"Насколько точные цены?",a1:"Это ориентировочные расценки из открытых прайсов компаний, а не гарантированное предложение. Итог уточняется после оценки объекта.",
 q2:"Материалы и НДС включены?",a2:"Обычно нет. В смете можно добавить материалы и при необходимости НДС отдельными строками.",
 q3:"Сметы можно сохранять бесплатно?",a3:"Да. Они хранятся в этом браузере и экспортируются в JSON. PDF создаётся через функцию печати браузера.",
 q4:"Как отправить смету?",a4:"Через системное меню «Поделиться», черновик email или сохранённый PDF. Отправка прямо с сервера не предусмотрена.",
 footerStatement:"Меньше догадок. Лучше решения. Латвия.",rights:"Справочный сервис сравнения цен.",methodLink2:"Методика и источники",footerEstimate:"Калькулятор сметы",modalHint:"Сметы хранятся на этом устройстве, не в облаке.",
 results:"Каталог работ",resultsCount:"работ",priceFrom:"Диапазон цен · без НДС",addToEstimate:"+ В смету",source:"Источник",noSaved:"Нет сохранённых смет",open:"Открыть",delete:"Удалить",confirmNew:"Начать новую смету? Текущие несохранённые изменения будут заменены.",confirmClear:"Удалить все позиции сметы?",
 added:"Работа добавлена в смету",saved:"Смета сохранена",emptyEstimate:"Добавь хотя бы одну работу",imported:"Смета импортирована",invalidFile:"Не удалось прочитать файл сметы",copied:"Сводка сметы скопирована",shareFail:"Не удалось поделиться. Используй экспорт или email.",saveError:"Локальное хранилище недоступно — экспортируй смету в файл",
 custom:"Новая работа",noName:"Без названия",totalWork:"Позиций",emailSubject:"Смета на строительные работы",pdfTip:"В меню печати выбери «Сохранить как PDF»",fileDownloaded:"Файл сметы скачан",
 searchPlaceholder:"Поиск: плитка, покраска, электрика...",sortFeatured:"Популярные",sortLow:"Цена: по возрастанию",sortHigh:"Цена: по убыванию",sortAz:"А–Я",
 projectPlaceholder:"Ремонт квартиры / Проект #01",clientPlaceholder:"Адрес или заказчик",notesPlaceholder:"Условия работ, сроки, уточнения по материалам...",
 titleDoc:"СМЕТА НА РАБОТЫ",footerDoc:"Предварительный расчёт. Материалы и НДС учитываются только при их добавлении. Итоговая стоимость согласуется с исполнителем."
 }};
Object.assign(langTexts.lv,{priceMode:"Cenas līmenis tāmē",modeMid:"Diapazona viduspunkts",modeMin:"Zemākā cena",modeMax:"Augstākā cena",quickEstimate:"Tava tāme",showMore:"Rādīt vairāk darbu",showing:"Parādīti",of:"no",templates:"Ātrais sākums",templateHint:"Pievieno darbu komplektu, pēc tam precizē daudzumus.",templateBath:"Vannasistaba",templateWalls:"Sienu apdare",templateFloor:"Grīdas remonts",templateAdded:"Darbu komplekts pievienots. Precizē daudzumus.",exportCsv:"Excel / CSV",unit:"Mērvienība",catalogIntro:"Orientējoši darbu izcenojumi no Latvijas uzņēmumu atklātajiem cenrāžiem. Informācija par avotiem pieejama metodikā."});
Object.assign(langTexts.ru,{priceMode:"Уровень цен для сметы",modeMid:"Середина диапазона",modeMin:"Минимальная цена",modeMax:"Максимальная цена",quickEstimate:"Твоя смета",showMore:"Показать ещё работы",showing:"Показано",of:"из",templates:"Быстрый старт",templateHint:"Добавь комплект работ, затем уточни реальные объёмы.",templateBath:"Ванная",templateWalls:"Отделка стен",templateFloor:"Ремонт пола",templateAdded:"Комплект добавлен. Уточни объёмы работ.",exportCsv:"Excel / CSV",unit:"Единица",catalogIntro:"Ориентировочные расценки из открытых прайсов компаний Латвии. Информация об источниках доступна в методике."});
Object.assign(langTexts.lv,{quoteNeeded:"Cena pēc vienošanās",quoteHint:"Ievadi savu darba cenu tāmē",quoteAdded:"Pievienots: ievadi cenu tāmē",quoteWarning:"Pozīcijām bez cenas jāievada darba izcenojums. Tās pagaidām nepalielina darba summu.",fromPrice:"No",packagePrice:"Montāžas komplekts, precizē iekļautos materiālus",allSections:"Visas darbu kategorijas",sourceFree:"Skatīt cenas un aprēķināt",catalogIntro:"Plašs būvdarbu katalogs: publicētas orientējošās cenas un individuāli aprēķināmi darbi. Cenu metodika pieejama atsevišķi."});
Object.assign(langTexts.ru,{quoteNeeded:"Цена по запросу",quoteHint:"Введи свою стоимость в смете",quoteAdded:"Добавлено: укажи цену работы в смете",quoteWarning:"У позиций без цены нужно указать стоимость работы. Пока они не увеличивают сумму работ.",fromPrice:"От",packagePrice:"Комплект монтажа: уточни включённые материалы",allSections:"Все категории работ",sourceFree:"Цены и расчёт",catalogIntro:"Полный каталог строительных работ: опубликованные ориентиры и позиции для индивидуального расчёта. Методика доступна отдельно."});
function t(key){return (langTexts[lang]&&langTexts[lang][key])||key;}
function escapeHtml(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}
function num(n){var v=Number(String(n).replace(",","."));return Number.isFinite(v)?Math.min(100000000,Math.max(0,v)):0;}
function money(n){return new Intl.NumberFormat(lang==="ru"?"ru-RU":"lv-LV",{style:"currency",currency:"EUR",minimumFractionDigits:2,maximumFractionDigits:2}).format(n||0);}
function shortMoney(n){return new Intl.NumberFormat(lang==="ru"?"ru-RU":"lv-LV",{maximumFractionDigits:2}).format(n);}
function getItemName(item){return lang==="ru"?item.ru:item.lv;}
function getCat(id){return cats.find(function(c){return c.id===id;})||cats[0];}
function toast(msg){var node=$("toast");node.textContent=msg;node.classList.add("show");clearTimeout(toast.timer);toast.timer=setTimeout(function(){node.classList.remove("show");},3200);}
function safeGet(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function safeSet(k,v){try{localStorage.setItem(k,v);return true;}catch(e){return false;}}
function defaultFields(){var today=new Date();var y=today.getFullYear(),m=String(today.getMonth()+1).padStart(2,"0"),d=String(today.getDate()).padStart(2,"0");return {project:"",client:"",date:y+"-"+m+"-"+d,number:"CR-"+y+"-001",notes:"",vat:false,reserve:0};}
function snapshot(){return {version:1,id:currentId,fields:fields,lines:lines.map(function(l){return Object.assign({},l);}),updated:new Date().toISOString()};}
function persist(){if(!safeSet(STORE,JSON.stringify(snapshot()))){$("save-status").textContent=t("saveError");}}
function normalizeLine(x){return {uid:String(x.uid||Date.now()+"-"+Math.random().toString(16).slice(2)),workId:String(x.workId||""),name:String(x.name||"").slice(0,220),unit:String(x.unit||"gab.").slice(0,15),qty:num(x.qty),labor:num(x.labor),material:num(x.material)};}
function normalizeSnapshot(x){if(!x||typeof x!=="object"||!Array.isArray(x.lines))throw Error("Bad format");var f=Object.assign(defaultFields(),x.fields||{});f.project=String(f.project).slice(0,200);f.client=String(f.client).slice(0,200);f.date=String(f.date).slice(0,10);f.number=String(f.number).slice(0,50);f.notes=String(f.notes).slice(0,3000);f.vat=Boolean(f.vat);f.reserve=Math.min(100,num(f.reserve));return {id:x.id?String(x.id):null,fields:f,lines:x.lines.slice(0,400).map(normalizeLine)};}
function initState(){lang=safeGet(LANG)==="ru"?"ru":"lv";var pm=safeGet(PRICE_MODE);if(["min","mid","max"].includes(pm))priceMode=pm;$("price-mode").value=priceMode;fields=defaultFields();try{var active=JSON.parse(safeGet(STORE)||"null");if(active){var normalized=normalizeSnapshot(active);currentId=normalized.id;fields=normalized.fields;lines=normalized.lines;}}catch(e){}}
function applyLanguage(){document.documentElement.lang=lang;$("lang-lv").classList.toggle("active",lang==="lv");$("lang-ru").classList.toggle("active",lang==="ru");
 document.querySelectorAll("[data-i18n]").forEach(function(el){el.textContent=t(el.getAttribute("data-i18n"));});
 document.querySelectorAll("[data-i18n-html]").forEach(function(el){el.innerHTML=t(el.getAttribute("data-i18n-html"));});
 $("search").placeholder=t("searchPlaceholder");$("project-name").placeholder=t("projectPlaceholder");$("client-name").placeholder=t("clientPlaceholder");$("estimate-notes").placeholder=t("notesPlaceholder");
 var options=$("sort").options;[t("sortFeatured"),t("sortLow"),t("sortHigh"),t("sortAz")].forEach(function(label,i){options[i].textContent=label;});document.querySelectorAll("[data-category-link]").forEach(function(el){var c=getCat(el.getAttribute("data-category-link"));el.querySelector("strong").textContent=lang==="ru"?c.ru:c.lv;});var mo=$("price-mode").options;[t("modeMid"),t("modeMin"),t("modeMax")].forEach(function(label,i){mo[i].textContent=label;});renderCategories();renderCatalog();renderLines();renderSummary();}
function renderCategories(){var el=$("categories");el.innerHTML=cats.map(function(c){var count=c.id==="all"?works.length:works.filter(function(w){return w.cat===c.id;}).length;
 return '<button type="button" class="chip '+(cat===c.id?"active":"")+'" data-cat="'+escapeHtml(c.id)+'"><span>'+escapeHtml(c.icon)+'</span>'+escapeHtml(lang==="ru"?c.ru:c.lv)+' <span style="opacity:.52">'+count+'</span></button>';}).join("");}
function renderCatalog(){var q=search.trim().toLocaleLowerCase();var filtered=works.filter(function(w){return (cat==="all"||w.cat===cat)&&(!q||(w.lv+" "+w.ru+" "+getCat(w.cat).lv+" "+getCat(w.cat).ru).toLocaleLowerCase().includes(q));});
 if(sort==="low")filtered.sort(function(a,b){return (a.min===null?Infinity:a.min)-(b.min===null?Infinity:b.min);});else if(sort==="high")filtered.sort(function(a,b){return (b.max===null?-1:b.max)-(a.max===null?-1:a.max);});else if(sort==="az")filtered.sort(function(a,b){return getItemName(a).localeCompare(getItemName(b),lang==="ru"?"ru":"lv");});
 $("results-label").textContent=t("results");$("result-count").textContent=filtered.length+" "+t("resultsCount");
 $("empty").classList.toggle("hidden",filtered.length!==0);
 $("more-wrap").classList.toggle("hidden",filtered.length===0);$("load-more").classList.toggle("hidden",filtered.length<=visibleCount);$("page-count").textContent=t("showing")+" "+Math.min(visibleCount,filtered.length)+" "+t("of")+" "+filtered.length;
 $("catalog-list").innerHTML=filtered.slice(0,visibleCount).map(function(w,i){var label=getItemName(w);var range=w.min===null?escapeHtml(t("quoteNeeded")):(w.kind==="from"?escapeHtml(t("fromPrice"))+" ":"")+shortMoney(w.min)+(w.min===w.max?"":"–"+shortMoney(w.max))+" €";var unit=w.unit==="gab."?(lang==="ru"?"шт.":"gab."):w.unit;return '<article class="price-card"><div class="pc-top"><span class="pc-index">CR.'+String(i+1).padStart(3,"0")+'</span><span class="pc-category">'+escapeHtml(lang==="ru"?getCat(w.cat).ru:getCat(w.cat).lv)+'</span></div><div class="pc-name">'+escapeHtml(label)+'</div><div class="pc-bottom"><div class="pc-cost"><small>'+escapeHtml(w.min===null?t("quoteHint"):w.kind==="package"?t("packagePrice"):t("priceFrom"))+'</small><strong class="'+(w.min===null?"quote-price":"")+'">'+range+' <em>/ '+escapeHtml(unit)+'</em></strong></div><button type="button" class="pc-add" data-add="'+escapeHtml(w.id)+'" aria-label="'+escapeHtml(t("addToEstimate")+" "+label)+'">'+escapeHtml(t("addToEstimate"))+' ↗</button></div></article>';}).join("");
}
function fillFields(){$("project-name").value=fields.project;$("client-name").value=fields.client;$("estimate-date").value=fields.date;$("estimate-number").value=fields.number;$("estimate-notes").value=fields.notes;$("reserve").value=fields.reserve;$("vat-toggle").checked=fields.vat;}
function getTotals(){var labor=0,material=0;lines.forEach(function(l){labor+=num(l.qty)*num(l.labor);material+=num(l.qty)*num(l.material);});var subtotal=labor+material,reserve=subtotal*num(fields.reserve)/100,vat=fields.vat?(subtotal+reserve)*.21:0;return {labor:labor,material:material,subtotal:subtotal,reserve:reserve,vat:vat,total:subtotal+reserve+vat};}
function renderSummary(){var total=getTotals();$("labor-total").textContent=money(total.labor);$("material-total").textContent=money(total.material);$("subtotal").textContent=money(total.subtotal);$("reserve-total").textContent=money(total.reserve);$("vat-total").textContent=money(total.vat);$("grand-total").textContent=money(total.total);$("line-count").textContent=lines.length+" "+(lang==="ru"?"поз.":"poz.");$("estimate-empty").classList.toggle("hidden",lines.length>0);var count=lines.length+" "+(lang==="ru"?"поз.":"poz.");$("quick-count").textContent=count;$("quick-total").textContent=money(total.total);$("floating-count").textContent=count+" · "+t("quickEstimate");$("floating-total").textContent=money(total.total);$("floating-estimate").classList.toggle("hidden",!lines.length);$("quote-warning").classList.toggle("hidden",!lines.some(function(l){return l.labor===0&&works.some(function(w){return w.id===l.workId&&w.min===null;});}));}
function renderLines(){var tbody=$("estimate-lines");tbody.innerHTML=lines.map(function(l){return '<tr data-uid="'+escapeHtml(l.uid)+'"><td><input class="line-input name-input" data-field="name" aria-label="'+escapeHtml(t("work"))+'" value="'+escapeHtml(l.name)+'"><input class="line-input unit-input" data-field="unit" aria-label="'+escapeHtml(t("unit"))+'" value="'+escapeHtml(l.unit)+'" maxlength="15" list="unit-options"></td><td><input class="line-input" type="number" min="0" step="0.01" data-field="qty" aria-label="'+escapeHtml(t("qty"))+'" value="'+escapeHtml(l.qty)+'"></td><td><input class="line-input" type="number" min="0" step="0.01" data-field="labor" aria-label="'+escapeHtml(t("labor"))+'" value="'+escapeHtml(l.labor)+'"></td><td><input class="line-input" type="number" min="0" step="0.01" data-field="material" aria-label="'+escapeHtml(t("materials"))+'" value="'+escapeHtml(l.material)+'"></td><td class="sum-value">'+money(l.qty*(l.labor+l.material))+'</td><td><button type="button" class="remove-line" data-remove="'+escapeHtml(l.uid)+'" title="'+escapeHtml(t("delete"))+'" aria-label="'+escapeHtml(t("delete"))+'">×</button></td></tr>';}).join("");renderSummary();}
function chosenPrice(w){return w.min===null?0:priceMode==="min"?w.min:priceMode==="max"?w.max:Math.round((w.min+w.max)/2*100)/100;}
function appendWork(workId){var w=works.find(function(item){return item.id===workId;});if(!w)return false;lines.push({uid:Date.now()+"-"+Math.random().toString(16).slice(2),workId:w.id,name:getItemName(w),unit:w.unit,qty:1,labor:chosenPrice(w),material:0});return true;}
function addWork(workId){if(!appendWork(workId))return;renderLines();persist();var w=works.find(function(x){return x.id===workId;});toast(t(w&&w.min===null?"quoteAdded":"added"));}
var TEMPLATES={bath:["demo-tiles","floor-waterproof","tile-wall","tile-floor","pl-wc","pl-basin","pl-faucet"],walls:["prime-walls","putty-walls","sand-walls","paint-walls"],floor:["demo-floor","floor-self","floor-laminate","floor-skirting"]};
function applyTemplate(key){var items=TEMPLATES[key];if(!items)return;items.forEach(appendWork);renderLines();persist();toast(t("templateAdded"));}
function addCustom(){lines.push({uid:Date.now()+"-"+Math.random().toString(16).slice(2),workId:"",name:t("custom"),unit:"gab.",qty:1,labor:0,material:0});renderLines();persist();var inputs=$("estimate-lines").querySelectorAll(".name-input");if(inputs.length)inputs[inputs.length-1].focus();}
function changeLine(el){var row=el.closest("tr[data-uid]");if(!row)return;var line=lines.find(function(l){return l.uid===row.getAttribute("data-uid");});if(!line)return;var field=el.getAttribute("data-field");if(!["name","unit","qty","labor","material"].includes(field))return;line[field]=field==="name"?el.value.slice(0,220):field==="unit"?el.value.slice(0,15):num(el.value);row.querySelector(".sum-value").textContent=money(num(line.qty)*(num(line.labor)+num(line.material)));renderSummary();persist();}
function updateField(){fields.project=$("project-name").value.slice(0,200);fields.client=$("client-name").value.slice(0,200);fields.date=$("estimate-date").value;fields.number=$("estimate-number").value.slice(0,50);fields.notes=$("estimate-notes").value.slice(0,3000);fields.reserve=Math.min(100,num($("reserve").value));fields.vat=$("vat-toggle").checked;renderSummary();persist();}
function resetEstimate(){if(lines.length&&!confirm(t("confirmNew")))return;currentId=null;lines=[];fields=defaultFields();fillFields();renderLines();persist();toast(t("newEstimate"));}
function getSaved(){try{var a=JSON.parse(safeGet(SAVED)||"[]");return Array.isArray(a)?a:[];}catch(e){return [];}}
function saveEstimate(){var a=getSaved();if(!currentId)currentId="est-"+Date.now();var state=snapshot(),idx=a.findIndex(function(s){return s.id===currentId;});if(idx<0)a.unshift(state);else a[idx]=state;a.sort(function(x,y){return String(y.updated).localeCompare(String(x.updated));});if(!safeSet(SAVED,JSON.stringify(a.slice(0,60))))toast(t("saveError"));else toast(t("saved"));persist();}
function showSaved(){var a=getSaved(),el=$("saved-list");el.innerHTML=a.length?a.map(function(s){var name=(s.fields&&s.fields.project)||t("noName");return '<div class="saved-row"><div><strong>'+escapeHtml(name)+'</strong><span>'+escapeHtml((s.fields&&s.fields.date)||"")+" · "+(s.lines||[]).length+' '+escapeHtml(t("totalWork"))+'</span></div><div style="display:flex;gap:6px"><button type="button" data-load="'+escapeHtml(s.id)+'">'+escapeHtml(t("open"))+'</button><button class="delete-saved" type="button" data-delete-saved="'+escapeHtml(s.id)+'">×</button></div></div>';}).join(""):'<div class="no-saved">'+escapeHtml(t("noSaved"))+'</div>';$("saved-modal").classList.remove("hidden");}
function closeSaved(){$("saved-modal").classList.add("hidden");}
function loadSaved(id){var s=getSaved().find(function(row){return row.id===id;});if(!s)return;try{var n=normalizeSnapshot(s);currentId=n.id;fields=n.fields;lines=n.lines;fillFields();renderLines();persist();closeSaved();$("estimate").scrollIntoView({behavior:"smooth"});}catch(e){toast(t("invalidFile"));}}
function deleteSaved(id){var a=getSaved().filter(function(x){return x.id!==id;});safeSet(SAVED,JSON.stringify(a));showSaved();}
function download(name,content,type){var blob=new Blob([content],{type:type||"application/octet-stream"});var url=URL.createObjectURL(blob);var a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url);},1000);}
function filename(){return (fields.project||"cenaradar-tame").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9_-]+/g,"-").slice(0,45).replace(/^-|-$/g,"")||"cenaradar-tame";}
function exportFile(){download(filename()+".json",JSON.stringify(snapshot(),null,2),"application/json;charset=utf-8");toast(t("fileDownloaded"));}
function csvCell(v){var s=String(v==null?"":v);if(/^[=+@\-\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"';}
function exportCsv(){if(!lines.length){toast(t("emptyEstimate"));return;}var x=getTotals();var rows=[[t("titleDoc"),fields.project||t("noName")],[t("clientName"),fields.client],[t("estimateDate"),fields.date],[t("estimateNr"),fields.number],[],[t("work"),t("unit"),t("qty"),t("labor"),t("materials"),t("sum")]];function dec(n){return Number(n).toFixed(2).replace(".",",");}
lines.forEach(function(l){rows.push([l.name,l.unit,dec(l.qty),dec(l.labor),dec(l.material),dec(l.qty*(l.labor+l.material))]);});rows.push([],[t("laborCost"),dec(x.labor)],[t("materialCost"),dec(x.material)],[t("subtotal"),dec(x.subtotal)],[t("reserveSum")+" ("+fields.reserve+"%)",dec(x.reserve)],["PVN",dec(x.vat)],[t("total"),dec(x.total)],[t("estimateNotes"),fields.notes]);download(filename()+".csv","\uFEFF"+rows.map(function(r){return r.map(csvCell).join(";");}).join("\r\n"),"text/csv;charset=utf-8");toast(t("fileDownloaded"));}
function getReportText(){var x=getTotals();var out=[t("titleDoc")+" / CenaRadar",fields.project||t("noName"),t("clientName")+": "+(fields.client||"—"),t("estimateDate")+": "+fields.date,"№ "+fields.number,""];
lines.forEach(function(l,i){out.push((i+1)+". "+l.name+" — "+l.qty+" "+l.unit+" × ("+money(l.labor)+" + "+money(l.material)+") = "+money(l.qty*(l.labor+l.material)));});
out.push("",t("laborCost")+": "+money(x.labor),t("materialCost")+": "+money(x.material),t("reserveSum")+" ("+fields.reserve+"%): "+money(x.reserve),"PVN: "+money(x.vat),t("total")+": "+money(x.total),"",fields.notes||"",t("footerDoc"),"https://cenaradar.online/");return out.join("\n");}
function reportHtml(){var x=getTotals(),rows=lines.map(function(l,i){return '<tr><td>'+String(i+1)+'</td><td>'+escapeHtml(l.name)+'</td><td>'+escapeHtml(String(l.qty)+" "+l.unit)+'</td><td>'+escapeHtml(money(l.labor))+'</td><td>'+escapeHtml(money(l.material))+'</td><td>'+escapeHtml(money(l.qty*(l.labor+l.material)))+'</td></tr>';}).join("");return '<div class="print-header"><div class="print-logo">CENA<span>RADAR</span></div><div class="print-right">LATVIA · 2026<br>cenaradar.online<br>'+escapeHtml(fields.number)+'</div></div><h1 class="print-title">'+escapeHtml(t("titleDoc"))+'</h1><div class="print-info"><div><strong>'+escapeHtml(t("projectName"))+'</strong>'+escapeHtml(fields.project||"—")+'</div><div><strong>'+escapeHtml(t("clientName"))+'</strong>'+escapeHtml(fields.client||"—")+'</div><div><strong>'+escapeHtml(t("estimateDate"))+'</strong>'+escapeHtml(fields.date)+'</div><div><strong>'+escapeHtml(t("estimateNr"))+'</strong>'+escapeHtml(fields.number)+'</div></div><table class="print-table"><thead><tr><th style="width:6%">#</th><th style="width:36%">'+escapeHtml(t("work"))+'</th><th style="width:13%">'+escapeHtml(t("qty"))+'</th><th style="width:15%">'+escapeHtml(t("labor"))+'</th><th style="width:15%">'+escapeHtml(t("materials"))+'</th><th style="width:15%">'+escapeHtml(t("sum"))+'</th></tr></thead><tbody>'+rows+'</tbody></table><div class="print-totals"><div><span>'+escapeHtml(t("laborCost"))+'</span><b>'+escapeHtml(money(x.labor))+'</b></div><div><span>'+escapeHtml(t("materialCost"))+'</span><b>'+escapeHtml(money(x.material))+'</b></div><div><span>'+escapeHtml(t("reserveSum"))+' ('+fields.reserve+'%)</span><b>'+escapeHtml(money(x.reserve))+'</b></div><div><span>PVN 21%</span><b>'+escapeHtml(money(x.vat))+'</b></div><div class="print-grand"><span>'+escapeHtml(t("total"))+'</span><b>'+escapeHtml(money(x.total))+'</b></div></div>'+(fields.notes?'<div class="print-notes"><b>'+escapeHtml(t("estimateNotes"))+'</b><p>'+escapeHtml(fields.notes)+'</p></div>':"")+'<div class="print-foot">'+escapeHtml(t("footerDoc"))+'<br>© CenaRadar · cenaradar.online</div>';}
function printEstimate(){if(!lines.length){toast(t("emptyEstimate"));return;}$("print-sheet").innerHTML=reportHtml();toast(t("pdfTip"));setTimeout(function(){window.print();},170);}
async function shareEstimate(){if(!lines.length){toast(t("emptyEstimate"));return;}var report=getReportText();if(navigator.share){try{await navigator.share({title:fields.project||"CenaRadar",text:report});return;}catch(e){if(e.name==="AbortError")return;}}try{await navigator.clipboard.writeText(report);toast(t("copied"));}catch(e){var ta=document.createElement("textarea");ta.value=report;document.body.appendChild(ta);ta.select();var ok=document.execCommand("copy");ta.remove();toast(ok?t("copied"):t("shareFail"));}}
function emailEstimate(){if(!lines.length){toast(t("emptyEstimate"));return;}var body=getReportText();if(body.length>5000){body=body.slice(0,4750)+"\n...\n"+t("footerDoc");}var mail="mailto:?subject="+encodeURIComponent(t("emailSubject")+" — "+(fields.project||"CenaRadar"))+"&body="+encodeURIComponent(body);window.location.href=mail;}
function importFile(file){if(!file)return;var reader=new FileReader();reader.onload=function(){try{var raw=JSON.parse(String(reader.result));var n=normalizeSnapshot(raw);currentId=null;fields=n.fields;lines=n.lines;fillFields();renderLines();persist();toast(t("imported"));$("estimate").scrollIntoView({behavior:"smooth"});}catch(e){toast(t("invalidFile"));}};reader.onerror=function(){toast(t("invalidFile"));};reader.readAsText(file);$("import-file").value="";}
function bind(){
 $("lang-lv").addEventListener("click",function(){lang="lv";safeSet(LANG,lang);applyLanguage();});
 $("lang-ru").addEventListener("click",function(){lang="ru";safeSet(LANG,lang);applyLanguage();});
 $("categories").addEventListener("click",function(e){var btn=e.target.closest("[data-cat]");if(!btn)return;cat=btn.getAttribute("data-cat");visibleCount=12;renderCategories();renderCatalog();});
 $("search").addEventListener("input",function(e){search=e.target.value;visibleCount=12;renderCatalog();});
 $("sort").addEventListener("change",function(e){sort=e.target.value;visibleCount=12;renderCatalog();});
 $("load-more").addEventListener("click",function(){visibleCount+=12;renderCatalog();});
 $("price-mode").addEventListener("change",function(e){priceMode=e.target.value;safeSet(PRICE_MODE,priceMode);});
 document.querySelectorAll("[data-template]").forEach(function(el){el.addEventListener("click",function(){applyTemplate(el.getAttribute("data-template"));});});
 $("export-csv").addEventListener("click",exportCsv);
 $("catalog-list").addEventListener("click",function(e){var btn=e.target.closest("[data-add]");if(btn)addWork(btn.getAttribute("data-add"));});
 $("estimate-lines").addEventListener("input",function(e){if(e.target.matches("[data-field]"))changeLine(e.target);});
 $("estimate-lines").addEventListener("click",function(e){var btn=e.target.closest("[data-remove]");if(!btn)return;lines=lines.filter(function(l){return l.uid!==btn.getAttribute("data-remove");});renderLines();persist();});
 ["project-name","client-name","estimate-date","estimate-number","estimate-notes","reserve"].forEach(function(id){$(id).addEventListener("input",updateField);});
 $("vat-toggle").addEventListener("change",updateField);
 $("add-custom").addEventListener("click",addCustom);
 $("clear-lines").addEventListener("click",function(){if(lines.length&&confirm(t("confirmClear"))){lines=[];renderLines();persist();}});
 $("new-estimate").addEventListener("click",resetEstimate);
 $("save-estimate").addEventListener("click",saveEstimate);
 $("load-estimate").addEventListener("click",showSaved);
 $("modal-close").addEventListener("click",closeSaved);
 $("saved-modal").addEventListener("click",function(e){if(e.target.id==="saved-modal")closeSaved();var load=e.target.closest("[data-load]"),del=e.target.closest("[data-delete-saved]");if(load)loadSaved(load.getAttribute("data-load"));if(del)deleteSaved(del.getAttribute("data-delete-saved"));});
 document.addEventListener("keydown",function(e){if(e.key==="Escape")closeSaved();});
 $("export-json").addEventListener("click",exportFile);
 $("print-estimate").addEventListener("click",printEstimate);
 $("share-estimate").addEventListener("click",shareEstimate);
 $("email-estimate").addEventListener("click",emailEstimate);
 $("import-json").addEventListener("click",function(){$("import-file").click();});
 $("import-file").addEventListener("change",function(){importFile(this.files&&this.files[0]);});
 window.addEventListener("beforeprint",function(){if(lines.length)$("print-sheet").innerHTML=reportHtml();});
}
function boot(){initState();bind();fillFields();$("hero-count").textContent=String(works.length);var p=new URLSearchParams(location.search);if(p.get("cat")&&cats.some(function(c){return c.id===p.get("cat");}))cat=p.get("cat");if(p.get("q")){search=p.get("q").slice(0,120);$("search").value=search;}if(p.get("lang")==="ru"||p.get("lang")==="lv"){lang=p.get("lang");safeSet(LANG,lang);}applyLanguage();}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot);else boot();
})();