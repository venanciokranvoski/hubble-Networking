
import { useAppSafeArea } from "../useAppSafeArea";
import { theme } from "@theme";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";
import { renderHook } from "@test-utils";


jest.mock('react-native-safe-area-context');

// criando um mock para tipar 
const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', ()=> {
        test('when the safe area is less then minimum required, it returns the minimum requirement', ()=> {
          mockedUseSafeAreaInsets.mockImplementationOnce(()=> ({top: 4, bottom:2} as EdgeInsets),);


            const  {result} =  renderHook(()=> useAppSafeArea());

            expect(result.current.top).toEqual(theme.spacing.s20);
            expect(result.current.bottom).toEqual(theme.spacing.s20);
        });

        test('when the safe area is greater than minimum requirement, it returns the safe area', () => {
          mockedUseSafeAreaInsets.mockImplementationOnce(
            () =>
              ({
                top: 40,
                bottom: 40,
              } as EdgeInsets),
          );
      
          const {result} = renderHook(() => useAppSafeArea());
      
          expect(result.current.top).toEqual(40);
          expect(result.current.bottom).toEqual(40);
        });
    })