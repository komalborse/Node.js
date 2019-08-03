var time = 0;
var timer = setInterval(function()
{
time += 2;
console.log(time + 'second have passed');
if (time > 50){
  clearInterval(timer);
}
}, 200);
