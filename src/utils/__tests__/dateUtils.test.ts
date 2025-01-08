import { dateUtils } from "../dateUtils";
import {sub, formatISO, Duration} from 'date-fns';

const MOCKED_NOW = 1696573824333;

// # implementando um teste limpo 
function getDateNow(duration: Duration): string {
    const time = sub(Date.now(), duration);
    const timeISo = formatISO(time);

    return dateUtils.formatRelative(timeISo);
}

// spyOn ajuda a verificar se uma função foi executada quantas vezes foi 
// executrada durante o teste 

describe('dateUtils', () => {
    
    describe('formatRelative', ()=> {

        beforeAll(()=> {
            jest.spyOn(Date, 'now').mockImplementation(()=> MOCKED_NOW);
        });


        // clean mocks  remover instancias memso se estiver enserida em outro teste. 
        afterAll(()=> {
            jest.clearAllMocks();
        });

        test('should be displayed in seconds if less than 1 minute ago', () =>  {
            expect( getDateNow({minutes: 30})).toBe('30 m');
        });

        test('another test about diferency in Days', () => {
            expect(getDateNow({days: 20})).toBe('3 sem');
        })

        test('shouls be displayed inm weeks if less than 4 weeks ago', () => {
            expect(getDateNow({weeks: 3, hours:2})).toBe('3 sem');
        })

        test('another test', () => {
            expect(getDateNow({months: 10})).toBe('06/12/2022');
        })
    })
})