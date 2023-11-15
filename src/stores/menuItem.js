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
    ],
    desserts: [
      {
        id: 9,
        plat: "TIRAMISU",
        prix: "10.00",
        ingredient: "Mascarpone / Amaretto / Café / Biscuit",
      },
      {
        id: 10,
        plat: "TIRAMISU FRAISE",
        prix: "12.00",
        ingredient: "Mascarpone / Amaretto / Fraises / Biscuit",
      },
      {
        id: 11,
        plat: "TIRAMISU FRAMBOISE",
        prix: "15.00",
        ingredient: "Mascarpone / Amaretto / Framboises / Biscuit",
      },
      {
        id: 11,
        plat: "3 PROFITEROLES au CHOCOLAT",
        prix: "15.00",
        ingredient: "Choux / Glace / Coulis choco",
      },
      {
        id: 12,
        plat: "3 PROFITEROLES FRAISE",
        prix: "15.00",
        ingredient: "Choux / Glace / Coulis fruits rouges",
      }
    ],
    appetizers: [
      {
        id: 13,
        plat: "CALAMARI RINGS",
        prix: "9.25",
        ingredient: "Calamar / Beignets",
      },
      {
        id: 14,
        plat: "GARLIC BREAD",
        prix: "3.50",
        ingredient: "Ail / Pain",
      },
      {
        id: 15,
        plat: "MOZZARELLA STICKS",
        prix: "5.50",
        ingredient: "Mozzarella / Beignets",
      },
      {
        id: 16,
        plat: "FRIED JUMBO SHRIMP",
        prix: "9.50",
        ingredient: "Gambas / Beignets / Garlic",
      }
    ]
   })
})
