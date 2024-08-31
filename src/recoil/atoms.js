import { atom } from 'recoil';
import { getPersistedState, setPersistedState } from './localStorage';

// Definisikan atom Recoil dengan default value array kosong berisi objek [{}]
export const todoListState = atom({
  key: 'todoListState', // unique ID (with respect to other atoms/selectors)
  default: getPersistedState('todoListState', [{}]), // default value as [{}]
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet(newValue => {
        setPersistedState('todoListState', newValue);
      });
    },
  ],
})
  

