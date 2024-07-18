// wrtie a script to print a pattern of stars using nested loop;
for (var i = 1; i <= 5; i++) {
    var pattern = '';
    for (var j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
