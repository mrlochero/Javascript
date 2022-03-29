let total = [];

let number = document.querySelectorAll('.number');
for(i in number) {
    number[i].onclick = function(e) {
        let a = e.target.value;
        total.push(a)
        console.log(total);
        results()
    }
};

let del = document.querySelector('.del');
let ac = document.querySelector('.delAll');
let operators = document.querySelectorAll('.operator');
let calculates = document.querySelector('.calculate');
let result = document.querySelector('#result');
let result2 = document.querySelector('#result2');

for(i in operators) {
    operators[i].onclick = function(e) {
        let b = e.target.value;
        let c = this.value
        let totalLength = total.length - 1;
        let valueFinal = total[totalLength];

        if(totalLength == -1) {
            return };
        if(["*","/","+","-"].includes(valueFinal)) {
            total[totalLength] = c
        } else {
            total.push(c);
        }


        results();
    }
}

function results() {
    result.value = total.join('').replace(/\*/g, 'X')
};

calculates.onclick = function(e) {
    result2.value = eval(total.join(''))
}

del.onclick = function(e) {
    total.pop();
    results();
    result2.value = "0"
};

ac.onclick = function(e) {
    total = [];
    results();
    result2.value = "0";
}