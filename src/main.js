
// ---------------     ----------
// -                           - 
// -                           - 
// -                           - 
// -                           - 
// ---------------             - 
//               -             - 
//               -             - 
//               -             - 
//               -             - 
// ---------------             - 

// by St3yfer


    let echoF = 1;
    function echo(arg) {
        if (arg == true) {
            echoF = 1;
        } else if (arg == false) 
            echoF = 0;
        }
    }

    function checkConnect() {
        if (echoF == 1) {
            console.log('Structur
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

const hAligns = ['left', 'center'
const vAligns = ['top', 'middle',

//MAIN

function v(elem, arg, attr){
    if (arg == null) {
        return document.querySele
    } else {
        if (arg == 'length') {
            return document.query
        } else if (arg == 'val') 
            return document.query
        } else if (arg == 'atr' |
            if (attr != null) {
                return document.q
            } else {
                console.error('At
            }

        }
    }
}

function on(elem, type, func){
    return elem.addEventListener(
}

function str(elem, position){
    elem.style.display = 'flex';
    elem.style.justifyContent = p
} 

function load(time, eSite, eLoad,
    if(durationOut != 0 || durati
        eSite.style.opacity = 1;
        let elemLoadOpacity = 0;
        let elemOpacity = Number(
        function setDurHideLoad()
            elemOpacity -= 0.1;
            elemLoadOpacity += 0.
            eSite.style.opacity =
            eLoad.style.opacity =
            if (elemOpacity <= 0)
                clearInterval(inv
            }
        }
        let inv = setInterval(set
    } else {
        eSite.style.opacity = 0;
        eLoad.style.opacity = 1;
    }
    new Promise((resolve) => setT
        if (durationIn != 0 || du
            eSite.style.opacity =
            let elemLoadOpacity =
            let elemOpacity = Num
            function setDurShowLo
                elemOpacity += 0.
                eSite.style.opaci
                eLoad.style.opaci
                if (elemOpacity >
                    clearInterval
                }
            }
            let inv = setInterval
        }else{
            eSite.style.opacity =
            eLoad.style.opacity =
        }
    })
}

function sleep(time, func){
    new Promise((resolve) => setT
        func();
    })
}

//CSS 

class Css_css{
    resize(elem, type){
        elem.style.overflow = 'au
        if (type == 'b' || type =
            elem.style.resize = '
        } else if (type == 'v' ||
            elem.style.resize = '
        } else if (type == 'h' ||
            elem.style.resize = '
        } else{
            elem.style.resize = t
        }
        
    }
}

// Attr
class Attributes_attr{
    get(elem, attr) {
        return elem.getAttribute(
    }

    add(elem, attr, val){
        if(val != null){
            return elem.setAttrib
        }else{
            console.error('Value 
        }
    }

    remove(elem, attr){
        return elem.removeAttribu
    }
}

// Animate
class Animate_ani{
    show(elem, duration){
        let dur = 1;
        if (duration == null || d
            elem.style.opacity = 
        } else if (duration == 'v
            dur = 2;
        } else if (duration == 'f
            dur = 10;
        } else if (duration == 'n
            dur = 20;
        }
        else if (duration == 'slo
            dur = 40;
        }
        else if (duration == 'ver
            dur = 80;
        } else {
            if (typeof duration =
                dur = duration;
            }
        }
        let elemOpacity = Number(
        function setShow() {
            elemOpacity += 0.01;
            elem.style.opacity = 
            if (elemOpacity >= 1)
                clearInterval(inv
            }
        }
        var inv = setInterval(set
    }

    hide(elem, duration) {
        let dur = 1;
        if (duration == null || d
            elem.style.opacity = 
        } else if (duration == 'v
            dur = 2;
        } else if (duration == 'f
            dur = 10;
        } else if (duration == 'n
            dur = 20;
        }
        else if (duration == 'slo
            dur = 40;
        }
        else if (duration == 'ver
            dur = 80;
        } else {
            if (typeof duration =
                dur = duration;
            }
        }
        let elemOpacity = Number(
        function setHide() {
            elemOpacity -= 0.01;
            elem.style.opacity = 
            if (elemOpacity <= 0)
                clearInterval(inv
            }
        }
        var inv = setInterval(set
    }

    slide(elem, arg, pro, duratio
        if(pos == null){
            elem.style.position =
        } else{
            elem.style.position =
        }
        
        if (arg == 'from left to 
            let elemLeft = elem.s
            let timer = setInterv
                elemLeft++;
                if (elemLeft >= p
                    clearInterval
                    return;
                }

                elem.style.left =
            }, duration)
        } else if (arg == 'from r
            let elemRight = elem.
            let timer = setInterv
                elemRight++;
                if (elemRight >= 
                    clearInterval
                    return;
                }

                elem.style.right 
            }, duration)
        } else if (arg == 'from t
            let elemTop = elem.st
            let timer = setInterv
                elemTop++;
                if (elemTop >= pr
                    clearInterval
                    return;
                }

                elem.style.top = 
            }, duration)
        } else if (arg == 'from b
            let elemBottom = elem
            let timer = setInterv
                elemBottom++;
                if (elemBottom >=
                    clearInterval
                    return;
                }
                console.log('ds')
                elem.style.bottom
            }, duration)
        }
    }
}


// Window
class window_win{
    size(type) {
        if(type == 'w'){
            return window.innerHe
        } else if (type == 'h'){
            return window.innerHe
        }
        
    }

    dwin (type, text) {
        if (type == 'alert') {
            return alert(text);
        } else if (type == 'promp
            return prompt(text);
        } else if (type == 'confi
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
        elem.classList.add(classT
    }
    remove(elem, classType){
        elem.classList.remove(cla
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
        console.groupCollapsed(co
        if(end == 'move'){
            console.groupEnd();
        }
        else if (end == 'finally'
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
            return elem.innerHTML
        } else {
            return elem.innerHTML
        }
    }

    text(elem, arg) {
        if (arg == null) {
            return elem.innerTEXT
        } else {
            return elem.innerTEXT
        }
    }

    val(elem, arg){
        if (arg == null) {
            return elem.value;
        } else {
            return elem.value = a
        }
    }
}


// Math

class Math_math{
    rand(min, max){
        if(min > max){
            console.error('The MI
        }else{
            return Math.floor(Mat
        }
    }
}

class Search_search{
    sLoc(text, world){
        let res = text.indexOf(wo
        return res;
    }

    sCount(text, world){
        let res = text.indexOf(wo
        let count = 0;
        while (res !== -1) {
            count++;
            res = text.indexOf(wo
        }
        return count;
    }
}


// Classes

const css = new Css_css;

const attr = new Attributes_attr;

const ani = new Animate_ani;

const classes = new Class_classes

const cmd = new console_cmd;

const win = new window_win;

const text = new Text_text;

const math = new Math_math;

const search = new Search_search;
