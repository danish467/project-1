// all images imported from images directory
import product_01_image_01 from '../images/product_01.jpg';
import product_01_image_02 from '../images/product_01.1.jpg';
import product_01_image_03 from '../images/product_01.3.jpg';

import product_02_image_01 from '../images/product_2.1.jpg';
import product_02_image_02 from '../images/product_2.2.jpg';
import product_02_image_03 from '../images/product_2.3.jpg';

import product_03_image_01 from '../images/product_3.1.jpg';
import product_03_image_02 from '../images/product_3.2.jpg';
import product_03_image_03 from '../images/product_3.3.jpg';

import product_04_image_01 from '../images/product_4.1.jpg';
import product_04_image_02 from '../images/product_4.2.jpg';
import product_04_image_03 from '../images/product_4.3.png';

import product_05_image_01 from '../images/product_04.jpg';
import product_05_image_02 from '../images/product_08.jpg';
import product_05_image_03 from '../images/product_09.jpg';

import product_06_image_01 from '../images/bread(1).png';
import product_06_image_02 from '../images/bread(2).png';
import product_06_image_03 from '../images/bread(3).png';

const products = [
  {
    id: '01',
    title: 'Chicken Burger',
    price: 200.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Juicy beef patty topped with melted cheddar cheese, crisp lettuce, fresh tomatoes, onions, and pickles, all sandwiched between a soft, toasted bun. A timeless favorite that never disappoints! ',
  },

  {
    id: '02',
    title: 'Vegetarian Pizza',
    price: 350.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'A colorful mix of fresh bell peppers, mushrooms, onions, black olives, and tomatoes, all layered on a cheesy, tomato-sauced crust. A perfect choice for veggie lovers!',
  },

  {
    id: '03',
    title: 'Double Cheese Margherita',
    price: 210.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Indulge in the rich flavors of mozzarella, parmesan, cheddar, and gorgonzola cheeses, perfectly melted on a golden crust. Cheese lovers, this one’s for you!',
  },

  {
    id: '04',
    title: 'Mexican Green Wave',
    price: 310.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Tender grilled chicken, sweet BBQ sauce, red onions, and cilantro combine to create a smoky, sweet, and savory pizza that’s truly irresistible.',
  },

  {
    id: '05',
    title: 'Cheese Burger',
    price: 240.0,
    image01: product_05_image_01,
    image02: product_05_image_02,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Crispy chicken breast coated in a spicy blend of herbs and spices, topped with cool ranch sauce, crunchy lettuce, and fresh tomatoes, all nestled in a soft bun. A burst of flavor in every bite!',
  },
  {
    id: '06',
    title: 'Royal Cheese Burger',
    price: 250.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: 'Burger',

    desc: 'Smoky, savory perfection! A thick beef patty loaded with crispy bacon, tangy BBQ sauce, cheddar cheese, and fried onions, served on a toasted bun for the ultimate burger experience.',
  },

  {
    id: '07',
    title: 'Seafood Pizza',
    price: 150.0,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: 'Pizza',

    desc: 'A true classic! Fresh mozzarella, ripe tomatoes, and fragrant basil on a crispy, wood-fired crust. Simple yet bursting with authentic Italian flavors',
  },

  {
    id: '08',
    title: 'Thin Cheese Pizza',
    price: 180.0,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: 'Pizza',

    desc: 'Indulge in the rich flavors of mozzarella, parmesan, cheddar, and gorgonzola cheeses, perfectly melted on a golden crust. Cheese lovers, this one’s for you!',
  },

  {
    id: '09',
    title: 'Pizza With Mushroom',
    price: 190.0,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: 'Pizza',

    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
  },

  {
    id: '10',
    title: 'Classic Hamburger',
    price: 240.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: 'Burger',

    desc: 'Sautéed mushrooms and Swiss cheese melt over a juicy beef patty, paired with caramelized onions and creamy mayo. This gourmet burger is rich and indulgent!',
  },

  {
    id: '11',
    title: 'Crunchy Bread ',
    price: 200.0,
    image01: product_06_image_01,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'A rustic, tangy loaf with a perfectly crisp crust and a chewy, airy interior. Each slice is packed with rich, fermented flavor, making it the ideal companion for soups, spreads, or simply toasted with butter.',
  },

  {
    id: '12',
    title: 'Delicious Bread ',
    price: 250.0,
    image01: product_06_image_02,
    image02: product_06_image_01,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Soft and light on the inside with a golden, crispy crust. This traditional Italian bread is perfect for sandwiches or dipping in olive oil and balsamic vinegar.',
  },

  {
    id: '13',
    title: 'Loaf Bread ',
    price: 250.0,
    image01: product_06_image_03,
    image02: product_06_image_02,
    image03: product_06_image_03,
    category: 'Bread',

    desc: 'Wholesome and hearty, made from 100% whole wheat flour. Packed with fiber and a slightly nutty flavor, it’s the perfect base for sandwiches or toast with your favorite toppings.',
  },
];

export default products;
