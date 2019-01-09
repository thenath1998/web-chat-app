let expect = require('expect');
let {
    generateMessage,
    generateLocationMessage
} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let from = 'Sumon';
        let text = 'Hello world.';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeAn('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        let from = 'Sumon';
        let latitude = '22.5028918';
        let longitude = '88.3201224';
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        let message = generateLocationMessage(from, latitude, longitude);

        expect(message.createdAt).toBeAn('number');
        expect(message).toInclude({
            from,
            url
        });
    });
});