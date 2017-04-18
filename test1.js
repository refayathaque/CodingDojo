function fahToCel(fDg) {
  var cDg = 0;
  for(var x = 0; x < fDg.length; x++) {
    cDg = 5/9 * (fDg[x] - 32);
    console.log(cDg);
  }
}

fahToCel([32, 45, 89]);
