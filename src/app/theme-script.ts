export function themeScript() {
    return `
      try {
        // Check if dark mode is explicitly set in localStorage or if system prefers dark mode and no preference is stored
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          // Add dark class to enable dark mode styles
          document.documentElement.classList.add('dark')
        } else {
          // Remove dark class to disable dark mode styles
          document.documentElement.classList.remove('dark')
        }
      } catch (_) {
        // Silently handle any localStorage access errors
      }
    `
  }