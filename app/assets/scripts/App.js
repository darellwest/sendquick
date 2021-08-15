import MobileMenu from "./modules/MobileMenu";
import Assure from "./modules/Assure";
import ImageFadeIn from "./modules/ImageFadeIn";
import ZoomOutOnScroll from "./modules/ZoomOutOnScroll";
import GrowRightOnScroll from "./modules/GrowRightOnScroll";
import SlideCarousel from "./modules/SlideCarousel";
import HeaderBgOnScroll from "./modules/HeaderBgOnScroll";
import ScrollIndicator from "./modules/ScrollIndicator";
// import MoveInOnHover from "./modules/MoveInOnHover";
// let moveInOnHover  = new MoveInOnHover();
let scrollIndicator  = new ScrollIndicator();
let headerBgOnScroll  = new HeaderBgOnScroll("site-header", "site-header--addbg");
let slideCarousel  = new SlideCarousel("slide-carousel__item", "carouselContainer");
let growRightOnScroll = new GrowRightOnScroll("form__input-grow", "home");
let zoomOutOnScroll = new ZoomOutOnScroll("our-services--each", "home");
let imageFadeIn = new ImageFadeIn();
let assure = new Assure();
let mobileScreen = new MobileMenu();


