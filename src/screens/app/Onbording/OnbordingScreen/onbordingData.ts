    import { ImageProps } from 'react-native';

    import { imagens } from '@assets';

    export type OnbordingPageItem = {
    title: Array<{ text: string; highlight: boolean }>;
    subtitle: string;
    image: {
        light: ImageProps['source'];
        dark: ImageProps['source'];
    };
        index: number;
        total: number;
        isLast: boolean;
    };


    type OnbordinmgPageItemWithoutMeta = Omit<OnbordingPageItem, 'index' | 'total' | 'isLast'>;

    const page1: OnbordinmgPageItemWithoutMeta = {
    title: [
        { text: 'Uma rede social de', highlight: false },
        { text: '\nconexões reais', highlight: true },
    ],
    
    subtitle:
        'Fique por dentro do que acontece com as pessoas que voce mais gosta',
    image: {
        light: imagens.onbordingLight1,
        dark: imagens.onbordingDark1,
        },
    };

    const page2: OnbordinmgPageItemWithoutMeta = {
    title: [
        { text: 'Compartilhe suas', highlight: false },
        { text: '\nhistórias', highlight: true },
        { text: ' com seus amigos próximos', highlight: false },
    ],
    subtitle: 'Tenha sua linha do tempo personalizada',
    image: {
        light: imagens.onbordingLight2,
        dark: imagens.onbordingDark2,
    },
    };

    const page3: OnbordinmgPageItemWithoutMeta = {
    title: [
        { text: 'Interaja', highlight: true },
        { text: ' em tempo real com as pessoas', highlight: false },
    ],
    subtitle: 'Curta, comente e favorite os conteúdos que você mais gostar',
    image: {
        light: imagens.onbordingLight3,
        dark: imagens.onbordingDark3,
    },
    };

    export const onbordingPages: OnbordingPageItem[] = [page1, page2, page3].map(
        (page, index, array) => ({
            ...page,
            index,
            total: array.length,
            isLast: index + 1 === array.length,
        })
    )
