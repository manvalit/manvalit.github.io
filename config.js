// Коэффициенты для расчета раствора и других материалов
const MORTAR_PERCENTAGE = 0.07;  // Процент раствора от общего объема
const VERMICULITE_PER_SQUARE_METER = 0.01087;  // Количество вермикулита на 1 м²

// Периодичность укладки кладочной сетки (в метрах)
const MESH_INTERVAL = 0.5;  // Укладывается каждые 50 см

// Конфигурационные данные для блоков
const BLOCKS = {
    // Данные для блока размером 500x200x400
    "500x200x400": {
        pricePerCubicMeter: 8050, // Цена за кубический метр в рублях
        pricePerBlock: 322,        // Цена за один блок в рублях
        blocksPerPallet: 30,       // Количество блоков в одной палете
        volumePerBlock: 0.04,      // Объем одного блока в кубических метрах
        weightPerBlock: 28,        // Вес одного блока в килограммах
        palletWeight: 840          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x200x350
    "500x200x350": {
        pricePerCubicMeter: 8250,  // Цена за кубический метр в рублях
        pricePerBlock: 288.75,     // Цена за один блок в рублях
        blocksPerPallet: 36,       // Количество блоков в одной палете
        volumePerBlock: 0.035,     // Объем одного блока в кубических метрах
        weightPerBlock: 25,        // Вес одного блока в килограммах
        palletWeight: 882          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x200x300
    "500x200x300": {
        pricePerCubicMeter: 8500,  // Цена за кубический метр в рублях
        pricePerBlock: 255,        // Цена за один блок в рублях
        blocksPerPallet: 40,       // Количество блоков в одной палете
        volumePerBlock: 0.03,      // Объем одного блока в кубических метрах
        weightPerBlock: 25,        // Вес одного блока в килограммах
        palletWeight: 820          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x400
    "500x250x400": {
        pricePerCubicMeter: 7950,  // Цена за кубический метр в рублях
        pricePerBlock: 397.50,     // Цена за один блок в рублях
        blocksPerPallet: 30,       // Количество блоков в одной палете
        volumePerBlock: 0.05,      // Объем одного блока в кубических метрах
        weightPerBlock: 35,        // Вес одного блока в килограммах
        palletWeight: 1050         // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x350
    "500x250x350": {
        pricePerCubicMeter: 8050,  // Цена за кубический метр в рублях
        pricePerBlock: 356.50,     // Цена за один блок в рублях
        blocksPerPallet: 36,       // Количество блоков в одной палете
        volumePerBlock: 0.04375,   // Объем одного блока в кубических метрах
        weightPerBlock: 33,        // Вес одного блока в килограммах
        palletWeight: 1010         // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x300
    "500x250x300": {
        pricePerCubicMeter: 8100,  // Цена за кубический метр в рублях
        pricePerBlock: 315,        // Цена за один блок в рублях
        blocksPerPallet: 40,       // Количество блоков в одной палете
        volumePerBlock: 0.0375,    // Объем одного блока в кубических метрах
        weightPerBlock: 30,        // Вес одного блока в килограммах
        palletWeight: 950          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x200
    "500x250x200": {
        pricePerCubicMeter: 8650,  // Цена за кубический метр в рублях
        pricePerBlock: 210,        // Цена за один блок в рублях
        blocksPerPallet: 60,       // Количество блоков в одной палете
        volumePerBlock: 0.025,     // Объем одного блока в кубических метрах
        weightPerBlock: 20,        // Вес одного блока в килограммах
        palletWeight: 950          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x150
    "500x250x150": {
        pricePerCubicMeter: 8600,  // Цена за кубический метр в рублях
        pricePerBlock: 167.81,     // Цена за один блок в рублях
        blocksPerPallet: 80,       // Количество блоков в одной палете
        volumePerBlock: 0.01875,   // Объем одного блока в кубических метрах
        weightPerBlock: 15,        // Вес одного блока в килограммах
        palletWeight: 900          // Общий вес палеты в килограммах
    },
    // Данные для блока размером 500x250x100
    "500x250x100": {
        pricePerCubicMeter: 9250,  // Цена за кубический метр в рублях
        pricePerBlock: 115.63,     // Цена за один блок в рублях
        blocksPerPallet: 120,      // Количество блоков в одной палете
        volumePerBlock: 0.0125,    // Объем одного блока в кубических метрах
        weightPerBlock: 9,         // Вес одного блока в килограммах
        palletWeight: 1050         // Общий вес палеты в килограммах
    }
};
