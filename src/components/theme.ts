// Shared by the root layout (server) and ThemeToggle (client), so it lives in a plain module.
export const THEME_STORAGE_KEY = 'theme';

// Runs in <head> before first paint so a saved light theme never flashes dark.
export const themeScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='light')document.documentElement.dataset.theme='light'}catch(e){}`;
