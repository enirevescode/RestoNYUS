import { defineStore } from 'pinia'

export const useMenuItemStore = defineStore('menuItem', {
  state: () => ({ 
    menuOfDishes: [
      {
        "id": 1,
        "plat": "LEMON AND GARLIC GREEN BEANS",
        "prix": "15.00",
        "ingredient": "Lemon / Garlic / Beans"
          },
          {
        "id": 2,
        "plat": "BACON-WRAPPED SHRIMP WITH GARLIC",
        "prix": "21.50",
        "ingredient": "Bacon / Shrimp / Garlic"
          },
          {
        "id": 3,
        "plat": "LAMB-BEEF KOFKA SKEWERS WITH TZATZIKI",
        "prix": "18.50",
        "ingredient": "Lamb / Wine / Butter"
          },
          {
        "id": 4,
        "plat": "IMPORTED OYSTERS GRILL (5 PIECES)",
        "prix": "20.00",
        "ingredient": "Oysters / Veggie / Ginger"
          }
    ]
   })
})
