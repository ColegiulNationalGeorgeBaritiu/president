class Button
{
    constructor(element, value){
        this.dom = element
        this.name = element.innerText
        this.value = value
        this.dom.innerText += ' 0';
    }

    update() {
        this.value++;
        this.dom.innerText = this.name + ' ' + this.value;
        // return this.innerText;
    }

    changeValue(lastButton) {
        if (lastButton.value >= 10) {
            lastButton.value -= 10;
            lastButton.dom.innerText = lastButton.name + ' ' + lastButton.value;
            this.update();
        } else return false;
    }

};

let buttons = [];
[...document.querySelectorAll('button')].forEach(btn => {
    buttons.push(new Button(btn, 0));
})
// buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((btn, index) => {
    btn.dom.addEventListener('click', () => {

        // if (data[index] == undefined) data[index] = 0;
        if (index == 0) {
            btn.update();
            // updateButtons({btn, value:data[index]});
        } else {
            // if (buttons[index - 1].value >=  10) {
            //     buttons[index - 1].value -= 10;
            //     buttons[index - 1].value++;
            //     // updateButtons({btn, value:data[index]}, {btn:buttons[index - 1], value: data[index - 1]})
            // }
            btn.changeValue(buttons[index - 1]);
        }
        console.log(btn.name + ": " + btn.value);
    });
}); 