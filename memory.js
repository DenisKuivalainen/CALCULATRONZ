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

function mrf(req) {
    //Реализованно крайне тупо, но работает... Сейчас 2:33 и мне влом это делать...
  //Хотя это не сложно и я могу это сделать, но если работает и так, то зачем что то менять...
    let a = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';
    let eq = summ(a, ch);
  
    let char = mm;
    let check = '';
    if(eq === null){
        return JSON.stringify({"val": eq, "nch": ch, "mem": mm});
    } else {
        for (let i = 0; i < char.length; i++) {
        if (char[i] === "-" && eval(char)>=0) {check = check + '2'}
        if (char[i] === ".") {check = check + '4'}
        else {check = check + '0'}
        };
        if (mm.substring(0, 1) === '-' && ch.substring(ch.length-1) === '2') {
        check = check.substring(1)
        char = char.substring(1)
        check = ch.substring(0, ch.length-1) + '3' + check;
        char = eq.substring(0, eq.length-1) + '✛' + char;
        } else {
        check = ch + check;
        char = eq + char;
        };
    }

    return JSON.stringify({"val": char, "nch": check, "mem": mm});
}

function mcf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';

    return JSON.stringify({"val": eq, "nch": ch, "mem": ''});
}

function mpf(req) {
    let a = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';
    let eq = summ(a, ch);

    let mempl = mm;
    if(eq !== null) {
        if(mm !== ''){
            mempl = mm + "+" + eq;
            mempl = eval(mempl) + '';
        } else {
            mempl = eq;
        }
    }

    return JSON.stringify({"val": a, "nch": ch, "mem": mempl});
}

function mmf(req) {
    let a = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';
    let eq = summ(a, ch);

    let memmin = mm;
    if(eq !== null){
        if(mm === ''){
            if(eq.substr(0,1) === '-') {
            memmin = eq.substr(1);
            } else {
            memmin ="-" + eq;
            }
        } else{
            if(eq.substr(0,1) === '-') {
            memmin = mm + '+' + eq.substr(1);
            memmin = eval(memmin) + '';
            } else {
            memmin = mm + '-' + eq;
            memmin = eval(memmin) + '';
            }
        }
    }

    return JSON.stringify({"val": a, "nch": ch, "mem": memmin});
}

function msf(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let mm = req.query.mm !== null ? (req.query.mm + "") : '';

    let fs = summ(eq, ch);
    if(fs !== null) {
        return JSON.stringify({"val": eq, "nch": ch, "mem": fs});
    }    
}

function summ(eq, ch) {
    let sub = ch.substring(ch.length - 1);
    if(ch !== '9' && ch !== '8' && summ && sub !== '1' && sub !== '2' && sub !== '3') {
        let summ = eq.replace('✛', '+');
        summ = eval(summ) + '';

        return summ;
    } else {
        return;
    }
}

module.exports = {
    msf, mmf, mpf, mcf, mrf, dis1, dis2
}