function calculate() {
    // Получаем элементы ввода
    var lengthInput = document.getElementById('length');
    var widthInput = document.getElementById('width');
    var heightInput = document.getElementById('height');
    var windowsDoorsInput = document.getElementById('windowsDoors');
    var frontonsInput = document.getElementById('frontons');

    // Если поле пустое, заполняем его значением из placeholder
    if (!lengthInput.value) {
        lengthInput.value = lengthInput.placeholder;
    }
    if (!widthInput.value) {
        widthInput.value = widthInput.placeholder;
    }
    if (!heightInput.value) {
        heightInput.value = heightInput.placeholder;
    }
    if (!windowsDoorsInput.value) {
        windowsDoorsInput.value = windowsDoorsInput.placeholder;
    }
    if (!frontonsInput.value) {
        frontonsInput.value = frontonsInput.placeholder;
    }

    // Теперь продолжаем использовать значения для расчета
    var length = parseFloat(lengthInput.value);
    var width = parseFloat(widthInput.value);
    var height = parseFloat(heightInput.value) / 100; // Высота в метрах
    var windowsDoors = parseFloat(windowsDoorsInput.value);
    var frontons = parseFloat(frontonsInput.value) / 100; // Фронтоны в метрах

    // Проверка на корректность введенных данных
    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(windowsDoors)) {
        alert('Пожалуйста, введите корректные значения.');
        return;
    }

    var blockSize = document.getElementById('blockSize').value; // Получаем выбранный размер блока
    var blockData = BLOCKS[blockSize]; // Получаем данные о выбранном блоке из конфигурации


    var perimeter = length * 2 + width * 2;
    // Разделяем строку по символу "x"
    var dimensions = blockSize.split("x");

    // Присваиваем значения переменным
    var lengthB  = parseFloat(dimensions[0]) / 1000; // Длина блока в метрах
    var heightB  = parseFloat(dimensions[1]) / 1000; // Высота блока в метрах
    var widthB  = parseFloat(dimensions[2]) / 1000; // Ширина блока в метрах

    var widthVolume = (width - (widthB * 2)) * height * widthB; // Объем стены ширины здания
    var heightVolume = length * height * widthB;  // Объем стены дллины здания
    
    // Общий объем стен (в кубических метрах)
    var wallArea = (2 * (widthVolume + heightVolume));  // Объем всех стен в куб. м

    console.log("Объем всех стен", wallArea);

    var wallFronton = ((frontons*width/2)*widthB)*2;  // Объем блоков на 2-х фронтонах в куб. м (по ширине строения)
    var wallFinish = wallFronton + wallArea // Объем всех блоков без учета окон и дверей

    var adjustedWallArea = wallFinish - (windowsDoors * 2 * widthB);  // Корректировка с учетом количества окон и дверей

    // Количество блоков (объем всех блоков / объем одного блока)
    var totalBlocks = adjustedWallArea / blockData.volumePerBlock;

    // Общий вес блоков
    var totalWeight = totalBlocks * blockData.weightPerBlock;

    // Общее количество палет
    var totalPallets = totalBlocks / blockData.blocksPerPallet;

    // Общая стоимость блоков
    var totalPrice = totalBlocks * blockData.pricePerBlock;

    // Количество раствора (17.5 кг. на один кубометр)
    var mortarVolume = (((lengthB+heightB*2)*widthB)*0.01)*350*totalBlocks;

    // Проверяем, если блок с результатом уже есть, удаляем его
    var existingResult = document.getElementById('result');
    if (existingResult) {
        existingResult.remove();
    }

    // Создаем блок с результатом
    var resultDiv = document.createElement('div');
    resultDiv.id = 'result'; // Устанавливаем id для блока
    resultDiv.className = 'result'; // Устанавливаем класс для оформления

    resultDiv.innerHTML = `
        <div class="text">Периметр строения:</div> <div class="value">${perimeter.toFixed(2)} м</div>
        <div class="text">Количество блоков:</div> <div class="value">${totalBlocks.toFixed(2)} шт</div>
        <div class="text">Общий объем блоков:</div> <div class="value">${adjustedWallArea.toFixed(2)} м³</div>
        <div class="text">Общий вес блоков:</div> <div class="value">${totalWeight.toFixed(2)} кг</div>
        <div class="text">Общий вес цемента:</div> <div class="value">${mortarVolume.toFixed(2)} кг</div>
        <div class="text">Количество палет:</div> <div class="value">${totalPallets.toFixed(2)} палет</div>
        <div class="text">Цена за блок:</div> <div class="value">${blockData.pricePerBlock.toFixed(2)} руб/шт</div>
        <div class="text">Цена за кубометр блока:</div> <div class="value">${blockData.pricePerCubicMeter.toFixed(2)} руб/куб.м</div>
        <div class="text">Общая стоимость блоков:</div> <div class="value">${totalPrice.toFixed(2)} руб</div>
    `;

    // Проверяем, если кнопка "Скопировать" уже есть, не добавляем ее снова
    if (!document.querySelector('.copy-btn')) {
        // Создаем кнопку "Скопировать"
        var copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = 'Скопировать результат';
        copyBtn.onclick = copyResults; // Функция для копирования текста

        // Добавляем кнопку в DOM перед блоком с результатом
        document.querySelector('main').appendChild(copyBtn);
    }

    // Добавляем блок с результатом в DOM после кнопки "Скопировать"
    document.querySelector('main').appendChild(resultDiv);

    var resultDiv = document.getElementById('result');
    if (resultDiv) {
        resultDiv.scrollIntoView({ behavior: 'smooth' }); // Прокрутка к блоку с результатами
    }
}

function copyResults() {
    var resultText = 
        "Периметр строения: " + perimeter.toFixed(2) + " м " +
        "Количество блоков: " + totalBlocks.toFixed(2) + " шт " +
        "Общий объем блоков: " + adjustedWallArea.toFixed(2) + " м³ " +
        "Общий вес блоков: " + totalWeight.toFixed(2) + " кг " +
        "Общий вес цемента: " + mortarVolume.toFixed(2) + " кг " +
        "Количество палет: " + totalPallets.toFixed(2) + " палет " +
        "Цена за блок: " + blockData.pricePerBlock.toFixed(2) + " руб/шт " +
        "Цена за кубометр блока: " + blockData.pricePerCubicMeter.toFixed(2) + " руб/куб.м " +
        "Общая стоимость блоков: " + totalPrice.toFixed(2) + " руб";

    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = resultText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Результат скопирован в буфер обмена!');
}

