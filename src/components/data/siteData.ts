import imageHero1 from '../../assets/desktop-image-hero-1.jpg'
import imageHero2 from '../../assets/desktop-image-hero-3.jpg'
import imageHero3 from '../../assets/desktop-image-hero-2.jpg'

interface PageInfo {
  mainPictureUrl : string,
  h1: string,
  mainDescription: string,
}

const arrOfData: PageInfo[] = [
  {
    mainPictureUrl: imageHero1,
    h1: "Discover innovative ways to decorate",
    mainDescription: `We provide unmatched quality, comfort, and style for
    property owners across the country. Our experts combine form and function 
    in bringing your vision to life. Create a room in your own style with our 
    collection and make your property a reflection of you and what you love.`,
  },
  {
    mainPictureUrl: imageHero2,
    h1: "We are available all across the globe",
    mainDescription: `With stores all over the world, it's easy for you to find furniture 
    for your home or place of business. Locally, we’re in most major cities throughout the 
    country. Find the branch nearest you using our store locator. Any questions? Don't 
    hesitate to contact us today.`,
  },
  {
    mainPictureUrl: imageHero3,
    h1: "Manufactured with the best materials",
    mainDescription: `Our modern furniture store provide a high level of quality. Our company has invested in advanced 
    technology to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`,
  },
];

export default arrOfData;