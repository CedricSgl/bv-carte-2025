import type { LucideIcon, LucideProps } from "lucide-react";
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
  PizzaIcon,
  SandwichIcon,
  WineIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  apple: AppleIcon,
  barrel: BarrelIcon,
  bean: BeanIcon,
  beer: BeerIcon,
  "bottle-wine": BottleWineIcon,
  "cake-slice": CakeSliceIcon,
  coffee: CoffeeIcon,
  "cup-soda": CupSodaIcon,
  "glass-water": GlassWaterIcon,
  grape: GrapeIcon,
  "hand-platter": HandPlatterIcon,
  hop: HopIcon,
  pizza: PizzaIcon,
  sandwich: SandwichIcon,
  wine: WineIcon,
};

interface MenuIconProps extends LucideProps {
  name?: string;
}

export function MenuIcon({ name, ...props }: MenuIconProps) {
  if (!name) return null;
  const IconComponent = ICON_MAP[name];
  if (!IconComponent) return null;

  return <IconComponent {...props} />;
}
