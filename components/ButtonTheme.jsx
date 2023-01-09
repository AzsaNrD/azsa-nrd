import { useTheme } from 'next-themes';

export default function ButtonTheme() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <button onClick={() => setTheme('light')} className='text-ash-600 dark:text-gray-200 text-sm md:text-base'>
        light mode
      </button>
    );
  }

  return (
    <button onClick={() => setTheme('dark')} className='text-ash-600 text-sm md:text-base'>
      dark mode
    </button>
  );
}
