(function montypython(count) {
  var s = '';

  for (let i = 1; i < 101; i++) {
    if (i % 3 == 0) {
      s+='Monty';
    };
    if (i % 5 == 0) {
      s+='Python';
    };

    if(s) console.log(s);
    s = '';
  }
})();
