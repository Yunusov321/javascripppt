function getInput(type) {
    let userInput = prompt(`Введите данные типа ${type}`);
    let message;

    switch (type) {
        case 'string':
            message = `Siz kiritgan "${userInput}", bu string typega kiradi.`;
            break;
        case 'number':
            if (!isNaN(userInput)) {
                message = `Siz kiritgan "${userInput}", bu number typega kiradi.`;
            } else {
                message = `"${userInput}" не является числом.`;
            }
            break;
        case 'boolean':
            if (userInput.toLowerCase() === 'true' || userInput.toLowerCase() === 'false') {
                message = `Siz kiritgan "${userInput}", это относится к типу boolean.`;
            } else {
                message = `"${userInput}" не является логическим значением.`;
            }
            break;
        default:
            message = "Неизвестный тип.";
    }

    displayMessage(message);
}

function displayMessage(message) {
    const output = document.getElementById("output");
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    output.appendChild(paragraph);
}