function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function sqr(a) {
    return a * a;
}

function sqrt(a) {
    return Math.sqrt(a);
}

function calculate(operation, a, b) {
    switch(operation) {
        case 'add': {
            return add(a, b);
        }
        case 'sub': {
            return sub(a, b);
        }
        case 'mul': {
            return mul(a, b);
        }
        case 'div': {
            return div(a, b);
        }
        case 'sqr': {
            return sqr(a);
        }
        case 'sqrt': {
            return sqrt(a);
        }
    }
}