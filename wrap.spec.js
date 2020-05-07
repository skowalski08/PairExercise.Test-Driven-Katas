const { expect } = require('chai');
const wrap = require('./wrap');

const loremIpsum = "Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula."

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });
  it('Returns an unwrapped string if column is 0', () => {
    expect(wrap(loremIpsum, 0).to.equal(loremIpsum))
  })
  it('Returns unwrapped string if column number exceeds string length', () => {
    expect(wrap('Hello World', 20).to.equal("Hello World"))
  })
  it('Returns unwrapped string, if string is a single word', () => {
    expect(wrap("Fullstack", 5).to.equal("Fullstack"))
  })
  it('Breaks lines at word boundaries', () => {
    expect(wrap(loremIpsum, 20).to.equal("Lorem ipsum dolor \nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula."))
  })
  it('Max length will not exceed the column number', () => {
    expect(wrap('Hello World', 7).to.equal('Hello \nWorld'))
  })
});
