function summ(req) {
    try{
        let eq = req.query.eq !== null ? (req.query.eq + "") : '';
        let ch = req.query.ch !== null ? (req.query.ch + "") : '';

        let summ = eq.replace('✛', '+');
        let sub = ch.substring(ch.length - 1);
        if(ch !== '9' && ch !== '8' && summ && sub !== '1' && sub !== '2' && sub !== '3') {
          summ = eval(summ) + '';
          let nch = '9';
          for (let i = 0; i < summ.length; i++) {
            if (summ.substr(i, 1) === '.') {
              nch += '4';
            } else {nch += '0';}
          }
          return JSON.stringify({"val": summ, "nch": nch});
        } else {
            return JSON.stringify({"val": eq, "nch": ch});
        }
      } catch(error) {
        return;
      }
}

module.exports = {summ};