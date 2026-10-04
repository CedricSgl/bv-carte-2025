import { useState, useEffect } from "react";

export interface MenuItem {
  name: string;
  abv?: string;
  price?: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
}

export interface MenuCategory {
  name: string;
  size?: string;
  icon?: string;
  items: MenuItem[];
}

export interface PlatDuWeekend {
  date_start: string;
  date_end: string;
  dish: string;
}

export interface MenuData {
  menuItems: MenuCategory[];
  platsDuWeekend: PlatDuWeekend[];
}

export function useMenuData() {
  const [data, setData] = useState<MenuData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadMenu() {
      try {
        setIsLoading(true);
        // import.meta.env.BASE_URL prend en compte un éventuel sous-dossier de déploiement (ex: Vite)
        const response = await fetch(
          "https://raw.githubusercontent.com/CedricSgl/MenuPriceList/refs/heads/main/menu.json",
          //   `${import.meta.env.BASE_URL}data/menu.json`,
          {
            signal: controller.signal,
            // headers: {
            //   "Content-Type": "application/json",
            //   Accept: "application/json",
            // },
          },
        );

        if (!response.ok) {
          throw new Error(
            `Erreur HTTP: ${response.status} (${response.statusText})`,
          );
        }

        const json: MenuData = await response.json();
        setData(json);
        setError(null);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          return; // Requête annulée au démontage du composant
        }
        setError(err instanceof Error ? err : new Error("Erreur inconnue"));
      } finally {
        setIsLoading(false);
      }
    }

    loadMenu();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
}
