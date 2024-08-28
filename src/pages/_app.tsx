import '../app/globals.css'; // Adjust the path according to your project structure
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      <div className="bg-gradient-to-br from-white via-gray-300 to-slate-500 dark:from-black dark:via-gray-800 dark:to-slate-600 font-poppins text-gray-900 dark:text-white">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
