
function convert(str) {
    var list = [];
    for (var k in str) {
        //list.push(Number(str[k]));
        list.push(str[k]);
    }
    return list;
}

function max(list) {
//    return Math.max.apply(null, list);

    var num = list[0];
    for (var i = 0; i < list.length; i++) {
        if (num < list[i]) {
            num = list[i];
        };
    }
    return num;
}

// inputに入力データ全体が入る
function Main(input) {
    // 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split('\n');
    
    var n = Number(input[0]);
    
    var list = [];
    for (var i = 0; i < n; i++) {
        list.push(input[i + 1]);
    }
    
    list.forEach(function(str) {
        var cnt = 0;
        var num = Number(str);
        while(num !== 0) {
            num -= max(convert(String(num)));
            cnt++;
        }
        console.log(cnt);
    });
}
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));






