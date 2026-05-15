import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find((entry) => entry.id === item.id);
      if (existing) {
        return {
          items: state.items.map((entry) =>
            entry.id === item.id
              ? { ...entry, quantity: entry.quantity + 1 }
              : entry
          )
        };
      }

      return {
        items: [...state.items, { ...item, quantity: 1 }]
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((entry) => entry.id !== id)
    })),
  clear: () => set({ items: [] })
}));
