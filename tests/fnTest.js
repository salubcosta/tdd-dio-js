const should = require('should');
const fnToBeTest = require('../fnToBeTest');
describe('find_crushs', ()=>{
    it('sum two numbers', ()=>{
        fnToBeTest.sum(2,3).should.be.equal(5)
    })

    it('multiply two numbers', ()=>{
        fnToBeTest.multiply(5,5).should.be.equal(25)
    })

    it('type a value your return should be: value is not found', ()=>{
        fnToBeTest.findValue('any value').should.be.equal('value is not found');
    })

    it('if no parameter was typed, return should be: value is required', ()=>{
        fnToBeTest.findValue().should.be.equal('value is required');
    })
})