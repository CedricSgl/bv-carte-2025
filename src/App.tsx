import { Link } from 'lucide-react'
import './App.css'
import { H1 } from './components/h1'
import { H2 } from './components/h2'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './components/ui/accordion'

type MenuItem = {
  name: string
  abv?: string
  price?: string
  description?: string
  imageUrl?: string
}

type MenuCategory = {
  name: string
  size?: string
  items: MenuItem[]
}

const menuItems: MenuCategory[] = [
  {
    name: 'Bières au fût',
    size: '25cl',
    items: [
      {
        name: 'La trappe Puur',
        abv: '4.5%',
        price: '2,5€',
        description: 'Bière blonde légèrement trouble, fruitée et houblonnée.'
      },
      {
        name: 'La Bierbeek "Saison"',
        abv: '5.5%',
        price: '2,5€',
        description: "Bière à l'amertume douce, légèrement fruitée et épicée."
      }
    ]
  },
  {
    name: 'Bières en bouteille',
    size: '33cl',
    items: [
      {
        name: 'Placebo (Lupulus)',
        abv: '0.0%',
        price: '3,5€',
        description:
          "Bière à l'amertume subtile et aux notes gustatives complexes."
      },
      {
        name: 'Taras Boulba',
        abv: '4.5%',
        price: '3,5€',
        description: "Blonde à l'amertume forte et persistante."
      },
      {
        name: 'Fructus (Lupulus)',
        abv: '4.2%',
        price: '3,5€',
        description: 'Bière rouge fruitée, légèrement sucrée.'
      },
      {
        name: 'La Tharée Légère',
        abv: '4.5%',
        price: '4€',
        description: 'Blonde légère et rafraîchissante.'
      },
      {
        name: 'Tongerlo Blonde',
        abv: '6%',
        price: '4€',
        description: "Bière d'abbaye belge aux saveurs équilibrées et rafinées"
      },
      {
        name: 'Hopera (Lupulus)',
        abv: '6%',
        price: '4€',
        description: 'Bière blonde type IPA.'
      },
      {
        name: 'Jambe de bois',
        abv: '8%',
        price: '4€',
        description: "Blonde triple à l'amertume prononcée."
      },
      {
        name: 'Natte Lore',
        abv: '9.1%',
        price: '4€',
        description: "Blonde forte aux aromes et à l'amertume prononcée."
      },
      {
        name: 'Witkap Pater Brune',
        abv: '8%',
        price: '4€',
        description: 'Brune "double", douce.'
      }
    ]
  },
  {
    name: 'Grandes bouteilles',
    size: '75cl',
    items: [
      {
        name: 'La Lustrée (Tharée)',
        abv: '6.4%',
        price: '9€',
        description:
          'Pale Ale aux saveurs puissantes, avec une amertume bien présente et des notes distinctes de pin Douglas et de pamplemousse.'
      },
      {
        name: 'La Tharée Triple',
        abv: '8%',
        price: '9€',
        description: 'Bière forte aux notes agrumeuses de douglas.'
      },
      {
        name: 'Lupulus Blonde',
        abv: '8.5%',
        price: '9€',
        description:
          'Une rafraichissante amertume maîtrisée et ajustée par un note épicée de thym.'
      }
    ]
  },
  {
    name: 'Vins',
    items: [
      { name: 'Vin Blanc', description: 'Viognier "les îles blanches", 2024' },
      { name: 'Vin Rouge', description: 'Chapelle Saint-Martin 2023/2024' },
      { name: 'Verre', price: '3€' },
      { name: 'Bouteille', price: '12€' }
    ]
  },
  {
    name: 'Boissons chaudes',
    items: [
      {
        name: 'Infusion du comédien',
        price: '2€',
        description: 'Miel, gingembre et citron'
      },
      { name: 'Chocolat Chaud', price: '2€' },
      { name: 'Café', price: '2€' },
      { name: 'Thé', price: '2€' }
    ]
  },
  {
    name: 'Softs',
    items: [
      {
        name: 'Limonade maison',
        price: '1,5€',
        description: 'Citron et menthe'
      },
      { name: 'Jus', price: '1,5€' },
      { name: 'Eau pétillante', price: '1,5€' },
      { name: 'Coca-Cola', price: '2€' },
      { name: 'Eau plate', price: '0€', description: 'du robinet' }
    ]
  },
  {
    name: 'Petite restauration',
    items: [
      { name: 'Chips', price: '1,5€' },
      { name: 'Tarte sucrée', price: '3,5€' },
      {
        name: 'Assiette apéro',
        price: '6€',
        description: 'Mixte ou végétarienne'
      },
      {
        name: 'Croque-Monsieur',
        price: '7€',
        description:
          'et sa petite salade - voir tableau - vendredi soir et samedi midi'
      },
      {
        name: 'Plat du week-end',
        price: '12€',
        description: 'Voir tableau - samedi soir et le dimanche'
      }
    ]
  }
]
function App () {
  return (
    <>
      <H1>Au Beau Vignet</H1>
      <H2>Brasserie éphémère des fêtes de la Saint-Martin</H2>

      <Accordion
        type='single'
        collapsible
        className='w-full'
        defaultValue='item-1'
      >
        {menuItems.map(category => (
          <AccordionItem key={category.name} value={category.name}>
            <AccordionTrigger>
              <span className='font-bold text-base'>{category.name}</span>
              <span className='ml-auto text-right'>{category.size}</span>
            </AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4 text-left'>
              <ul className=''>
                {category.items.map(item => (
                  <li key={item.name} className='flex flex-col'>
                    <div className='flex items-start justify-between'>
                      <span className='pr-4 font-bold'>{item.name}</span>
                      {item.price && (
                        <span className='text-right whitespace-nowrap'>
                          {item.price}
                        </span>
                      )}
                    </div>

                    {(item.description || item.abv) && (
                      <div className='flex items-start justify-between mt-1'>
                        <p className='text-sm italic mr-4'>
                          {item.description}
                        </p>
                        {item.abv && (
                          <span className='text-sm italic whitespace-nowrap ml-4'>
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
      </Accordion>
      <a
        href='https://beauvignet.tourinnes.be/assets/Carte 2025 finale Tongerlo.pdf'
        className='fixed bottom-4 right-4  shadow-lg'
      >
        <Link /> La Carte PDF
      </a>
    </>
  )
}

export default App
