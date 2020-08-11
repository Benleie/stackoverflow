
var msg = {
    a: 1,
    b: 2
};
// console.log(this === window)
window.msg = msg;
var chat  = {
    send: function(){
        console.log(msg === window.msg)  //true
        console.log(this === window)    //false
        msg[1] = 3; //这里操作的msg是window上的msg吗
    }
}
chat.send()