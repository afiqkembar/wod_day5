var n =6
var m = 5;
for (i = 0; i < n; i++) {
        for (k = 0 ; k <= m; k ++) {
            if (k+i < m) {
                document.write("X");
            }
            else {
                document.write("O");
            }
        }
       document.write("<br/>");
    }
