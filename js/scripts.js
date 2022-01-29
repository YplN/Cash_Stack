// const bankNotesData = require.main.require('./data/bankNotesData.json');


const formatToNumber = (text) => {
    return parseInt(text).toLocaleString("en-US");
}


const autoFormatToNumber = (event) => {
    // const value = text.replace(/\D/g, ''); 
    event.target.value = formatToNumber(event.target.value.replace(/\D/g, ''));
};


/**
 * 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function getWidthBankNote(currency, value) {
    return bankNotesData[currency]["bankNotes"][value].width * 10;
}

/**
 * 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function getHeightBankNote(currency, value) {
    return bankNotesData[currency]["bankNotes"][value].height * 10;
}



/**
 * 
 * @param {*} currency 
 * @param {*} value 
 * @returns grams
 */
function getWeightBankNote(currency, value) {
    return bankNotesData[currency]["bankNotes"][value].weight;
}


/**
 * 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function getThicknessBankNote(currency, value) {
    return bankNotesData[currency]["bankNotes"][value].thickness;
}


/**
 * 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm^3
 */
function getVolume(currency, value) {
    const bankNoteWidth = getWidthBankNote(currency, value);
    const bankNoteHeight = getHeightBankNote(currency, value);
    const bankNoteThickness = getThicknessBankNote(currency, value);

    return bankNoteWidth * bankNoteHeight * bankNoteThickness;

}

/**
 * 
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function CashToHeight(cash, currency, value) {
    const bankNoteThickness = getThicknessBankNote(currency, value);
    const numberNotes = Math.ceil(cash / value);

    return numberNotes * bankNoteThickness;
}

/**
 * 
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm^3
 */
function CashToVolume(cash, currency, value) {
    const bankNoteVolume = getVolume(currency, value);

    const numberNotes = Math.ceil(cash / value);

    return bankNoteVolume * numberNotes;
}

/**
 * 
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns g
 */
function CashToWeight(cash, currency, value) {
    const bankNoteThickness = getWeightBankNote(currency, value);
    const numberNotes = Math.ceil(cash / value);

    return numberNotes * bankNoteThickness;
}

/**
 * 
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function CashToCubeSize(cash, currency, value) {
    return Math.cbrt(CashToVolume(cash, currency, value))
}


/**
 * 
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns mm
 */
function CashToSideBySideLength(cash, currency, value) {
    const bankNoteWidth = getWidthBankNote(currency, value);

    const numberNotes = Math.ceil(cash / value);

    return numberNotes * bankNoteWidth;
}

/**
 * Returns the time needed to receive the amount of cash if someone gives you 1 banknote /sec
 * @param {*} cash 
 * @param {*} currency 
 * @param {*} value 
 * @returns s
 */
function CashToTime(cash, value) {
    const numberNotes = Math.ceil(cash / value);
    return numberNotes;
}


function CashToYears(cash, cashDaily = 100) {
    const days = Math.floor(cash / cashDaily);
    const years = days / 365.25;
    return (years);
}


function CashToHours(cash, value) {
    const hours = CashToTime(cash, value);
    // const hours = seconds / 3600;
    return (hours);
}




function CashToLife(cash, cashDaily, lifeDuration = 80) {
    const years = CashToYears(cash, cashDaily);
    return years / lifeDuration;
}


function round2decimals(n) {
    return Math.round(n * 100) / 100;
}


function loadData() {






    const amount = document.getElementById("amount").value.replace(/\D/g, '');

    const currenciesRadio = document.getElementsByName("currencies");


    let currency;

    for (var i = 0, length = currenciesRadio.length; i < length; i++) {
        if (currenciesRadio[i].checked) {
            // do whatever you want with the checked radio
            currency = currenciesRadio[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }


    // const valuesSelect = document.getElementById("value");
    if (prevNote !== null) {


        if (document.getElementById("dataSide").classList.contains("hidden")) {
            document.getElementById("dataSide").style.display = "flex";

            if (window.innerWidth > 10000) {
                document.getElementById("dataSide").style.width = "800px";
            } else if (window.innerWidth > 1000) {
                document.getElementById("dataSide").style.width = "600px";
            } else {
                document.getElementById("dataSide").style.width = "300px";
            }
            document.getElementById("dataSide").style.opacity = "1";
            document.getElementById("dataSide").classList.remove("hidden");
        }
        const valuesSelect = prevNote.firstChild.innerHTML;
        const value = valuesSelect.replace(/^\D+/g, '');
        // console.log(value);

        // const value = valuesSelect.options[valuesSelect.selectedIndex].text.replace(/^\D+/g, '');

        // console.log(amount, currency, value)

        // document.getElementById("volume").innerHTML = formatBestUnitLength(CashToCubeSize(amount, currency, value));
        document.getElementById("height").innerHTML = formatBestUnitLength(CashToHeight(amount, currency, value));
        document.getElementById("weight").innerHTML = formatBestUnitWeight(CashToWeight(amount, currency, value));
        document.getElementById("length").innerHTML = formatBestUnitLength(CashToSideBySideLength(amount, currency, value));
        document.getElementById("years").innerHTML = formatBestUnitTime(CashToHours(amount, value));
    }

}




function resizeInput() {
    this.style.width = (this.value.length + 0.5) + "ch";
}


function UpdateSelect() {

    if (prevCurrency !== null) {
        const currency = prevCurrency.value;
        //const selectCurrency = document.getElementById("value");

        const selectCurrencyDiv = document.getElementById("select_values");



        // We remove previous options
        while (selectCurrencyDiv.firstChild) {
            selectCurrencyDiv.removeChild(selectCurrencyDiv.firstChild);
        }

        // We create dynamically the new ones
        const bankNotesCurrency = bankNotesData[prevCurrency.value]["bankNotes"];
        const currencySymbol = bankNotesData[prevCurrency.value]["symbol"];

        for (const note in bankNotesCurrency) {
            const valueNote = bankNotesCurrency[note]["value"];
            // const selectNote = document.createElement('option');

            const noteOption = document.createElement('span');
            noteOption.id = `${valueNote}_${currency}`;
            noteOption.className = "noteBank";
            noteOption.addEventListener("click", UpdateNote);

            const noteValue = document.createElement('span');
            noteValue.innerHTML = `${currencySymbol}${valueNote}`;
            noteValue.className = "noteValue";
            noteOption.title = `${currencySymbol}${valueNote}:\n   width: ${bankNotesCurrency[note]["width"]}cm\n   height: ${bankNotesCurrency[note]["height"]}cm\n   thickness: ${bankNotesCurrency[note]["thickness"]}mm\n   weight: ${bankNotesCurrency[note]["weight"]}g`;

            noteOption.appendChild(noteValue);
            selectCurrencyDiv.appendChild(noteOption);
        }
    }
}

function UpdateSymbolAmount() {

    if (prevCurrency) {
        // We change symbol on amount
        const fontAwesome = bankNotesData[prevCurrency.value]["fontAwesome"];
        const amount = document.getElementById("amount_sign");
        amount.classList = [fontAwesome];
        const background = document.getElementsByClassName("deco_amount");
        for (const b of background) {
            // b.innerHTML = bankNotesData[prevCurrency.value]["symbol"];

            b.setAttribute('data-after', bankNotesData[prevCurrency.value]["symbol"]);

        }
    }

}


let prevCurrency = document.getElementById("currency_dollar");

function UpdateCurrency() {
    if (this !== prevCurrency) {
        prevCurrency = this;

        UpdateSelect();
        // UpdateSymbolAmount();
    }
}


let prevNote = null;

function UpdateNote() {
    if (this !== prevNote) {
        if (prevNote) {
            prevNote.classList.remove("selected_note");
        }
        prevNote = this;

        this.classList.add("selected_note");

        const background = document.getElementsByClassName("deco_amount");
        for (const b of background) {

            const valuesSelect = prevNote.firstChild.innerHTML;
            const value = valuesSelect.replace(/^\D+/g, '');
            b.innerHTML = value;
        }


        // UpdateSelect();
        // UpdateSymbolAmount();
    }
}

function showItem(itemData) {
    const itemLi = document.createElement('li');
    const itemValue = document.createElement('span');
    const itemName = document.createElement('span');
    const itemImg = document.createElement('img');

    itemValue.innerHTML = formatBestUnitLength(itemData.value);
    itemName.innerHTML = itemData.name;
    itemImg.src = itemData.img;
    itemImg.title = itemData.attribution;
    itemImg.className = "comparison_img";

    itemLi.appendChild(itemName);
    itemLi.appendChild(itemValue);
    itemLi.appendChild(itemImg);

    return itemLi;
}


function formatBestUnitLength(length) {
    let bestUnit = valueComparison.length.baseUnit;
    let bestUnitRatio = 1;
    const units = valueComparison.length.unit;
    for (unit in units) {
        if (units[unit] > length)
            break;
        bestUnit = unit;
        bestUnitRatio = units[unit];
    }

    const value = Math.floor(100 * length / bestUnitRatio) / 100;

    if (value >= 1000) {
        return formatToNumber(value) + " " + bestUnit;
    }

    return value + " " + bestUnit;

}



function formatBestUnitWeight(weight) {
    let bestUnit = valueComparison.weight.baseUnit;
    let bestUnitRatio = 1;
    const units = valueComparison.weight.unit;
    for (unit in units) {
        if (units[unit] > weight)
            break;
        bestUnit = unit;
        bestUnitRatio = units[unit];
    }
    const value = Math.floor(100 * weight / bestUnitRatio) / 100;

    if (value >= 1000) {
        return formatToNumber(value) + " " + bestUnit;
    }

    return value + " " + bestUnit;
}



function formatBestUnitTime(time) {
    let bestUnit = valueComparison.time.baseUnit;
    let bestUnitRatio = 1;
    const units = valueComparison.time.unit;
    for (unit in units) {
        if (units[unit] > time)
            break;
        bestUnit = unit;
        bestUnitRatio = units[unit];
    }

    const value = Math.floor(100 * time / bestUnitRatio) / 100;

    if (value >= 1000) {
        return formatToNumber(value) + " " + bestUnit + (value > 1 ? "s" : "");;
    }

    return value + " " + bestUnit + (value > 1 ? "s" : "");;

}

function formatName(name) {
    return name.split(' ')[0].substr(0, 1) + ". " + name.split(' ')[1];
}

function createNewButton(name, worth, top, ul, data, amountInput) {
    let li = document.createElement('li');
    ul.appendChild(li);

    let button = document.createElement('div');

    let span = document.createElement('span');
    button.type = "button";
    button.className = "topList";
    span.innerHTML = `${formatName(name)}`;
    button.title = `Select ${name} ($${Math.floor(worth/1000)} B)`;
    button.name = `top_${top}`;

    button.onclick = function() {
        document.getElementById("amount").value = formatToNumber("" + Math.floor(data[this.name.split("_")[1]].estWorthPrev * 1000000));
        document.getElementById("currency_dollar").checked = true;
        resizeInput.call(amountInput);

        if (prevCurrency != document.getElementById("currency_dollar")) {
            prevCurrency = document.getElementById("currency_dollar");
            // UpdateSymbolAmount();
            prevNote = null;
            UpdateSelect();
        }
        // prevNote = null;
    };
    li.appendChild(button);
    button.appendChild(span);
}

window.onload = function() {

    const radioCurrency = document.getElementById("currencyRadio");
    for (const cur in bankNotesData) {
        const id = "currency_" + cur;
        const name = "currencies";
        const classListInput = "element radio"
        const value = cur;
        const title = cur;

        const input = document.createElement("input");
        input.id = id;
        input.name = name;
        input.classList = classListInput;
        input.type = "radio";
        input.value = value;
        input.title = title;
        input.checked = true;

        // input.addEventListener("change", UpdateCurrency);
        input.onchange = UpdateCurrency;

        const label = document.createElement("label");
        label.htmlFor = id;
        label.classList = "choice";

        label.innerHTML = bankNotesData[cur].symbol;
        radioCurrency.appendChild(input);
        radioCurrency.appendChild(label);
    }

    prevCurrency = document.getElementById("currency_dollar");
    UpdateSelect();

    const amountInput = document.getElementById("amount");

    amountInput.addEventListener('keydown', autoFormatToNumber);
    amountInput.addEventListener('keyup', autoFormatToNumber);
    amountInput.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
    resizeInput.call(amountInput); // immediately call the function


    $.getJSON('https://forbes400.herokuapp.com/api/forbes400?limit=10', function(data) {
        // JSON result in `data` variable

        ul = document.createElement('ul');
        document.getElementById('top10').appendChild(ul);

        let sum = 0;

        let i = 0;
        for (const p of data) {

            //ICI
            createNewButton(p.person.name, p.estWorthPrev, i, ul, data, amountInput);
            i++;



            // let li = document.createElement('li');
            // ul.appendChild(li);

            // let button = document.createElement('div');

            // let span = document.createElement('span');
            // button.type = "button";
            // button.className = "topList";
            // span.innerHTML = `${p.person.name}`;
            // button.title = `Select ${p.person.name} ($${Math.floor(p.estWorthPrev/1000)} B)`;
            // button.name = `top_${i}`;
            // i++;

            // button.onclick = function() {
            //     document.getElementById("amount").value = formatToNumber("" + Math.floor(data[this.name.split("_")[1]].estWorthPrev * 1000000));
            //     // console.log(Math.floor(data[this.name.split("_")[1]].estWorthPrev * 1000000));
            //     document.getElementById("currency_dollar").checked = true;
            //     resizeInput.call(amountInput);

            //     prevCurrency = document.getElementById("currency_dollar");
            //     UpdateSelect();
            //     UpdateSymbolAmount();
            //     prevNote = null;
            // };
            // li.appendChild(button);
            // button.appendChild(span);
        }


    });




    // const listItem = document.createElement("ul");
    // for (const item of valueComparison.length.comparison) {
    //     listItem.appendChild(showItem(item));
    // }
    // formatBestUnitLength(10);
    // document.getElementById("listItems").appendChild(listItem);
};