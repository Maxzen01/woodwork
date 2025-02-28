import { Design } from '../types';

export const designs: Design[] = [
  {
    id: '1',
    title: 'Modern Walnut Dining Table',
    description: 'Sleek modern dining table crafted from solid walnut with brass inlays',
    category: 'custom-furniture',
    images: [
      'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=1200',
      'https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=1200',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=1200'
    ],
    details: {
      materials: ['Walnut', 'Brass'],
      dimensions: '72"L x 36"W x 30"H',
      finishType: 'Natural oil finish',
      price: '₹2,800',
      leadTime: '6-8 weeks',
      customizable: true
    }
  },
  {
    id: '2',
    title: 'Minimalist Bookshelf',
    description: 'Contemporary floating bookshelf with hidden mounting system',
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=1200',
      'https://images.unsplash.com/photo-1616464916356-3a777b2b60b1?w=1200',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200'
    ],
    details: {
      materials: ['Oak', 'Steel'],
      dimensions: '48"L x 12"D x 72"H',
      finishType: 'Matte lacquer',
      price: '₹1,500',
      leadTime: '4-6 weeks',
      customizable: true
    }
  },
  {
    id: '3',
    title: 'Artisan Coffee Table',
    description: 'Hand-carved coffee table featuring live edge wood',
    category: 'custom-furniture',
    images: [
      'https://images.unsplash.com/photo-1565791380713-1756b9a05343?w=1200',
      'https://images.unsplash.com/photo-1611486212557-88be5ff6f941?w=1200',
      'https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=1200'
    ],
    details: {
      materials: ['Maple', 'Glass'],
      dimensions: '48"L x 24"W x 18"H',
      finishType: 'Danish oil',
      price: '₹1,800',
      leadTime: '5-7 weeks',
      customizable: true
    }
  },
  {
    id: '4',
    title: 'Victorian Dresser Restoration',
    description: 'Fully restored Victorian-era dresser with original hardware',
    category: 'restoration',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200',
      'https://images.unsplash.com/photo-1596079890744-c1a0462d0975?w=1200'
    ],
    details: {
      materials: ['Mahogany', 'Brass'],
      dimensions: '60"L x 20"D x 34"H',
      finishType: 'French polish',
      price: '₹3,200',
      leadTime: '8-10 weeks',
      customizable: false
    }
  }
];