import { mkdirSync, writeFileSync } from 'node:fs';

const origin = 'https://cenaradar.online';
const guides = [
  {
    "lv": {
      "slug": "vannasistabas-remonta-izdevumi",
      "title": "Vannasistabas remonta tāme Latvijā: darbi un apjomi",
      "description": "Aprēķini grīdas un sienu platību, atsevišķi ieplāno hidroizolāciju, flīzes un santehniku. Piemērs 2 × 2,4 m vannasistabai.",
      "sections": [
        [
          "Izmēri faktiskās virsmas",
          "Telpā 2 × 2,4 m grīda ir 4,8 m². Ja visu sienu augstums ir 2,5 m, sienas kopā ir 22 m². Atņemot durvis 0,8 × 2 m, paliek 20,4 m². Ja flīzes paredzētas tikai līdz noteiktam augstumam, katru sienu rēķini ar tās apdares augstumu."
        ],
        [
          "Sadali darbus un materiālus",
          "Atsevišķas pozīcijas ir vecās apdares demontāža, izvešana, pamatnes izlīdzināšana, hidroizolācija un flīžu ieklāšana. Pārbaudi, vai piedāvājumā iekļautas lentes stūriem, cauruļu manšetes un šuvju materiāls. Hidroizolācijas platība jānosaka pēc mezgliem un izvēlētās sistēmas."
        ],
        [
          "Salīdzini vienādu apjomu",
          "Palūdz tāmi ar darbu, materiāliem, piegādi, atkritumu izvešanu un PVN katrā piedāvājumā vienādā veidā. Ja meistars norādījis tikai cenu par kvadrātmetru, precizē, vai atsevišķi apmaksā izgriezumus, nišas un sliekšņus. Platību piemērs nav meistara piedāvājums."
        ]
      ]
    },
    "ru": {
      "slug": "remont-vannoy-smeta",
      "title": "Смета ремонта ванной в Латвии: работы и объёмы",
      "description": "Как посчитать площадь пола и стен, выделить гидроизоляцию, плитку и сантехнику отдельными строками. Пример для ванной 2 × 2,4 м.",
      "sections": [
        [
          "Измерьте поверхности",
          "В ванной 2 × 2,4 м площадь пола составляет 4,8 м². При высоте 2,5 м площадь всех стен равна 22 м². После вычета проёма 0,8 × 2 м остаётся 20,4 м². Если облицовка идёт только до определённой высоты, считайте площадь каждой стены отдельно."
        ],
        [
          "Разбейте ремонт на позиции",
          "Отдельно укажите демонтаж, вывоз, выравнивание, гидроизоляцию и укладку плитки. Уточните, входят ли в предложение угловые ленты, манжеты вокруг труб и затирка. Объём гидроизоляции зависит от узлов и выбранной системы; уточните её требования перед закупкой."
        ],
        [
          "Сравнивайте одинаковый объём",
          "Попросите всех подрядчиков показать работы, материалы, доставку, вывоз и НДС одинаковым способом. При цене за квадратный метр уточните, сколько стоят вырезы, ниши и пороги. Пример с площадью показывает метод расчёта и не является расценкой подрядчика."
        ]
      ]
    },
    "related": "/cenas/flizesana/"
  },
  {
    "lv": {
      "slug": "dzivokla-remonta-budzets",
      "title": "Dzīvokļa remonta budžets Latvijā: tāme pa telpām",
      "description": "Sagatavo dzīvokļa remonta budžetu pa telpām, salīdzini darbu un materiālu izmaksas un nošķir obligātos darbus no izvēles pozīcijām.",
      "sections": [
        [
          "Sāc ar darbu sarakstu",
          "Katru telpu sadali grīdās, sienās, griestos un inženiertīklos. Piemēram, 4 × 3,5 m istabai grīda ir 14 m², bet grīdlīstes garums sākas ar 15 m perimetru. No perimetra atņem durvju ailes un norādi, vai jāmaina sliekšņi."
        ],
        [
          "Aprēķini kopējos izdevumus",
          "Tāmē glabā apjomu, mērvienību, vienības cenu un starpsummu. Pārbaudi, vai materiālu cenā iekļauta piegāde un vai darbu tāmē atsevišķi uzrādīts PVN, ja piemērojams. Atsevišķi atzīmē darbus, kuru apjoms noskaidrosies tikai pēc demontāžas."
        ],
        [
          "Sakārto prioritātes",
          "Pirms līguma vienojies, kuri darbi ir obligāti un kuri ir izvēles uzlabojumi. CSP būvniecības izmaksu indekss palīdz saprast kopējo izmaksu virzienu Latvijā. Konkrētam dzīvoklim izmanto piedāvājumus ar salīdzināmu apjomu un datumu."
        ]
      ]
    },
    "ru": {
      "slug": "remont-kvartiry-byudzhet",
      "title": "Бюджет ремонта квартиры в Латвии: смета по комнатам",
      "description": "Как составить бюджет ремонта по комнатам, отдельно посчитать материалы и работы и сравнить одинаковый объём услуг у подрядчиков.",
      "sections": [
        [
          "Начните со списка работ",
          "Разбейте каждую комнату на пол, стены, потолок и инженерные работы. Например, в комнате 4 × 3,5 м площадь пола равна 14 м², а базовый периметр для плинтуса — 15 м. Вычтите ширину дверных проёмов и запишите, нужны ли новые пороги."
        ],
        [
          "Сложите все расходы",
          "В каждой строке указывайте объём, единицу измерения, цену за единицу и сумму. Уточните, входит ли доставка в цену материалов и показан ли НДС там, где он применим. Выделите работы, объём которых станет известен только после демонтажа."
        ],
        [
          "Определите приоритеты",
          "Перед договором согласуйте обязательные работы и опции. Индекс стоимости строительства ЦСУ показывает общее изменение затрат в Латвии. Для конкретной квартиры сравнивайте предложения с одинаковым объёмом и актуальной датой."
        ]
      ]
    },
    "related": "/kalkulatori/remonta-tame/"
  },
  {
    "lv": {
      "slug": "krasosanas-apjoms",
      "title": "Kā aprēķināt sienu krāsošanu un krāsas daudzumu",
      "description": "Aprēķini krāsojamo sienu neto platību un vajadzīgo krāsu pēc segtspējas un kārtu skaita. Piemērs ar vienu istabu.",
      "sections": [
        [
          "Atņem ailes",
          "Telpas 4 × 3,5 m perimetrs ir 15 m. Pie 2,6 m augstuma bruto sienu platība ir 39 m². Ja logu un durvju kopējā platība ir 4 m², krāsojamā neto platība ir 35 m². Griestus un aiļu malas rēķini atsevišķi."
        ],
        [
          "Izmanto ražotāja norādīto patēriņu",
          "Ja uz iepakojuma konkrētajai virsmai norādīti 10 m²/l vienai kārtai, divām kārtām teorētiski vajag 35 × 2 ÷ 10 = 7 l. Atbilstoši pamatnei un iepakojuma tilpumam noapaļo uz augšu. Grunts un krāsa ir atšķirīgas tāmes pozīcijas."
        ],
        [
          "Precizē sagatavošanu",
          "Noskaidro, vai krāsošanas cenā iekļauta plaisu labošana, špaktelēšana, slīpēšana un mēbeļu aizsardzība. Mitras vai bojātas sienas vispirms jānovērtē, jo tās maina darbu apjomu. Krāsas piemērs ir aritmētika, faktiskajam patēriņam pārbaudi tehnisko lapu."
        ]
      ]
    },
    "ru": {
      "slug": "raschet-pokraski-sten",
      "title": "Расчёт покраски стен и количества краски",
      "description": "Как вычесть окна и двери и рассчитать расход краски по укрывистости и числу слоёв. Пример расчёта для одной комнаты.",
      "sections": [
        [
          "Вычтите проёмы",
          "Периметр комнаты 4 × 3,5 м равен 15 м. При высоте 2,6 м общая площадь стен — 39 м². Если окна и двери занимают 4 м², красить нужно 35 м². Потолок и откосы запишите отдельными строками."
        ],
        [
          "Возьмите расход с упаковки",
          "Если производитель указывает 10 м² на литр для одного слоя на подходящей поверхности, на два слоя теоретически требуется 35 × 2 ÷ 10 = 7 л. Округлите закупку вверх с учётом основания и фасовки. Грунтовка и краска учитываются отдельно."
        ],
        [
          "Уточните подготовительные работы",
          "Спросите, включает ли цена за покраску заделку трещин, шпаклёвку, шлифовку и укрытие мебели. Сырые или повреждённые стены требуют предварительной оценки. Расход из примера расчётный; для покупки используйте техническую карточку выбранной краски."
        ]
      ]
    },
    "related": "/cenas/krasosana/"
  }
];
const labels = {
  lv: { heading: 'Remonta plānošanas ceļveži', home: 'Sākums', tool: 'Izveidot tāmi', related: 'Saistītā lapa', method: 'Cenu metodika', source: 'CSP būvniecības izmaksu indeksi', other: 'Русский' },
  ru: { heading: 'Как спланировать ремонт', home: 'Главная', tool: 'Составить смету', related: 'Подробнее по теме на латышском', method: 'Методика сбора цен на латышском', source: 'Индексы затрат на строительство ЦСУ Латвии', other: 'Latviski' }
};
const sourceURL = 'https://stat.gov.lv/en/statistics-themes/economy/producer-prices/30030-construction-cost-indices?themeCode=RCB';
const escape = value => value.replace(/[&<>"']/g, char => ({amp:'&amp;',lt:'&lt;',gt:'&gt;',quot:'&quot;',apos:'&#39;'}[{ '&':'amp','<':'lt','>':'gt','"':'quot',"'":'apos' }[char]]));
const pathFor = (guide, lang) => lang === 'ru' ? '/ru/sovety/' + guide.ru.slug + '/' : '/padomi/' + guide.lv.slug + '/';

function alternates(guide, prefix = '') {
  return ['lv', 'ru', 'x-default'].map(lang =>
    '<' + prefix + 'link rel="alternate" hreflang="' + lang + '" href="' +
    origin + pathFor(guide, lang === 'ru' ? 'ru' : 'lv') + '"' + (prefix ? '/>' : '>')).join('');
}

export function prepareSearchMetadata(path, html) {
  const descriptions = {
    'flizesana': 'Flīzēšanas darbu cenas Latvijā par m². Salīdzini ieklāšanas, pamatnes sagatavošanas un papildu darbu izmaksas pirms tāmes.',
    'krasosana': 'Sienu un griestu krāsošanas cenas Latvijā. Noskaidro, kā apjoms, virsmas sagatavošana un krāsas kārtas ietekmē tāmi.',
    'elektrika': 'Elektromontāžas darbu cenas Latvijā. Salīdzini rozetes, apgaismojuma, vadu un sadalnes darbu izmaksu pozīcijas.',
    'laminats': 'Lamināta ieklāšanas cenas Latvijā par m². Pārbaudi pamatnes sagatavošanu, apakšklāju, grīdlīstes un materiālu izmaksas.',
    'santehnika': 'Santehnikas darbu cenas Latvijā. Skati izcenojumus pieslēgumiem un iekārtu montāžai un pārbaudi, kas iekļauts tāmē.',
    'jumti': 'Jumta darbu cenas Latvijā. Salīdzini jumta seguma montāžu, demontāžu un saistītos darbus pirms būvdarbu tāmes.'
  };
  if (html.includes('content="undefined"')) {
    const slug = path.split('/').at(-2);
    const lead = html.match(/<p class="article-lead">([^<]+)<\/p>/)?.[1]?.trim();
    const description = descriptions[slug] || lead;
    if (!description) throw new Error('Missing search description: ' + path);
    html = html.replaceAll('content="undefined"', 'content="' + escape(description) + '"');
  }
  if (path === 'index.html' || path === 'ru/index.html') {
    const lang = path === 'index.html' ? 'lv' : 'ru';
    const links = guides.map(guide => '<li><a href="' + pathFor(guide, lang) + '">' + escape(guide[lang].title) + '</a></li>').join('');
    if (!html.includes('</main>')) throw new Error('Guide links have no placement: ' + path);
    html = html.replace('</main>', '<section class="container" aria-labelledby="estimate-guides"><h2 id="estimate-guides">' +
      labels[lang].heading + '</h2><ul>' + links + '</ul></section></main>');
  }
  const relatedGuides = guides.filter(guide => guide.related + 'index.html' === '/' + path);
  if (relatedGuides.length && html.includes('</article>')) {
    const links = relatedGuides.map(guide => '<li><a href="' + pathFor(guide, 'lv') + '">' + escape(guide.lv.title) + '</a></li>').join('');
    html = html.replace('</article>', '<section><h2>' + labels.lv.heading + '</h2><ul>' + links + '</ul></section></article>');
  }
  return html;
}

export function writeSearchGuides(sitemap, analyticsTag) {
  const entries = [];
  for (const guide of guides) {
    for (const lang of ['lv', 'ru']) {
      const copy = guide[lang];
      const words = labels[lang];
      const route = pathFor(guide, lang);
      const home = lang === 'ru' ? '/ru/' : '/';
      const counterpart = pathFor(guide, lang === 'ru' ? 'lv' : 'ru');
      const canonical = origin + route;
      const title = escape(copy.title);
      const description = escape(copy.description);
      const text = copy.sections.map(([heading, paragraph]) => '<section><h2>' + escape(heading) + '</h2><p>' + escape(paragraph) + '</p></section>').join('');
      const schema = JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Article', headline: copy.title, description: copy.description,
        inLanguage: lang, mainEntityOfPage: canonical, datePublished: '2026-11-15',
        author: { '@type': 'Organization', name: 'CenaRadar', url: origin + '/' }
      });
      const html = '<!doctype html><html lang="' + lang + '"><head><meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | CenaRadar</title>' +
        '<meta name="description" content="' + description + '"><link rel="canonical" href="' + canonical + '">' + alternates(guide) +
        '<meta property="og:type" content="article"><meta property="og:title" content="' + title + '"><meta property="og:description" content="' + description + '">' +
        '<meta property="og:url" content="' + canonical + '"><link rel="icon" href="/favicon.svg">' +
        '<link rel="stylesheet" href="/styles.css"><link rel="stylesheet" href="/article.css"><script type="application/ld+json">' + schema + '</script>' + analyticsTag + '</head>' +
        '<body class="article-page"><header class="site-header"><nav class="container header-in"><a class="brand" href="' + home + '">CenaRadar</a>' +
        '<a href="' + counterpart + '">' + words.other + '</a></nav></header><main><section class="article-hero"><div class="container"><h1>' +
        title + '</h1><p class="article-lead">' + description + '</p><a class="btn btn-lime" href="' + (lang === 'ru' ? '/?lang=ru#repair-wizard' : '/#repair-wizard') + '">' + words.tool +
        '</a></div></section><div class="container article-main"><article class="article-body">' + text + '<ul><li><a href="' +
        guide.related + '">' + words.related + '</a></li><li><a href="/metodika/">' + words.method + '</a></li><li><a href="' + sourceURL +
        '">' + words.source + '</a></li></ul></article></div></main><footer class="footer"><div class="container"><a href="' + home + '">' + words.home + '</a></div></footer></body></html>\n';
      const directory = 'dist' + route;
      mkdirSync(directory, { recursive: true });
      writeFileSync(directory + 'index.html', html);
      entries.push('  <url><loc>' + canonical + '</loc><lastmod>2026-11-15</lastmod>' + alternates(guide, 'xhtml:') + '</url>');
    }
  }
  if (!sitemap.includes('</urlset>')) throw new Error('Invalid CenaRadar sitemap');
  writeFileSync('dist/sitemap.xml', sitemap.replace('<urlset ', '<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" ')
    .replace('</urlset>', entries.join('\n') + '\n</urlset>'));
}
