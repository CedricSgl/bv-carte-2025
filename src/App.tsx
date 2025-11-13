import {
  AppleIcon,
  BarrelIcon,
  BeanIcon,
  BeerIcon,
  BottleWineIcon,
  CakeSliceIcon,
  CoffeeIcon,
  CupSodaIcon,
  GlassWaterIcon,
  GrapeIcon,
  HandPlatterIcon,
  HopIcon,
  Link,
  PizzaIcon,
  SandwichIcon,
  WineIcon,
} from "lucide-react";
import "./App.css";
import { H1 } from "./components/h1";
import { H2 } from "./components/h2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";

type MenuItem = {
  name: string;
  abv?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
  icon?: React.ElementType;
};

type MenuCategory = {
  name: string;
  size?: string;
  items: MenuItem[];
  icon?: React.ElementType;
};

const menuItems: MenuCategory[] = [
  {
    name: "Bières au fût",
    size: "25cl",
    items: [
      {
        name: "La trappe Puur",
        abv: "4.5%",
        price: "2,5€",
        description: "Bière blonde légèrement trouble, fruitée et houblonnée.",
        icon: BarrelIcon,
      },
      {
        name: 'La Bierbeek "Saison"',
        abv: "5.5%",
        price: "2,5€",
        description: "Bière à l'amertume douce, légèrement fruitée et épicée.",
        icon: BarrelIcon,
      },
    ],
    icon: BarrelIcon,
  },
  {
    name: "Bières en bouteille",
    size: "33cl",
    icon: BeerIcon,
    items: [
      {
        name: "Placebo (Lupulus)",
        abv: "0.0%",
        price: "3,5€",
        description:
          "Bière à l'amertume subtile et aux notes gustatives complexes.",
        icon: BeerIcon,
      },
      {
        name: "Taras Boulba",
        abv: "4.5%",
        price: "3,5€",
        description: "Blonde à l'amertume forte et persistante.",
        icon: BeerIcon,
      },
      {
        name: "Fructus (Lupulus)",
        abv: "4.2%",
        price: "3,5€",
        description: "Bière rouge fruitée, légèrement sucrée.",
        icon: BeerIcon,
      },
      {
        name: "La Tharée Légère",
        abv: "4.5%",
        price: "4€",
        description: "Blonde légère et rafraîchissante.",
        icon: BeerIcon,
      },
      {
        name: "Tongerlo Blonde",
        abv: "6%",
        price: "4€",
        description: "Bière d'abbaye belge aux saveurs équilibrées et rafinées",
        icon: BeerIcon,
      },
      {
        name: "Hopera (Lupulus)",
        abv: "6%",
        price: "4€",
        description: "Bière blonde type IPA.",
        icon: BeerIcon,
      },
      {
        name: "Jambe de bois",
        abv: "8%",
        price: "4€",
        description: "Blonde triple à l'amertume prononcée.",
        icon: BeerIcon,
      },
      {
        name: "Natte Lore",
        abv: "9.1%",
        price: "4€",
        description: "Blonde forte aux aromes et à l'amertume prononcée.",
        icon: BeerIcon,
      },
      {
        name: "Witkap Pater Brune",
        abv: "8%",
        price: "4€",
        description: 'Brune "double", douce.',
        icon: BeerIcon,
      },
    ],
  },
  {
    name: "Grandes bouteilles",
    size: "75cl",
    icon: HopIcon,
    items: [
      {
        name: "La Lustrée (Tharée)",
        abv: "6.4%",
        price: "9€",
        description:
          "Pale Ale aux saveurs puissantes, avec une amertume bien présente et des notes distinctes de pin Douglas et de pamplemousse.",
        icon: HopIcon,
      },
      {
        name: "La Tharée Triple",
        abv: "8%",
        price: "9€",
        description: "Bière forte aux notes agrumeuses de douglas.",
        icon: HopIcon,
      },
      {
        name: "Lupulus Blonde",
        abv: "8.5%",
        price: "9€",
        description:
          "Une rafraichissante amertume maîtrisée et ajustée par un note épicée de thym.",
        icon: HopIcon,
      },
    ],
  },
  {
    name: "Vins",
    icon: GrapeIcon,
    items: [
      {
        name: "Vin Blanc",
        description: 'Viognier "les îles blanches", 2024',
        icon: GrapeIcon,
      },
      {
        name: "Vin Rouge",
        description: "Chapelle Saint-Martin 2023/2024",
        icon: GrapeIcon,
      },
      { name: "Verre", price: "3€", icon: WineIcon },
      { name: "Bouteille", price: "12€", icon: BottleWineIcon },
    ],
  },
  {
    name: "Boissons chaudes",
    icon: CoffeeIcon,
    items: [
      {
        name: "Infusion du comédien",
        price: "2€",
        description: "Miel, gingembre et citron",
        icon: CoffeeIcon,
      },
      { name: "Chocolat Chaud", price: "2€", icon: CoffeeIcon },
      { name: "Café", price: "2€", icon: CoffeeIcon },
      { name: "Thé", price: "2€", icon: CoffeeIcon },
    ],
  },
  {
    name: "Softs",
    icon: CupSodaIcon,
    items: [
      {
        name: "Limonade maison",
        price: "1,5€",
        description: "Citron et menthe",
        icon: CupSodaIcon,
      },
      { name: "Jus", price: "1,5€", icon: AppleIcon },
      { name: "Eau pétillante", price: "1,5€", icon: GlassWaterIcon },
      { name: "Coca-Cola", price: "2€", icon: CupSodaIcon },
      {
        name: "Eau plate",
        price: "0€",
        description: "du robinet",
        icon: GlassWaterIcon,
      },
    ],
  },
  {
    name: "Petite restauration",
    icon: PizzaIcon,
    items: [
      { name: "Chips", price: "1,5€", icon: BeanIcon },
      { name: "Tarte sucrée", price: "3,5€", icon: CakeSliceIcon },
      {
        name: "Assiette apéro",
        price: "6€",
        description: "Mixte ou végétarienne",
        icon: PizzaIcon,
      },
      {
        name: "Croque-Monsieur",
        // price: "5€",
        description: "et sa petite salade - vendredi soir et samedi midi",
        icon: SandwichIcon,
      },
      {
        name: "Croque-Monsieur 1 pièce",
        price: "5€",
      },
      {
        name: "Croque-Monsieur 2 pièces",
        price: "8€",
      },

      {
        name: "Plat du week-end",
        price: "12€",
        description: "Voir tableau - samedi soir et le dimanche",
        icon: HandPlatterIcon,
      },
    ],
  },
];

const platsDuWeekend = [
  {
    date_start: "2025-11-10T00:00:00",
    date_end: "2025-11-16T23:59:59",
    dish: "Boulets à la Liégeoise, frites / Chili sin carne, riz",
  },
  {
    date_start: "2025-11-17T00:00:00",
    date_end: "2025-11-23T23:59:59",
    dish: "Tikka Masala, riz / Dhal de lentilles",
  },
  {
    date_start: "2025-11-24T00:00:00",
    date_end: "2025-11-30T23:59:59",
    dish: "Cheeseburger, frites",
  },
];

const dateNow = new Date();

function App() {
  return (
    <>
      <H1>Au Beau Vignet</H1>
      <H2>Brasserie éphémère des fêtes de la Saint-Martin</H2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        {menuItems.map((category) => (
          <AccordionItem key={category.name} value={category.name}>
            <AccordionTrigger>
              <span className="font-bold text-base">
                {category.icon && (
                  <category.icon className="inline-block mr-1 h-4 w-4 " />
                )}
                {category.name}
              </span>
              <span className="ml-auto text-right">{category.size}</span>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-left">
              <ul className="">
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col">
                    <div className="flex items-start justify-between">
                      <span className="pr-4 font-bold">
                        {item.icon && (
                          <item.icon className="inline-block mr-1 h-4 w-4 text-muted-foreground" />
                        )}
                        {item.name}
                      </span>
                      {item.price && (
                        <span className="text-right whitespace-nowrap">
                          {item.price}
                        </span>
                      )}
                    </div>

                    {(item.description || item.abv) && (
                      <div className="flex items-start justify-between mt-1">
                        <p className="text-sm italic mr-4">
                          {item.description}
                        </p>
                        {item.abv && (
                          <span className="text-sm italic whitespace-nowrap ml-4">
                            {item.abv}
                          </span>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
        <AccordionItem value="plats-du-weekend">
          <AccordionTrigger>
            <span className="font-bold text-base">
              <HandPlatterIcon className="inline-block mr-1 h-4 w-4 " />
              Plat(s) du week-end
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-left">
            <ul>
              {platsDuWeekend.map((plat) => {
                if (
                  plat.date_start < dateNow.toISOString() &&
                  plat.date_end > dateNow.toISOString()
                ) {
                  return (
                    <li key={plat.date_start}>
                      <span className="font-bold">{plat.dish}</span>
                    </li>
                  );
                }
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <a
        href="https://beauvignet.tourinnes.be/assets/Carte 2025 finale V3.pdf"
        className="fixed bottom-4 right-4  shadow-lg"
      >
        <Link /> La Carte PDF
      </a>
    </>
  );
}

export default App;
