
// ---------------     ------------------      -------------
// -                           -               -           -
// -                           -               -           -
// -                           -               -           -
// -                           -               -------------
// ---------------             -               --
//               -             -               -  -
//               -             -               -    -
//               -             -               -      -
//               -             -               -        -
// ---------------             -               -          -

// by St3yfer


    let echoF = 1;
    function echo(arg) {
        if (arg == true) {
            echoF = 1;
        } else if (arg == false) {
            echoF = 0;
        }
    }

    function checkConnect() {
        if (echoF == 1) {
            console.log('Structure susscesful connected!');
        }
    }



const pos = {
    top: 'top',
    middle: 'middle',
    bottom: 'bottom',
    left: 'left',
    center: 'center',
    right: 'right',
    t: 'top',
    m: 'middle',
    b: 'bottom',
    l: 'left',
    c: 'center',
    r: 'right'
};

const hAligns = ['left', 'center', 'right'];
const vAligns = ['top', 'middle', 'bottom'];

//MAIN

function v(elem, arg, attr){
    if (arg == null) {
        return document.querySelector(elem);
    } else {
        if (arg == 'length') {
            return document.querySelector(elem).innerHTML.length;
        } else if (arg == 'val') {
            return document.querySelector(elem).value;
        } else if (arg == 'atr' || arg == 'attr') {
            if (attr != null) {
                return document.querySelector(elem).getAttribute(attr);
            } else {
                console.error('Attr = null');
            }

        }
    }
}

function on(elem, type, func){
    return elem.addEventListener(type, func);
}

function str(elem, position){
    elem.style.display = 'flex';
    elem.style.justifyContent = pos[position];
}

function load(time, eSite, eLoad, durationOut, durationIn){
    if(durationOut != 0 || durationOut != null){
        eSite.style.opacity = 1;
        let elemLoadOpacity = 0;
        let elemOpacity = Number(eSite.style.opacity);
        function setDurHideLoad() {
            elemOpacity -= 0.1;
            elemLoadOpacity += 0.1;
            eSite.style.opacity = elemOpacity;
            eLoad.style.opacity = elemLoadOpacity;
            if (elemOpacity <= 0) {
                clearInterval(inv);
            }
        }
        let inv = setInterval(setDurHideLoad, durationOut);
    } else {
        eSite.style.opacity = 0;
        eLoad.style.opacity = 1;
    }
    new Promise((resolve) => setTimeout(resolve, time)).then(() => {
        if (durationIn != 0 || durationIn != null) {
            eSite.style.opacity = 0;
            let elemLoadOpacity = 0;
            let elemOpacity = Number(eSite.style.opacity);
            function setDurShowLoad() {
                elemOpacity += 0.01;
                eSite.style.opacity = elemOpacity;
                eLoad.style.opacity = -elemOpacity;
                if (elemOpacity >= 1) {
                    clearInterval(inv);
                }
            }
            let inv = setInterval(setDurShowLoad, durationIn);
        }else{
            eSite.style.opacity = 1;
            eLoad.style.opacity = 0;
        }
    })
}

function sleep(time, func){
    new Promise((resolve) => setTimeout(resolve, time)).then(() => {
        func();
    })
}

//CSS 

class Css_css{
    resize(elem, type){
        elem.style.overflow = 'auto';
        if(type == 'b'){
            elem.style.resize = 'both';
        } else if(type == 'v'){
            elem.style.resize = 'vertical';
        } else if(type == 'h'){
            elem.style.resize = 'horizontal';
        } else{
            elem.style.resize = type;
        }
        
    }
}

// Attr
class Attributes_attr{
    get(elem, attr) {
        return elem.getAttribute(attr);
    }

    add(elem, attr, val){
        if(val != null){
            return elem.setAttribute(attr, val);
        }else{
            console.error('Value = null');
        }
    }

    remove(elem, attr){
        return elem.removeAttribute(attr, attr);
    }
}

// Animate
class Animate_ani{
    show(elem, duration){
        let dur = 1;
        if (duration == null || duration == 'not'){
            elem.style.opacity = '1';
        } else if (duration == 'veryfast') {
            dur = 2;
        } else if (duration == 'fast') {
            dur = 10;
        } else if (duration == 'normal') {
            dur = 20;
        }
        else if (duration == 'slow') {
            dur = 40;
        }
        else if (duration == 'veryslow') {
            dur = 80;
        } else {
            if (typeof duration == 'number'){
                dur = duration;
            }
        }
        elemOpacity = Number(e.style.opacity);
        function setShow() {
            elemOpacity += 0.01;
            e.style.opacity = elemOpacity;
            if (elemOpacity >= 1) {
                clearInterval(inv);
            }
        }
        var inv = setInterval(setShow, dur)
    }

    hide(elem, duration) {
        let dur = 1;
        if (duration == null || duration == 'not') {
            elem.style.opacity = '1';
        } else if (duration == 'veryfast') {
            dur = 2;
        } else if (duration == 'fast') {
            dur = 10;
        } else if (duration == 'normal') {
            dur = 20;
        }
        else if (duration == 'slow') {
            dur = 40;
        }
        else if (duration == 'veryslow') {
            dur = 80;
        } else {
            if (typeof duration == 'number') {
                dur = duration;
            }
        }
        elemOpacity = Number(e.style.opacity);
        function setHide() {
            elemOpacity -= 0.01;
            e.style.opacity = elemOpacity;
            if (elemOpacity <= 0) {
                clearInterval(inv);
            }
        }
        var inv = setInterval(setHide, dur)
    }

    slide(elem, arg, pro, duration){
        if (arg == 'from left to right' || arg == 'left => right' || arg == 'left > right' || arg == 'left to right' || arg == 'left right' || arg == 'l => r' || arg == 'l > r' || arg == 'l r'){
            let elemLeft = elem.style.left;
            let timer = setInterval(function() {
                elemLeft++;
                if (elemLeft >= pro){
                    clearInterval(timer);
                    return;
                }

                elem.style.left = elemLeft + '%';
            }, duration)
        } else if (arg == 'from right to left' || arg == 'right => left' || arg == 'right > left' || arg == 'right to left' || arg == 'right left' || arg == 'r => l' || arg == 'r > l' || arg == 'r l') {
            let elemRight = elem.style.right;
            let timer = setInterval(function () {
                elemRight++;
                if (elemRight >= pro) {
                    clearInterval(timer);
                    return;
                }

                elem.style.right = elemRight + '%';
            }, duration)
        } else if (arg == 'from top to bottom' || arg == 'top => bottom' || arg == 'top > bottom' || arg == 'top to bottom' || arg == 'top bottom' || arg == 't => b' || arg == 't > b' || arg == 't b') {
            let elemTop = elem.style.top;
            let timer = setInterval(function () {
                elemTop++;
                if (elemTop >= pro) {
                    clearInterval(timer);
                    return;
                }

                elem.style.top = elemTop + '%';
            }, duration)
        } else if (arg == 'from bottom to top' || arg == 'bottom => top' || arg == 'bottom > top' || arg == 'bottom to top' || arg == 'bottom top' || arg == 'b => t' || arg == 'b > t' || arg == 'b t') {
            let elemBottom = elem.style.bottom;
            let timer = setInterval(function () {
                elemBottom++;
                if (elemBottom >= pro) {
                    clearInterval(timer);
                    return;
                }

                elem.style.bottom = elemBottom + '%';
            }, duration)
        }
    }
}


// Window
class window_win{
    size(type) {
        if(type == 'w'){
            return window.innerHeight;
        } else if (type == 'h'){
            return window.innerHeight;
        }
        
    }

    dwin (type, text) {
        if (type == 'alert') {
            return alert(text);
        } else if (type == 'prompt') {
            return prompt(text);
        } else if (type == 'confirm') {
            return confirm(text);
        }
    }
}

//classes

class Class_classes {
    get(elem) {
        return elem.classList();
    }
    add(elem, classType){
        elem.classList.add(classType);
    }
    remove(elem, classType){
        elem.classList.remove(classType);
    }
}

// Console
class console_cmd{
    log(arg) {
        console.log(arg);
    }

    error(arg){
        console.error(arg);
    }

    clear(){
        console.clear();
    }

    group(title, collapsed, end){
        console.group(title);
        console.groupCollapsed(collapsed);
        if(end == 'move'){
            console.groupEnd();
        }
        else if (end == 'finally' || end == null){
            console.groupEnd();
            console.groupEnd();
        }
    }

    dir(arg){
        console.dir(arg);
    }
}

// text
class Text_text{
    html(elem, arg) {
        if (arg == null) {
            return elem.innerHTML;
        } else {
            return elem.innerHTML = arg;
        }
    }

    text(elem, arg) {
        if (arg == null) {
            return elem.innerTEXT;
        } else {
            return elem.innerTEXT = arg;
        }
    }

    val(elem, arg){
        if (arg == null) {
            return elem.value;
        } else {
            return elem.value = arg;
        }
    }
}


// Math

class Math_math{
    rand(min, max){
        if(min > max){
            console.error('The MIN number is greater than the MAX number!');
        }else{
            return Math.floor(Math.random() * max) + min;
        }
    }
}

class Search_search{
    sLoc(text, world){
        let res = text.indexOf(world);
        return res;
    }

    sCount(text, world){
        let res = text.indexOf(world);
        let count = 0;
        while (res !== -1) {
            count++;
            res = text.indexOf(world, res + 1);
        }
        return count;
    }
}


// Classes

const css = new Css_css;

const attr = new Attributes_attr;

const ani = new Animate_ani;

const classes = new Class_classes;

const cmd = new console_cmd;

const win = new window_win;

const text = new Text_text;

const math = new Math_math;

const search = new Search_search;
