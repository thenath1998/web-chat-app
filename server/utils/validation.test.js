let expect = require('expect');
let {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(67);
        expect(res).toBe(false);
    });
    it('should reject string with only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBe(false);
    });
    it('should allow non-space strings', () => {
        var res = isRealString('hello');
        expect(res).toBe(true);
    });
});