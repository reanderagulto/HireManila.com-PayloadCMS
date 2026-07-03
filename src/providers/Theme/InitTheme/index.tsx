import Script from 'next/script'
import React from 'react'

export const InitTheme: React.FC = () => {
  return (
    // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
    <Script
      dangerouslySetInnerHTML={{
        __html: `
          (function () {
            function getImplicitPreference() {
              var mediaQuery = '(prefers-color-scheme: light)'
              var mql = window.matchMedia(mediaQuery)
              var hasImplicitPreference = typeof mql.matches === 'boolean'

              if (hasImplicitPreference) {
                return mql.matches
              }

              return null
            }

            function themeIsValid(theme) {
              return theme === 'light'
            }

            var themeToSet = 'light'

            document.documentElement.setAttribute('data-theme', themeToSet)
          })();
          `,
      }}
      id="theme-script"
      strategy="beforeInteractive"
    />
  )
}
