import React, { ReactElement } from "react";
import { ThemeProvider } from "@shopify/restyle";
import { RenderHookOptions, RenderOptions, render, renderHook } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@theme";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';



export const wrapperAllProviders = () => {
    const queryClient = new QueryClient({
        logger: {
            log: console.log,
            warn: console.warn,
            //@ts-ignore
            error: process.env.NODE_ENV === 'test' ? () => { } : console.error,
        },
        defaultOptions: {
            queries: {
                retry: false,
                cacheTime: Infinity,
            },
            mutations: {
                retry: false,
                cacheTime: Infinity
            }
        }

    });

    return ({ children }: { children: React.ReactNode }) => {
        return (
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <NavigationContainer>{children}</NavigationContainer>
                </ThemeProvider>
            </QueryClientProvider>
        )

    }
}


function customRender<T = unknown>(
    component: ReactElement<T>,
    options?: Omit<RenderOptions, 'wrapper'>,
) {
    return render(component, { wrapper: wrapperAllProviders(), ...options });
}

function customRenderHook<Result, Props>(
    renderCalback: (props: Props) => Result,
    options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
    return renderHook(renderCalback, {
        wrapper: wrapperAllProviders(),
        ...options,
    });
}

export * from '@testing-library/react-native';
export { customRender as render };
export { customRenderHook as renderHook };