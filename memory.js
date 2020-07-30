function dis1(req) {
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';

    let res;
    if(ch!=='9'){res = 1}
    else {res = 0};

    return JSON.stringify({"res": res});
}

function dis2(req) {
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';

    let res;
    let pr =ch.substring(ch.length-1)
    if(pr !== '0' && pr !== '4' && pr !== '9' && mm !== ''){res = 0}
    else {res = 1};
    
    return JSON.stringify({"res": res});
}

function sChange(mm, eq) {
    let a = mm.substr(0, 1);
    let b = eq.substr(eq.length - 1, 1);
    let c;

    if(a === '-' && b === '+') {
        c = eq.substr(0, eq.length - 2) + mm;
    } else if(a === '-' && b === '-') {
        c = eq.substr(0, eq.length - 2) + "✛" + mm.substr(1, mm.length - 1);
    }

    return c;
}

function parser(eq) {
    let res = '8';
    let a;

    for (let i = 0; i < eq.length; i++) {
        a = eq.substr(i, 1);
        
        switch (a) {
            case "✛":
                res += '3';
                break;

            case "-":
                res += '2';
                break;
            
            case "*":
                res += '1';
                break;

            case "/":
                res += '1';
                break;
            
            case ".":
                res += '4';
                break;

            default:
                res += '0';
                break;
        }
    }
    return res;
}

function mrf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';
    // let eq = summ(a, ch);
  
    let res = "123-2";
    let nch;
    console.log(eq === null);
    if(eq === null) {
        return JSON.stringify({"val": mm, "nch": parser(mm), "mem": mm});
    } else {
        console.log(1)
        if (!(ch.substr(ch.length - 1) === "0" || ch.substr(ch.length - 1) === "4")) {
            res = sChange(mm, eq);
            console.log(2)
            console.log(ch.substr(ch.length - 1))
        } else {
            let lch = ch.length - 1;
            let leq = eq.length - 1;
            console.log(3)

            for (let i = 0; i < eq.length; i++) {
                if (ch.substr(ch.length - i -1) !== "0" || ch.substr(ch.length - i - 1) !== "4") {
                    break;
                }
                lch -= 1;  
                leq -= 1;      
                console.log(4*+3)          
            }
            if (ch.substr(lch - 1, 1) === '2' && ch.substr(lch - 2, 1) === '1') {
                lch -= 1;  
                leq -= 1; 
                console.log(5)
            }

            res = eq.substr(0, leq);

            if (ch.substr(lch - 1, lch) === '2' && mm.substr(0, 1) =='-') {
                res = sChange(res, mm);
                console.log(6)
            } else {res += mm;}
        }
        nch = parser(res);

        return JSON.stringify({"val": res, "nch": nch, "mem": mm});
    }


    // if(eq === null){
    //     return JSON.stringify({"val": eq, "nch": ch, "mem": mm});
    // } else {
    //     for (let i = 0; i < char.length; i++) {
    //     if (char[i] === "-" && eval(char)>=0) {check = check + '2'}
    //     if (char[i] === ".") {check = check + '4'}
    //     else {check = check + '0'}
    //     };
    //     if (mm.substring(0, 1) === '-' && ch.substring(ch.length-1) === '2') {
    //     check = check.substring(1)
    //     char = char.substring(1)
    //     check = ch.substring(0, ch.length-1) + '3' + check;
    //     char = eq.substring(0, eq.length-1) + '✛' + char;
    //     } else {
    //     check = ch + check;
    //     char = eq + char;
    //     };
    // }

    return JSON.stringify({"val": eq, "nch": ch, "mem": mm});
}

function mcf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';

    return JSON.stringify({"val": eq, "nch": ch, "mem": ''});
}

function mpf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';

    let res = getRes(eq, ch);
    
    if (res !== null && res != undefined) {
        if(mm === null) {
            mm = 0;
        } else {
            res = mm + '+' + res;
        }
        res = eval(res) + '';
    } else {res = mm;}

    return JSON.stringify({"val": eq, "nch": ch, "mem": res});
}

function mmf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';

    let res = getRes(eq, ch);
    
    if (res !== null && res != undefined) {
        if(mm === null) {
            mm = 0;
        } else if(res.substr(0, 1) === '-') {
            res = eval(res + '*(-1)') + '';
            res = mm + '+' + res;
        } else { res = mm + '-' + res;}
        
        res = eval(res) + '';
    } else {res = mm;}

    return JSON.stringify({"val": eq, "nch": ch, "mem": res});
}

function msf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';

    let res = getRes(eq, ch);
    console.log(res)
    console.log(res === undefined || res === null)
    let a = (res === undefined || res === null) ? mm : res;

    return JSON.stringify({"val": eq, "nch": ch, "mem": a});
}

function getRes(eq, ch) {
    let res;
    console.log(eq)
    console.log(eq === null || eq === undefined || eq === '')
    if(eq === null) {
        console.log('gr0')
        res = '0';
    } else if (ch.substring(ch.length - 1) === '0') {
        console.log('gr1')
        res = getNum(eq, ch, 1);
    } else if (ch.substring(ch.length - 2) === '0') {
        console.log('gr2')
        res = getNum(eq, ch, 2);
    } else if (ch.substring(ch.length - 3) === '0') {
        console.log('gr3')
        res = getNum(eq, ch, 3);
    } else {return;}

    return res;
}

function getNum(eq, ch, n) {
    console.log('gn start')
    let a = n;
    let res = '';
    while ((ch.substring(ch.length - a, 1) === '0' || ch.substring(ch.length - a, 1) === '4') && (eval(ch.length) - a) >= 0) {
        console.log('gn1')
        res = eq.substring(eq.length - a, 1) + res;
        a += 1;
    }

    if ((ch.substring(ch.length - a, 1) === '2') && (eval(ch.length) - a) >= 0) {
        res = '-' + res;
    }

    return res;
}

module.exports = {
    msf, mmf, mpf, mcf, mrf, dis1, dis2
}