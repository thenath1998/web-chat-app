let expect = require('expect');
let {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Sumon';
        let text = 'Hello world.';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeAn('number');
        expect(message).toInclude({from, text});
    });
});