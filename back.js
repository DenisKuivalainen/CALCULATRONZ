function back(req) {
    let eq = req.query.eq !== null ? (req.query.eq + "") : '';
    let ch = req.query.ch !== null ? (req.query.ch + "") : '';

    let sub =ch.substring(ch.length-1)
    if(ch.substr(0, 1) === '9') {
      return rem(req);
    } else if(sub!=='8') {
      if(sub==='9') {

        return JSON.stringify({"val": '', "nch": '8'});
      }
      else {
        const back = eq.substring(0, eq.length - 1);
        const nch = ch.substring(0, ch.length - 1);

        return JSON.stringify({"val": back, "nch": nch}); 
      }
    } else {
      return JSON.stringify({"val": eq, "nch": ch});
    }
    
}

function rem(req) {
  return JSON.stringify({"val": '', "nch": '8'});
}

module.exports = {back, rem};