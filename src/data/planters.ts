// Planter product line. Dimensions for 4 of 5 still need to be pulled from the
// live site — marked with `pull: true`. See BUILD-PLAN §8 / CONTENT-MASTER §18.

export type PlanterVariety = { name: string; sizes: string };
export type Planter = {
  slug: string;
  title: string;
  path: string;
  angle: string;        // unique intro value-prop
  metaExtra: string;
  varieties: PlanterVariety[];
  pull?: boolean;       // dimensions still to confirm
};

export const planters: Planter[] = [
  {
    slug: 'cube-planters',
    title: 'Cube Planters',
    path: '/cube-planters/',
    angle: 'The versatile classic — clean cubes that suit almost any space, indoors or out.',
    metaExtra: 'aluminum, steel or corten, any size or powder-coat color',
    varieties: [
      { name: 'Classic Cube', sizes: 'S 18×18×19" · M 22×22×23" · L 28×28×29"' },
      { name: 'Elevated Cube', sizes: 'S 18×18×22" · M 22×22×26" · L 28×28×32"' },
      { name: 'Lipless Block', sizes: 'S 19×19×14.625" · M 23×23×17.125" · L 29.5×29.5×24.875"' },
      { name: 'Circle Cube', sizes: 'S 20×20×18" · M 25×25×23" · L 30.5×30.5×28.5" (drain hole + 2" skid)' },
    ],
  },
  {
    slug: 'rectangle-planters',
    title: 'Rectangle Planters',
    path: '/rectangle-planters/',
    angle: 'Long, low lines for borders, entries, and dividers.',
    metaExtra: 'aluminum, steel or corten, any size or powder-coat color',
    varieties: [{ name: 'Rectangle Planter', sizes: '[[PULL dimensions from tefcofab.com/rectangle-planters/]]' }],
    pull: true,
  },
  {
    slug: 'right-angle-planters',
    title: 'Right Angle Planters',
    path: '/right-angle-planters/',
    angle: 'L-shaped planters that wrap corners and patios.',
    metaExtra: 'aluminum, steel or corten, any size or powder-coat color',
    varieties: [{ name: 'Right Angle Planter', sizes: '[[PULL dimensions from tefcofab.com/right-angle-planters/]]' }],
    pull: true,
  },
  {
    slug: 'pillar-planters',
    title: 'Pillar Planters',
    path: '/pillar-planters/',
    angle: 'Tall columns that add height and frame entrances.',
    metaExtra: 'aluminum, steel or corten, any size or powder-coat color',
    varieties: [{ name: 'Pillar Planter', sizes: '[[PULL dimensions from tefcofab.com/pillar-planters/]]' }],
    pull: true,
  },
  {
    slug: 'tapered-pillar-planters',
    title: 'Tapered Pillar Planters',
    path: '/tapered-pillar-planters/',
    angle: 'Sculptural tapered columns — a modern statement piece.',
    metaExtra: 'aluminum, steel or corten, any size or powder-coat color',
    varieties: [{ name: 'Tapered Pillar Planter', sizes: '[[PULL dimensions from tefcofab.com/tapered-pillar-planters/]]' }],
    pull: true,
  },
];

export const planterImageNote = (title: string) =>
  `Product photo: a ${title.toLowerCase().replace(' planters', '')} metal planter (aluminum/steel/corten) styled with plants, outdoors or in a showroom — clean studio or lifestyle shot.`;
