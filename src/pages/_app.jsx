/* eslint-disable react/jsx-props-no-spreading */
import { SWRConfig } from "swr";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";

import "styles/fonts.css";
import "styles/theme.css";
import "styles/globals.css";
import "styles/user.css";

import nextI18nextConfig from "../../next-i18next.config";

import { ColorProvider } from "utils/contexts/color";
import { ThemeProvider } from "utils/contexts/theme";
import { SettingsProvider } from "utils/contexts/settings";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Head>
        {/* https://nextjs.org/docs/messages/no-document-viewport-meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ColorProvider>
        <ThemeProvider>
          <SettingsProvider>
            <Component {...pageProps} />
          </SettingsProvider>
        </ThemeProvider>
      </ColorProvider>
    </SWRConfig>
  );
}

export default appWithTranslation(MyApp, nextI18nextConfig);
