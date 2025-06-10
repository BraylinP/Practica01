export interface Item {
  nombre: string;
  precio: number;
}

export const platos: Item[] = [
  { nombre: "Pollo en salsa blanca con hongos", precio: 2200 },
  { nombre: "Costilla de cerdo agridulce", precio: 2500 },
  { nombre: "Pescado en salsa de ostiones", precio: 2000 },
  { nombre: "Beefsteack a la barbacoa", precio: 1900 },
];

export const extras: Item[] = [
  { nombre: "Aros de Cebolla", precio: 300 },
  { nombre: "Vinagreta", precio: 350 },
  { nombre: "Verduras al vapor", precio: 400 },
  { nombre: "Tortilla casera", precio: 100 },
  { nombre: "Puré nuestra tierra", precio: 450 },
];

export const bebidas: Item[] = [
  { nombre: "Gaseosa", precio: 500 },
  { nombre: "Natural (500 ml)", precio: 650 },
  { nombre: "Café negro", precio: 400 },
  { nombre: "Café con leche", precio: 500 },
  { nombre: "Agua (250 ml)", precio: 300 },
];

export interface Combo {
  plato: string;
  opcionales: string[];
  bebida: string;
}

export const combos: Record<number, Combo> = {
  1: {
    plato: "Pollo en salsa blanca con hongos",
    opcionales: ["Aros de Cebolla", "Vinagreta"],
    bebida: "Gaseosa",
  },
  2: {
    plato: "Pescado en salsa de ostiones",
    opcionales: ["Verduras al vapor", "Puré nuestra tierra"],
    bebida: "Natural (500 ml)",
  },
  3: {
    plato: "Beefsteack a la barbacoa",
    opcionales: ["Tortilla casera", "Puré nuestra tierra"],
    bebida: "Café negro",
  },
};
