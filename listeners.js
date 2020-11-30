calculateButton.addEventListener('click', function() {
    if (a !== null) {
        b = parseFloat(resultInput.value);
        historyDiv.innerHTML += b + ' = ';
        resultInput.value = calculate(operation, a, b);
        a = null;
        b = null;
        operation = null;
        isActionPerformed = true;
    }
});

backspaceButton.addEventListener('click', function() {
    let newValue = resultInput.value.slice(0, resultInput.value.length - 1);
    if (newValue === '') {
        resultInput.value = 0;
    } else {
        resultInput.value = newValue;
    }
});
clearButton.addEventListener('click', function() {
    a = null;
    b = null;
    operation = null;
    isActionPerformed = false;
    resultInput.value = 0;
    historyDiv.innerHTML = '';
});

dotButton.addEventListener('click', function() {
    if (resultInput.value.indexOf('.') === -1) {
        if (resultInput.value === '' || isActionPerformed) {
            resultInput.value = '0.';
        } else {
            resultInput.value += '.';
        }
    }
    clearIsActionPerformed();
});

function clearIsActionPerformed() {
    if (isActionPerformed) {
        isActionPerformed = false;
        historyDiv.innerHTML = '';
    }
}

function addDigit(value) {
    if (resultInput.value === '0' || isActionPerformed) {
        resultInput.value = value;
        clearIsActionPerformed();
    } else {
        resultInput.value += value;    
    }
}

document.body.addEventListener('click', function(event) {
    let digit;
    let eventType = event.target.id;
    if (eventType) {
        if (eventType.slice(0, 5) === 'digit') {
            eventType = 'digit';
            digit = event.target.id[5];
        }
    }

    historyMap = {
        add: ' + ',
        sub: ' - ',
        mul: ' * ',
        div: ' / ',
        sqr(a) {
            return a + ' * ' + a;
        },
        sqrt(a) {
            return 'sqrt(' + a + ') = ';
        },
    };

    switch(eventType) {
        case 'digit': {
            addDigit(digit);
            break;
        }
        case 'add':
        case 'sub':
        case 'mul':
        case 'div': {
            clearIsActionPerformed();
            a = parseFloat(resultInput.value);
            operation = eventType;
            resultInput.value = 0;
            historyDiv.innerHTML = a + historyMap[eventType];
            break;  
        }
        case 'sqr':
        case 'sqrt': {
            a = parseFloat(resultInput.value);
            operation = eventType;
            resultInput.value = calculate(operation, a);
            historyDiv.innerHTML = historyMap[eventType](a);
            a = null;
            operation = null;
        }
    }
});
