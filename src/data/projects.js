// Text fields are { en, lv }. Test counts were checked by running every suite (all passing) on 17 Oct 2026.
export const myTrainTesting = {
  total: 121,
  suites: [
    {
      tool: "PHPUnit",
      count: 83,
      label: { en: "Backend API tests", lv: "Servera API testi" },
      extra: { en: "479 assertions", lv: "479 pārbaudes" },
      intro: {
        en: "Feature tests for the Laravel API. They run on an in-memory SQLite database with a faked Stripe, so they are fast and never touch real data or real money.",
        lv: "Laravel API funkcionālie testi. Tie darbojas ar SQLite datubāzi atmiņā un imitētu Stripe, tāpēc ir ātri un nekad neskar īstus datus vai īstu naudu."
      },
      checks: [
        {
          en: "The ticket price comes from the server's fare tables, never from the browser.",
          lv: "Biļetes cena vienmēr nāk no servera tarifu tabulām, nekad no pārlūka."
        },
        {
          en: "The whole Stripe payment flow works, and webhooks without a valid Stripe signature are rejected.",
          lv: "Viss Stripe maksājuma process strādā, un webhook pieprasījumi bez derīga Stripe paraksta tiek noraidīti."
        },
        {
          en: "A ticket can never have two active payments, even when two tabs pay at the same moment.",
          lv: "Biļetei nekad nevar būt divi aktīvi maksājumi, pat ja divās cilnēs maksā vienlaikus."
        },
        {
          en: "The result page asks Stripe directly when the webhook arrives late.",
          lv: "Rezultātu lapa pati vaicā Stripe, ja webhook pienāk ar nokavēšanos."
        },
        {
          en: "Passengers can refund only until departure, unless the railway cancelled the train.",
          lv: "Pasažieri var atgūt naudu tikai līdz atiešanai, ja vien dzelzceļš vilcienu nav atcēlis."
        },
        {
          en: "Login locks after 5 failed attempts, even when they come from many addresses.",
          lv: "Pieteikšanās tiek bloķēta pēc 5 neveiksmīgiem mēģinājumiem, pat ja tie nāk no dažādām adresēm."
        },
        {
          en: "Users cannot touch other users' tickets, and admin routes are closed to normal users.",
          lv: "Lietotāji nevar piekļūt citu lietotāju biļetēm, un administratora maršruti ir slēgti parastiem lietotājiem."
        }
      ]
    },
    {
      tool: "Vitest",
      count: 31,
      label: { en: "Component tests", lv: "Komponenšu testi" },
      extra: { en: "React Testing Library", lv: "React Testing Library" },
      intro: {
        en: "Tests for single React components in a simulated browser, checking what the user actually sees and clicks.",
        lv: "Atsevišķu React komponenšu testi simulētā pārlūkā, kas pārbauda to, ko lietotājs patiešām redz un uz ko klikšķina."
      },
      checks: [
        {
          en: "The ticket card shows the right status, price and actions.",
          lv: "Biļetes kartīte rāda pareizo statusu, cenu un darbības."
        },
        {
          en: "The payment result page handles paid, pending and failed payments.",
          lv: "Maksājuma rezultātu lapa pareizi apstrādā apmaksātus, gaidošus un neizdevušos maksājumus."
        },
        {
          en: "Search shows clear error messages for bad input.",
          lv: "Meklēšana rāda skaidrus kļūdu paziņojumus nepareizai ievadei."
        },
        {
          en: "Dark mode, account settings and the helper functions behave correctly.",
          lv: "Tumšais režīms, konta iestatījumi un palīgfunkcijas darbojas pareizi."
        }
      ]
    },
    {
      tool: "Playwright",
      count: 7,
      label: { en: "Browser tests", lv: "Pārlūka testi" },
      extra: { en: "end to end in Chrome", lv: "no sākuma līdz beigām pārlūkā Chrome" },
      intro: {
        en: "Playwright starts its own Laravel backend and React app on separate ports with a separate, seeded MySQL database, then uses MyTrain in Chrome like a real person. A failed run keeps a step-by-step trace and a screenshot.",
        lv: "Playwright palaiž savu Laravel serveri un React lietotni uz atsevišķiem portiem ar atsevišķu MySQL testu datubāzi un tad lieto MyTrain pārlūkā Chrome kā īsts cilvēks. Ja tests neizdodas, saglabājas soli pa solim ieraksts un ekrānuzņēmums."
      },
      checks: [
        {
          en: "Search, log in, buy a ticket and reach the payment page.",
          lv: "Meklēt, pieteikties, nopirkt biļeti un nonākt maksājuma lapā."
        },
        {
          en: "A wrong password is refused, and too many failed logins lock the account.",
          lv: "Nepareiza parole tiek noraidīta, un pēc pārāk daudziem neveiksmīgiem mēģinājumiem konts tiek bloķēts."
        },
        {
          en: "An unclear station name asks which station was meant.",
          lv: "Ja stacijas nosaukums ir neskaidrs, lietotne jautā, kura stacija domāta."
        },
        {
          en: "Profile settings: rename, change the password, then delete the account.",
          lv: "Profila iestatījumi: mainīt vārdu, nomainīt paroli un tad dzēst kontu."
        },
        {
          en: "A saved route appears on the home page and searches with one click.",
          lv: "Saglabāts maršruts parādās sākumlapā, un to var meklēt ar vienu klikšķi."
        },
        {
          en: "A user with an unconfirmed email cannot buy tickets.",
          lv: "Lietotājs ar neapstiprinātu e-pastu nevar pirkt biļetes."
        }
      ]
    }
  ]
};

export const projects = [
  {
    id: "mytrain",
    title: "MyTrain",
    featured: true,
    tags: ["Laravel", "React", "Testing"],
    short: {
      en: "Train search and ticket app for Latvian Vivi trains, with Stripe payments and 121 automated tests.",
      lv: "Vilcienu meklēšanas un biļešu lietotne Latvijas Vivi vilcieniem ar Stripe maksājumiem un 121 automatizētu testu."
    },
    description: {
      en: "My biggest project so far. MyTrain is a web app for Latvian passenger trains: search connections in the Vivi timetable, check departure boards, follow trains on a map and buy tickets with a card payment in Stripe test mode. Passengers see delays and cancellations, and administrators manage tickets, users and train status in an admin panel. The backend is a Laravel REST API and the frontend is a separate React app in Latvian, English and Russian. I also covered the project with 121 automated tests on three levels: PHPUnit tests for the Laravel API, Vitest tests for the React components, and Playwright tests that use the whole app in a real Chrome browser. They make sure the important rules keep working after every change: prices always come from the server, a payment only becomes paid through Stripe's signed webhook, and the login locks after too many failed attempts.",
      lv: "Mans lielākais projekts līdz šim. MyTrain ir tīmekļa lietotne Latvijas pasažieru vilcieniem: var meklēt savienojumus Vivi kustības sarakstā, skatīt staciju atiešanas tablo, sekot vilcieniem kartē un pirkt biļetes, maksājot ar karti Stripe testa režīmā. Pasažieri redz kavējumus un atcelšanas, bet administratori pārvalda biļetes, lietotājus un vilcienu statusu administrēšanas panelī. Serveris ir Laravel REST API, un lietotāja saskarne ir atsevišķa React lietotne latviešu, angļu un krievu valodā. Projektam uzrakstīju arī 121 automatizētu testu trīs līmeņos: PHPUnit testus Laravel API, Vitest testus React komponentēm un Playwright testus, kas lieto visu lietotni īstā Chrome pārlūkā. Tie nodrošina, ka svarīgie noteikumi turpina strādāt pēc katras izmaiņas: cenas vienmēr nāk no servera, maksājums kļūst apmaksāts tikai ar Stripe parakstītu webhook, un pieteikšanās tiek bloķēta pēc pārāk daudziem neveiksmīgiem mēģinājumiem."
    },
    images: ["/mytrain-home.png", "/mytrain-search.png"],
    github: "https://github.com/Aleksis622/Backend_MyTrain",
    stack: [
      "Laravel 13",
      "PHP 8.3",
      "MySQL",
      "Sanctum",
      "React 18",
      "Vite",
      "Mapbox GL",
      "i18next",
      "Stripe",
      "PHPUnit",
      "Vitest",
      "Playwright"
    ],
    features: [
      {
        en: "Train search by date and time, with prices from the official fare tables and night trains after midnight.",
        lv: "Vilcienu meklēšana pēc datuma un laika ar cenām no oficiālajām tarifu tabulām un nakts vilcieniem pēc pusnakts."
      },
      {
        en: "Map of all stations and the trains running now, plus a departure board for every station.",
        lv: "Visu staciju un pašlaik kursējošo vilcienu karte, kā arī atiešanas tablo katrai stacijai."
      },
      {
        en: "Accounts with email confirmation, password reset, saved routes and ticket history.",
        lv: "Konti ar e-pasta apstiprināšanu, paroles atjaunošanu, saglabātiem maršrutiem un biļešu vēsturi."
      },
      {
        en: "Ticket payments through Stripe Checkout with signed webhooks and refunds.",
        lv: "Biļešu apmaksa ar Stripe Checkout, parakstītiem webhook pieprasījumiem un naudas atmaksu."
      },
      {
        en: "Admin panel with a dashboard, tickets, users, train delays and an activity log.",
        lv: "Administrēšanas panelis ar pārskatu, biļetēm, lietotājiem, vilcienu kavējumiem un darbību žurnālu."
      }
    ],
    testing: myTrainTesting
  },
  {
    id: "grade-viewer",
    title: "Grade Viewer",
    tags: ["PHP"],
    short: {
      en: "System where you can check student grades and change them.",
      lv: "Sistēma, kurā var apskatīt un mainīt skolēnu atzīmes."
    },
    description: {
      en: "An open-source project built with PHP that shows a simple way to create a CRUD application for managing student grades by subject.",
      lv: "Atvērtā koda projekts, veidots ar PHP, kas parāda vienkāršu veidu, kā izveidot CRUD lietotni skolēnu atzīmju pārvaldībai pa mācību priekšmetiem."
    },
    images: ["/Screenshot_4.png"],
    github: "https://github.com/Aleksis622/grade_viewer",
    stack: ["PHP", "MySQL", "HTML", "CSS"]
  },
  {
    id: "super-quiz",
    title: "Super Quiz",
    tags: ["Laravel"],
    short: {
      en: "A simple quiz project using Laravel.",
      lv: "Vienkāršs viktorīnu projekts, veidots ar Laravel."
    },
    description: {
      en: "First project created in group using laravel and php in this project you can sign in and then log in to do some quizes on different topics like - sports, films, programming etc. questions and answers in this project are premade.",
      lv: "Mans pirmais grupas projekts, veidots ar Laravel un PHP. Lietotājs var reģistrēties, pieteikties un pildīt viktorīnas par dažādām tēmām, piemēram, sportu, filmām un programmēšanu. Jautājumi un atbildes ir sagatavoti iepriekš."
    },
    images: ["/superquiz-login.png", "/superquiz-question.png"],
    cardImages: ["/superquiz-question.png"], // the question shot fits the card best
    github: "https://github.com/Lanheiv/Super_Quiz",
    stack: ["Laravel", "PHP", "MySQL"]
  },
  {
    id: "minigames",
    title: "Minigames",
    tags: ["Laravel", "React"],
    short: {
      en: "Two minigames created using Laravel and React.",
      lv: "Divas mini spēles, veidotas ar Laravel un React."
    },
    description: {
      en: "My second group project we used laravel as a base and for typing game where you can check how fast you type and how accurate are you and in second game using react memory game is typical game where you have to memorise which object where was as fast as you can with different mode difficulties.",
      lv: "Mans otrais grupas projekts, kura pamatā ir Laravel. Rakstīšanas spēlē var pārbaudīt, cik ātri un precīzi tu raksti. Otrā spēle ir React atmiņas spēle, kurā pēc iespējas ātrāk jāatceras, kur atradās katrs attēls, un tajā ir vairāki grūtības līmeņi."
    },
    images: ["/image2.png", "/image3.png"],
    github: "https://github.com/Kpotapenkovs/minigames",
    stack: ["Laravel", "React", "PHP", "JavaScript"]
  }
];

export const filters = ["All", "Laravel", "React", "PHP", "Testing"];
