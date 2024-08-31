

export const getPersistedState = (key, defaultValue) => {
    // const savedState = localStorage.getItem(key);
    // return savedState ? JSON.parse(savedState) : defaultValue;
    if (typeof window !== 'undefined') {
        const savedState = localStorage.getItem(key);
        return savedState ? JSON.parse(savedState) : defaultValue;
      }
  };
  
  export const setPersistedState = (key, state) => {
    localStorage.setItem(key, JSON.stringify(state));
  };
  