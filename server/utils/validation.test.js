const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var name = 123;
        var login = isRealString(name);

        expect(login).toBe(false);

    });

    it('should reject string with only spaces', () => {
        var name = '   ';
        var login = isRealString(name);

        expect(login).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var name = "  d onas  ";
        var login = isRealString(name);

        expect(login).toBe(true);
    });
});