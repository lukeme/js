// 数组相关的函数

/**
返回一维数组arr中的任意num个元素组成的新数组
如 array_rand([1,2,3,4,5], 3) 可能返回 [1,5,3]
*/
function array_rand(arr, num){
    var arr_length = arr.length
    var new_arr = [];
    do{
        var i = parseInt(Math.random()*100 % arr_length);
        var char = arr[i];
        if(new_arr.indexOf(char) === -1){
            new_arr.push(char);
        }
        
    }while(new_arr.length < num);
    return new_arr;
}

