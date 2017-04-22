const should = require('chai').should();

const fizzBuzzer= require('../fizzBuzzer.js');


describe('buzzer', function(){
 
 it('should return fizz-buzz', function(){
     const answer = fizzBuzzer(15);
     answer.should.equal('fizz-buzz');
 });

it('should return fizz', function(){
    const answer = fizzBuzzer(9);
    answer.should.equal('fizz');
});

it('should return buzz', function(){
    const answer = fizzBuzzer(20);
    answer.should.equal('buzz');
});
});
