function change() {
    var i = 1;
    var arr = { "1": 4, "2": 1, "3": 2, "4": 7, "5": 5, "6": 3, "7": 8, "8": 9, "9": 6 }
    for (i = 1; i < 10; i++) {
        let btn = document.getElementById("btn" + i);
        btn.innerText = arr[btn.innerText];
        }
}
