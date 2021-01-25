export default {
    Home: {
        record: 'Рекорд',
        historyBtn: 'ИСТОРИЯ',
        about: 'ПРО ПРОЕКТ',
        searchBar: {
            customLoaded: 'Пользовательская карта загружена',
            enterCity: 'Введите страну, штат, город'
        },
        aboutDescriptions: {
            1: 'Geoguess это бесплатная и ленивая игра без рекламы.                 Игроки соревнуются, насколько близко игрок может угадывать случайные места за пять раундов.                 Вы можете поделиться счетом с другими людьми через социальные сети, такие как Facebook или Twitter.                 Вы можете играть в многопользовательскую игру со своими друзьями до пяти друзей.                 Первый игрок создает комнату и определяет ее размер. Другие игроки вводят то же имя комнаты, что и первый созданный игрок, и игра начнется. ',
            2: 'Эта игра была разветвлена ​​от GeoGuess Master '
        },
        customMap: 'Пользовательская',
        customMapDescriptions: {
            1: 'Вы можете ограничить случайные местоположения городом, штатом или страной с помощью строки поиска.',
            2: 'В мультиплеере местоположение определяет первый игрок..',
            3: 'Кроме того, вы можете составить пользовательскую карту с ',
            4: 'файла.',
            5: 'Вставьте содержимое карты GeoJson с помощью кнопки :',
            6: 'Выбор пользовательской карты  : '
        },
        limitation: 'ЛИМИТЫ',
        limitationDescription: 'В настоящее время я устанавливаю дневные квоты, поэтому стоимость запуска этой игры не может быть слишком высокой.             Если карта не загружается, это означает, что квоты были превышены в день.             Он будет сброшен в полночь по тихоокеанскому времени. Приносим извинения за неудобства.             Эта игра с открытым исходным кодом, поэтому вы можете создать свой собственный игровой сервер и играть в нее неограниченно.',
        play: 'Играть'
    },
    StreetView: {
        nearby: {
            title: 'Ближайшая позиция',
            message: 'К сожалению, нам не удалось найти случайную позицию в указанном месте. Однако мы нашли одну поблизости 😉'
        },
        waitForOtherPlayers: 'Ждем других игроков ...',
        redirectToHomePage: 'Перенаправляем на домашнюю страницу ...',
        exitGame: 'Вы вынуждены выйти из игры. Перенаправляем на домашнюю страницу через 5 секунд ...',
        waitForOtherPlayersToFinish: 'Ожидайте, пока другие игроки закончат игру ...'
    },
    Maps: {
        makeGuess: 'Предположить догадку',
        guess: 'Угадать',
        nextRound: 'Следущий раунд',
        viewSummary: 'Посмтреть Сводку',
        exit: 'Выход',
        reset: 'Рестарт',
        playAgain: 'Играть заново',
        infoWindow: {
            Distance: 'Дистанция',
            Points: 'Очки'
        }
    },
    Header: {
        language: 'Язык',
        about: 'Про Проект',
        limitation: 'Лимиты',
        contact: 'Контакты'
    },
    HeaderGame: {
        room: 'КОМНАТА',
        round: 'РАУНД',
        distance: 'ДИСТАНЦИЯ',
        kmaway: '{value} КМ отсюда',
        score: 'ОЧКИ'
    },
    next: 'ДАЛЕЕ',
    cancel: 'ОТМЕНА',
    DialogCustomMap: {
        title: 'Пользовательская карта',
        invalid: 'Неверный GeoJSON',
        text: 'Текст',
        url: 'Ссылка',
        file: 'Файл',
        edit: 'Редактировать карту',
        fileLabel: 'Выбрать GeoJSON файл'
    },
    History: {
        title: 'История',
        date: 'Дата',
        mode: 'Режим',
        time: 'Время',
        distance: 'Дистанция',
        points: 'Очки',
        rank: 'Ранк',
        search: 'Поиск'
    },
    DialogRoom: {
        singlePlayer: 'Одиночная игра',
        withFriends: 'Игра с друзьями',
        invalidRoomName: 'Неверное название. Попробуйте другое.',
        inProgress: 'Прямо сейчас первый игрок создает комнату. Подождите и попробуйте еще раз.',
        roomIsFull: 'Эта комната уже заполнена. Пожалуйста, попробуйте другую.'
    },
    CardRoomName: { title: 'Введите название комнаты.' },
    CardRoomPlayerName: {
        title: 'Введите имя игрока.',
        anonymousPlayerName: 'Anonymous 🕵'
    },
    CardRoomSize: { title: 'Установите размер комнаты.' },
    CardRoomTime: {
        title: 'Установите ограничение по времени.',
        infinite: 'Бесконечность'
    },
    CardRoomSettings: {
        title: 'Game Settings',
        modeLabel: 'Select game mode',
        timeAttackLabel: 'TimeAttack demo'
    },
    CardRoomDifficulty: {
        title: 'Установите уровень сложности.',
        easy: 'Легкий (мир)',
        medium: 'Средний (страна)',
        hard: 'Сложный (город)'
    },
    DialogSummary: {
        summaryMsgSinglePoints: 'Ваше количество <strong>{points}</strong> очков! ',
        summaryMsgSingleDistance: 'Вы попали <strong>{distance}</strong> km отсюда!',
        summaryMsgMultiPoints: '<strong>{playerName}</strong> количество очков <strong>{points}</strong> ! ',
        summaryMsgMultiDistance: '(<strong>{distance}</strong> км отсюда)',
        viewDetails: 'Посмотреть детали'
    },
    Footer: {
        under: 'Под',
        privacyPolicy: 'Политика Конфиденциальности'
    },
    urlCopied: 'Ссылка скопирована',
    DetailsMap: { moreInfo: 'Больше информации' },
    modes: {
        classic: 'Classic',
        country: 'Pick country'
    },
    Demo: {
        message: 'If you want to contribute to a project and make it better, your help is very welcome :  Translation 🔠, Mapper 🌍, Code 💻, Idea 💡, Beta test 👀.',
        btn: 'Join Us'
    }
};