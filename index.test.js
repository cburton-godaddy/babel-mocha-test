import square from './index.js';

describe('square', () => {
    it('should square value', () => {
        expect(square(2)).to.be(4);
    });
});
square();