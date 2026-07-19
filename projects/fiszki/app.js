const storageKey = "english-flashcards";

const seedCards = [
  card("curious", "ciekawy, zaciekawiony", "She is curious about how people learn new languages."),
  card("reliable", "niezawodny, godny zaufania", "A reliable app saves your words after every change."),
  card("improve", "poprawiać, ulepszać", "I want to improve my English vocabulary."),
  card("adroit", "zręczny, sprawny, bystry"),
  card("daunting", "onieśmielający, zniechęcający, budzący respekt"),
  card("paragon", "wzór, ideał, doskonały przykład"),
  card("slender", "smukły, cienki, niewielki"),
  card("tuxedo", "smoking"),
  card("ditch", "pozbyć się, porzucić; rów"),
  card("patronise", "traktować protekcjonalnie, mówić z wyższością"),
  card("binge", "objadać się, robić coś kompulsywnie; ciąg"),
  card("offset", "równoważyć, kompensować"),
  card("novel", "nowy, oryginalny; powieść"),
  card("boast", "przechwalać się"),
  card("sweltering", "upalny, duszny"),
  card("experienced", "doświadczony"),
  card("inexperienced", "niedoświadczony"),
  card("educated", "wykształcony"),
  card("uneducated", "niewykształcony"),
  card("organised", "zorganizowany"),
  card("disorganised", "niezorganizowany"),
  card("subside", "ustępować, opadać, cichnąć"),
  card("harness", "wykorzystać coś; uprząż"),
  card("silver lining", "pozytywna strona trudnej sytuacji"),
  card("profoundly", "głęboko, dogłębnie"),
  card("ridicule", "wyśmiewać, kpić"),
  card("agitated", "poruszony, wzburzony, zdenerwowany"),
  card("sinister", "złowieszczy"),
  card("smudge", "smuga, rozmazana plama"),
  card("unnerved", "wytrącony z równowagi, zdenerwowany"),
  card("coiled", "zwinięty, skręcony"),
  card("trudge", "iść mozolnie, wlec się"),
  card("prise open", "podważyć i otworzyć"),
  card("endure", "znosić, wytrwać, przetrwać"),
  card("carer", "opiekun"),
  card("immense", "ogromny"),
  card("preposterous", "niedorzeczny, absurdalny"),
  card("watered down", "rozwodniony, złagodzony"),
  card("drivel", "bzdury, brednie"),
  card("flawed", "wadliwy, z błędami"),
  card("draft", "szkic, wersja robocza; pisać wersję roboczą"),
  card("engaged", "zaangażowany; zaręczony"),
  card("relief", "ulga"),
  card("former", "dawny, były"),
  card("twitch", "drgnięcie; drgać"),
  card("sparing", "oszczędny, powściągliwy"),
  card("up to scratch", "na odpowiednim poziomie, spełniający wymagania"),
  card("come to terms with", "pogodzić się z czymś"),
  card("tamper with", "majstrować przy czymś, manipulować"),
  card("condescending", "protekcjonalny"),
  card("comic relief", "komiczny przerywnik rozładowujący napięcie"),
  card("rural", "wiejski"),
  card("two-storey house", "dom dwukondygnacyjny"),
  card("cliche", "banał, wyświechtany zwrot"),
  card("rattle off", "wyrecytować szybko, wyrzucić z siebie"),
  card("lorry", "ciężarówka"),
  card("captivate", "urzec, oczarować"),
  card("smile smugly", "uśmiechać się z samozadowoleniem"),
  card("tap into", "skorzystać z czegoś, wykorzystać zasób"),
  card("punchy", "zwięzły i wyrazisty"),
  card("trailblazer", "pionier, prekursor"),
  card("inevitable", "nieunikniony"),
  card("resonate", "rezonować, wybrzmiewać, poruszać emocjonalnie"),
  card("stagnation", "stagnacja, zastój"),
  card("leverage", "wykorzystać jako przewagę; dźwignia, nacisk"),
  card("soaring", "gwałtownie rosnący; wznoszący się"),
  card("strike off", "skreślić z listy, pozbawić prawa wykonywania zawodu"),
  card("rant", "tyrada, narzekanie; wygłaszać tyradę"),
  card("repugnant", "odrażający, wstrętny"),
  card("fast", "post, głodówka"),
  card("misconduct", "niewłaściwe zachowanie, wykroczenie"),
  card("scrounger", "darmozjad, ktoś żyjący cudzym kosztem"),
  card("pile in", "włączyć się gwałtownie, dołączyć do kłótni"),
  card("clash", "zderzenie, konflikt; ścierać się"),
  card("inflammatory", "prowokacyjny, zaogniający"),
  card("effing and jeffing", "przeklinanie, rzucanie przekleństwami"),
  card("rant and rave", "wściekać się i narzekać"),
  card("foster", "wspierać, pielęgnować, rozwijać"),
  card("fall out with", "pokłócić się z kimś"),
  card("turn up", "pojawić się, przybyć; podkręcić"),
  card("set up a business", "założyć firmę"),
  card("cut back on", "ograniczyć coś"),
  card("pay back", "spłacić, oddać pieniądze"),
  card("split up", "rozstać się"),
  card("chew over", "przemyśleć, przedyskutować dogłębnie"),
  card("placid", "spokojny, łagodny"),
  card("trigger-happy", "pochopny, impulsywny"),
  card("huff", "obrażony nastrój, foch"),
  card("in a huff", "obrażony, w złym humorze"),
  card("quaint", "uroczy i staromodny, osobliwy"),
  card("toe the line", "podporządkować się zasadom"),
  card("pent-up", "stłumiony, nagromadzony"),
  card("zealot", "fanatyk, gorliwiec"),
  card("smear", "rozmazać; oczernić"),
  card("shriek", "wrzeszczeć, piszczeć"),
  card("shortcoming", "wada, niedociągnięcie"),
  card("vast majority", "zdecydowana większość"),
  card("overlook", "przeoczyć; mieć widok na"),
  card("flourishing", "kwitnący, dobrze się rozwijający"),
  card("done and dusted", "załatwione, skończone"),
  card("deplore", "ubolewać nad czymś, potępiać"),
  card("adulterated", "zafałszowany, rozcieńczony, podrobiony"),
  card("drowsy", "senny"),
  card("drowsiness", "senność"),
  card("lucrative", "dochodowy, opłacalny"),
  card("numb", "odrętwiały, zdrętwiały"),
  card("numbness", "odrętwienie"),
  card("embedded", "osadzony, wbudowany"),
  card("ease", "złagodzić, ułatwić; łatwość"),
  card("clock on", "rozpocząć pracę, odbić kartę"),
  card("landslide", "osuwisko; miażdżące zwycięstwo"),
  card("quota", "limit, norma, przydział"),
  card("stockpile", "zapas, zgromadzić zapasy"),
  card("expletive", "przekleństwo, wulgaryzm"),
  card("overstep the mark", "przekroczyć granicę"),
  card("stroll", "spacerować; przechadzka"),
  card("plead", "błagać; przyznawać się w sądzie"),
  card("hound", "nękać, ścigać, prześladować"),
  card("grieve", "opłakiwać, rozpaczać"),
  card("slur", "obelga, oszczerstwo"),
  card("jovial", "wesoły, jowialny"),
  card("annus horribilis", "okropny rok"),
  card("forthright", "szczery, bezpośredni"),
  card("dire", "fatalny, straszny, rozpaczliwy"),
  card("impinge", "wpływać negatywnie, naruszać"),
  card("fracas", "awantura, burda"),
  card("living wage", "płaca wystarczająca na utrzymanie"),
  card("dejected", "przygnębiony, zniechęcony"),
  card("exacerbate", "pogorszyć, zaostrzyć"),
  card("bumper", "wyjątkowo duży, obfity"),
  card("pay package", "pakiet wynagrodzenia"),
  card("sniping", "złośliwe krytykowanie z boku"),
  card("give someone grief", "dokuczać komuś, sprawiać komuś kłopot"),
  card("think tank", "zespół ekspertów, instytut analityczny"),
  card("fat cat", "bogacz, wpływowy zamożny człowiek"),
  card("hit it off", "od razu się polubić"),
  card("demeanour", "zachowanie, sposób bycia"),
  card("prized", "ceniony, wartościowy"),
  card("looming", "zbliżający się groźnie, wyłaniający się"),
  card("aberration", "odchylenie, anomalia, jednorazowy wyjątek"),
  card("formidable", "potężny, budzący respekt"),
  card("inkling", "przeczucie, mgliste pojęcie"),
  card("wind up", "zakończyć; nakręcać; drażnić"),
  card("prolific", "płodny, bardzo produktywny"),
  card("renaissance", "renesans, odrodzenie"),
  card("omnipresent", "wszechobecny"),
  card("scoff", "szydzić; pochłaniać jedzenie"),
  card("dupe", "oszukać; ofiara oszustwa"),
  card("cottage industry", "drobna działalność domowa"),
  card("thrive", "prosperować, rozkwitać"),
  card("caught up in", "wciągnięty w coś, uwikłany"),
  card("edgy", "nerwowy, niespokojny; ryzykowny"),
  card("deserted", "opuszczony, pusty"),
  card("seal off", "odgrodzić, zamknąć dostęp"),
  card("undergrowth", "podszyt, zarośla"),
  card("swamp", "bagno; zalać, przytłoczyć"),
  card("spook", "przestraszyć"),
  card("hue and cry", "publiczne oburzenie, wrzawa"),
  card("wail", "zawodzić, płakać głośno"),
  card("maul", "poturbować, poważnie poranić"),
  card("prize", "wysoko cenić; nagroda"),
  card("bristle with", "roić się od czegoś, być pełnym czegoś"),
  card("allegedly", "rzekomo, domniemanie"),
  card("subliminal", "podprogowy, podświadomy"),
  card("be sued", "zostać pozwanym"),
  card("trifle", "drobnostka, coś nieistotnego"),
  card("nourish", "odżywiać, karmić, pielęgnować"),
  card("overindulged", "rozpieszczany, nadmiernie pobłażany"),
  card("bulge", "wybrzuszać się; wybrzuszenie"),
  card("clench", "zaciskać"),
  card("obese", "otyły"),
  card("wax", "wosk"),
  card("rationale", "uzasadnienie, powód"),
  card("caveat", "zastrzeżenie, warunek"),
  card("wad", "zwitek, kłębek, plik"),
  card("slobber", "ślinić się; ślina"),
  card("wretched", "nieszczęsny, żałosny, okropny"),
  card("invariably", "niezmiennie, zawsze"),
  card("household name", "powszechnie znana osoba lub marka"),
  card("elaborate", "rozwinąć, dopracować; szczegółowy"),
  card("roundhouse kick", "kopnięcie z półobrotu"),
  card("avid", "zapalony, gorliwy, zachłanny"),
  card("encroaching", "wkraczający, naruszający granice"),
  card("urchin", "urwis; jeżowiec"),
  card("bustling", "ruchliwy, tętniący życiem"),
  card("tycoon", "magnat, potentat biznesowy"),
  card("malfeasance", "nadużycie, bezprawne działanie"),
  card("bolster", "wzmocnić, wesprzeć"),
  card("engulf", "pochłonąć, ogarnąć"),
  card("the Establishment", "establishment, grupa trzymająca władzę"),
  card("scrutinise", "dokładnie badać, analizować"),
  card("kickback", "łapówka, nielegalna prowizja"),
  card("hub", "węzeł, centrum"),
  card("tenuous", "wątły, słaby, niepewny"),
  card("menace", "zagrożenie, groźba"),
  card("unrepentant", "nieskruszony"),
  card("bleak", "ponury, beznadziejny"),
  card("chirpy", "radosny, pogodny"),
  card("abridged", "skrócony"),
  card("acerbic", "cięty, kąśliwy, surowy"),
  card("impervious", "odporny, niewrażliwy, nieprzepuszczalny"),
  card("harsh", "surowy, ostry"),
  card("divisive", "dzielący, kontrowersyjny"),
  card("rile", "zirytować, rozzłościć"),
  card("hiatus", "przerwa"),
  card("tumble", "upadek; spaść, potoczyć się"),
  card("wit", "błyskotliwość, dowcip"),
  card("bandy about", "rzucać hasłem, omawiać luźno"),
  card("accrue", "narastać, gromadzić się"),
  card("take umbrage", "obrazić się, poczuć się urażonym"),
  card("scrutiny", "dokładna kontrola, analiza"),
  card("malice", "złośliwość, zła wola"),
  card("twist", "zwrot akcji; skręt"),
  card("at a loss", "bezradny, nie wiedzący co zrobić"),
  card("quench", "ugasić pragnienie, zaspokoić"),
  card("ilk", "typ, pokrój"),
  card("sideline", "odsunąć na bok; zajęcie poboczne"),
  card("tacky", "tandetny; lepki"),
  card("ramshackle", "rozpadający się, w kiepskim stanie"),
  card("abide by", "przestrzegać, stosować się do"),
  card("bribe", "łapówka; przekupić"),
  card("reek", "śmierdzieć, cuchnąć"),
  card("prosecutor", "prokurator, oskarżyciel"),
  card("disarming", "rozbrajający"),
  card("embrace", "zaakceptować, objąć"),
  card("punter", "klient; obstawiający zakłady"),
  card("go under", "zbankrutować, upaść"),
  card("ominous", "złowieszczy"),
  card("salivate", "ślinić się; pożądać czegoś"),
  card("disposable income", "dochód do swobodnego wydania"),
  card("soar", "gwałtownie wzrosnąć; szybować"),
  card("frequented", "często odwiedzany"),
  card("cut the deepest", "najbardziej zaboleć, najmocniej dotknąć"),
  card("dismiss", "oddalić, odrzucić; zwolnić"),
  card("claptrap", "brednie, bzdury"),
  card("shawl", "szal, chusta"),
  card("rudimentary", "podstawowy, prymitywny"),
  card("rough and tumble", "ostra, żywiołowa zabawa lub rywalizacja"),
  card("full-blown", "w pełni rozwinięty"),
  card("domesticate", "udomowić"),
  card("beak", "dziób"),
  card("notwithstanding", "pomimo, mimo to"),
  card("laud", "chwalić, wychwalać"),
  card("pull over", "zjechać na pobocze"),
  card("per se", "sam w sobie"),
  card("seize", "zająć, przejąć, skonfiskować"),
  card("clampdown", "zaostrzenie kontroli, represje"),
  card("in effect", "w praktyce, właściwie"),
  card("rupture", "pęknięcie, zerwanie"),
  card("manslaughter", "nieumyślne spowodowanie śmierci"),
  card("exploit", "wykorzystać; wyczyn"),
  card("incentive", "zachęta, motywacja"),
  card("paltry", "marny, znikomy"),
  card("eerie", "upiorny, niepokojący"),
  card("febrile", "gorączkowy"),
  card("encroach", "wkraczać, naruszać"),
  card("bar", "zakazać, zablokować; bar"),
  card("intrepid", "nieustraszony"),
  card("rash", "wysypka; pochopny"),
  card("droop", "zwisać, opadać"),
  card("crooked", "krzywy, nieuczciwy"),
  card("exaggerate", "przesadzać"),
  card("chutzpah", "bezczelna pewność siebie, tupet"),
  card("go apeshit", "wpaść w szał"),
  card("suss", "podejrzany; rozgryźć coś"),
  card("mundane", "przyziemny, nudny"),
  card("chastise", "zganić, skarcić"),
  card("deviant", "odchylający się od normy; dewiacyjny"),
  card("consent", "zgoda; zgodzić się"),
  card("barricade", "barykada; zabarykadować"),
  card("modesty", "skromność"),
  card("wipe out", "wymazać, zniszczyć"),
  card("aspire", "aspirować, dążyć"),
  card("put off", "odłożyć; zniechęcić"),
  card("convene", "zwołać, zebrać się"),
  card("intimidate", "zastraszać"),
  card("love handles", "boczki"),
  card("incline to", "skłaniać się ku"),
  card("tagline", "hasło, slogan"),
  card("odd", "dziwny, osobliwy"),
  card("defy", "sprzeciwić się, przeciwstawić się"),
  card("outset", "początek"),
  card("potent", "silny, skuteczny"),
  card("command economy", "gospodarka nakazowa"),
  card("plausible", "wiarygodny, prawdopodobny"),
  card("abundant", "obfity, liczny"),
  card("flabbergasting", "zdumiewający, szokujący"),
  card("reactionary", "reakcyjny"),
  card("illogical", "nielogiczny"),
  card("conjure up", "przywołać w wyobraźni"),
  card("frame", "oprawić; wrobić"),
  card("surefire", "niezawodny, pewny"),
  card("impressionable", "podatny na wpływy"),
  card("bookie", "bukmacher"),
  card("undue", "nadmierny, niesłuszny"),
  card("pedigree", "rodowód, pochodzenie"),
  card("odds", "szanse, kursy bukmacherskie"),
  card("cutting edge", "najnowocześniejszy"),
  card("align", "wyrównać, dopasować, zgadzać się"),
  card("alignment", "wyrównanie, zgodność, porozumienie"),
  card("plague", "plaga; nękać"),
  card("lodged", "umieszczony, osadzony"),
  card("accentuate", "podkreślić, uwydatnić"),
  card("crusade", "krucjata, kampania; prowadzić kampanię"),
  card("go gangbusters", "świetnie sobie radzić, rozwijać się dynamicznie"),
  card("harrowing", "wstrząsający, traumatyczny"),
  card("lament", "ubolewać, opłakiwać, żałować"),
  card("wonky", "krzywy, chwiejny, wadliwy"),
  card("blunt", "tępy; bezpośredni"),
  card("castigate", "zganić surowo, skarcić"),
  card("poof", "obraźliwie: gej"),
  card("outcast", "wyrzutek, osoba wykluczona"),
  card("shun", "unikać, stronić od"),
  card("wistful", "tęskny, melancholijny"),
  card("impassive", "niewzruszony, beznamiętny"),
  card("reconcile", "pogodzić, pojednać, uzgodnić"),
  card("composed", "opanowany, spokojny"),
  card("deadpan", "bez wyrazu, kamienna twarz"),
  card("bluntly", "bez ogródek, dosadnie"),
  card("picky", "wybredny"),
  card("plaintiff", "powód, strona pozywająca"),
  card("oust", "usunąć ze stanowiska, wyrzucić"),
  card("jibe", "docinek, złośliwa uwaga"),
  card("ignite", "zapalić, podpalić; wywołać"),
  card("bury the hatchet", "zakopać topór wojenny, pogodzić się"),
  card("tempestuous", "burzliwy, gwałtowny"),
  card("berate", "besztać, ostro krytykować"),
  card("simmer down", "uspokoić się, ochłonąć"),
  card("spent force", "ktoś lub coś bez dawnej siły"),
  card("facile", "powierzchowny, zbyt uproszczony"),
  card("baffle", "zdezorientować, wprawić w zakłopotanie"),
  card("abyssal plain", "równina abisalna"),
  card("alter", "zmienić"),
  card("acquire", "nabyć, zdobyć, pozyskać"),
  card("incur", "ponieść koszty, narazić się na coś"),
  card("enforce", "egzekwować, wymuszać przestrzeganie"),
  card("compromise", "zagrozić, narazić; kompromis"),
  card("enhance", "poprawić, wzmocnić, zwiększyć"),
];

function card(word, translation, example = "") {
  return {
    word,
    translation,
    example: example || createExample(word, translation),
  };
}

function createExample(word, translation) {
  const examples = {
    adroit: "She gave an adroit answer during the difficult interview.",
    daunting: "The exam seemed daunting at first, but he prepared well.",
    paragon: "Many people saw her as a paragon of patience and kindness.",
    slender: "There is only a slender chance that the plan will work.",
    tuxedo: "He wore a black tuxedo to the evening ceremony.",
    ditch: "They decided to ditch the old plan and start again.",
    patronise: "Do not patronise me just because I am new here.",
    binge: "I sometimes binge a whole series at the weekend.",
    offset: "The company planted trees to offset its carbon emissions.",
    novel: "The team proposed a novel solution to the problem.",
    boast: "He tends to boast about his achievements.",
    sweltering: "We stayed inside during the sweltering afternoon.",
    experienced: "An experienced teacher can explain complex ideas clearly.",
    inexperienced: "The inexperienced driver was nervous on the motorway.",
    educated: "She is an educated person with strong opinions.",
    uneducated: "The article avoided blaming people for being uneducated.",
    organised: "The event was organised very professionally.",
    disorganised: "His desk looked completely disorganised.",
    subside: "The pain should subside after a few hours.",
    harness: "We need to harness this energy and use it well.",
    "silver lining": "The silver lining is that we learned from the mistake.",
    profoundly: "The story affected her profoundly.",
    ridicule: "It is cruel to ridicule someone for asking a question.",
    agitated: "He became agitated when nobody answered the phone.",
    sinister: "There was a sinister silence in the empty house.",
    smudge: "There was a black smudge on the white paper.",
    unnerved: "The strange noise unnerved everyone in the room.",
    coiled: "A coiled cable lay under the desk.",
    trudge: "We had to trudge through the snow to reach the station.",
    "prise open": "She tried to prise open the stuck window.",
    endure: "They had to endure months of uncertainty.",
    carer: "Her carer visits every morning.",
    immense: "The project required an immense amount of work.",
    preposterous: "That excuse sounds completely preposterous.",
    "watered down": "The final proposal was a watered down version of the original.",
    drivel: "I stopped reading because the article was pure drivel.",
    flawed: "The argument is interesting, but it is flawed.",
    draft: "I wrote a rough draft before sending the email.",
    engaged: "The students were engaged throughout the lesson.",
    relief: "It was a relief to hear that everyone was safe.",
    former: "Her former boss recommended her for the job.",
    twitch: "I saw a slight twitch in his left eye.",
    sparing: "Be sparing with salt when you cook this dish.",
    "up to scratch": "Your report is good, but the conclusion is not up to scratch yet.",
    "come to terms with": "It took him years to come to terms with the loss.",
    "tamper with": "Someone tried to tamper with the lock.",
    condescending: "His condescending tone made the meeting uncomfortable.",
    "comic relief": "The funny scene provided comic relief after a tense moment.",
    rural: "She grew up in a small rural village.",
    "two-storey house": "They bought a two-storey house near the park.",
    cliche: "The film avoids the usual romantic cliche.",
    "rattle off": "She can rattle off all the capitals in Europe.",
    lorry: "A lorry blocked the road for twenty minutes.",
    captivate: "The speaker managed to captivate the whole audience.",
    "smile smugly": "He smiled smugly after winning the argument.",
    "tap into": "The company wants to tap into a younger market.",
    punchy: "The advertisement needs a short, punchy slogan.",
    trailblazer: "She was a trailblazer for women in science.",
    inevitable: "Some mistakes are inevitable when you are learning.",
    resonate: "Her speech will resonate with many young people.",
    stagnation: "The city suffered from economic stagnation.",
    leverage: "They used their experience to leverage a better deal.",
    soaring: "Soaring prices have worried many families.",
    "strike off": "The doctor could be struck off for serious misconduct.",
    rant: "He went on a long rant about public transport.",
    repugnant: "I find that kind of behaviour repugnant.",
    fast: "She decided to fast for one day.",
    misconduct: "The manager was fired for misconduct.",
    scrounger: "The newspaper unfairly described him as a scrounger.",
    "pile in": "Several people began to pile in with their own complaints.",
    clash: "The two teams clashed in the final match.",
    inflammatory: "The politician made an inflammatory comment online.",
    "effing and jeffing": "He was effing and jeffing after he lost his keys.",
    "rant and rave": "There is no need to rant and rave about a small delay.",
    foster: "Good teachers foster curiosity in their students.",
    "fall out with": "She fell out with her best friend over money.",
    "turn up": "He turned up late for the meeting.",
    "set up a business": "They want to set up a business together.",
    "cut back on": "I need to cut back on sugar.",
    "pay back": "I will pay back the money tomorrow.",
    "split up": "They decided to split up after five years.",
    "chew over": "Let me chew over the idea before I decide.",
    placid: "The lake was calm and placid.",
    "trigger-happy": "A trigger-happy manager may make decisions too quickly.",
    huff: "He left the room in a huff.",
    "in a huff": "She was in a huff all morning.",
    quaint: "We stayed in a quaint little hotel by the sea.",
    "toe the line": "Employees are expected to toe the line.",
    "pent-up": "He finally released years of pent-up anger.",
    zealot: "A zealot rarely listens to the other side.",
    smear: "The campaign tried to smear her reputation.",
    shriek: "The children began to shriek with excitement.",
    shortcoming: "The main shortcoming of the plan is the cost.",
    "vast majority": "The vast majority of students passed the test.",
    overlook: "It is easy to overlook small details.",
    flourishing: "The town has a flourishing arts scene.",
    "done and dusted": "The paperwork is done and dusted.",
    deplore: "We deplore violence in any form.",
    adulterated: "The police found adulterated alcohol in the shop.",
    drowsy: "This medicine may make you feel drowsy.",
    drowsiness: "Drowsiness can be dangerous while driving.",
    lucrative: "Software development can be a lucrative career.",
    numb: "My fingers went numb in the cold.",
    numbness: "She felt numbness in her left hand.",
    embedded: "The video was embedded in the article.",
    ease: "The new rules should ease traffic congestion.",
    "clock on": "Workers clock on at seven in the morning.",
    landslide: "The party won the election by a landslide.",
    quota: "The team has already reached its monthly quota.",
    stockpile: "They began to stockpile food before the storm.",
    expletive: "He muttered an expletive under his breath.",
    "overstep the mark": "His joke overstepped the mark.",
    stroll: "We went for a stroll after dinner.",
    plead: "The child began to plead for another chance.",
    hound: "Reporters continued to hound the actor.",
    grieve: "People need time to grieve after a loss.",
    slur: "The comment was taken as a serious slur.",
    jovial: "He was in a jovial mood at the party.",
    "annus horribilis": "For the company, it was an annus horribilis.",
    forthright: "I appreciate her forthright opinion.",
    dire: "The village is in dire need of clean water.",
    impinge: "The noise began to impinge on her concentration.",
    fracas: "A fracas broke out outside the stadium.",
    "living wage": "All employees should earn a living wage.",
    dejected: "He looked dejected after the defeat.",
    exacerbate: "Stress can exacerbate the symptoms.",
    bumper: "The farm had a bumper harvest this year.",
    "pay package": "The CEO's pay package caused public anger.",
    sniping: "The constant sniping made teamwork impossible.",
    "give someone grief": "My laptop has been giving me grief all week.",
    "think tank": "The report was written by a respected think tank.",
    "fat cat": "The article criticised fat cats in the banking sector.",
    "hit it off": "They hit it off as soon as they met.",
    demeanour: "Her calm demeanour reassured the patients.",
    prized: "This is one of his most prized possessions.",
    looming: "The looming deadline made everyone nervous.",
    aberration: "The poor result was an aberration, not a trend.",
    formidable: "They faced a formidable opponent.",
    inkling: "I had no inkling that anything was wrong.",
    "wind up": "That noise is starting to wind me up.",
    prolific: "She is a prolific writer.",
    renaissance: "The district is enjoying a cultural renaissance.",
    omnipresent: "Advertising is omnipresent in modern life.",
    scoff: "He scoffed at the suggestion.",
    dupe: "The scam tried to dupe elderly people.",
    "cottage industry": "Selling handmade candles became a cottage industry.",
    thrive: "Some plants thrive in dry soil.",
    "caught up in": "He got caught up in the excitement.",
    edgy: "She felt edgy before the interview.",
    deserted: "The street was deserted after midnight.",
    "seal off": "Police sealed off the area after the accident.",
    undergrowth: "The path disappeared into thick undergrowth.",
    swamp: "Heavy rain turned the field into a swamp.",
    spook: "The sudden noise spooked the horses.",
    "hue and cry": "The decision caused a hue and cry in the media.",
    wail: "The baby began to wail loudly.",
    maul: "The article was mauled by critics.",
    prize: "I prize honesty more than clever excuses.",
    "bristle with": "The report bristles with technical terms.",
    allegedly: "He allegedly took the documents home.",
    subliminal: "The advert used subliminal messages.",
    "be sued": "The company may be sued for negligence.",
    trifle: "The mistake was a trifle, not a disaster.",
    nourish: "A good meal can nourish both body and mind.",
    overindulged: "The overindulged child expected a gift every day.",
    bulge: "The bag began to bulge with books.",
    clench: "She clenched her fists in anger.",
    obese: "The doctor warned that obese patients face higher risks.",
    wax: "The candle was made of natural wax.",
    rationale: "Can you explain the rationale behind this decision?",
    caveat: "I agree, with one important caveat.",
    wad: "He pulled a wad of notes from his pocket.",
    slobber: "The toddler began to slobber on his shirt.",
    wretched: "They lived in wretched conditions.",
    invariably: "He is invariably late on Mondays.",
    "household name": "The singer became a household name.",
    elaborate: "Could you elaborate on your answer?",
    "roundhouse kick": "The fighter landed a clean roundhouse kick.",
    avid: "She is an avid reader of crime novels.",
    encroaching: "Encroaching buildings changed the character of the village.",
    urchin: "The story follows a poor street urchin.",
    bustling: "The market was bustling with shoppers.",
    tycoon: "A media tycoon bought the newspaper.",
    malfeasance: "The investigation uncovered political malfeasance.",
    bolster: "The win helped bolster their confidence.",
    engulf: "Smoke began to engulf the room.",
    "the Establishment": "The artist enjoyed criticising the Establishment.",
    scrutinise: "The committee will scrutinise the spending.",
    kickback: "The official accepted a kickback from the contractor.",
    hub: "The airport is a major transport hub.",
    tenuous: "There is only a tenuous link between the two cases.",
    menace: "The broken bridge was a menace to drivers.",
    unrepentant: "He remained unrepentant after the scandal.",
    bleak: "The future looked bleak after the factory closed.",
    chirpy: "She sounded chirpy despite the bad weather.",
    abridged: "We read an abridged version of the novel.",
    acerbic: "Her acerbic comments shocked the audience.",
    impervious: "He seemed impervious to criticism.",
    harsh: "The punishment was too harsh.",
    divisive: "The proposal proved highly divisive.",
    rile: "His arrogance can rile even patient people.",
    hiatus: "The band returned after a long hiatus.",
    tumble: "Shares took a tumble after the announcement.",
    wit: "Her wit made the conversation enjoyable.",
    "bandy about": "People bandied about several names for the job.",
    accrue: "Interest will accrue over time.",
    "take umbrage": "She took umbrage at his remark.",
    scrutiny: "The deal is under close scrutiny.",
    malice: "There was no malice in his comment.",
    twist: "The story has a clever twist at the end.",
    "at a loss": "I was at a loss for words.",
    quench: "Cold water helped quench my thirst.",
    ilk: "I do not trust people of his ilk.",
    sideline: "The injury sidelined him for two months.",
    tacky: "The souvenir shop sold tacky plastic gifts.",
    ramshackle: "They lived in a ramshackle old house.",
    "abide by": "You must abide by the rules.",
    bribe: "The officer refused to accept a bribe.",
    reek: "The kitchen began to reek of smoke.",
    prosecutor: "The prosecutor questioned the witness.",
    disarming: "He had a disarming smile.",
    embrace: "The company decided to embrace new technology.",
    punter: "The pub was full of regular punters.",
    "go under": "Many small shops went under during the crisis.",
    ominous: "Dark clouds were an ominous sign.",
    salivate: "The smell of fresh bread made me salivate.",
    "disposable income": "Students often have little disposable income.",
    soar: "Energy prices continued to soar.",
    frequented: "The cafe is frequented by students.",
    "cut the deepest": "Her criticism cut the deepest.",
    dismiss: "The manager dismissed the complaint.",
    claptrap: "That explanation is complete claptrap.",
    shawl: "She wrapped a warm shawl around her shoulders.",
    rudimentary: "He has only a rudimentary knowledge of French.",
    "rough and tumble": "The children enjoyed some rough and tumble in the garden.",
    "full-blown": "The argument turned into a full-blown crisis.",
    domesticate: "Humans domesticated dogs thousands of years ago.",
    beak: "The bird cleaned its beak on a branch.",
    notwithstanding: "Notwithstanding the risks, they continued.",
    laud: "Critics laud her latest performance.",
    "pull over": "The police asked the driver to pull over.",
    "per se": "The idea is not bad per se.",
    seize: "Customs officers seized the illegal goods.",
    clampdown: "The city announced a clampdown on illegal parking.",
    "in effect": "The new rule is, in effect, a tax increase.",
    rupture: "The scandal caused a rupture between the allies.",
    manslaughter: "He was charged with manslaughter.",
    exploit: "Some companies exploit cheap labour.",
    incentive: "The bonus is an incentive to work harder.",
    paltry: "They offered him a paltry sum for the work.",
    eerie: "The empty school felt eerie at night.",
    febrile: "The debate created a febrile atmosphere.",
    encroach: "New buildings began to encroach on the forest.",
    bar: "The club decided to bar him for bad behaviour.",
    intrepid: "The intrepid reporter entered the war zone.",
    rash: "It was rash to make a promise so quickly.",
    droop: "The flowers began to droop in the heat.",
    crooked: "The picture is crooked on the wall.",
    exaggerate: "Do not exaggerate the size of the problem.",
    chutzpah: "It took real chutzpah to ask for a raise after one week.",
    "go apeshit": "My brother went apeshit when he saw the broken screen.",
    suss: "I need to suss out what went wrong.",
    mundane: "I spent the morning doing mundane tasks.",
    chastise: "The coach chastised the players after the match.",
    deviant: "The study focused on deviant behaviour.",
    consent: "You need consent before sharing private data.",
    barricade: "Protesters built a barricade across the road.",
    modesty: "Her modesty made the compliment even sweeter.",
    "wipe out": "The disease could wipe out the crop.",
    aspire: "She aspires to become a lawyer.",
    "put off": "The rain put off many visitors.",
    convene: "The board will convene on Friday.",
    intimidate: "They tried to intimidate the witness.",
    "love handles": "He joked about losing his love handles.",
    "incline to": "I incline to the second option.",
    tagline: "The brand needs a memorable tagline.",
    odd: "There was an odd smell in the room.",
    defy: "The result seemed to defy logic.",
    outset: "We agreed on the rules at the outset.",
    potent: "The medicine is very potent.",
    "command economy": "A command economy is controlled by the state.",
    plausible: "Her explanation sounded plausible.",
    abundant: "Fresh water is abundant in this region.",
    flabbergasting: "The price of the ticket was flabbergasting.",
    reactionary: "The newspaper took a reactionary position.",
    illogical: "His conclusion was completely illogical.",
    "conjure up": "The smell conjured up memories of childhood.",
    frame: "They tried to frame him for the crime.",
    surefire: "Practice is a surefire way to improve.",
    impressionable: "Young children can be very impressionable.",
    bookie: "The bookie changed the odds before the race.",
    undue: "The delay caused undue stress.",
    pedigree: "The horse has an impressive pedigree.",
    odds: "The odds are against us.",
    "cutting edge": "The company develops cutting edge technology.",
    align: "Please align the text with the left margin.",
    alignment: "There is strong alignment between our goals.",
    plague: "Technical problems continued to plague the project.",
    lodged: "A small stone was lodged in the tyre.",
    accentuate: "The lighting accentuated the shape of the building.",
    crusade: "She began a crusade against food waste.",
    "go gangbusters": "The new app is going gangbusters.",
    harrowing: "The documentary was harrowing to watch.",
    lament: "Many residents lament the loss of green spaces.",
    wonky: "The table is wonky and needs fixing.",
    blunt: "The knife is too blunt to cut bread.",
    castigate: "The report castigated the company for negligence.",
    poof: "The word poof is offensive and should be avoided.",
    outcast: "He felt like an outcast at school.",
    shun: "The community began to shun him.",
    wistful: "She gave a wistful smile.",
    impassive: "The judge remained impassive throughout the trial.",
    reconcile: "They finally managed to reconcile after the argument.",
    composed: "She stayed composed under pressure.",
    deadpan: "He delivered the joke in a deadpan voice.",
    bluntly: "She told him bluntly that he was wrong.",
    picky: "He is picky about the food he eats.",
    plaintiff: "The plaintiff is seeking damages.",
    oust: "The board voted to oust the chairman.",
    jibe: "He ignored the jibe and kept speaking.",
    ignite: "One careless comment can ignite an argument.",
    "bury the hatchet": "After years of conflict, they buried the hatchet.",
    tempestuous: "They had a tempestuous relationship.",
    berate: "The teacher did not berate him for the mistake.",
    "simmer down": "Everyone needs to simmer down before we continue.",
    "spent force": "After the scandal, the movement became a spent force.",
    facile: "That is a facile answer to a complex problem.",
    baffle: "The strange result baffled the scientists.",
    "abyssal plain": "Researchers mapped the abyssal plain in detail.",
    alter: "A small change can alter the whole meaning.",
    acquire: "It takes time to acquire a new skill.",
    incur: "The company may incur extra costs.",
    enforce: "Schools must enforce clear safety rules.",
    compromise: "The leak could compromise the whole system.",
    enhance: "Good lighting can enhance the mood of a room.",
  };

  const normalized = normalizeWord(word);
  const foundExample = examples[normalized] || examples[word];

  if (foundExample) {
    return foundExample;
  }

  return `The word "${word}" is useful when talking about ${translation.split(/[;,]/)[0].toLowerCase()}.`;
}

let cards = loadCards();
let currentIndex = 0;

const tabButtons = document.querySelectorAll(".tab-button");
const views = document.querySelectorAll(".view");
const flashcard = document.querySelector("#flashcard");
const cardWord = document.querySelector("#card-word");
const cardTranslation = document.querySelector("#card-translation");
const cardExample = document.querySelector("#card-example");
const deckStatus = document.querySelector("#deck-status");
const prevButton = document.querySelector("#prev-card");
const nextButton = document.querySelector("#next-card");
const shuffleButton = document.querySelector("#shuffle-cards");
const form = document.querySelector("#word-form");
const wordId = document.querySelector("#word-id");
const wordInput = document.querySelector("#word-input");
const translationInput = document.querySelector("#translation-input");
const exampleInput = document.querySelector("#example-input");
const clearFormButton = document.querySelector("#clear-form");
const wordList = document.querySelector("#word-list");
const wordCount = document.querySelector("#word-count");
const frontFace = document.querySelector(".flashcard-front");
const backFace = document.querySelector(".flashcard-back");

function loadCards() {
  const saved = localStorage.getItem(storageKey);

  if (!saved) {
    const initialCards = withIds(seedCards);
    localStorage.setItem(storageKey, JSON.stringify(initialCards));
    return initialCards;
  }

  try {
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return withIds(seedCards);
    }

    const mergedCards = mergeSeedCards(parsed);
    localStorage.setItem(storageKey, JSON.stringify(mergedCards));
    return mergedCards;
  } catch {
    return withIds(seedCards);
  }
}

function saveCards() {
  localStorage.setItem(storageKey, JSON.stringify(cards));
}

function withIds(items) {
  return items.map((item) => ({
    id: item.id || crypto.randomUUID(),
    word: item.word,
    translation: item.translation,
    example: item.example || createExample(item.word, item.translation),
  }));
}

function normalizeWord(value) {
  return value.trim().toLowerCase().replace(/\s+/g, " ");
}

function mergeSeedCards(savedCards) {
  const hydratedSavedCards = withIds(savedCards);
  const normalizedSavedWords = new Set(hydratedSavedCards.map((item) => normalizeWord(item.word || "")));
  const missingSeedCards = seedCards.filter((item) => !normalizedSavedWords.has(normalizeWord(item.word)));

  return [...hydratedSavedCards, ...withIds(missingSeedCards)];
}

function setView(viewName) {
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === viewName);
  });

  views.forEach((view) => {
    view.classList.toggle("active", view.id === `${viewName}-view`);
  });
}

function renderStudyCard() {
  flashcard.classList.remove("flipped");

  if (cards.length === 0) {
    cardWord.textContent = "Dodaj pierwsze słowo";
    cardTranslation.textContent = "Zakładka Słowa czeka";
    cardExample.textContent = "";
    deckStatus.textContent = "0 słów";
    resizeFlashcardText();
    return;
  }

  currentIndex = Math.min(currentIndex, cards.length - 1);
  const card = cards[currentIndex];
  cardWord.textContent = card.word;
  cardTranslation.textContent = card.translation;
  cardExample.textContent = card.example || "Brak przykładowego zdania";
  deckStatus.textContent = `${currentIndex + 1} z ${cards.length}`;
  resizeFlashcardText();
}

function resizeFlashcardText() {
  requestAnimationFrame(() => {
    fitTextToFace(frontFace, cardWord);
    fitTextToFace(backFace, cardTranslation);
  });
}

function fitTextToFace(face, textElement) {
  textElement.style.fontSize = "";

  const computed = getComputedStyle(textElement);
  const maxSize = parseFloat(computed.fontSize);
  const minSize = window.innerWidth < 640 ? 26 : 30;
  let size = maxSize;

  textElement.style.fontSize = `${size}px`;

  while (size > minSize && (face.scrollHeight > face.clientHeight || face.scrollWidth > face.clientWidth)) {
    size -= 2;
    textElement.style.fontSize = `${size}px`;
  }
}

function renderWordList() {
  wordCount.textContent = cards.length;
  wordList.innerHTML = "";

  if (cards.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Nie masz jeszcze słów. Dodaj pierwszą fiszkę formularzem obok.";
    wordList.append(empty);
    return;
  }

  cards.forEach((card) => {
    const item = document.createElement("article");
    item.className = "word-item";
    item.innerHTML = `
      <div>
        <h3>${escapeHtml(card.word)} — ${escapeHtml(card.translation)}</h3>
        <p>${escapeHtml(card.example || "Brak przykładowego zdania")}</p>
      </div>
      <div class="item-actions">
        <button class="small-button" type="button" data-action="edit" data-id="${card.id}">Edytuj</button>
        <button class="small-button delete" type="button" data-action="delete" data-id="${card.id}">Usuń</button>
      </div>
    `;
    wordList.append(item);
  });
}

function renderAll() {
  renderStudyCard();
  renderWordList();
}

function resetForm() {
  wordId.value = "";
  form.reset();
  wordInput.focus();
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

flashcard.addEventListener("click", () => {
  if (cards.length > 0) {
    flashcard.classList.toggle("flipped");
    resizeFlashcardText();
  }
});

window.addEventListener("resize", resizeFlashcardText);

prevButton.addEventListener("click", () => {
  if (cards.length === 0) return;
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  renderStudyCard();
});

nextButton.addEventListener("click", () => {
  if (cards.length === 0) return;
  currentIndex = (currentIndex + 1) % cards.length;
  renderStudyCard();
});

shuffleButton.addEventListener("click", () => {
  if (cards.length === 0) return;
  currentIndex = Math.floor(Math.random() * cards.length);
  renderStudyCard();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const id = wordId.value || crypto.randomUUID();
  const nextCard = {
    id,
    word: wordInput.value.trim(),
    translation: translationInput.value.trim(),
    example: exampleInput.value.trim(),
  };

  if (!nextCard.word || !nextCard.translation) return;

  const existingIndex = cards.findIndex((card) => card.id === id);
  if (existingIndex >= 0) {
    cards[existingIndex] = nextCard;
    currentIndex = existingIndex;
  } else {
    cards.push(nextCard);
    currentIndex = cards.length - 1;
  }

  saveCards();
  resetForm();
  renderAll();
  setView("study");
});

clearFormButton.addEventListener("click", resetForm);

wordList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const card = cards.find((item) => item.id === button.dataset.id);
  if (!card) return;

  if (button.dataset.action === "edit") {
    wordId.value = card.id;
    wordInput.value = card.word;
    translationInput.value = card.translation;
    exampleInput.value = card.example;
    wordInput.focus();
    return;
  }

  cards = cards.filter((item) => item.id !== card.id);
  currentIndex = Math.max(0, Math.min(currentIndex, cards.length - 1));
  saveCards();
  renderAll();
});

renderAll();
