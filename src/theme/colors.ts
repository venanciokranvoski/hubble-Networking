    export const palette = {
    greenvPrimary: '#074C4E',
    greenvPrimaryLight: '#EAF6F6',
    carrotSecondary: '#F86F2D',
    carrotSecondaryLight: '#FAE6DD',
    greenvSuccess: '#4ABC86',
    greenvSuccessLight: '#D8FFEC',
    redError: '#EA3838',
    redErrorLight: '#FBECEC',

    grayBlack: '#000000',
    grayblack70: 'rgba(0,0,0,0.6)',
    gray1: '#636363',
    gray2: '#8E8E8E',
    gray3: '#838383',
    gray4: '#E1E1E1',
    gray5: '#f5f5f5',
    grayWhite: '#FFFFFF',
    white70: 'rgba(255,255,255,0.7)',
    transparent: 'transparent'
    };

    const lightTheme = {
        ...palette,
        primary: palette.greenvPrimary,
        primaryContrast: palette.grayWhite,

        buttonPrimary: palette.greenvPrimary,

        background: palette.grayWhite,
        backgroundContrast: palette.grayBlack,

        error: palette.redError,
        errorLight: palette.redErrorLight,

        success: palette.greenvSuccess,
        successLight: palette.greenvSuccessLight,

        market: palette.carrotSecondary,
        paragraph: palette.gray1,

        iconColor: palette.greenvPrimary,
        iconFillColor: palette.grayWhite,

        paragraphSecondary: palette.gray1,
        separator: palette.gray4,
    };

    const darkTheme: typeof lightTheme = {
        ...palette,
        primary: palette.carrotSecondary,
        primaryContrast: palette.grayWhite,

        buttonPrimary: palette.carrotSecondary,

        background: palette.grayBlack,
        backgroundContrast: palette.grayWhite,

        error: palette.redError,
        errorLight: palette.redErrorLight,

        success: palette.greenvSuccess,
        successLight: palette.greenvSuccessLight,

        market: palette.carrotSecondary,

        paragraph: palette.grayWhite,

        iconColor: palette.greenvPrimaryLight,
        iconFillColor: palette.grayBlack,

        paragraphSecondary: palette.gray3,
        separator: palette.gray1,
    }

    export const colors = {palette, lightTheme, darkTheme}