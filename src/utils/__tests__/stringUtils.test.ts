import {stringsUtils} from '@utils';


describe('stringUtils', ()=> {

    describe('capitalaseFistLetter', () => {
        it('Should capitalize the first letter of each word', () => {
            expect(stringsUtils.capitalizeFirstLetter('ana maria')).toBe('Ana Maria');
            expect(stringsUtils.capitalizeFirstLetter('maria')).toBe('Maria');
            expect(stringsUtils.capitalizeFirstLetter('ana')).toBe('Ana');
            expect(stringsUtils.capitalizeFirstLetter('na')).toBe('Na');
            expect(stringsUtils.capitalizeFirstLetter('mm')).toBe('MM');
        })
    })

})
