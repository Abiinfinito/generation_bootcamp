/* function onKeyDownHandler() {
    console.log("key pressed ",  String.fromCharCode(event.keyCode));
} */

addEventListener('keypress', function (e){
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.code);
})

/* document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    alert('keydown event\n\n' + 'key: ' + keyName);
  }); */