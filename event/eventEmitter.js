var events = require('events');
var util = require('util');

var Person = function(name){
this.name=name;
};
util.inherits(Person, events.EventEmitter);


var james = new Person('james');
var mary = new Person('mary');
var riyu = new Person('riyu');

var people = [james, mary, riyu];

people.forEach(function(person)
{
person.on('speak', function(msg){
console.log(person.name + 'said: ' + msg);
});

});
james.emit('speak', 'hey dudes');
mary.emit('speak', 'hello mary');

riyu.emit('speak', 'hey  riyu');
