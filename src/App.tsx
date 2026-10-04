import { Link, HandPlatterIcon, Loader2, AlertCircle } from "lucide-react";
import "./App.css";
import { H1 } from "./components/h1";
import { H2 } from "./components/h2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { MenuIcon } from "./components/MenuIcon";
import { useMenuData } from "./hooks/useMenuData";

function App() {
  const { data, isLoading, error } = useMenuData();
  const nowIso = new Date().toISOString();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          Chargement de la carte...
        </p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[40vh] gap-3 text-destructive">
        <AlertCircle className="h-8 w-8" />
        <p className="text-sm font-semibold">
          Impossible de charger le menu ({error?.message ?? "Erreur inconnue"})
        </p>
      </div>
    );
  }

  const { menuItems, platsDuWeekend } = data;

  const currentPlats = platsDuWeekend.filter(
    (plat) => plat.date_start <= nowIso && plat.date_end >= nowIso,
  );

  return (
    <>
      <H1>Au Beau Vignet</H1>
      <H2>Brasserie éphémère des fêtes de la Saint-Martin</H2>

      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue={menuItems[0]?.name}
      >
        {menuItems.map((category) => (
          <AccordionItem key={category.name} value={category.name}>
            <AccordionTrigger>
              <span className="font-bold text-base flex items-center">
                <MenuIcon name={category.icon} className="mr-1 h-4 w-4" />
                {category.name}
              </span>
              <span className="ml-auto text-right">{category.size}</span>
            </AccordionTrigger>

            <AccordionContent className="flex flex-col gap-4 text-left">
              <ul>
                {category.items.map((item) => (
                  <li key={item.name} className="flex flex-col mb-3 last:mb-0">
                    <div className="flex items-start justify-between">
                      <span className="pr-4 font-bold flex items-center">
                        <MenuIcon
                          name={item.icon}
                          className="mr-1 h-4 w-4 text-muted-foreground"
                        />
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
                        {item.description && (
                          <p className="text-sm italic mr-4 text-muted-foreground">
                            {item.description}
                          </p>
                        )}
                        {item.abv && (
                          <span className="text-sm italic whitespace-nowrap ml-auto">
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
            <span className="font-bold text-base flex items-center">
              <HandPlatterIcon className="mr-1 h-4 w-4" />
              Plat(s) du week-end
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-left">
            <ul>
              {currentPlats.length > 0 ? (
                currentPlats.map((plat) => (
                  <li key={plat.date_start}>
                    <span className="font-bold">{plat.dish}</span>
                  </li>
                ))
              ) : (
                <li className="text-sm italic text-muted-foreground">
                  Aucun plat prévu pour ce week-end.
                </li>
              )}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <a
        href="https://beauvignet.tourinnes.be/assets/Carte 2025 finale V3.pdf"
        className="fixed bottom-4 right-4 shadow-lg flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full"
      >
        <Link className="h-4 w-4" /> La Carte PDF
      </a>
    </>
  );
}

export default App;
