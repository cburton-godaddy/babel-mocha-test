import square from './index.js';
import assert from 'assert';

describe('square', () => {
    it('should square value', () => {
        assert.equal(square(2), 4);
    });
});
