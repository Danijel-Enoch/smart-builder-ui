import home from '../assets/home.png';
import trending from '../assets/trending-icon.png';
import coin from '../assets/coins.png';
import sales from '../assets/sales.png';
import lock from '../assets/lock.png';
import tool from '../assets/build-sharp.png';
import ml from '../assets/machine-learning.png';
import logo from '../assets/Smart Builders Logo.png';

const Tokens = [
  {
    id: 1,
    name: 'NEAR',
  },
  {
    id: 2,
    name: 'REF',
  },
  {
    id: 3,
    name: 'OCT',
  },
  {
    id: 4,
    name: 'PARAS',
  },
  {
    id: 5,
    name: 'SWEAT',
  },
  {
    id: 6,
    name: 'AURORA',
  },
  {
    id: 7,
    name: 'HT',
  },
  {
    id: 8,
    name: 'USN',
  },
  {
    id: 9,
    name: 'USDC',
  },
  {
    id: 10,
    name: 'BUDL',
  },
];

const SidebarItem = [
  {
    id: 1,
    image: home,
    name: 'Home',
    path: '/',
  },
  {
    id: 2,
    image: trending,
    name: 'Trending',
    path: '/trending',
  },
  {
    id: 3,
    image: coin,
    name: 'SmartToken',
    path: '/smarttoken',
  },
  {
    id: 4,
    image: sales,
    name: 'Smartsales',
    text: 'Coming soon',
  },
  {
    id: 5,
    image: lock,
    name: 'Smartlock',
    text: 'Coming soon',
  },
  {
    id: 6,
    image: tool,
    name: 'SmartBuild',
    path: '/smartbuild',
  },
  {
    id: 7,
    image: ml,
    name: 'SmartLearn',
    text: 'Coming soon',
  },
];

const sbEcosystem = [
  {
    id: 1,
    name: 'SmartToken',
    text: 'The first Auto token deployer on the NEAR blockchain',
    logo: logo,
  },
  {
    id: 2,
    name: 'SmartSales',
    text: 'Best ICO platform to launch a token sales with just a click',
    logo: logo,
  },
  {
    id: 3,
    name: 'SmartLock',
    text: 'Smart liquidity and token locker for a safe ecosystem.',
    logo: logo,
  },
  {
    id: 4,
    name: 'SmartBuild',
    text: 'Our Autodeployer allows anyone to deploy their customised dApps without code.',
    logo: logo,
  },
  {
    id: 5,
    name: 'SmartLearn',
    text: 'Best online bootcamp to learn how to build useable product on the NEAR ecosystem',
    logo: logo,
  },
];

export { Tokens, SidebarItem, sbEcosystem };
