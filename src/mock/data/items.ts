export interface Item {
  name: string;
  subtitle?: string;
  id: number;
  isActive: boolean;
}
export const Items: Item[] = [
  {
    name: "yoichiro",
    id: 1,
    isActive: false,
  },
  {
    name: "kasai",
    id: 2,
    isActive: false,
  },
  {
    name: "hosoda",
    id: 3,
    isActive: true,
  },
  {
    name: "kobayashi",
    id: 4,
    isActive: true,
  },
  {
    name: "kamo",
    id: 4,
    isActive: true,
  },
  {
    name: "hirano",
    id: 5,
    isActive: true,
  },
];
