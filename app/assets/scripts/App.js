import MobileMenu from "./modules/MobileMenu";
import Assure from "./modules/Assure";
import ImageFadeIn from "./modules/ImageFadeIn";
import ZoomOutOnScroll from "./modules/ZoomOutOnScroll";
import GrowRightOnScroll from "./modules/GrowRightOnScroll";
import SlideCarousel from "./modules/SlideCarousel";
let slideCarousel  = new SlideCarousel("slide-carousel__block--1");
let growRightOnScroll = new GrowRightOnScroll("form__input-grow", "home");
let zoomOutOnScroll = new ZoomOutOnScroll("our-services--each", "home");
let imageFadeIn = new ImageFadeIn();
let assure = new Assure();
let mobileScreen = new MobileMenu();


