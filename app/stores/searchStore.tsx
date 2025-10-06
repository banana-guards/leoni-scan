import { create } from 'zustand';

interface SearchState {
  searchText: string;
  setSearchText: (text: string) => void;
}

const useSearchStore = create<SearchState>((set) => ({
  searchText: '',
  setSearchText: (text) => set({ searchText: text }),
}));

export default useSearchStore