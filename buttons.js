function btn(req){    
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';
    let id = req.query.id !== null ? (req.query.id + "") : '';
    let vl = req.query.vl === null ? '' : (
        req.query.vl === 'pl' ? '✛' : (
            req.query.vl === 'mn' ? '-' : (
                req.query.vl === 'mp' ? '*' : (
                    req.query.vl === 'dv' ? '/' : (
                        req.query.vl === 'dt' ? '.' : (req.query.vl + "")
                    )
                )
            )
        )
    )

    if(ch.substr(0, 1) === '9' && (id === '0' || id === '4')) {
      eq = '';
      ch = '8'
    } else {
      ch = 8 + ch.substr(1, ch.length-1);
    }

    let val = eq;
    let nch = ch;

    let sub =ch.substring(ch.length - 1) + id;

    //Наверное надо было сделать эррэем, но я об этом подумал в конце, и исправлять уже не было времени.
    if (sub==='80' || sub==='00' || sub==='10' || sub==='20' || sub==='30' || sub==='40' ||
        sub==='83' || sub==='03' ||  sub==='43' || sub==='93' ||
        sub==='01' || sub==='41' || sub==='91' ||
        sub==='04' || sub==='14' || sub==='24' || sub==='34' ||
        sub==='82' || sub==='02' || sub==='12' || sub==='42' || sub==='92')
        // Убрал 13
    {
      val = eq + vl + "";
      nch = ch + id + "";
    } else if(sub==='22'){
      val = eq.substring(0, eq.length - 1) + '+' + "";
      nch = ch.substring(0, ch.length - 1) + '3' + "";
    } else if(sub==='90' || sub==='94'){
      val = vl + "";
      nch = ch + id + "";
    } else if(sub==='11' || sub==='21' || sub==='31' || sub==='32'){
      val = eq.substring(0, eq.length - 1) + vl + "";
      nch = ch.substring(0, ch.length-1) + id + "";
    }

    return JSON.stringify({"val": val, "nch": nch});
}

module.exports = {btn};