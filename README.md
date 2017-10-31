# Georgiy's test tasks!
Solutions to https://docs.google.com/document/d/10kAifjCE0-J6vBh5GxyZ98I-xFDUsqIMtpYh_ITAgkc/edit#

## Task 1
<img src="task1/task1-screenshot.png" width="250"><br>
<img src="task1/button-click-alert.png" width="250"><br>
[To the repo ->](https://github.com/ururualeksi/test-tasks/tree/master/task1)
<br>
## Task 2
<img src="task2.png" width="750"><br>
<br>
## Task 3
```javascript
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

```
<br>

## Task 4
```javascript

let min2 = 0;
let min1 = 1;

for (var i = 2; i < 196; i++) {
  let res = min2 + min1 + 42;
  min2 = min1;
  min1 = res;
  console.log(res);
}

```
<img src="task4.png" width="250"><br>
## Task 5
<img src="task5.png" width="350"><br>
