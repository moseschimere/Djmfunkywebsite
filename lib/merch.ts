export type MerchProduct = {
  name: string;
  price: string;
  src: string;
  backSrc?: string;
  cutout?: boolean;
};

export const merchProducts: MerchProduct[] = [
  {
    name: "Unisex Heavy Blend™ Crewneck Sweatshirt",
    price: "€68",
    src: "/images/merch-sweatshirt-front.png",
    backSrc: "/images/merch-sweatshirt-back.png",
    cutout: true,
  },
  {
    name: "Flying High Tee",
    price: "€25",
    src: "/images/merch-flying-high.png",
    cutout: true,
  },
  {
    name: "Weekends We Italawa Tee",
    price: "€25",
    src: "/images/merch-weekends.png",
    cutout: true,
  },
  {
    name: "Hustle Tee",
    price: "€25",
    src: "/images/merch-hustle.png",
    cutout: true,
  },
  {
    name: "Aura Tee",
    price: "€25",
    src: "/images/merch-aura.png",
    cutout: true,
  },
  { name: "Limitless Hoodie", price: "€68", src: "/images/merch-hoodie.jpg" },
  {
    name: "Amapiano Vinyl",
    price: "€28",
    src: "/images/merch-vinyl.png",
    cutout: true,
  },
  { name: "M Funky Tee", price: "€32", src: "/images/merch-tee.jpg" },
];
