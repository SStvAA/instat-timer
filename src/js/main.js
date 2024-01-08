'use strict';
const EventBus = new Vue;

Vue.component('translater-component', {
    data: function(){
        return {
            langs: [],
            dialogs: {
                lang: null,
                translations: {}
            },
            translations: null,
            configuration: {
                lang: null
            },
            logic: {
                intervals: []
            }
        }
    },
    created: function(){
        // generate langs and translations
        this.initialization().langs();
        this.initialization().translations();

        // load configuration
        this.initialization().configuration();

        // send configuration to UI
        this.translater();

        // create interval of update lang
        this.initialization().interval();

    },
    methods: {
        initialization: function(){
            return {
                langs: () => {
                    this.langs = [
                        {
                            name: 'english',
                            localName: 'english'
                        },
                        {
                            name: 'spanish',
                            localName: 'español'
                        },
                        {
                            name: 'russian',
                            localName: 'русский'
                        },
                    ]
                },
                translations: () => {
                    this.translations = {
                        start_period: {
                            english: 'Start period',
                            spanish: 'Iniciar periodo',
                            russian: 'Начать период'
                        },
                        total_time: {
                            english: "Total time",
                            spanish: "Tiempo total",
                            russian: "Общее время"
                        },
                        action: {
                            english: "Action",
                            spanish: "Acción",
                            russian: "Действие"
                        },
                        duration: {
                            english: "Duration",
                            spanish: "Duración",
                            russian: "Длительность"
                        },
                        there_are_no_activities: {
                            english: "There are no activities",
                            spanish: "No hay actividades",
                            russian: "Нет действий"
                        },
                        phase: {
                            "english": "Phase",
                            "spanish": "Fase",
                            "russian": "Фаза"
                        },
                        start: {
                            "english": "Start",
                            "spanish": "Empezar",
                            "russian": "начинать"
                        },
                        complete: {
                            "english": "Complete",
                            "spanish": "Completar",
                            "russian": "Завершить"
                        },
                        continue: {
                            "english": "Continue",
                            "spanish": "Continuar",
                            "russian": "Продолжать"
                        },
                        rest: {
                            "english": "Rest",
                            "spanish": "Descanso",
                            "russian": "Отдыхать"
                        },
                        completed_period: {
                            "english": "Completed Period",
                            "spanish": "Periodo Completado",
                            "russian": "Завершенный Период"
                        },
                        session_of: {
                            "english": "Session of",
                            "spanish": "Sesión de",
                            "russian": "Сессия"
                        },
                        time_in: {
                            english: "Time in",
                            spanish: "Tiempo en",
                            russian: "Время в"
                        },
                        total_analysis_time: {
                            english: "Total analysis time",
                            spanish: "Tiempo total de análisis",
                            russian: "Общее время анализа"
                        },
                        total_rest_time: {
                            english: "Total rest time",
                            spanish: "Tiempo total de descanso",
                            russian: "Общее время отдыха"
                        },
                        total_analysis_and_rest_time: {
                            english: "Total analysis and rest time",
                            spanish: "Tiempo total de análisis y descanso",
                            russian: "Общее время анализа и отдыха"
                        },
                        timer: {
                            english: "Timer",
                            spanish: "Temporizador",
                            russian: "Таймер"
                        },
                        foul_viewer: {
                            english: "Foul viewer",
                            spanish: "Visor de faltas",
                            russian: "Просмотрщик ошибок"
                        },
                        are_you_sure: {
                            english: "Are you sure?",
                            spanish: "¿Estás seguro?",
                            russian: "Вы уверены?"
                        },
                        definitions: {
                            english: "Definitions",
                            spanish: "Definiciones",
                            russian: "Определения"
                        },
                        translations: {
                            english: "Translations",
                            spanish: "Traducciones",
                            russian: "Переводы"
                        },
                        enter_the_name_or_description_of_the_foul: {
                            english: "Enter the name or description of the foul",
                            spanish: "Ingresa el nombre o descripción de la falta",
                            russian: "Введите имя или описание ошибки"
                        },
                        enter_the_name_of_the_foul: {
                            english: "Enter the name of the foul",
                            spanish: "Ingresa el nombre de la falta",
                            russian: "Введите название штрафа"
                        },
                        name: {
                            english: "Name",
                            spanish: "Nombre",
                            russian: "Имя"
                        },
                        illustration: {
                            english: "Illustration",
                            spanish: "Ilustración",
                            russian: "Иллюстрация"
                        },
                        description: {
                            english: "Description",
                            spanish: "Descripción",
                            russian: "Описание"
                        },
                        keep_the_click_pressed_to_zoom: {
                            english: "Keep the click pressed to zoom in",
                            spanish: "Mantenga el click presionado para ampliar",
                            russian: "Держите нажатой кнопку мыши для увеличения"
                        },
                        you_can_send_an_image_to_set_it_here: {
                            english: "You can send an image to set it here",
                            spanish: "Puedes enviar una imagen para establecerla aqui",
                            russian: "Вы можете отправить изображение, чтобы установить его здесь"
                        },
                        english: {
                            english: "English",
                            spanish: "Inglés",
                            russian: "Английский"
                        },
                        german: {
                            english: "German",
                            spanish: "Alemán",
                            russian: "Немецкий"
                        },
                        finnish: {
                            english: "Finnish",
                            spanish: "Finlandés",
                            russian: "Финский"
                        },
                        slovak: {
                            english: "Slovak",
                            spanish: "Eslovaco",
                            russian: "Словацкий"
                        },
                        french: {
                            english: "French",
                            spanish: "Francés",
                            russian: "Французский"
                        },
                        polish: {
                            english: "Polish",
                            spanish: "Polaco",
                            russian: "Польский"
                        },
                        no_results_found: {
                            english: "No results found",
                            spanish: "No se encontraron resultados",
                            russian: "Результаты не найдены"
                        },
                        rest_time: {
                            english: "Rest time",
                            spanish: "Tiempo de descanso",
                            russian: "Время отдыха"
                        },
                        minutes: {
                            english: "Minutes",
                            spanish: "Minutos",
                            russian: "Минуты"
                        },
                        change_after_restart: {
                            english: "Changes will be applied after restarting the program",
                            spanish: "Los cambios serán aplicados luego de reiniciar el programa",
                            russian: "Изменения будут применены после перезапуска программы"
                        },
                        current_date: {
                            "english": new Date().toLocaleDateString('eng', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                            "spanish": new Date().toLocaleDateString('esp', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                            "russian": new Date().toLocaleDateString('rus', {
                                            weekday: 'long',
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }),
                        }
                    
                    }

                },
                configuration: () => {
                    this.configuration = this.settings().get();
                },
                interval: () => {
                    this.translater();
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.translater();
                        }, 500)
                    });
                }

            }
        },
        settings: function(){
            return {
                get: () => {
                    try{
                        (new Configuration(this.$options.name)).get();
                    }catch{
                        return this.settings().default();
                    }

                    return (new Configuration(this.$options.name)).get();
                },
                set: (object) => {
                    (new Configuration(this.$options.name)).set(object);
                },
                default: () => {
                    const configuration = {
                        lang: 'english'
                    }
                    this.settings().set(configuration);
                    return configuration;
                },
                save: () => {
                    this.settings().set({
                        lang: this.configuration.lang
                    });
                }
            }

        },
        changeLang: function(lang){
            this.configuration.lang = lang;
            this.settings().save();
        },
        translater: function(){
            const dialogs = new Object;
            for(const key of Object.keys(this.translations)){
                dialogs[key] = this.translations[key][this.configuration.lang];
            }


            this.dialogs = {
                lang: this.configuration.lang,
                translations: dialogs
            };


        }


    },

    template: '#translater-component-template'


});

Vue.component('foul-viewer-component', {
    data: function(){
        return {
            dialogs: {
                lang: null,
                translations: {}
            },
            fouls: {
                description: {
                    list: [],
                    filter: null
                },
                translation: {
                    list: [],
                    filter: null
                }
            },
            tabs: {
                active: null
            },
            logic: {
                intervals: []
            }

        }
    },
    created: function(){
        // make list of description fouls
        this.initialization().foulDescriptions();
        // make list of translations fouls
        this.initialization().foulTranslations();

        // create intervals
        this.initialization().intervals();
        
        // set default active tab
        this.setTabView('descriptions');
    },
    methods: {
        initialization: function() {
            return {
                foulDescriptions: () => {
                    this.fouls.description.list = this.dictionary().description();
                },
                foulTranslations: () => {
                    this.fouls.translation.list = this.dictionary().translation();
                },
                intervals: () => {
                    // UI DIALOGS
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.dialogs = this.$root.getDialogs();
                        }, 100)
                    });
                }
            }
        },
        setTabView: function(tab) {
            this.tabs.active = tab;
            setTimeout(()=>{
                document.querySelector(`#search-${tab}`).focus();
            }, 100)
            
        },
        dictionary: function(){
            return {
                description: () => {
                    const list = [
                        [
                            'Boarding',
                            {
                                english: "Head injury",
                                spanish: "Golpe a la cabeza",
                                russian: "Удар в голову"
                            },
                            '../img/fouls/boarding.png'
                        ],
                        [
                            'Unsportmanlike conduct',
                            {
                                english: "Behaviors like verbal or physical aggression such as biting, taking off the helmet of the opponent",
                                spanish: "Conductas como agresión verbal o física como morder, quitarle el casco al oponente",
                                russian: "Поведение, такое как вербальная или физическая агрессия, например, кусание или снятие шлема соперника"
                            },
                            '../img/fouls/unsportmanlike_conduct.png'
                        ],
                        [
                            'Roughing',
                            {
                                english: "Using unnecessary force such as grabbing or hitting",
                                spanish: "Usar fuerza innecesaria como agarrar o golpear",
                                russian: "Использование ненужной силы, например, захват или удар"
                            },
                            '../img/fouls/roughing.png'
                        ],
                        [
                            'High-sticking',
                            {
                                english: "Stick up to try to hit or strike the opponent with the stick lifted",
                                spanish: "Palo arriba para intentar golpear o golpear al rival con el palo levantado",
                                russian: "Поднятый палкой, чтобы попытаться ударить или ударить противника с поднятой палкой"
                            },
                            '../img/fouls/high_sticking.png'
                        ],
                        [
                            'Hooking / Holding',
                            {
                                english: "Grabbing a player with the stick or hands to stop him",
                                spanish: "Agarrar con el palo o las manos a un jugador para detenerlo",
                                russian: "Захват игрока с помощью палки или рук для остановки его"
                            },
                            [
                                '../img/fouls/hooking.png',
                                '../img/fouls/holding.png',
                            ]
                        ],
                        [
                            'Interference',
                            {
                                english: "Hitting with the body or crossing the body to the goalkeeper or opponent not carrying the disc to stop them",
                                spanish: "Golpear con el cuerpo o cruzar el cuerpo al portero o rival que no lleva el disco para detenerlo",
                                russian: "Удар телом или пересечение тела вратаря или соперника, не несущего диск, чтобы остановить их"
                            },
                            '../img/fouls/interference.png'
                        ],
                        [
                            'Slashing  (Hit)',
                            {
                                english: "Hitting the body or stick of the opponent with the stick",
                                spanish: "Golpear con el palo el cuerpo o el palo del rival",
                                russian: "Удар по телу или палке соперника с помощью палки"
                            },
                            '../img/fouls/boarding.png'
                        ],
                        [
                            'Elbowing (Hit)',
                            {
                                english: "Hitting the opponent with an elbow up",
                                spanish: "Golpear con el codo arriba al rival",
                                russian: "Удар по сопернику с поднятым локтем"
                            },
                            '../img/fouls/elbowing.png'
                        ],
                        [
                            'Kicking (Hit)',
                            {
                                english: "Kicking or kneeing the opponent",
                                spanish: "Patear o dar un rodillazo al rival",
                                russian: "Удар или коленом по сопернику"
                            },
                            '../img/fouls/kicking.png'
                        ],
                        [
                            'Tripping',
                            {
                                english: "Tripping the opponent with the stick",
                                spanish: "Hacer tropezar al rival con el palo",
                                russian: "Сбитие с ног соперника с помощью палки"
                            },
                            '../img/fouls/tripping.png'
                        ],
                        [
                            'Fighting',
                            {
                                english: "Fight of 1 player from each team",
                                spanish: "Pelea de 1 jugador de cada equipo",
                                russian: "Борьба 1 игрока из каждой команды"
                            },
                            '../img/fouls/fighting.png'
                        ],
                        [
                            'Charging',
                            {
                                english: "Illegal charge",
                                spanish: "Carga ilegal",
                                russian: "Незаконная обвинительная заявка"
                            },
                            '../img/fouls/charging.png'
                        ],
                        [
                            'Target moved (1P)',
                            {
                                english: "Moving the goal with intent",
                                spanish: "Mover la porteria con intención",
                                russian: "Перемещение ворот с намерением"
                            },
                            null
                        ],
                        [
                            'Unsportmanlike conduct (1P)',
                            {
                                english: "When it is a single player who provokes or verbally aggresses an official",
                                spanish: "Cuando es un solo jugador el que provoca o agrede verbalmente a un arbitro",
                                russian: "Когда один игрок провоцирует или вербально нападает на судью"
                            },
                            null
                        ],
                        [
                            'Puck over the glass (1P)',
                            {
                                english: "Shooting the puck out of the rink with intent",
                                spanish: "Mandar el puck hacia afuera de la cancha con intención",
                                russian: "Выстрел мячом за пределы катка с намерением"
                            },
                            null
                        ],
                        [
                            'Too Many Man (E)',
                            {
                                english: "When the team has more than 6 players inside the rink",
                                spanish: "Cuando el equipo tiene mas de 6 jugadores dentro de la cancha",
                                russian: "Когда команда имеет более 6 игроков внутри катка"
                            },
                            null
                        ],
                        [
                            'Unsportmanlike conduct (E)',
                            {
                                english: "Unsportsmanlike conduct of the team, mass fights, or coach or trainer",
                                spanish: "Conductas antideportivas del equipo, peleas masivas, o del coach o entrenador",
                                russian: "Неспортивное поведение команды, массовые драки или тренера или коуча"
                            },
                            null
                        ],
                    ]
        
                    const fouls = [];
                    for(const foul of list){
                        fouls.push({
                            name: foul[0],
                            description: foul[1],
                            img: foul[2]
                        });
                    }
                    return fouls;
                },
                translation: () => {
                    const fouls = `[{"english":"Abuse of officials","german":"Beschimpfung von Offiziellen","finnish":"Sopimaton käytös tuomaristoa kohtaan","slovak":"Napadání rozhodčích","french":"Incorrections des joueurs/officiels d'équipe envers les officiels et","polish":"Obraza sędziego"},{"english":"Aggressor","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Attempt to injure","german":null,"finnish":null,"slovak":"Nadměrná tvrdost","french":null,"polish":null},{"english":"Biting","german":"Beissen","finnish":null,"slovak":"Kousnutí","french":"Mordre","polish":"Gryzienie"},{"english":"Boarding","german":"Check gegen die Bande / Bandencheck","finnish":"Laitataklaus","slovak":"Vrážení na hrazení","french":"Charge contre la bande/Projection contre la bande/ Donner de la bande","polish":"Rzucenie na bandę"},{"english":"Broken stick","german":"Gebrochener Stock - Spielen mit - Ersatz","finnish":"Rikkoutunut maila","slovak":"Zlomená hůl","french":"Crosses brisées","polish":"Gra ze złamanym kijem"},{"english":"Butt ending/Stabbing","german":"Stockendstoss","finnish":"Mailan päällä lyіminen","slovak":"Bodnutí špičkou či koncem hole","french":"harponner / six-pouces","polish":"Uderzanie trzonkiem kija"},{"english":"Charging","german":"Unerlaubter Körperangriff","finnish":"Ryntäys","slovak":"Napadení","french":"Assaut/Charge incorrecte","polish":"Atakowanie ciałem - natarcie"},{"english":"Checking from behind","german":"Check von hinten","finnish":"Selästä taklaaminen","slovak":"Naražení zezadu","french":"Charge dan le dos/mise en échec par derrière","polish":"Atakowanie z tyłu / Atak z tyłu"},{"english":"Clipping","german":"Check gegen das Knie","finnish":"Leikkaaminen","slovak":"Pád pod nohy","french":"Coupage","polish":"Podcięcie"},{"english":"Closing hand on puck/Handling puck","german":"Einschliessen des Pucks mit der Hand","finnish":"Pelin viivyttäminen - kiekon peittäminen","slovak":"Hraní puku rukou","french":"Joueur/gardien maniant la rondelle avec ses mains","polish":"Zamykanie krazka w rekawicy"},{"english":"Cross checking, Crosschecking","german":"Check mit dem Stock","finnish":"Poikittainen maila","slovak":"Krosček","french":"Charge avec la crosse/Faire double-échec","polish":"Atak kijem trzymanym oburącz"},{"english":"Delay of game","german":null,"finnish":"Pelin viivyttäminen","slovak":"Zdržování hry","french":"Retarder le jeu","polish":"Opóźnianie gry"},{"english":"Displaced goal net (Delay of game)","german":null,"finnish":"Maalin siirtäminen (pelin viivyttäminen)","slovak":"Posunutá branka (Zdržování hry)","french":"Deplacer le but (Retarder le jeu)","polish":"Poruszenie bramki (opóźnianie gry)"},{"english":"Diving/Embellishment","german":"Schwalbe oder Täuschung","finnish":"Sukeltaminen","slovak":"Nafilmovaný pád","french":"Plonger/Plongeon et simulation","polish":"Wymuszanie kary (symulowanie) / Nurkowanie"},{"english":"Elbowing","german":"Ellbogencheck","finnish":"Kyynärpäätaklaus","slovak":"Faul loktem","french":"Coup de coude/donner du coude","polish":"Atak łokciem"},{"english":"Eye-gouging","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Face-off violation","german":"Verstoss gegen Anspielverfahren","finnish":"Pelin viivyttäminen - rike aloitustapahtu","slovak":"ZHPV/Zdržování hry Postup vhazování","french":"Infraction à la procédure d'engagem","polish":null},{"english":"Falling on the puck","german":"Fallen auf den Puck","finnish":null,"slovak":"Padnutí na puk","french":"Joueur/gardien se laissant tomber sur le palet","polish":"Upadanie na krazek (opóźnianie gry)"},{"english":"Fighting","german":"Faustkampf","finnish":"Tappelu","slovak":"Rvačka/Bitka","french":"Battu/Bagarre","polish":"Bójka / Walka na pięści"},{"english":"Freezing the Puck unnecessarily","german":"Unnötiges blockieren des Pucks","finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Goal celebration","german":"Torjubel","finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Goaltender interference","german":"Behinderung am Torhüter","finnish":"Maalivahdin estäminen","slovak":"Nedovolené bránění brankáří","french":"Obstruction sur un gardien de but","polish":"Przeszkadzanie bramkarzowi"},{"english":"Goaltender leaving the crease","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Head butting","german":"Kopfstoß","finnish":"Päällä iskeminen","slovak":"Úder hlavou","french":"Coup de tête","polish":"Uderzenie głową"},{"english":"High-sticking","german":"Hoher Stock","finnish":"Korkea maila","slovak":"Vysoká hůl","french":"Crosse haute/bâton élevé/Porter son bâton trop élevé","polish":"Wysoki kij / Wysoko uniesiony kij"},{"english":"Holding","german":"Halten","finnish":"Kiinnipitäminen","slovak":"Držení","french":"Retenir","polish":"Trzymanie"},{"english":"Holding the stick","german":"Halten des Stocks/Stockhalten","finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Hooking","german":"Haken","finnish":"Koukkaaminen","slovak":"Hákování","french":"Accrocher","polish":"Zahaczenie"},{"english":"Illegal check to the head/Hit to the Head","german":"Check gegen den Kopf oder Nacken","finnish":"Pään tai niskan alueelle kohdistuva taklau","slovak":"Zásah do oblasti hlavy a krku","french":"Charge contre la tête ou le cou/Coup à la tête","polish":"Atak w okolice głowy lub szyi przeciwnika"},{"english":"Illegal equipment","german":"Gefährliche Ausrüstung","finnish":"Vaarallinen varuste/Sääntіjen vastainen v","slovak":"Nedovolená nebo nebezpečná výstroj","french":"Equipement interdit/Équipement non conforme","polish":null},{"english":"Illegal hit /body checking","german":"Regelwidriger Check","finnish":null,"slovak":"Hra tělem v ženském hokeji","french":"charge avec le corps/Mise en échec illégale","polish":null},{"english":"Instigator/Instigating","german":null,"finnish":null,"slovak":null,"french":"Instigateur","polish":null},{"english":"Interference","german":"Behinderung","finnish":"Estäminen","slovak":"Nedovolené bránění","french":"Obstruction","polish":"Przeszkadzanie"},{"english":"Joining the fight","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Kicking","german":"Kicken","finnish":"Potkaiseminen","slovak":"Kopnutí","french":"Coup de pied","polish":"Kopnięcie"},{"english":"Kneeing","german":"Check mit dem Knie/Kniestich","finnish":"Polvitaklaus","slovak":"Faul kolenem","french":"Coup de genou/donner du genou","polish":"Atak kolanem"},{"english":"Late hit","german":"Später Check","finnish":"myöhästynyt taklaus","slovak":"Pozdní dohrání","french":"Charge tardive","polish":"Spóźniony atak ciałem"},{"english":"Late Line-up","german":"Verspätetes Aufstellen","finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Leaving the penalty bench","german":"Zu frühes verlassen der Strafbank","finnish":null,"slovak":"Opuštění trestné nebo hráčské lavice","french":"Joueurs quittant le banc des pénalités","polish":null},{"english":"Participating in the play beyond the center red line","german":null,"finnish":"Brankář za střední čárou","slovak":null,"french":null,"polish":null},{"english":"Playing with too many sticks","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Playing without a helmet","german":"Spielen ohne Helm","finnish":null,"slovak":null,"french":null,"polish":"Gra bez kasku"},{"english":"Puck over the glass - delaying the game","german":"Schießen oder werfens des Pucks aus dem Spielfel","finnish":"Pelin viivyttäminen - kiekko katsomoon","slovak":"Zdržování hry / vystřelení nebo vyhození puku mimo hřiště","french":"Tirer ou jeter le puck en dehors de la surface de jeu (Retarder le jeu)","polish":"Wystrzelenie lub Wyrzucenie krazka (opóźnianie gry)"},{"english":"Pulling hair, helmet, cage","german":"Ziehen an den Haaren, Helm, Gitter","finnish":null,"slovak":null,"french":null,"polish":"Ciagniecie za wlosy, kask, krate"},{"english":"Refusing to start/continue play","german":"Verweigerung das Spiel zu beginnen","finnish":"Kieltäytyminen aloituksesta","slovak":"Odmítnutí zahájit hru","french":"Refus de jouer/Refus d'engagement","polish":"Odmowa rozpoczęcia gry"},{"english":"Roughing","german":"Übertriebene Härte","finnish":"Väkivaltaisuus","slovak":"Hrubost","french":"Dureté excessive/Rudesse","polish":"Ostrość / Zbyteczna ostrość w grze"},{"english":"Secondary altercation","german":null,"finnish":null,"slovak":null,"french":null,"polish":null},{"english":"Slashing","german":"Stockschlag","finnish":"Huitominen","slovak":"Sekání","french":"Cinglage/coup de bâton","polish":"Uderzenie kijem"},{"english":"Slew footing","german":"Slew-Footing","finnish":null,"slovak":"Podkopnutí","french":"Faucher les patins / Balayage","polish":"Podcięcie z tyłu"},{"english":"Spearing","german":"Stockstich","finnish":"Keihästäminen","slovak":null,"french":"Piquage/darder","polish":"Kłucie koncem kija"},{"english":"Spitting","german":"Spucken","finnish":null,"slovak":null,"french":"Cracher","polish":"Plucie"},{"english":"Starting the wrong lineup","german":null,"finnish":"Väärä aloituskokoonpano","slovak":null,"french":null,"polish":null},{"english":"Substitution infraction (illegal)/Illegal Substitution","german":null,"finnish":"Porušení postupu při střídání hráčů","slovak":"Non-respect de la procédure des changements de joueurs","french":null,"polish":null},{"english":"Throwing the stick/equipment","german":"Werfen eines Stocks oder Gegenstands","finnish":"Mailan heitto","slovak":"Vyhození hole či jakéhokoli předmětu ze hřiště","french":"Jet de crosse ou d'objet hors de gl","polish":"Rzucanie kija lub innych przedmiotów"},{"english":"Too many men","german":"Zu viele Spieler auf dem Eis","finnish":"Liian monta pelaajaa jäällä","slovak":"Příliš mnoho hráčů","french":"Surnombre/Trop de joueurs sur la patinoire","polish":"Nadmierna liczba graczy na lodzie"},{"english":"Tripping","german":"Beinstellen","finnish":"Kampitus","slovak":"Podražení","french":"Faire trébucher","polish":"Spowodowanie upadku przeciwnika"},{"english":"Unsportsmanlike conduct","german":"Unsportliches Verhalten","finnish":"Epäurheilijamainen käytös","slovak":"Nesportovní chování","french":"Attitude antisportive/Comportement antisportif","polish":"Niesportowe zachowanie"}]`;

                    return JSON.parse(fouls);
                }
            }
        },
        search: function () {
            return {
                definition: () => {
                    const filter = this.fouls.description.filter;
                    const fouls = this.dictionary().description();
                    const foulsFiltered = [];
                    
                    if(filter === ''){
                        this.fouls.description.list = fouls;
                        return;
                    }
                    for(const foul of fouls){
                        for(const description of Object.values(foul.description)){
                            if(foul.name.toLowerCase().includes(filter.toLowerCase().trim()) || description.toLowerCase().includes(filter.toLowerCase().trim())){
                                foulsFiltered.push(foul);
                                break;
                            }
                        }
                    }
                    this.fouls.description.list = foulsFiltered;

                },
                translation: () => {
                    const filter = this.fouls.translation.filter;
                    const fouls = this.dictionary().translation();
                    const foulsFiltered = [];

                    if(filter === ''){
                        this.fouls.translation.list = fouls;
                        return;
                    }

                    for(const foul of fouls){
                        if(
                            foul.english.toLowerCase().includes(filter.toLowerCase().trim()) ||
                            (
                                foul.finnish !== null && foul.finnish.toLowerCase().includes(filter.toLowerCase().trim())
                            ) ||
                            (
                                foul.french !== null && foul.french.toLowerCase().includes(filter.toLowerCase().trim())
                            ) ||
                            (
                                foul.german !== null && foul.german.toLowerCase().includes(filter.toLowerCase().trim())
                            ) ||
                            (
                                foul.polish !== null && foul.polish.toLowerCase().includes(filter.toLowerCase().trim())
                            ) ||
                            (
                                foul.slovak !== null && foul.slovak.toLowerCase().includes(filter.toLowerCase().trim())
                            )
                        ){
                            foulsFiltered.push(foul);
                        }

                    }


                    this.fouls.translation.list = foulsFiltered;

                }
            }
        }

    },

    template: '#foul-viewer-component-template'
});

Vue.component('about-component', {

    template: '#about-component-template'
});

Vue.component('settings-component', {
    data: function(){
        return {
            dialogs: {
                lang: null,
                translations: {}
            },
            components: [
                {
                    name: 'timer'
                }
            ],
            configurations: [],
            logic: {
                intervals: []
            }
        }
    },
    created: function(){

        // load configuration
        this.initialization().configurations();

        // create intervals
        this.initialization().intervals();

    },
    methods: {
        initialization: function(){
            return {
                configurations: () => {
                    for(const component of this.components){
                        let configuration = this.settings().get(component.name);
                        if(configuration === null){
                            // set default configuration
                            configuration = this.settings().default(component.name);
                            configuration = this.settings().get(component.name);
                        }
                        this.configurations.push({
                            component: component.name,
                            configuration: configuration
                        });
                    }
                },
                intervals: () => {
                    // UI DIALOGS
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.dialogs = this.$root.getDialogs();
                        }, 100)
                    });
                }
            }

        },
        settings: function(){
            return {
                get: (component) => {
                    try{
                        return (new Configuration(`${component}-component`)).get();
                    }catch{
                        return null;
                    }
                },
               
                set: (component, object) => {
                    (new Configuration(`${component}-component`)).set(object);
                },
                default: (component) => {
                    let configuration = null;
                    if(component === 'timer'){
                        configuration = {
                            rest: {
                                time: 300000,
                                sound: '../sound/alarm.mp3'
                            }
                        }
                    }

                    if(configuration === null){
                        throw 'no default configuration saved';
                    }

                    this.settings().set(component, configuration)
                },
                
            }

        },
        reload: function(){
            document.location.reload();
        },
        saveConfiguration: function(component, object){
            if(component === 'timer'){
                let clonedObject = structuredClone(object);
                clonedObject.rest.time = parseInt(clonedObject.rest.time);
                this.settings().set(component, clonedObject);
            }
        }
    },


    template: '#settings-component-template'
})

Vue.component('history-component', {
    data: function () {
        return {
            dialogs: {
                lang: null,
                translations: {}
            },
            session: {
                activities: []
            },
            logic: {
                intervals: []
            }
        }
    },
    created: function(){
        // event bus
        EventBus.$on('timer-sendData', (event) => {
            this.history().update(event.data);
        });
        EventBus.$on('timer-endPeriod', () => {
            this.history().end();
        })

        // create intervals
        this.initialization().intervals();
    },
    methods: {
        initialization: function(){
            return {
                intervals: () => {
                    // Update timer data
                    this.logic.intervals.push({
                        name: 'REQUESTTIMERDATA',
                        function: setInterval(() => {
                            this.history().request();
                        }, 100)
                    });

                    // UI DIALOGS
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.dialogs = this.$root.getDialogs();
                        }, 100)
                    });
                }
            }
        },
        ending: function(){
            return {
                intervals: () => {
                    for(const interval of this.logic.intervals){
                        if(interval.name !== 'TRANSLATER'){
                            clearInterval(interval.function);
                        }
                    }

                }
            }
        },
        history: function(){
            return {
                request: () => {
                    EventBus.$emit('timer-requestData');
                },
                update: (data) => {
                    if(data.dates.start !== null){
                        this.session.activities = this.activity().format(this.activity().merge(data.activities), data.dates);
                    }
                },
                end: () => {
                    // clear intervals
                    this.ending().intervals();
                }
            }
        },
        activity: function(){
            return {
                format: (activities, dates) => {
                    for(const activity of activities){
                        let elapsedTime = 0;
                        let totalElapsedTime = 0;
                        
                        if(activity.dates.end ===  null){
                            elapsedTime = new Date() - new Date(activity.dates.start);
                            totalElapsedTime = new Date() - new Date(dates.start);
                        }else{
                            elapsedTime = new Date(activity.dates.end) - new Date(activity.dates.start);
                            totalElapsedTime = new Date(activity.dates.end) - new Date(dates.start);
                        }
                        activity.elapsedTime = {
                            normal: elapsedTime,
                            formatted: Tools.formatElapsedTime(elapsedTime, true)
                        }
                        activity.totalElapsedTime = {
                            normal: totalElapsedTime,
                            formatted: Tools.formatElapsedTime(totalElapsedTime, true)
                        }
                    }

                    return activities;

                },
                merge: (activities) => {
                    const merged = [];
                    // merge
                    for(const activity of activities){
                        for(const log of activity.logs){
                            merged.push({
                                name: activity.name,
                                dates: log.dates
                            });
                        }
                    }
                    // sort
                    merged.sort((a, b) => {
                        if (new Date(a.dates.start) < new Date(b.dates.start)) {
                            return 1;
                        }
                        if (new Date(a.dates.start) > new Date(b.dates.start)) {
                            return -1;
                        }
                        return 0;
                    });

                    return merged;

                }
            }

        }
    },
    template: '#history-component-template'
});

Vue.component('timer-component', {
    data: function () {
        return {
            dialogs: {
                lang: null,
                translations: {}
            },
            configuration: {
                rest: {
                    time: null,
                    sound: null
                }
            },
            session: {
                dates: {
                    start: null,
                    end: null,
                },
                calculations: {
                    time: {
                        total: {
                            ms: null,
                            s: null,
                            m: null,
                            h: null,
                        },
                        activity: {
                            ms: null,
                            s: null,
                            m: null,
                            h: null,
                        }
                    }
                },
                activities: [],
            },
            logic: {
                intervals: [],
                objects: []
            }

        }
    },
    created: function () {
        // set EventBus
        EventBus.$on('timer-requestData', () => {
            this.sendData();
        })

        // load configuration
        this.initialization().configurations();

        // generate activities
        this.initialization().activities();
        // create intervals
        this.initialization().intervals();

    },
    methods: {
        initialization: function(){
            return {
                configurations: () => {
                    try {
                        this.configuration = (new Configuration(this.$options.name)).get();
                    } catch (error) {
                        console.error('timer-component (created):', error);
                        // no configuration loaded, set default
                        this.configuration = {
                            rest: {
                                time: 300000,
                                sound: '../sound/alarm.mp3'
                            }
                        }; // Np. It is in most cases because the engine does automatic semicolon insertion. However there are some specific cases where it will bite you. Fairly certain the parens were being interpreted as a continuation of the previous line. It's why it's best to always use them unless you really know what you're doing.


                        (new Configuration(this.$options.name)).set(this.configuration);

                    }

                },
                activities: () => {
                    // rest activities will be at end
                    const activities = [
                        {
                            name: 'phase 1',
                            description: '- Saques cara a cara\n\n- Pausas del juego\n\n- Goles y asistencias\n\n- Cambios del equipo 1\n\n- Faltas del equipo 1',
                            isRest: false,
                        },
                        {
                            name: 'phase 2',
                            description: '- Cambios del equipo 2\n\n- Faltas del equipo 2\n\n- Icing\n\n- Offside',
                            isRest: false
                        },
                        {
                            name: 'phase 3',
                            description: '- Disparos\n\n- Cargas legales\n\n- Ataques controlados',
                            isRest: false
                        },
                        {
                            name: 'phase 4',
                            description: '- Disparos\n\n- Cargas legales\n\n- Ataques controlados',
                            isRest: false
                        },
                        {
                            name: 'rest',
                            description: null,
                            isRest: true
                        },
                    ];
                    let position = 0;
                    for (const activity of activities) {
                        this.session.activities.push({
                            name: activity.name,
                            description: activity.description,
                            isRest: activity.isRest,
                            isCompleted: false,
                            order: activity.isRest === false ? position : null,
                            logs: []
                        });
                        position++;
                    }

                },
                intervals: () => {
                    // time
                    this.logic.intervals.push({
                        name: 'time',
                        function: setInterval(() => {
                            if (this.session.dates.start !== null) {
                                const elapsedTime = new Date() - new Date(this.session.dates.start);
                                const timeObject = Tools.formatElapsedTime(elapsedTime);

                                this.session.calculations.time.total.ms = timeObject.ms;
                                this.session.calculations.time.total.s = timeObject.s;
                                this.session.calculations.time.total.m = timeObject.m;
                                this.session.calculations.time.total.h = timeObject.h;

                            }
                        }, 60)
                    });

                    // activity
                    this.logic.intervals.push({
                        name: 'activity',
                        function: setInterval(() => {
                            const activity = this.activity().get('active');
                            if (activity !== null) {
                                // determine total elapsed time only for no rest activities
                                let elapsedTime = 0;
                                if (activity.isRest === false) {
                                    for (const log of activity.logs) {
                                        elapsedTime += (log.dates.end === null ? new Date() : new Date(log.dates.end)) - new Date(log.dates.start);
                                    }
                                } else {
                                    elapsedTime = new Date() - new Date(activity.logs[activity.logs.length - 1].dates.start);
                                }
                                const timeObject = Tools.formatElapsedTime(elapsedTime);

                                this.session.calculations.time.activity.ms = timeObject.ms;
                                this.session.calculations.time.activity.s = timeObject.s;
                                this.session.calculations.time.activity.m = timeObject.m;
                                this.session.calculations.time.activity.h = timeObject.h;

                            }
                        }, 60)
                    });

                    // UI interactions 
                    this.logic.intervals.push({
                        name: 'UI',
                        function: setInterval(() => {
                            const clockDisplay = document.querySelector('#clock-display');
                            if(clockDisplay){
                                const activity = this.activity().get('active');
                                if(activity){
                                    if(activity.isRest === true){
                                        if(new Date() - new Date((activity.logs.at(-1)).dates.start) >= this.configuration.rest.time){
                                            // play audio
                                            this.effects().audio('play');
                                            // set display alert
                                            this.effects().display('play');
                                        }
                                    }else{
                                        // stop audio
                                        this.effects().audio('stop');
                                        // stop display alert
                                        this.effects().display('stop');
                                    }
                                }
                            }
                        }, 60)
                    });

                    // UI dialogs
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.dialogs = this.$root.getDialogs();
                        }, 100)
                    })
                }
            }

        },
        ending: function(){
            return {
                intervals: () => {
                    for(const interval of this.logic.intervals){
                        if(interval.name !== 'TRANSLATER'){
                            clearInterval(interval.function);
                        }
                    }
                }
            }

        },
        sendData: function (force = false) {
            EventBus.$emit('timer-sendData', {
                force: force,
                data: {
                    dates: this.session.dates,
                    activities: this.session.activities
                }
            });
        },
        action: function (action, method, value) {
            if(action === 'startPeriod'){
                this.session.dates.start = new Date();
                this.activity().start('nextNoRest');

                return true;
            }

            if(action === 'endPeriod'){
                this.session.dates.end = new Date();
                this.ending().intervals();
                EventBus.$emit('timer-endPeriod');
                return true;
            }

            if(action === 'startRest'){
                this.activity().end('active');
                this.activity().start('rest');

                return true;
            }

            if(action === 'startNextNoRest'){
                this.activity().end('active');
                this.activity().start('nextNoRest');

                return true;
            }

            if(action === 'continueNoRest'){
                this.activity().end('active');
                this.activity().start('noRest');

                return true;
            }

            if(action === 'completeNoRest'){
                if(confirm(`${this.dialogs.translations.are_you_sure}`)){
                    this.activity().end('active', true);
                    
                    // check if is there more no rest activities
                    if(this.activity().get('nextNoRest') === null){
                        // end of the period
                        this.action('endPeriod');
                    }else{
                        this.activity().start('rest');
                    }
                }
                

                return true;
            }

            throw 'invalid action'

        },
        statistics: function () {
            return {
                getAll: () => {
                    const statistics = {
                        rest: {
                            totalElapsedTime: {
                                normal: null,
                                formatted: null
                            }
                        },
                        noRest: {
                            activities: [],
                            totalElapsedTime: {
                                normal: null,
                                formatted: null
                            }
                        },
                        totalElapsedTime: {
                            normal: null,
                            formatted: null
                        }
                    }

                    // calculation of no rest activities
                    for(const activity of this.session.activities){
                        let elapsedTime = 0;
                        if(activity.isRest === true){
                            continue;
                        }

                        for(const log of activity.logs){
                            elapsedTime += (new Date(log.dates.end) - new Date(log.dates.start)); 
                        }

                        statistics.noRest.activities.push({
                            name: activity.name,
                            elapsedTime: {formatted: Tools.formatElapsedTime(elapsedTime, true)}
                        });
                    }

                    // calculation of total elapsed time no rest activities
                    {
                        let elapsedTime = 0;
                        for(const activity of this.session.activities){
                            if (activity.isRest === true) {
                                continue;
                            }
                            for (const log of activity.logs) {
                                elapsedTime += (new Date(log.dates.end) - new Date(log.dates.start));
                            }
                        }

                        statistics.noRest.totalElapsedTime.normal = elapsedTime;
                        statistics.noRest.totalElapsedTime.formatted = Tools.formatElapsedTime(elapsedTime, true);

                    }


                    // calculation of total elapsed time rest activities
                    {
                        let elapsedTime = 0;
                        for(const activity of this.session.activities){
                            if (activity.isRest === false) {
                                continue;
                            }
                            for (const log of activity.logs) {
                                elapsedTime += (new Date(log.dates.end) - new Date(log.dates.start));
                            }
                        }

                        statistics.rest.totalElapsedTime.normal = elapsedTime;
                        statistics.rest.totalElapsedTime.formatted = Tools.formatElapsedTime(elapsedTime, true);

                    }

                    // calculation of total elapsed time rest + no rest activities
                    {
                        statistics.totalElapsedTime.normal = statistics.noRest.totalElapsedTime.normal + statistics.rest.totalElapsedTime.normal;
                        statistics.totalElapsedTime.formatted = Tools.formatElapsedTime(statistics.totalElapsedTime.normal, true);
                    }

                    return statistics;
                
                }
            }
        },
        activity: function () {
            return {
                get: (nameOrFilter) => {
                    if (nameOrFilter === 'active') {
                        // the active activity will be determine if the activity have a log with start but without end date
                        return this.session.activities.find((activity) => {
                            for (const log of activity.logs) {
                                if (log.dates.end === null) {
                                    return true;
                                }
                            }
                            return false;
                        }) ?? null;
                    }

                    if (nameOrFilter === 'rest') {
                        return this.session.activities.find((activity) => {
                            if(activity.isRest === true){
                                return true;
                            }
                        }) ?? null;
                    }

                    // return the next no rest activity (from the last activity no rest executed)  
                    if (nameOrFilter === 'nextNoRest'){
                        for(const activity of this.session.activities){
                            if(activity.logs.length === 0 && activity.isRest === false){
                                return activity;
                            }
                        }
                        return null;
                    }

                    if (nameOrFilter === 'incompleteNoRest') {
                        for(const activity of this.session.activities){
                            if(activity.logs.length > 0 && activity.isRest === false && activity.isCompleted === false){
                                return activity;
                            }
                        }
                        return null;

                    }
                },
                start: (nameOrFilter) => {
                    if(nameOrFilter === undefined){
                        throw 'name or filter is required';
                    }

                    if(nameOrFilter === 'nextNoRest'){
                        // get the next no rest activity
                        const activity = this.activity().get('nextNoRest');
                        if(activity === null){
                            throw 'there is not next no rest activity to start';
                        }

                        // start activity
                        activity.logs.push({
                            dates: {
                                start: new Date(),
                                end: null
                            }
                        });

                        return true;
                    }

                    if(nameOrFilter === 'noRest'){
                        const activity = this.activity().get('incompleteNoRest');
                        if(activity === null){
                            throw 'there is not rest activity to continue';
                        }

                        // start activity
                        activity.logs.push({
                            dates: {
                                start: new Date(),
                                end: null
                            }
                        });

                        return true;
                    }

                    if(nameOrFilter === 'rest'){
                        const activity = this.activity().get('rest');
                        if(activity === null){
                            throw 'there is not rest activity to start';
                        }

                        // start activity
                        activity.logs.push({
                            dates: {
                                start: new Date(),
                                end: null
                            }
                        });

                        return true;
                    }

                    throw 'invalid name or filter';
                },
                end: (nameOrFilter, isCompleted = false) => {
                    if(nameOrFilter === undefined){
                        throw 'name or filter is required';
                    }

                    if(nameOrFilter === 'active'){
                        const activity = this.activity().get('active');
                        if(activity === null){
                            throw 'active activity not found';
                        }

                        if(activity.isRest === false){
                            activity.isCompleted = isCompleted
                        }

                        for(const log of activity.logs){
                            if(log.dates.end === null){
                                log.dates.end = new Date();
                                
                            }
                        }
                        
                        return true;
                    }
                }


            }
        },
        effects: function () {
            return {
                audio: (action) => {
                    let audio = this.logic.objects.find((element) => element.name === 'audio') ?? null;
                    if(action === 'play'){
                        if(audio === null || audio.status !== 'playing'){
                            try{
                                if(audio === null){
                                    audio = {
                                        name: 'audio',
                                        object: null,
                                        status: null,
                                    };
                                    this.logic.objects.push(audio);
                                }
                                audio.object = new Audio(this.configuration.rest.sound);
                                audio.object.addEventListener('ended', () => {
                                    setTimeout(() => {
                                        audio.status = 'stopped';
                                    }, 2000);
                                });
                                audio.object.play();
                                audio.status = 'playing';
                            }catch(error){
                                console.error('logic (audio - play):', error);
                                alert('PLEASE REPORT ERROR:' + (error.message ? error.message : error));
                                if(audio !== null){
                                    audio.status = 'stopped';
                                }
                            }
                        }
                    }

                    if(action === 'stop'){
                        if(audio !== null && audio.status === 'playing'){
                            try{
                                audio.object.pause();
                            }catch(error){
                                console.error('logic (audio - stop):', error);
                                if(audio !== null){
                                    audio.status = 'stopped';
                                }
                            }
                        }


                    }
                },
                display: (action) => {
                    const clockDisplay = document.querySelector('#clock-display');
                    if(clockDisplay){
                        let display = this.logic.intervals.find((element) => element.name === 'display') ?? null;
                        if(action === 'play'){
                            if(display === null || display.function === null){
                                if(display === null){
                                    display = {
                                        name: 'display',
                                        function: null
                                    };
                                    this.logic.intervals.push(display);
                                }
                                display.function = setInterval(()=>{
                                    if (clockDisplay.style.opacity === '0.5') {
                                        clockDisplay.style.opacity = '1';
                                    } else {
                                        clockDisplay.style.opacity = '0.5';
                                    }
                                }, 500);
                            }
                        }

                        if(action === 'stop'){
                            if(display !== null && display.function !== null){
                                clockDisplay.style.opacity = '1';
                                clearInterval(display.function);
                                display.function = null;
                            }
                        }

                    }

                },
                

            }

        },
    },
    template: '#timer-component-template'
});

Vue.component('header-component', {
    data: function () {
        return {
            dialogs: {
                lang: null,
                translations: {}
            },
            currentTab: 'timer',
            logic: {
                intervals: []
            }
        }
    },
    created: function () {
        // create intervals
        this.initialization().intervals();
    },
    methods: {
        initialization: function(){
            return {
                intervals: () => {
                    // UI dialogs
                    this.logic.intervals.push({
                        name: 'TRANSLATER',
                        function: setInterval(() => {
                            this.dialogs = this.$root.getDialogs();
                        }, 100)
                    });
                }

            }
        },
        showTimerTab: function () {
            EventBus.$emit('app-tabChange', {
                tab: 'timer'
            });
            this.currentTab = 'timer';
        },
        showSettingsTab: function () {
            EventBus.$emit('app-tabChange', {
                tab: 'settings'
            });
            this.currentTab = 'settings';

        },
        showAboutTab: function () {
            EventBus.$emit('app-tabChange', {
                tab: 'about'
            });
            this.currentTab = 'about';

        },
        showFoulViewerTab: function () {
            EventBus.$emit('app-tabChange', {
                tab: 'foul-viewer'
            });
            this.currentTab = 'foul-viewer';
        }
    },
    template: '#header-component-template'
});

const app = new Vue({
    el: '#app',
    created: function(){
        EventBus.$on('app-tabChange', (event) => {
            this.tabChange(event.tab);
        });

        // check if the site data should be erased
        this.checkUserData();

    },
    data: function(){
        return {
            session: {
                currentTab: 'timer-component'
            }
        }
    },
    methods: {
        checkUserData: function(){
            {
                // version 3.0 - new format of 'timer configuration'
                try{
                    const configuration = (new Configuration('timer-component')).get();
                    if(configuration.rest === undefined){
                        localStorage.clear();
                        console.log('user data was erased');
                    }
                }catch{}

            }
            
            



        },
        tabChange: function(tab){
            this.session.currentTab = tab + '-component';
        },
        getDialogs: function(){
            const header = this.$children.find((component) => {
                return component.$options.name === 'header-component' ?? null;
            });
            if(header){
                const translater = header.$children.find((component) => {
                    return component.$options.name === 'translater-component' ?? null;
                });
                if(translater){
                    return translater.dialogs;
                }
            }

            return {};
        }
    }

});