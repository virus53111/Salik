/* CenaRadar indicative price catalogue. Null means individual quote required. */
window.CENA_SOURCES={
  "D": {
    "name": "Dowork.lv · Būvniecības darbu cenas 2026",
    "url": "https://dowork.lv/blogs/celtniecibas-darbu-cena-2026"
  },
  "S": {
    "name": "SIA Stabils būve · Cenrādis 2025–2026",
    "url": "https://stabilsbuve.lv/cenradis.php"
  },
  "B": {
    "name": "BAU Fonds · Remontdarbu cenas",
    "url": "https://baufonds.lv/lv/buvnieciba/remontdarbu-cenas.html"
  },
  "M": {
    "name": "MeistarPro · Būvdarbu cenas 2026",
    "url": "https://meistarpro.lv/kalkulatori/lv/buvdarbu-cenas-2026"
  },
  "T": {
    "name": "Turan — darbu cenas 2026",
    "url": "https://turan.lv/cenas/"
  },
  "P": {
    "name": "PlansPlace — būvdarbu izcenojumi 2026",
    "url": "https://plansplace.lv/blog/buvdarbu-izcenojumi-2026-darba-cenas"
  },
  "F": {
    "name": "FrostLV — kondicionieru montāžas izmaksas",
    "url": "https://frostlatvija.lv/cik-maksa-gaisa-kondicioniera-uzstadisana/"
  },
  "U": {
    "name": "Buvesim.lv — santehnikas darbu cenas 2026",
    "url": "https://buvesim.lv/lv/blog/santehnikas-darbu-cenas-2026"
  }
};
window.CENA_CATS=[
  {
    "id": "all",
    "lv": "Visi darbi",
    "ru": "Все работы",
    "icon": "✳"
  },
  {
    "id": "walls",
    "lv": "Sienas un griesti",
    "ru": "Стены и потолки",
    "icon": "▤"
  },
  {
    "id": "tiles",
    "lv": "Flīzēšana",
    "ru": "Плитка",
    "icon": "▦"
  },
  {
    "id": "floors",
    "lv": "Grīdas",
    "ru": "Полы",
    "icon": "◫"
  },
  {
    "id": "electric",
    "lv": "Elektrība",
    "ru": "Электрика",
    "icon": "ϟ"
  },
  {
    "id": "plumbing",
    "lv": "Santehnika",
    "ru": "Сантехника",
    "icon": "◉"
  },
  {
    "id": "roof",
    "lv": "Jumti",
    "ru": "Кровля",
    "icon": "⌂"
  },
  {
    "id": "facade",
    "lv": "Fasādes",
    "ru": "Фасады",
    "icon": "▥"
  },
  {
    "id": "outdoor",
    "lv": "Teritorija",
    "ru": "Участок",
    "icon": "✳"
  },
  {
    "id": "other",
    "lv": "Demontāža un citi",
    "ru": "Демонтаж и другое",
    "icon": "↙"
  },
  {
    "id": "earth",
    "lv": "Zemes darbi",
    "ru": "Земляные работы",
    "icon": "◫"
  },
  {
    "id": "foundation",
    "lv": "Pamati un betons",
    "ru": "Фундаменты и бетон",
    "icon": "▧"
  },
  {
    "id": "structure",
    "lv": "Konstrukcijas un mūrēšana",
    "ru": "Конструкции и кладка",
    "icon": "▦"
  },
  {
    "id": "heating",
    "lv": "Apkure un siltumsūkņi",
    "ru": "Отопление и тепловые насосы",
    "icon": "♨"
  },
  {
    "id": "ventilation",
    "lv": "Ventilācija un kondicionēšana",
    "ru": "Вентиляция и кондиционеры",
    "icon": "≋"
  },
  {
    "id": "windows",
    "lv": "Logi un durvis",
    "ru": "Окна и двери",
    "icon": "▣"
  },
  {
    "id": "insulation",
    "lv": "Hidroizolācija un siltināšana",
    "ru": "Гидроизоляция и утепление",
    "icon": "◇"
  },
  {
    "id": "design",
    "lv": "Projektēšana un mērījumi",
    "ru": "Проектирование и измерения",
    "icon": "⌖"
  },
  {
    "id": "services",
    "lv": "Tehnika, uzkopšana un loģistika",
    "ru": "Техника, уборка и логистика",
    "icon": "↗"
  },
  {
    "id": "networks",
    "lv": "Ārējie inženiertīkli",
    "ru": "Наружные инженерные сети",
    "icon": "◎"
  }
];
window.CENA_WORKS=[
  {
    "id": "paint-walls",
    "cat": "walls",
    "lv": "Sienu krāsošana 2 kārtās",
    "ru": "Покраска стен в 2 слоя",
    "unit": "m²",
    "min": 4,
    "max": 8.23,
    "sources": [
      "B",
      "D"
    ],
    "rank": 0
  },
  {
    "id": "putty-walls",
    "cat": "walls",
    "lv": "Sienu špaktelēšana",
    "ru": "Шпаклёвка стен",
    "unit": "m²",
    "min": 6.5,
    "max": 12.64,
    "sources": [
      "B",
      "D"
    ],
    "rank": 1
  },
  {
    "id": "prime-walls",
    "cat": "walls",
    "lv": "Sienu gruntēšana",
    "ru": "Грунтовка стен",
    "unit": "m²",
    "min": 0.5,
    "max": 3.85,
    "sources": [
      "B",
      "S"
    ],
    "rank": 2
  },
  {
    "id": "sand-walls",
    "cat": "walls",
    "lv": "Sienu slīpēšana",
    "ru": "Шлифовка стен",
    "unit": "m²",
    "min": 0.5,
    "max": 3.82,
    "sources": [
      "B",
      "S"
    ],
    "rank": 3
  },
  {
    "id": "plaster-walls",
    "cat": "walls",
    "lv": "Sienu apmetums",
    "ru": "Штукатурка стен",
    "unit": "m²",
    "min": 7.5,
    "max": 10.29,
    "sources": [
      "B",
      "D"
    ],
    "rank": 4
  },
  {
    "id": "paint-ceiling",
    "cat": "walls",
    "lv": "Griestu krāsošana 2 kārtās",
    "ru": "Покраска потолка в 2 слоя",
    "unit": "m²",
    "min": 8.25,
    "max": 8.25,
    "sources": [
      "S"
    ],
    "rank": 5
  },
  {
    "id": "wallpaper",
    "cat": "walls",
    "lv": "Tapešu līmēšana",
    "ru": "Поклейка обоев",
    "unit": "m²",
    "min": 3.5,
    "max": 10.89,
    "sources": [
      "B",
      "S"
    ],
    "rank": 6
  },
  {
    "id": "wall-fiberglass",
    "cat": "walls",
    "lv": "Stiklašķiedras tapešu līmēšana",
    "ru": "Поклейка стеклообоев",
    "unit": "m²",
    "min": 7.5,
    "max": 11.93,
    "sources": [
      "B",
      "D"
    ],
    "rank": 7
  },
  {
    "id": "wall-mesh",
    "cat": "walls",
    "lv": "Sienu armēšana ar sietu",
    "ru": "Армирование стен сеткой",
    "unit": "m²",
    "min": 2,
    "max": 4.62,
    "sources": [
      "B",
      "S"
    ],
    "rank": 8
  },
  {
    "id": "drywall-wall",
    "cat": "walls",
    "lv": "Ģipškartona montāža uz sienas",
    "ru": "Монтаж гипсокартона на стену",
    "unit": "m²",
    "min": 3,
    "max": 10.29,
    "sources": [
      "B",
      "S"
    ],
    "rank": 9
  },
  {
    "id": "drywall-part",
    "cat": "walls",
    "lv": "Ģipškartona starpsienas izbūve",
    "ru": "Перегородка из гипсокартона",
    "unit": "m²",
    "min": 12,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 10
  },
  {
    "id": "drywall-ceiling",
    "cat": "walls",
    "lv": "Ģipškartona griesti ar karkasu",
    "ru": "Потолок из гипсокартона с каркасом",
    "unit": "m²",
    "min": 16.15,
    "max": 16.15,
    "sources": [
      "S"
    ],
    "rank": 11
  },
  {
    "id": "tile-wall",
    "cat": "tiles",
    "lv": "Sienu flīzēšana",
    "ru": "Укладка плитки на стены",
    "unit": "m²",
    "min": 28,
    "max": 50,
    "sources": [
      "D"
    ],
    "rank": 12
  },
  {
    "id": "tile-floor",
    "cat": "tiles",
    "lv": "Grīdu flīzēšana",
    "ru": "Укладка напольной плитки",
    "unit": "m²",
    "min": 28,
    "max": 50,
    "sources": [
      "D"
    ],
    "rank": 13
  },
  {
    "id": "tile-small",
    "cat": "tiles",
    "lv": "Flīzēšana mazā telpā (līdz 5 m²)",
    "ru": "Плиточные работы в малом помещении",
    "unit": "m²",
    "min": 48.5,
    "max": 60.2,
    "sources": [
      "D"
    ],
    "rank": 14
  },
  {
    "id": "tile-grout",
    "cat": "tiles",
    "lv": "Epoksīda fugas ieklāšana",
    "ru": "Эпоксидная затирка швов",
    "unit": "m²",
    "min": 10,
    "max": 10,
    "sources": [
      "D"
    ],
    "rank": 15
  },
  {
    "id": "tile-45",
    "cat": "tiles",
    "lv": "Flīžu malu griešana 45°",
    "ru": "Запил плитки под 45°",
    "unit": "m",
    "min": 25,
    "max": 25,
    "sources": [
      "D"
    ],
    "rank": 16
  },
  {
    "id": "tile-skirting",
    "cat": "tiles",
    "lv": "Grīdlīste no flīzēm",
    "ru": "Плинтус из плитки",
    "unit": "m",
    "min": 12,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 17
  },
  {
    "id": "floor-laminate",
    "cat": "floors",
    "lv": "Lamināta ieklāšana",
    "ru": "Укладка ламината",
    "unit": "m²",
    "min": 7,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 18
  },
  {
    "id": "floor-vinyl",
    "cat": "floors",
    "lv": "Vinila grīdas ieklāšana",
    "ru": "Укладка винилового покрытия",
    "unit": "m²",
    "min": 10,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 19
  },
  {
    "id": "floor-self",
    "cat": "floors",
    "lv": "Pašizlīdzinošā grīda",
    "ru": "Наливной самовыравнивающийся пол",
    "unit": "m²",
    "min": 7,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 20
  },
  {
    "id": "floor-parquet",
    "cat": "floors",
    "lv": "Parketa dēlīšu ieklāšana",
    "ru": "Укладка штучного паркета",
    "unit": "m²",
    "min": 25,
    "max": 40,
    "sources": [
      "D"
    ],
    "rank": 21
  },
  {
    "id": "floor-lino",
    "cat": "floors",
    "lv": "Linoleja ieklāšana",
    "ru": "Укладка линолеума",
    "unit": "m²",
    "min": 7,
    "max": 11.5,
    "sources": [
      "D"
    ],
    "rank": 22
  },
  {
    "id": "floor-skirting",
    "cat": "floors",
    "lv": "Grīdlīstu montāža",
    "ru": "Монтаж напольного плинтуса",
    "unit": "m",
    "min": 5,
    "max": 10,
    "sources": [
      "D"
    ],
    "rank": 23
  },
  {
    "id": "floor-waterproof",
    "cat": "insulation",
    "lv": "Grīdas hidroizolācija",
    "ru": "Гидроизоляция пола",
    "unit": "m²",
    "min": 5.5,
    "max": 8,
    "sources": [
      "D"
    ],
    "rank": 24
  },
  {
    "id": "floor-concrete",
    "cat": "floors",
    "lv": "Betona klons līdz 5 cm ar armēšanu",
    "ru": "Бетонная стяжка до 5 см с армированием",
    "unit": "m²",
    "min": 8,
    "max": 18,
    "sources": [
      "D"
    ],
    "rank": 25
  },
  {
    "id": "floor-osb",
    "cat": "floors",
    "lv": "OSB vai finiera grīdas pamatne",
    "ru": "Основание пола из ОСБ или фанеры",
    "unit": "m²",
    "min": 7.5,
    "max": 17,
    "sources": [
      "D"
    ],
    "rank": 26
  },
  {
    "id": "el-point",
    "cat": "electric",
    "lv": "Jauna elektrības punkta ierīkošana",
    "ru": "Устройство новой электроточки",
    "unit": "gab.",
    "min": 12,
    "max": 23,
    "sources": [
      "D",
      "M"
    ],
    "rank": 27
  },
  {
    "id": "el-switch",
    "cat": "electric",
    "lv": "Rozetes vai slēdža nomaiņa",
    "ru": "Замена розетки или выключателя",
    "unit": "gab.",
    "min": 9.5,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 28
  },
  {
    "id": "el-cable",
    "cat": "electric",
    "lv": "Kabeļa ieguldīšana bez štrobēšanas",
    "ru": "Прокладка кабеля без штробления",
    "unit": "m",
    "min": 1.5,
    "max": 3.5,
    "sources": [
      "D",
      "M"
    ],
    "rank": 29
  },
  {
    "id": "el-chase",
    "cat": "electric",
    "lv": "Štrobēšana un kabeļa ieguldīšana",
    "ru": "Штробление и укладка кабеля",
    "unit": "m",
    "min": 5,
    "max": 10,
    "sources": [
      "D"
    ],
    "rank": 30
  },
  {
    "id": "el-spot",
    "cat": "electric",
    "lv": "Iebūvēta gaismekļa uzstādīšana",
    "ru": "Установка встроенного светильника",
    "unit": "gab.",
    "min": 12,
    "max": 20,
    "sources": [
      "D"
    ],
    "rank": 31
  },
  {
    "id": "el-lamp",
    "cat": "electric",
    "lv": "Lustras pieslēgšana",
    "ru": "Подключение люстры",
    "unit": "gab.",
    "min": 33,
    "max": 47,
    "sources": [
      "D",
      "M"
    ],
    "rank": 32
  },
  {
    "id": "el-led",
    "cat": "electric",
    "lv": "LED lentes montāža",
    "ru": "Монтаж светодиодной ленты",
    "unit": "m",
    "min": 12,
    "max": 25,
    "sources": [
      "D",
      "M"
    ],
    "rank": 33
  },
  {
    "id": "el-panel",
    "cat": "electric",
    "lv": "Sadales skapja uzstādīšana",
    "ru": "Монтаж распределительного щита",
    "unit": "gab.",
    "min": 150,
    "max": 400,
    "sources": [
      "D"
    ],
    "rank": 34
  },
  {
    "id": "pl-faucet",
    "cat": "plumbing",
    "lv": "Jaucējkrāna uzstādīšana",
    "ru": "Установка смесителя",
    "unit": "gab.",
    "min": 32.07,
    "max": 35.27,
    "sources": [
      "S",
      "D"
    ],
    "rank": 35
  },
  {
    "id": "pl-wc",
    "cat": "plumbing",
    "lv": "WC poda ar kasti montāža",
    "ru": "Установка унитаза с бачком",
    "unit": "gab.",
    "min": 110,
    "max": 121,
    "sources": [
      "S",
      "D"
    ],
    "rank": 36
  },
  {
    "id": "pl-bath",
    "cat": "plumbing",
    "lv": "Vannas uzstādīšana",
    "ru": "Установка ванны",
    "unit": "gab.",
    "min": 198,
    "max": 217.8,
    "sources": [
      "S",
      "D"
    ],
    "rank": 37
  },
  {
    "id": "pl-shower",
    "cat": "plumbing",
    "lv": "Duškabīnes uzstādīšana",
    "ru": "Установка душевой кабины",
    "unit": "gab.",
    "min": 275,
    "max": 302.5,
    "sources": [
      "S",
      "D"
    ],
    "rank": 38
  },
  {
    "id": "pl-basin",
    "cat": "plumbing",
    "lv": "Izlietnes montāža",
    "ru": "Монтаж раковины",
    "unit": "gab.",
    "min": 99,
    "max": 108.9,
    "sources": [
      "S",
      "D"
    ],
    "rank": 39
  },
  {
    "id": "pl-water",
    "cat": "plumbing",
    "lv": "Ūdens cauruļu ierīkošana",
    "ru": "Прокладка водопроводных труб",
    "unit": "m",
    "min": 10.41,
    "max": 11.45,
    "sources": [
      "S",
      "D"
    ],
    "rank": 40
  },
  {
    "id": "pl-radiator",
    "cat": "heating",
    "lv": "Radiatora nomaiņa",
    "ru": "Замена радиатора",
    "unit": "gab.",
    "min": 133.1,
    "max": 146.41,
    "sources": [
      "S",
      "D"
    ],
    "rank": 41
  },
  {
    "id": "pl-wall-wc",
    "cat": "plumbing",
    "lv": "Piekaramā WC poda montāža",
    "ru": "Монтаж подвесного унитаза",
    "unit": "gab.",
    "min": 181.5,
    "max": 199.65,
    "sources": [
      "S",
      "D"
    ],
    "rank": 42
  },
  {
    "id": "roof-metal",
    "cat": "roof",
    "lv": "Metāla dakstiņu jumta montāža",
    "ru": "Монтаж металлочерепицы",
    "unit": "m²",
    "min": 6,
    "max": 12.71,
    "sources": [
      "D"
    ],
    "rank": 43
  },
  {
    "id": "roof-bitumen",
    "cat": "roof",
    "lv": "Bitumena dakstiņu montāža",
    "ru": "Монтаж битумной черепицы",
    "unit": "m²",
    "min": 6.5,
    "max": 11.13,
    "sources": [
      "D"
    ],
    "rank": 44
  },
  {
    "id": "roof-tile",
    "cat": "roof",
    "lv": "Māla dakstiņu montāža",
    "ru": "Монтаж керамической черепицы",
    "unit": "m²",
    "min": 8.5,
    "max": 21.78,
    "sources": [
      "D"
    ],
    "rank": 45
  },
  {
    "id": "roof-membrane",
    "cat": "roof",
    "lv": "Difūzijas membrānas ieklāšana",
    "ru": "Укладка диффузионной мембраны",
    "unit": "m²",
    "min": 1.5,
    "max": 4.24,
    "sources": [
      "D"
    ],
    "rank": 46
  },
  {
    "id": "roof-lath",
    "cat": "roof",
    "lv": "Jumta latojuma izbūve",
    "ru": "Монтаж кровельной обрешётки",
    "unit": "m²",
    "min": 4,
    "max": 9.08,
    "sources": [
      "D"
    ],
    "rank": 47
  },
  {
    "id": "roof-gutter",
    "cat": "roof",
    "lv": "Noteksistēmas uzstādīšana",
    "ru": "Монтаж водосточной системы",
    "unit": "m",
    "min": 3.5,
    "max": 10.29,
    "sources": [
      "D"
    ],
    "rank": 48
  },
  {
    "id": "roof-structure",
    "cat": "roof",
    "lv": "Jumta koka konstrukcija",
    "ru": "Деревянная конструкция крыши",
    "unit": "m²",
    "min": 4,
    "max": 26.62,
    "sources": [
      "D"
    ],
    "rank": 49
  },
  {
    "id": "facade-eps",
    "cat": "facade",
    "lv": "Putupolistirola montāža fasādē",
    "ru": "Утепление фасада пенополистиролом",
    "unit": "m²",
    "min": 5,
    "max": 11.86,
    "sources": [
      "D"
    ],
    "rank": 50
  },
  {
    "id": "facade-wool",
    "cat": "facade",
    "lv": "Minerālvates montāža fasādē",
    "ru": "Монтаж минеральной ваты на фасад",
    "unit": "m²",
    "min": 7,
    "max": 13.31,
    "sources": [
      "D"
    ],
    "rank": 51
  },
  {
    "id": "facade-mesh",
    "cat": "facade",
    "lv": "Fasādes armēšana ar sietu",
    "ru": "Армирование фасада сеткой",
    "unit": "m²",
    "min": 2.5,
    "max": 10.29,
    "sources": [
      "D"
    ],
    "rank": 52
  },
  {
    "id": "facade-paint",
    "cat": "facade",
    "lv": "Fasādes krāsošana 2 kārtās",
    "ru": "Покраска фасада в 2 слоя",
    "unit": "m²",
    "min": 6,
    "max": 9.92,
    "sources": [
      "D"
    ],
    "rank": 53
  },
  {
    "id": "facade-siding",
    "cat": "facade",
    "lv": "Saidinga paneļu montāža",
    "ru": "Монтаж сайдинга",
    "unit": "m²",
    "min": 6.5,
    "max": 13.92,
    "sources": [
      "D"
    ],
    "rank": 54
  },
  {
    "id": "facade-plaster",
    "cat": "facade",
    "lv": "Dekoratīvais fasādes apmetums",
    "ru": "Декоративная фасадная штукатурка",
    "unit": "m²",
    "min": 11.5,
    "max": 11.5,
    "sources": [
      "D"
    ],
    "rank": 55
  },
  {
    "id": "building-block",
    "cat": "structure",
    "lv": "Gāzbetona bloku mūrēšana",
    "ru": "Кладка газобетонных блоков",
    "unit": "m³",
    "min": 28,
    "max": 108.9,
    "sources": [
      "D"
    ],
    "rank": 56
  },
  {
    "id": "building-brick",
    "cat": "structure",
    "lv": "Ķieģeļu sienas mūrēšana",
    "ru": "Кладка кирпичной стены",
    "unit": "m³",
    "min": 39,
    "max": 217.8,
    "sources": [
      "D"
    ],
    "rank": 57
  },
  {
    "id": "building-foundation",
    "cat": "foundation",
    "lv": "Pamatu siltināšana ar EPS",
    "ru": "Утепление фундамента пенополистиролом",
    "unit": "m²",
    "min": 5,
    "max": 10.29,
    "sources": [
      "D"
    ],
    "rank": 58
  },
  {
    "id": "building-form",
    "cat": "foundation",
    "lv": "Betona veidņu izbūve",
    "ru": "Установка бетонной опалубки",
    "unit": "m²",
    "min": 10,
    "max": 17.3,
    "sources": [
      "D"
    ],
    "rank": 59
  },
  {
    "id": "building-drain",
    "cat": "networks",
    "lv": "Drenāžas sistēmas ieklāšana",
    "ru": "Укладка дренажной системы",
    "unit": "m",
    "min": 16,
    "max": 38.72,
    "sources": [
      "D"
    ],
    "rank": 60
  },
  {
    "id": "outdoor-paving",
    "cat": "outdoor",
    "lv": "Bruģa ieklāšana",
    "ru": "Укладка брусчатки",
    "unit": "m²",
    "min": 8.5,
    "max": 18.15,
    "sources": [
      "D"
    ],
    "rank": 61
  },
  {
    "id": "outdoor-edging",
    "cat": "outdoor",
    "lv": "Trotuāra apmales uzstādīšana",
    "ru": "Установка бордюра",
    "unit": "m",
    "min": 4,
    "max": 11.5,
    "sources": [
      "D"
    ],
    "rank": 62
  },
  {
    "id": "outdoor-lawn",
    "cat": "outdoor",
    "lv": "Zāliena sēšana",
    "ru": "Посев газона",
    "unit": "m²",
    "min": 1,
    "max": 2.66,
    "sources": [
      "D"
    ],
    "rank": 63
  },
  {
    "id": "outdoor-fence",
    "cat": "outdoor",
    "lv": "Žoga posmu uzstādīšana",
    "ru": "Установка секций забора",
    "unit": "m",
    "min": 22,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 64
  },
  {
    "id": "demo-floor",
    "cat": "other",
    "lv": "Vecā grīdas seguma demontāža",
    "ru": "Демонтаж старого покрытия пола",
    "unit": "m²",
    "min": 3,
    "max": 6.5,
    "sources": [
      "D"
    ],
    "rank": 65
  },
  {
    "id": "demo-tiles",
    "cat": "other",
    "lv": "Veco flīžu noņemšana",
    "ru": "Демонтаж старой плитки",
    "unit": "m²",
    "min": 9.68,
    "max": 9.68,
    "sources": [
      "S"
    ],
    "rank": 66
  },
  {
    "id": "demo-paint",
    "cat": "other",
    "lv": "Vecās apdares noņemšana no sienas",
    "ru": "Снятие старого покрытия со стен",
    "unit": "m²",
    "min": 0.5,
    "max": 4.18,
    "sources": [
      "B",
      "S"
    ],
    "rank": 67
  },
  {
    "id": "demo-roof",
    "cat": "other",
    "lv": "Jumta seguma demontāža",
    "ru": "Демонтаж кровельного покрытия",
    "unit": "m²",
    "min": 1.5,
    "max": 7.87,
    "sources": [
      "D"
    ],
    "rank": 68
  },
  {
    "id": "misc-rubbish",
    "cat": "services",
    "lv": "Būvgružu iznešana",
    "ru": "Вынос строительного мусора",
    "unit": "m³",
    "min": 17.18,
    "max": 17.18,
    "sources": [
      "D"
    ],
    "rank": 69
  },
  {
    "id": "misc-door",
    "cat": "windows",
    "lv": "Iekšdurvju montāža",
    "ru": "Установка межкомнатных дверей",
    "unit": "gab.",
    "min": 121,
    "max": 121,
    "sources": [
      "D"
    ],
    "rank": 70
  },
  {
    "id": "misc-window",
    "cat": "windows",
    "lv": "PVC loga uzstādīšana",
    "ru": "Установка окна ПВХ",
    "unit": "m²",
    "min": 42.35,
    "max": 42.35,
    "sources": [
      "D"
    ],
    "rank": 71
  },
  {
    "id": "earth-prep",
    "cat": "earth",
    "lv": "Būvlaukuma sagatavošana un asu nospraušana",
    "ru": "Подготовка площадки и разбивка осей",
    "unit": "m²",
    "min": 2.9,
    "max": 3.5,
    "sources": [
      "S",
      "T"
    ],
    "rank": 72,
    "kind": "range"
  },
  {
    "id": "earth-exc",
    "cat": "earth",
    "lv": "Rakšana ar ekskavatoru pamatiem",
    "ru": "Работа экскаватора для фундамента",
    "unit": "h",
    "min": 55.66,
    "max": 62,
    "sources": [
      "S",
      "T"
    ],
    "rank": 73,
    "kind": "range"
  },
  {
    "id": "earth-hand",
    "cat": "earth",
    "lv": "Grunts rakšana ar rokām",
    "ru": "Ручная разработка грунта",
    "unit": "m³",
    "min": 50.82,
    "max": 60,
    "sources": [
      "S",
      "T"
    ],
    "rank": 74,
    "kind": "range"
  },
  {
    "id": "earth-base",
    "cat": "earth",
    "lv": "Šķembu slāņa ierīkošana zem pamatiem",
    "ru": "Щебёночная подготовка под фундамент",
    "unit": "m²",
    "min": 4.36,
    "max": 5,
    "sources": [
      "S",
      "T"
    ],
    "rank": 75,
    "kind": "range"
  },
  {
    "id": "earth-level",
    "cat": "earth",
    "lv": "Grunts planēšana ar tehniku",
    "ru": "Планировка грунта техникой",
    "unit": "h",
    "min": 43,
    "max": 60,
    "sources": [
      "M"
    ],
    "rank": 76,
    "kind": "range"
  },
  {
    "id": "earth-compact",
    "cat": "earth",
    "lv": "Smilts un šķembu iestrāde ar blietēšanu",
    "ru": "Укладка и уплотнение песка или щебня",
    "unit": "m³",
    "min": 15.5,
    "max": 22,
    "sources": [
      "M"
    ],
    "rank": 77,
    "kind": "range"
  },
  {
    "id": "earth-geotextile",
    "cat": "earth",
    "lv": "Ģeotekstila klāšana",
    "ru": "Укладка геотекстиля",
    "unit": "m²",
    "min": 3.5,
    "max": 4.9,
    "sources": [
      "M"
    ],
    "rank": 78,
    "kind": "range"
  },
  {
    "id": "foundation-foot",
    "cat": "foundation",
    "lv": "Pamatu pēdas sagatavošana",
    "ru": "Подготовка подошвы фундамента",
    "unit": "m",
    "min": 7.26,
    "max": 9,
    "sources": [
      "S",
      "T"
    ],
    "rank": 79,
    "kind": "range"
  },
  {
    "id": "foundation-strip",
    "cat": "foundation",
    "lv": "Lentveida pamati: veidņi, armatūra, betons",
    "ru": "Ленточный фундамент: опалубка, арматура, бетон",
    "unit": "m³",
    "min": 176,
    "max": 195,
    "sources": [
      "S",
      "T"
    ],
    "rank": 80,
    "kind": "range"
  },
  {
    "id": "foundation-readyform",
    "cat": "foundation",
    "lv": "Sistēmas veidņu salikšana",
    "ru": "Монтаж системной опалубки",
    "unit": "m²",
    "min": 13.2,
    "max": 15,
    "sources": [
      "S",
      "T"
    ],
    "rank": 81,
    "kind": "range"
  },
  {
    "id": "foundation-pour",
    "cat": "foundation",
    "lv": "Betonēšana un armatūra gatavos veidņos",
    "ru": "Армирование и бетонирование в готовой опалубке",
    "unit": "m³",
    "min": 71.5,
    "max": 80,
    "sources": [
      "S",
      "T"
    ],
    "rank": 82,
    "kind": "range"
  },
  {
    "id": "foundation-rebar",
    "cat": "foundation",
    "lv": "Armatūras siešana pārsegumam",
    "ru": "Вязка арматуры перекрытия",
    "unit": "m²",
    "min": 7,
    "max": 9.5,
    "sources": [
      "M"
    ],
    "rank": 83,
    "kind": "range"
  },
  {
    "id": "foundation-block",
    "cat": "foundation",
    "lv": "Pamatu bloku montāža",
    "ru": "Монтаж фундаментных блоков",
    "unit": "gab.",
    "min": 19.8,
    "max": 25,
    "sources": [
      "S",
      "T"
    ],
    "rank": 84,
    "kind": "range"
  },
  {
    "id": "foundation-fibo",
    "cat": "foundation",
    "lv": "Pamatu mūrēšana no keramzītbetona blokiem",
    "ru": "Кладка фундамента из керамзитобетонных блоков",
    "unit": "m³",
    "min": 107.8,
    "max": 120,
    "sources": [
      "S",
      "T"
    ],
    "rank": 85,
    "kind": "range"
  },
  {
    "id": "foundation-fill",
    "cat": "foundation",
    "lv": "Betona aizpildījumi starp pamatu blokiem",
    "ru": "Бетонирование промежутков между блоками",
    "unit": "m³",
    "min": 120.4,
    "max": 135,
    "sources": [
      "S",
      "T"
    ],
    "rank": 86,
    "kind": "range"
  },
  {
    "id": "foundation-column",
    "cat": "foundation",
    "lv": "Betona pamats zem staba",
    "ru": "Бетонное основание под колонну",
    "unit": "gab.",
    "min": 71.5,
    "max": 80,
    "sources": [
      "S",
      "T"
    ],
    "rank": 87,
    "kind": "range"
  },
  {
    "id": "foundation-stair",
    "cat": "foundation",
    "lv": "Betona pakāpiena izbūve līdz 2,5 m",
    "ru": "Бетонирование ступени до 2,5 м",
    "unit": "gab.",
    "min": 181.5,
    "max": 200,
    "sources": [
      "S",
      "T"
    ],
    "rank": 88,
    "kind": "range"
  },
  {
    "id": "foundation-slab",
    "cat": "foundation",
    "lv": "Monolīta pārseguma betonēšana ar armēšanu",
    "ru": "Монолитное перекрытие с армированием",
    "unit": "m²",
    "min": 30.25,
    "max": 34,
    "sources": [
      "S",
      "T"
    ],
    "rank": 89,
    "kind": "range"
  },
  {
    "id": "foundation-band",
    "cat": "foundation",
    "lv": "Monolīta izlīdzinošā josla",
    "ru": "Устройство выравнивающего бетонного пояса",
    "unit": "m",
    "min": 19.8,
    "max": 22,
    "sources": [
      "S",
      "T"
    ],
    "rank": 90,
    "kind": "range"
  },
  {
    "id": "foundation-panel",
    "cat": "foundation",
    "lv": "Dzelzsbetona pārseguma plātnes montāža",
    "ru": "Монтаж железобетонной плиты перекрытия",
    "unit": "gab.",
    "min": 49.5,
    "max": 55,
    "sources": [
      "S",
      "T"
    ],
    "rank": 91,
    "kind": "range"
  },
  {
    "id": "structure-frame",
    "cat": "structure",
    "lv": "Koka karkasa sienu montāža objektā",
    "ru": "Монтаж деревянного каркаса стен на объекте",
    "unit": "m²",
    "min": 25,
    "max": 45,
    "sources": [
      "P"
    ],
    "rank": 92,
    "kind": "range"
  },
  {
    "id": "structure-brick-m2",
    "cat": "structure",
    "lv": "Ķieģeļu mūris pēc sienas platības",
    "ru": "Кладка кирпича по площади стены",
    "unit": "m²",
    "min": 38,
    "max": 54,
    "sources": [
      "M"
    ],
    "rank": 93,
    "kind": "range"
  },
  {
    "id": "structure-fibo",
    "cat": "structure",
    "lv": "Keramzītbetona sienas bloku mūrēšana",
    "ru": "Кладка стен из керамзитобетонных блоков",
    "unit": "m³",
    "min": 98,
    "max": 140,
    "sources": [
      "M"
    ],
    "rank": 94,
    "kind": "range"
  },
  {
    "id": "structure-part-brick",
    "cat": "structure",
    "lv": "Ķieģeļu starpsienu mūrēšana",
    "ru": "Кладка кирпичных перегородок",
    "unit": "m²",
    "min": 35,
    "max": 49,
    "sources": [
      "M"
    ],
    "rank": 95,
    "kind": "range"
  },
  {
    "id": "structure-lintel",
    "cat": "structure",
    "lv": "Ailu pārsedzes montāža",
    "ru": "Монтаж перемычки проёма",
    "unit": "gab.",
    "min": 25,
    "max": 35,
    "sources": [
      "M"
    ],
    "rank": 96,
    "kind": "range"
  },
  {
    "id": "structure-chimney",
    "cat": "structure",
    "lv": "Dūmvada mūrēšana",
    "ru": "Кладка дымохода",
    "unit": "m",
    "min": 89,
    "max": 125,
    "sources": [
      "M"
    ],
    "rank": 97,
    "kind": "range"
  },
  {
    "id": "structure-scaffold",
    "cat": "structure",
    "lv": "Sastatņu montāža un noņemšana",
    "ru": "Монтаж и демонтаж лесов",
    "unit": "m²",
    "min": 4.7,
    "max": 6.5,
    "sources": [
      "M"
    ],
    "rank": 98,
    "kind": "range"
  },
  {
    "id": "ins-found-h",
    "cat": "insulation",
    "lv": "Pamatu horizontālā hidroizolācija",
    "ru": "Горизонтальная гидроизоляция фундамента",
    "unit": "m²",
    "min": 6.82,
    "max": 7.5,
    "sources": [
      "S",
      "T"
    ],
    "rank": 99,
    "kind": "range"
  },
  {
    "id": "ins-found-v",
    "cat": "insulation",
    "lv": "Pamatu vertikālā un horizontālā hidroizolācija",
    "ru": "Вертикальная и горизонтальная гидроизоляция фундамента",
    "unit": "m²",
    "min": 6.38,
    "max": 7,
    "sources": [
      "S",
      "T"
    ],
    "rank": 100,
    "kind": "range"
  },
  {
    "id": "ins-xps",
    "cat": "insulation",
    "lv": "Pamatu un cokola siltināšana ar XPS",
    "ru": "Утепление фундамента и цоколя XPS",
    "unit": "m²",
    "min": 8.5,
    "max": 12,
    "sources": [
      "M"
    ],
    "rank": 101,
    "kind": "range"
  },
  {
    "id": "ins-wall-wool",
    "cat": "insulation",
    "lv": "Karkasa sienas siltināšana ar minerālvati",
    "ru": "Утепление каркасной стены минватой",
    "unit": "m²",
    "min": 9.5,
    "max": 13,
    "sources": [
      "M"
    ],
    "rank": 102,
    "kind": "range"
  },
  {
    "id": "ins-vapor",
    "cat": "insulation",
    "lv": "Tvaika barjeras plēves montāža",
    "ru": "Монтаж пароизоляционной плёнки",
    "unit": "m²",
    "min": 2.5,
    "max": 3.5,
    "sources": [
      "M"
    ],
    "rank": 103,
    "kind": "range"
  },
  {
    "id": "ins-inside",
    "cat": "insulation",
    "lv": "Ārsienu siltināšana no telpas iekšpuses",
    "ru": "Утепление наружных стен изнутри",
    "unit": "m²",
    "min": 40,
    "max": 40,
    "sources": [
      "D"
    ],
    "rank": 104,
    "kind": "from"
  },
  {
    "id": "ins-attic",
    "cat": "insulation",
    "lv": "Bēniņu vai jumta siltināšana",
    "ru": "Утепление чердака или крыши",
    "unit": "m²",
    "min": 9,
    "max": 12.5,
    "sources": [
      "M"
    ],
    "rank": 105,
    "kind": "range"
  },
  {
    "id": "facade-etics-eps",
    "cat": "facade",
    "lv": "Pilna EPS fasādes siltināšanas sistēma",
    "ru": "Полная система утепления фасада пенополистиролом",
    "unit": "m²",
    "min": 31,
    "max": 44,
    "sources": [
      "M"
    ],
    "rank": 106,
    "kind": "range"
  },
  {
    "id": "facade-etics-wool",
    "cat": "facade",
    "lv": "Pilna akmens vates fasādes sistēma",
    "ru": "Полная система утепления фасада каменной ватой",
    "unit": "m²",
    "min": 34,
    "max": 48,
    "sources": [
      "M"
    ],
    "rank": 107,
    "kind": "range"
  },
  {
    "id": "roof-wallplate",
    "cat": "roof",
    "lv": "Mūrlatas montāža",
    "ru": "Монтаж мауэрлата",
    "unit": "m",
    "min": 14,
    "max": 20,
    "sources": [
      "M"
    ],
    "rank": 108,
    "kind": "range"
  },
  {
    "id": "roof-osb",
    "cat": "roof",
    "lv": "OSB klāja montāža uz jumta",
    "ru": "Монтаж сплошного настила ОСБ на крыше",
    "unit": "m²",
    "min": 8.5,
    "max": 12,
    "sources": [
      "M"
    ],
    "rank": 109,
    "kind": "range"
  },
  {
    "id": "roof-standing",
    "cat": "roof",
    "lv": "Valcprofila ieklāšana",
    "ru": "Монтаж фальцевой кровли",
    "unit": "m²",
    "min": 14,
    "max": 20,
    "sources": [
      "M"
    ],
    "rank": 110,
    "kind": "range"
  },
  {
    "id": "roof-felt",
    "cat": "roof",
    "lv": "Kausējama ruļļu seguma ieklāšana divās kārtās",
    "ru": "Наплавляемая кровля в два слоя",
    "unit": "m²",
    "min": 12,
    "max": 17,
    "sources": [
      "M"
    ],
    "rank": 111,
    "kind": "range"
  },
  {
    "id": "roof-skylight",
    "cat": "roof",
    "lv": "Jumta loga uzstādīšana",
    "ru": "Монтаж мансардного окна",
    "unit": "gab.",
    "min": 165,
    "max": 235,
    "sources": [
      "M"
    ],
    "rank": 112,
    "kind": "range"
  },
  {
    "id": "roof-ridge",
    "cat": "roof",
    "lv": "Jumta kores montāža",
    "ru": "Монтаж конька крыши",
    "unit": "m",
    "min": 7,
    "max": 10,
    "sources": [
      "M"
    ],
    "rank": 113,
    "kind": "range"
  },
  {
    "id": "roof-snow",
    "cat": "roof",
    "lv": "Sniega aizturu montāža",
    "ru": "Монтаж снегозадержателей",
    "unit": "m",
    "min": 18.5,
    "max": 26,
    "sources": [
      "M"
    ],
    "rank": 114,
    "kind": "range"
  },
  {
    "id": "wall-ceil-prime",
    "cat": "walls",
    "lv": "Griestu gruntēšana",
    "ru": "Грунтовка потолка",
    "unit": "m²",
    "min": 2,
    "max": 4.5,
    "sources": [
      "D"
    ],
    "rank": 115,
    "kind": "range"
  },
  {
    "id": "wall-ceil-plaster",
    "cat": "walls",
    "lv": "Griestu apmešana",
    "ru": "Штукатурка потолка",
    "unit": "m²",
    "min": 18,
    "max": 20,
    "sources": [
      "D"
    ],
    "rank": 116,
    "kind": "range"
  },
  {
    "id": "wall-ceil-putty",
    "cat": "walls",
    "lv": "Griestu špaktelēšana",
    "ru": "Шпаклёвка потолка",
    "unit": "m²",
    "min": 10,
    "max": 14,
    "sources": [
      "D"
    ],
    "rank": 117,
    "kind": "range"
  },
  {
    "id": "wall-ceil-armstrong",
    "cat": "walls",
    "lv": "Armstrong tipa piekaramo griestu montāža",
    "ru": "Монтаж потолка Армстронг",
    "unit": "m²",
    "min": 12,
    "max": 23,
    "sources": [
      "D"
    ],
    "rank": 118,
    "kind": "range"
  },
  {
    "id": "wall-ceil-stretch",
    "cat": "walls",
    "lv": "Iestiepto griestu uzstādīšana (darbs)",
    "ru": "Монтаж натяжного потолка (работа)",
    "unit": "m²",
    "min": 24,
    "max": 27,
    "sources": [
      "D"
    ],
    "rank": 119,
    "kind": "range"
  },
  {
    "id": "wall-ceil-multi",
    "cat": "walls",
    "lv": "Daudzlīmeņu ģipškartona griesti",
    "ru": "Многоуровневый гипсокартонный потолок",
    "unit": "m²",
    "min": 25,
    "max": 40,
    "sources": [
      "D"
    ],
    "rank": 120,
    "kind": "range"
  },
  {
    "id": "wall-ceil-molding",
    "cat": "walls",
    "lv": "Griestu līstu uzstādīšana",
    "ru": "Монтаж потолочного плинтуса",
    "unit": "m",
    "min": 6,
    "max": 6.5,
    "sources": [
      "D"
    ],
    "rank": 121,
    "kind": "range"
  },
  {
    "id": "wall-ceil-full",
    "cat": "walls",
    "lv": "Griestu pilna sagatavošana un krāsošana",
    "ru": "Полная подготовка и покраска потолка",
    "unit": "m²",
    "min": 14,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 122,
    "kind": "range"
  },
  {
    "id": "wall-q4",
    "cat": "walls",
    "lv": "Sienu špaktelēšana Q4 apdarei",
    "ru": "Шпаклёвка стен под качество Q4",
    "unit": "m²",
    "min": 16,
    "max": 18,
    "sources": [
      "D"
    ],
    "rank": 123,
    "kind": "range"
  },
  {
    "id": "wall-full",
    "cat": "walls",
    "lv": "Sienu pilna sagatavošana un krāsošana",
    "ru": "Полный цикл подготовки и покраски стен",
    "unit": "m²",
    "min": 17,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 124,
    "kind": "range"
  },
  {
    "id": "wall-decor",
    "cat": "walls",
    "lv": "Dekoratīvā krāsošana",
    "ru": "Декоративная покраска стен",
    "unit": "m²",
    "min": 16,
    "max": 18,
    "sources": [
      "D"
    ],
    "rank": 125,
    "kind": "range"
  },
  {
    "id": "wall-liquid",
    "cat": "walls",
    "lv": "Šķidro tapešu uzklāšana",
    "ru": "Нанесение жидких обоев",
    "unit": "m²",
    "min": 10,
    "max": 11,
    "sources": [
      "D"
    ],
    "rank": 126,
    "kind": "range"
  },
  {
    "id": "wall-photo",
    "cat": "walls",
    "lv": "Fototapešu uzlīmēšana",
    "ru": "Поклейка фотообоев",
    "unit": "m²",
    "min": 15,
    "max": 19,
    "sources": [
      "D"
    ],
    "rank": 127,
    "kind": "range"
  },
  {
    "id": "wall-corner",
    "cat": "walls",
    "lv": "Stūru profilu montāža",
    "ru": "Монтаж угловых профилей",
    "unit": "gab.",
    "min": 6,
    "max": 10,
    "sources": [
      "D"
    ],
    "rank": 128,
    "kind": "range"
  },
  {
    "id": "wall-board",
    "cat": "walls",
    "lv": "Sienu apšūšana ar spundētiem dēļiem",
    "ru": "Обшивка стен вагонкой",
    "unit": "m²",
    "min": 15,
    "max": 16,
    "sources": [
      "D"
    ],
    "rank": 129,
    "kind": "range"
  },
  {
    "id": "floor-underlay",
    "cat": "floors",
    "lv": "Lamināta apakšklāja ieklāšana",
    "ru": "Укладка подложки под ламинат",
    "unit": "m²",
    "min": 1.5,
    "max": 1.5,
    "sources": [
      "D"
    ],
    "rank": 130,
    "kind": "range"
  },
  {
    "id": "floor-3layer",
    "cat": "floors",
    "lv": "Trīsslāņu parketa ieklāšana",
    "ru": "Укладка трёхслойной паркетной доски",
    "unit": "m²",
    "min": 20,
    "max": 22,
    "sources": [
      "D"
    ],
    "rank": 131,
    "kind": "range"
  },
  {
    "id": "floor-parquet-sand",
    "cat": "floors",
    "lv": "Parketa slīpēšana un lakošana",
    "ru": "Шлифовка и лакировка паркета",
    "unit": "m²",
    "min": 23,
    "max": 50,
    "sources": [
      "D"
    ],
    "rank": 132,
    "kind": "range"
  },
  {
    "id": "floor-threshold",
    "cat": "floors",
    "lv": "Grīdas sliekšņu montāža",
    "ru": "Монтаж напольных порогов",
    "unit": "m",
    "min": 13,
    "max": 15,
    "sources": [
      "D"
    ],
    "rank": 133,
    "kind": "range"
  },
  {
    "id": "el-network",
    "cat": "electric",
    "lv": "Interneta un TV kabeļa ierīkošana",
    "ru": "Прокладка кабеля интернета и ТВ",
    "unit": "m",
    "min": 2.5,
    "max": 3.5,
    "sources": [
      "M"
    ],
    "rank": 134,
    "kind": "range"
  },
  {
    "id": "el-lowvolt",
    "cat": "electric",
    "lv": "Vājstrāvas punkta izbūve",
    "ru": "Устройство слаботочной точки",
    "unit": "gab.",
    "min": 30,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 135,
    "kind": "from"
  },
  {
    "id": "el-towel",
    "cat": "electric",
    "lv": "Elektriskā dvieļu žāvētāja montāža",
    "ru": "Монтаж электрического полотенцесушителя",
    "unit": "gab.",
    "min": 48,
    "max": 67,
    "sources": [
      "M"
    ],
    "rank": 136,
    "kind": "range"
  },
  {
    "id": "el-floorheat",
    "cat": "electric",
    "lv": "Elektriskās grīdas apsildes ieklāšana",
    "ru": "Монтаж электрического тёплого пола",
    "unit": "m²",
    "min": 8,
    "max": 11.5,
    "sources": [
      "M"
    ],
    "rank": 137,
    "kind": "range"
  },
  {
    "id": "el-groundcable",
    "cat": "electric",
    "lv": "Kabeļa ieguldīšana zemē līdz 0,9 m",
    "ru": "Прокладка кабеля в земле до 0,9 м",
    "unit": "m",
    "min": 9.5,
    "max": 13,
    "sources": [
      "M"
    ],
    "rank": 138,
    "kind": "range"
  },
  {
    "id": "el-full",
    "cat": "electric",
    "lv": "Pilna dzīvokļa elektroinstalācijas nomaiņa",
    "ru": "Полная замена электропроводки квартиры",
    "unit": "m²",
    "min": 20,
    "max": 42,
    "sources": [
      "D"
    ],
    "rank": 139,
    "kind": "range"
  },
  {
    "id": "pl-riser",
    "cat": "plumbing",
    "lv": "Kanalizācijas stāvvada montāža",
    "ru": "Монтаж канализационного стояка",
    "unit": "m",
    "min": 25,
    "max": 35,
    "sources": [
      "M"
    ],
    "rank": 140,
    "kind": "range"
  },
  {
    "id": "pl-horizontal",
    "cat": "plumbing",
    "lv": "Horizontālu kanalizācijas cauruļu montāža",
    "ru": "Монтаж горизонтальных канализационных труб",
    "unit": "m",
    "min": 7.5,
    "max": 11,
    "sources": [
      "M"
    ],
    "rank": 141,
    "kind": "range"
  },
  {
    "id": "pl-riser-replace",
    "cat": "plumbing",
    "lv": "Stāvvada posma nomaiņa dzīvoklī",
    "ru": "Замена участка стояка в квартире",
    "unit": "gab.",
    "min": 100,
    "max": 100,
    "sources": [
      "D"
    ],
    "rank": 142,
    "kind": "from"
  },
  {
    "id": "pl-pipes-from-riser",
    "cat": "plumbing",
    "lv": "Ūdens un kanalizācijas pievadu nomaiņa no stāvvada",
    "ru": "Замена подводок воды и канализации от стояков",
    "unit": "objekts",
    "min": 500,
    "max": 500,
    "sources": [
      "D"
    ],
    "rank": 143,
    "kind": "from"
  },
  {
    "id": "pl-drain",
    "cat": "plumbing",
    "lv": "Dušas trapa iebūve",
    "ru": "Монтаж душевого трапа",
    "unit": "gab.",
    "min": 130,
    "max": 185,
    "sources": [
      "M"
    ],
    "rank": 144,
    "kind": "range"
  },
  {
    "id": "pl-boiler",
    "cat": "plumbing",
    "lv": "Elektriskā boilera pieslēgšana",
    "ru": "Установка электрического бойлера",
    "unit": "gab.",
    "min": 130,
    "max": 185,
    "sources": [
      "M"
    ],
    "rank": 145,
    "kind": "range"
  },
  {
    "id": "pl-washer",
    "cat": "plumbing",
    "lv": "Veļasmašīnas pieslēgšana",
    "ru": "Подключение стиральной машины",
    "unit": "gab.",
    "min": 60,
    "max": 66,
    "sources": [
      "D"
    ],
    "rank": 146,
    "kind": "range"
  },
  {
    "id": "pl-dishwasher",
    "cat": "plumbing",
    "lv": "Trauku mazgājamās mašīnas pieslēgšana",
    "ru": "Подключение посудомоечной машины",
    "unit": "gab.",
    "min": 50,
    "max": 77,
    "sources": [
      "D"
    ],
    "rank": 147,
    "kind": "range"
  },
  {
    "id": "pl-meter",
    "cat": "plumbing",
    "lv": "Ūdens skaitītāja uzstādīšana",
    "ru": "Установка водосчётчика",
    "unit": "gab.",
    "min": 100,
    "max": 100,
    "sources": [
      "D"
    ],
    "rank": 148,
    "kind": "from"
  },
  {
    "id": "pl-filter",
    "cat": "plumbing",
    "lv": "Ūdens filtra montāža",
    "ru": "Монтаж фильтра воды",
    "unit": "gab.",
    "min": 35,
    "max": 60,
    "sources": [
      "U"
    ],
    "rank": 149,
    "kind": "range"
  },
  {
    "id": "pl-frame",
    "cat": "plumbing",
    "lv": "WC instalācijas rāmja un poda montāža",
    "ru": "Монтаж рамы инсталляции с унитазом",
    "unit": "gab.",
    "min": 80,
    "max": 150,
    "sources": [
      "U"
    ],
    "rank": 150,
    "kind": "range"
  },
  {
    "id": "pl-bath-full",
    "cat": "plumbing",
    "lv": "Pilna vannasistabas santehnikas nomaiņa",
    "ru": "Комплексная замена сантехники ванной",
    "unit": "objekts",
    "min": 350,
    "max": 850,
    "sources": [
      "D"
    ],
    "rank": 151,
    "kind": "range"
  },
  {
    "id": "heat-waterfloor",
    "cat": "heating",
    "lv": "Ūdens apsildāmās grīdas cauruļu klāšana",
    "ru": "Монтаж труб водяного тёплого пола",
    "unit": "m²",
    "min": 16,
    "max": 23,
    "sources": [
      "M"
    ],
    "rank": 152,
    "kind": "range"
  },
  {
    "id": "heat-towel",
    "cat": "heating",
    "lv": "Ūdens dvieļu žāvētāja nomaiņa",
    "ru": "Замена водяного полотенцесушителя",
    "unit": "gab.",
    "min": 150,
    "max": 210,
    "sources": [
      "M"
    ],
    "rank": 153,
    "kind": "range"
  },
  {
    "id": "heat-gas",
    "cat": "heating",
    "lv": "Sienas gāzes katla montāža un pieslēgšana",
    "ru": "Монтаж и подключение настенного газового котла",
    "unit": "gab.",
    "min": 540,
    "max": 760,
    "sources": [
      "M"
    ],
    "rank": 154,
    "kind": "range"
  },
  {
    "id": "heat-pipe",
    "cat": "heating",
    "lv": "Apkures cauruļu montāža",
    "ru": "Монтаж труб отопления",
    "unit": "m",
    "min": 7.5,
    "max": 11,
    "sources": [
      "M"
    ],
    "rank": 155,
    "kind": "range"
  },
  {
    "id": "vent-hood",
    "cat": "ventilation",
    "lv": "Virtuves nosūcēja montāža",
    "ru": "Установка кухонной вытяжки",
    "unit": "gab.",
    "min": 61,
    "max": 100,
    "sources": [
      "D"
    ],
    "rank": 156,
    "kind": "range"
  },
  {
    "id": "vent-fan",
    "cat": "ventilation",
    "lv": "Vannasistabas ventilators ar pretvārstu",
    "ru": "Монтаж вентилятора с обратным клапаном",
    "unit": "gab.",
    "min": 30,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 157,
    "kind": "from"
  },
  {
    "id": "vent-wall-rec",
    "cat": "ventilation",
    "lv": "Sienas rekuperatora montāža",
    "ru": "Установка настенного рекуператора",
    "unit": "gab.",
    "min": 300,
    "max": 300,
    "sources": [
      "D"
    ],
    "rank": 158,
    "kind": "from"
  },
  {
    "id": "vent-ac",
    "cat": "ventilation",
    "lv": "Monosplit kondicioniera standarta montāža",
    "ru": "Стандартный монтаж кондиционера с одним блоком",
    "unit": "gab.",
    "min": 300,
    "max": 450,
    "sources": [
      "F"
    ],
    "rank": 159,
    "kind": "package"
  },
  {
    "id": "vent-ac-multi",
    "cat": "ventilation",
    "lv": "Multisplit kondicionēšanas sistēmas montāža",
    "ru": "Монтаж мультисплит-системы",
    "unit": "kompl.",
    "min": 500,
    "max": 800,
    "sources": [
      "F"
    ],
    "rank": 160,
    "kind": "package"
  },
  {
    "id": "window-sill",
    "cat": "windows",
    "lv": "Palodzes uzstādīšana",
    "ru": "Монтаж подоконника",
    "unit": "m",
    "min": 10.5,
    "max": 15,
    "sources": [
      "M"
    ],
    "rank": 161,
    "kind": "range"
  },
  {
    "id": "window-reveal",
    "cat": "windows",
    "lv": "Loga iekšējo aiļu apdare",
    "ru": "Внутренняя отделка оконных откосов",
    "unit": "m",
    "min": 13.5,
    "max": 19,
    "sources": [
      "M"
    ],
    "rank": 162,
    "kind": "range"
  },
  {
    "id": "door-trim",
    "cat": "windows",
    "lv": "Durvju apmaļu montāža",
    "ru": "Установка дверных наличников",
    "unit": "m",
    "min": 5.5,
    "max": 8,
    "sources": [
      "M"
    ],
    "rank": 163,
    "kind": "range"
  },
  {
    "id": "door-metal",
    "cat": "windows",
    "lv": "Metāla ārdurvju uzstādīšana",
    "ru": "Монтаж металлической входной двери",
    "unit": "gab.",
    "min": 150,
    "max": 150,
    "sources": [
      "D"
    ],
    "rank": 164,
    "kind": "from"
  },
  {
    "id": "window-glass",
    "cat": "windows",
    "lv": "Stikla paketes nomaiņa",
    "ru": "Замена стеклопакета",
    "unit": "gab.",
    "min": 80,
    "max": 80,
    "sources": [
      "D"
    ],
    "rank": 165,
    "kind": "from"
  },
  {
    "id": "window-restore",
    "cat": "windows",
    "lv": "Loga vai durvju restaurācija",
    "ru": "Реставрация окна или двери",
    "unit": "kompl.",
    "min": 285,
    "max": 315,
    "sources": [
      "D"
    ],
    "rank": 166,
    "kind": "range"
  },
  {
    "id": "out-pave-full",
    "cat": "outdoor",
    "lv": "Bruģa ieklāšana ar pamatnes izbūvi",
    "ru": "Мощение брусчаткой с устройством основания",
    "unit": "m²",
    "min": 27,
    "max": 38,
    "sources": [
      "M"
    ],
    "rank": 167,
    "kind": "range"
  },
  {
    "id": "out-pave-step",
    "cat": "outdoor",
    "lv": "Bruģētu pakāpienu izbūve",
    "ru": "Устройство ступеней из брусчатки",
    "unit": "m",
    "min": 29,
    "max": 41,
    "sources": [
      "M"
    ],
    "rank": 168,
    "kind": "range"
  },
  {
    "id": "out-pave-remove",
    "cat": "outdoor",
    "lv": "Vecā bruģa demontāža",
    "ru": "Демонтаж брусчатки",
    "unit": "m²",
    "min": 5.5,
    "max": 8,
    "sources": [
      "M"
    ],
    "rank": 169,
    "kind": "range"
  },
  {
    "id": "out-paving-base",
    "cat": "outdoor",
    "lv": "Bruģa šķembu pamatne ar blietēšanu",
    "ru": "Щебёночное основание под брусчатку",
    "unit": "m²",
    "min": 6.5,
    "max": 9,
    "sources": [
      "M"
    ],
    "rank": 170,
    "kind": "range"
  },
  {
    "id": "out-slab",
    "cat": "outdoor",
    "lv": "Trotuāra plākšņu ieklāšana",
    "ru": "Укладка тротуарных плит",
    "unit": "m²",
    "min": 10,
    "max": 14.5,
    "sources": [
      "M"
    ],
    "rank": 171,
    "kind": "range"
  },
  {
    "id": "demo-drywall",
    "cat": "other",
    "lv": "Ģipškartona starpsienu demontāža",
    "ru": "Демонтаж гипсокартонных перегородок",
    "unit": "m²",
    "min": 4,
    "max": 12,
    "sources": [
      "D"
    ],
    "rank": 172,
    "kind": "range"
  },
  {
    "id": "demo-brick",
    "cat": "other",
    "lv": "Ķieģeļu starpsienu demontāža",
    "ru": "Демонтаж кирпичных перегородок",
    "unit": "m²",
    "min": 15,
    "max": 50,
    "sources": [
      "D"
    ],
    "rank": 173,
    "kind": "range"
  },
  {
    "id": "demo-screed",
    "cat": "other",
    "lv": "Cementa klona 5–7 cm demontāža",
    "ru": "Демонтаж цементной стяжки 5–7 см",
    "unit": "m²",
    "min": 20,
    "max": 20,
    "sources": [
      "D"
    ],
    "rank": 174,
    "kind": "from"
  },
  {
    "id": "demo-door",
    "cat": "other",
    "lv": "Veco durvju demontāža",
    "ru": "Демонтаж старых дверей",
    "unit": "gab.",
    "min": 14,
    "max": 30,
    "sources": [
      "D"
    ],
    "rank": 175,
    "kind": "range"
  },
  {
    "id": "demo-plumbing",
    "cat": "other",
    "lv": "Sanitārtehnikas demontāža",
    "ru": "Демонтаж сантехнического оборудования",
    "unit": "gab.",
    "min": 22,
    "max": 24,
    "sources": [
      "D"
    ],
    "rank": 176,
    "kind": "range"
  },
  {
    "id": "demo-shower",
    "cat": "other",
    "lv": "Dušas kabīnes demontāža",
    "ru": "Демонтаж душевой кабины",
    "unit": "kompl.",
    "min": 16.5,
    "max": 16.5,
    "sources": [
      "S"
    ],
    "rank": 177,
    "kind": "range"
  },
  {
    "id": "demo-concrete",
    "cat": "other",
    "lv": "Betona griešana",
    "ru": "Резка бетонных конструкций",
    "unit": "m",
    "min": 19.97,
    "max": 20,
    "sources": [
      "S",
      "T"
    ],
    "rank": 178,
    "kind": "range"
  },
  {
    "id": "demo-open",
    "cat": "other",
    "lv": "Tehniskās atveres betonā",
    "ru": "Устройство технологического отверстия в бетоне",
    "unit": "gab.",
    "min": 88,
    "max": 100,
    "sources": [
      "S",
      "T"
    ],
    "rank": 179,
    "kind": "range"
  },
  {
    "id": "services-waste",
    "cat": "services",
    "lv": "Būvgružu izvešana",
    "ru": "Вывоз строительного мусора",
    "unit": "reiss",
    "min": 150,
    "max": 150,
    "sources": [
      "D"
    ],
    "rank": 180,
    "kind": "from"
  },
  {
    "id": "services-delivery",
    "cat": "services",
    "lv": "Materiālu piegāde un uznešana",
    "ru": "Доставка и подъём стройматериалов",
    "unit": "reiss",
    "min": 150,
    "max": 150,
    "sources": [
      "D"
    ],
    "rank": 181,
    "kind": "from"
  },
  {
    "id": "services-clean",
    "cat": "services",
    "lv": "Uzkopšana pēc būvdarbiem",
    "ru": "Уборка после ремонта",
    "unit": "m²",
    "min": 10,
    "max": 10,
    "sources": [
      "D"
    ],
    "rank": 182,
    "kind": "from"
  },
  {
    "id": "services-helper",
    "cat": "services",
    "lv": "Palīgstrādnieka darbs",
    "ru": "Работа подсобного рабочего",
    "unit": "h",
    "min": 10,
    "max": 15,
    "sources": [
      "P"
    ],
    "rank": 183,
    "kind": "range"
  },
  {
    "id": "services-skilled",
    "cat": "services",
    "lv": "Kvalificēta meistara darbs",
    "ru": "Работа квалифицированного мастера",
    "unit": "h",
    "min": 18,
    "max": 35,
    "sources": [
      "P"
    ],
    "rank": 184,
    "kind": "range"
  },
  {
    "id": "design-electric",
    "cat": "design",
    "lv": "Elektroinstalācijas projekts",
    "ru": "Проект электропроводки",
    "unit": "projekts",
    "min": 150,
    "max": 350,
    "sources": [
      "D"
    ],
    "rank": 185,
    "kind": "range"
  },
  {
    "id": "design-measure-el",
    "cat": "design",
    "lv": "Elektroinstalācijas mērījumi un akts",
    "ru": "Электроизмерения с оформлением акта",
    "unit": "objekts",
    "min": 300,
    "max": 300,
    "sources": [
      "D"
    ],
    "rank": 186,
    "kind": "from"
  },
  {
    "id": "network-drain",
    "cat": "networks",
    "lv": "Drenāžas sistēmas izbūve (paplašināts darbu apjoms)",
    "ru": "Устройство дренажной системы (расширенный объём)",
    "unit": "m",
    "min": 32,
    "max": 46,
    "sources": [
      "M"
    ],
    "rank": 187,
    "kind": "range"
  },
  {
    "id": "earth-haul",
    "cat": "earth",
    "lv": "Grunts izvešana no būvlaukuma",
    "ru": "Вывоз грунта",
    "unit": "m³",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 188,
    "kind": "quote"
  },
  {
    "id": "earth-dewater",
    "cat": "earth",
    "lv": "Būvbedres atsūknēšana",
    "ru": "Водоотлив из котлована",
    "unit": "h",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 189,
    "kind": "quote"
  },
  {
    "id": "foundation-pile",
    "cat": "foundation",
    "lv": "Pāļu pamatu izbūve",
    "ru": "Устройство свайного фундамента",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 190,
    "kind": "quote"
  },
  {
    "id": "foundation-slab-base",
    "cat": "foundation",
    "lv": "Pamatu plātnes izbūve pilnā ciklā",
    "ru": "Устройство фундаментной плиты под ключ",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 191,
    "kind": "quote"
  },
  {
    "id": "structure-steel",
    "cat": "structure",
    "lv": "Tērauda nesošo konstrukciju montāža",
    "ru": "Монтаж несущих металлоконструкций",
    "unit": "t",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 192,
    "kind": "quote"
  },
  {
    "id": "structure-weld",
    "cat": "structure",
    "lv": "Metāla konstrukciju metināšana",
    "ru": "Сварка металлоконструкций",
    "unit": "h",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 193,
    "kind": "quote"
  },
  {
    "id": "structure-stairs",
    "cat": "structure",
    "lv": "Koka kāpņu montāža",
    "ru": "Монтаж деревянной лестницы",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 194,
    "kind": "quote"
  },
  {
    "id": "roof-flashing",
    "cat": "roof",
    "lv": "Skārda pieslēgumu izgatavošana un montāža",
    "ru": "Изготовление и монтаж кровельных примыканий",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 195,
    "kind": "quote"
  },
  {
    "id": "roof-flat",
    "cat": "roof",
    "lv": "Plakanā jumta PVC membrānas montāža",
    "ru": "Монтаж ПВХ-мембраны плоской кровли",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 196,
    "kind": "quote"
  },
  {
    "id": "facade-vent",
    "cat": "facade",
    "lv": "Ventilējamās fasādes apakškonstrukcija un apdare",
    "ru": "Монтаж вентилируемого фасада",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 197,
    "kind": "quote"
  },
  {
    "id": "ins-inject",
    "cat": "insulation",
    "lv": "Injekciju hidroizolācija",
    "ru": "Инъекционная гидроизоляция",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 198,
    "kind": "quote"
  },
  {
    "id": "ins-spray",
    "cat": "insulation",
    "lv": "Izsmidzināmā siltumizolācija",
    "ru": "Напыляемая теплоизоляция",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 199,
    "kind": "quote"
  },
  {
    "id": "tiles-large",
    "cat": "tiles",
    "lv": "Lielformāta flīžu montāža",
    "ru": "Укладка крупноформатной плитки",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 200,
    "kind": "quote"
  },
  {
    "id": "tiles-mosaic",
    "cat": "tiles",
    "lv": "Mozaīkas ieklāšana",
    "ru": "Укладка мозаики",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 201,
    "kind": "quote"
  },
  {
    "id": "tiles-silicone",
    "cat": "tiles",
    "lv": "Silikona šuvju izveide",
    "ru": "Герметизация швов силиконом",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 202,
    "kind": "quote"
  },
  {
    "id": "floor-epoxy",
    "cat": "floors",
    "lv": "Epoksīda grīdas pārklājums",
    "ru": "Устройство эпоксидного пола",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 203,
    "kind": "quote"
  },
  {
    "id": "floor-carpet",
    "cat": "floors",
    "lv": "Paklāja seguma montāža",
    "ru": "Укладка ковролина",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 204,
    "kind": "quote"
  },
  {
    "id": "el-breaker",
    "cat": "electric",
    "lv": "Automātslēdža nomaiņa sadalnē",
    "ru": "Замена автоматического выключателя",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 205,
    "kind": "quote"
  },
  {
    "id": "el-rcd",
    "cat": "electric",
    "lv": "Noplūdes strāvas aizsardzības ierīces montāža",
    "ru": "Монтаж УЗО или дифавтомата",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 206,
    "kind": "quote"
  },
  {
    "id": "el-earthing",
    "cat": "electric",
    "lv": "Zemējuma kontūra izbūve",
    "ru": "Устройство контура заземления",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 207,
    "kind": "quote"
  },
  {
    "id": "el-lightning",
    "cat": "electric",
    "lv": "Zibensaizsardzības sistēmas montāža",
    "ru": "Монтаж молниезащиты",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 208,
    "kind": "quote"
  },
  {
    "id": "el-ev",
    "cat": "electric",
    "lv": "Elektromobiļa uzlādes stacijas montāža",
    "ru": "Монтаж зарядной станции электромобиля",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 209,
    "kind": "quote"
  },
  {
    "id": "el-solar",
    "cat": "electric",
    "lv": "Saules paneļu elektroinstalācija",
    "ru": "Электромонтаж солнечных панелей",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 210,
    "kind": "quote"
  },
  {
    "id": "el-alarm",
    "cat": "electric",
    "lv": "Apsardzes un signalizācijas montāža",
    "ru": "Монтаж охранной сигнализации",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 211,
    "kind": "quote"
  },
  {
    "id": "el-smoke",
    "cat": "electric",
    "lv": "Dūmu detektoru montāža",
    "ru": "Установка дымовых извещателей",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 212,
    "kind": "quote"
  },
  {
    "id": "el-camera",
    "cat": "electric",
    "lv": "Videonovērošanas kameras montāža",
    "ru": "Монтаж камеры видеонаблюдения",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 213,
    "kind": "quote"
  },
  {
    "id": "pl-valve",
    "cat": "plumbing",
    "lv": "Noslēgventiļa nomaiņa",
    "ru": "Замена запорного крана",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 214,
    "kind": "quote"
  },
  {
    "id": "pl-leak",
    "cat": "plumbing",
    "lv": "Ūdens noplūdes novēršana",
    "ru": "Устранение протечки",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 215,
    "kind": "quote"
  },
  {
    "id": "pl-unblock",
    "cat": "plumbing",
    "lv": "Kanalizācijas aizsērējuma tīrīšana",
    "ru": "Прочистка канализации",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 216,
    "kind": "quote"
  },
  {
    "id": "pl-pressure",
    "cat": "plumbing",
    "lv": "Ūdens spiediena pārbaude",
    "ru": "Опрессовка водопровода",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 217,
    "kind": "quote"
  },
  {
    "id": "pl-pump",
    "cat": "plumbing",
    "lv": "Ūdens sūkņa montāža",
    "ru": "Монтаж водяного насоса",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 218,
    "kind": "quote"
  },
  {
    "id": "heat-pump",
    "cat": "heating",
    "lv": "Gaiss–ūdens siltumsūkņa montāža",
    "ru": "Монтаж теплового насоса воздух–вода",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 219,
    "kind": "quote"
  },
  {
    "id": "heat-manifold",
    "cat": "heating",
    "lv": "Siltās grīdas kolektora montāža",
    "ru": "Монтаж коллектора тёплого пола",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 220,
    "kind": "quote"
  },
  {
    "id": "heat-thermostat",
    "cat": "heating",
    "lv": "Telpas termostata montāža",
    "ru": "Монтаж комнатного термостата",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 221,
    "kind": "quote"
  },
  {
    "id": "heat-balance",
    "cat": "heating",
    "lv": "Apkures sistēmas balansēšana",
    "ru": "Балансировка системы отопления",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 222,
    "kind": "quote"
  },
  {
    "id": "heat-test",
    "cat": "heating",
    "lv": "Apkures sistēmas spiediena pārbaude",
    "ru": "Опрессовка отопления",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 223,
    "kind": "quote"
  },
  {
    "id": "heat-pellet",
    "cat": "heating",
    "lv": "Granulu katla uzstādīšana",
    "ru": "Монтаж пеллетного котла",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 224,
    "kind": "quote"
  },
  {
    "id": "vent-duct",
    "cat": "ventilation",
    "lv": "Ventilācijas gaisa vadu montāža",
    "ru": "Монтаж вентиляционных воздуховодов",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 225,
    "kind": "quote"
  },
  {
    "id": "vent-duct-ins",
    "cat": "ventilation",
    "lv": "Gaisa vadu siltumizolācija",
    "ru": "Теплоизоляция воздуховодов",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 226,
    "kind": "quote"
  },
  {
    "id": "vent-central",
    "cat": "ventilation",
    "lv": "Centrālās rekuperācijas sistēmas montāža",
    "ru": "Монтаж центральной системы рекуперации",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 227,
    "kind": "quote"
  },
  {
    "id": "vent-valve",
    "cat": "ventilation",
    "lv": "Ventilācijas difuzora montāža",
    "ru": "Установка вентиляционного диффузора",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 228,
    "kind": "quote"
  },
  {
    "id": "vent-commission",
    "cat": "ventilation",
    "lv": "Ventilācijas regulēšana un mērījumi",
    "ru": "Наладка и измерения вентиляции",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 229,
    "kind": "quote"
  },
  {
    "id": "window-wood",
    "cat": "windows",
    "lv": "Koka loga montāža",
    "ru": "Монтаж деревянного окна",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 230,
    "kind": "quote"
  },
  {
    "id": "door-garage",
    "cat": "windows",
    "lv": "Garāžas vārtu montāža",
    "ru": "Монтаж гаражных ворот",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 231,
    "kind": "quote"
  },
  {
    "id": "network-water",
    "cat": "networks",
    "lv": "Ārējā ūdensvada izbūve",
    "ru": "Устройство наружного водопровода",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 232,
    "kind": "quote"
  },
  {
    "id": "network-sewer",
    "cat": "networks",
    "lv": "Ārējās kanalizācijas izbūve",
    "ru": "Монтаж наружной канализации",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 233,
    "kind": "quote"
  },
  {
    "id": "network-septic",
    "cat": "networks",
    "lv": "Septiķa vai bioloģiskās attīrīšanas iekārtas montāža",
    "ru": "Монтаж септика или станции очистки",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 234,
    "kind": "quote"
  },
  {
    "id": "network-well",
    "cat": "networks",
    "lv": "Ūdens akas izbūve",
    "ru": "Устройство водозаборного колодца",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 235,
    "kind": "quote"
  },
  {
    "id": "network-storm",
    "cat": "networks",
    "lv": "Lietus ūdens kanalizācijas izbūve",
    "ru": "Устройство ливневой канализации",
    "unit": "m",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 236,
    "kind": "quote"
  },
  {
    "id": "out-fence-post",
    "cat": "outdoor",
    "lv": "Žoga stabu betonēšana",
    "ru": "Бетонирование столбов забора",
    "unit": "gab.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 237,
    "kind": "quote"
  },
  {
    "id": "out-terrace",
    "cat": "outdoor",
    "lv": "Terases klāja montāža",
    "ru": "Монтаж террасного настила",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 238,
    "kind": "quote"
  },
  {
    "id": "out-gate",
    "cat": "outdoor",
    "lv": "Iebraucamo vārtu montāža",
    "ru": "Монтаж въездных ворот",
    "unit": "kompl.",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 239,
    "kind": "quote"
  },
  {
    "id": "out-asphalt",
    "cat": "outdoor",
    "lv": "Asfalta seguma ieklāšana",
    "ru": "Укладка асфальта",
    "unit": "m²",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 240,
    "kind": "quote"
  },
  {
    "id": "design-arch",
    "cat": "design",
    "lv": "Ēkas arhitektūras projekts",
    "ru": "Архитектурный проект здания",
    "unit": "projekts",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 241,
    "kind": "quote"
  },
  {
    "id": "design-struct",
    "cat": "design",
    "lv": "Būvkonstrukciju projekts",
    "ru": "Проект строительных конструкций",
    "unit": "projekts",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 242,
    "kind": "quote"
  },
  {
    "id": "design-geodesy",
    "cat": "design",
    "lv": "Topogrāfiskā uzmērīšana",
    "ru": "Топографическая съёмка",
    "unit": "objekts",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 243,
    "kind": "quote"
  },
  {
    "id": "design-geology",
    "cat": "design",
    "lv": "Ģeotehniskā izpēte",
    "ru": "Инженерно-геологические изыскания",
    "unit": "objekts",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 244,
    "kind": "quote"
  },
  {
    "id": "design-energy",
    "cat": "design",
    "lv": "Ēkas energoaudits",
    "ru": "Энергоаудит здания",
    "unit": "objekts",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 245,
    "kind": "quote"
  },
  {
    "id": "design-supervision",
    "cat": "design",
    "lv": "Būvuzraudzība",
    "ru": "Строительный надзор",
    "unit": "h",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 246,
    "kind": "quote"
  },
  {
    "id": "services-crane",
    "cat": "services",
    "lv": "Autoceltņa darbs",
    "ru": "Услуги автокрана",
    "unit": "h",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 247,
    "kind": "quote"
  },
  {
    "id": "services-lift",
    "cat": "services",
    "lv": "Pacēlāja noma ar operatoru",
    "ru": "Подъёмник с оператором",
    "unit": "h",
    "min": null,
    "max": null,
    "sources": [],
    "rank": 248,
    "kind": "quote"
  }
];
