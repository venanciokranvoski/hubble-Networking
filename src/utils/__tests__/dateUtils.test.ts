import { dateUtils } from "../dateUtils";
import {sub, formatISO} from 'date-fns';

const MOCKED_NOW = 1696573824333;


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

            jest.spyOn(Date, 'now').mockImplementation(()=> MOCKED_NOW);

            const time = sub(Date.now(), {minutes: 30 });
            const timeISO = formatISO(time);

            expect(dateUtils.formatRelative(timeISO)).toBe('30 m');
        });

        test('another test about diferency in Days', () => {
            const time = sub(Date.now(), {days: 5});
             const timeISO = formatISO(time);

            expect(dateUtils.formatRelative(timeISO)).toBe('5 d');
        })

        test('shouls be displayed inm weeks if less than 4 weeks ago', () => {
            const time = sub(Date.now(), {weeks: 2, hours: 2 });
             const timeISO = formatISO(time);

            expect(dateUtils.formatRelative(timeISO)).toBe('2 sem');
        })

        test('another test', () => {
            const time = sub(Date.now(), {months: 10});
             const timeISO = formatISO(time);

            expect(dateUtils.formatRelative(timeISO)).toBe('06/12/2022');
        })

    })
})