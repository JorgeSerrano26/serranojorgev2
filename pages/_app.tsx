import '../styles/globals.scss';
import type { AppProps } from 'next/app';

import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <NextUIProvider>
            <Component />
        </NextUIProvider>
    );
}

export default MyApp;
