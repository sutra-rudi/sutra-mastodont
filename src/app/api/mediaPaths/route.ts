import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
const basePath = 'https://dodgerblue-elephant-122364.hostingersite.com/Sutra-ftp';

// Sve putanje, možeš dodati sve potrebne objekte ovdje
const mediaPaths = {
  favicons: {
    '196x196': `${basePath}/Favicon/favicon-196x196.png`,
    '96x96': `${basePath}/Favicon/favicon-96x96.png`,
    '32x32': `${basePath}/Favicon/favicon-32x32.png`,
    '16x16': `${basePath}/Favicon/favicon-16x16.png`,
    '128x128': `${basePath}/Favicon/favicon-128x128.png`,
  },

  appleTouchIcons: {
    '57x57': `${basePath}/Favicon/apple-touch-icon-57x57.png`,
    '114x114': `${basePath}/Favicon/apple-touch-icon-114x114.png`,
    '72x72': `${basePath}/Favicon/apple-touch-icon-72x72.png`,
    '144x144': `${basePath}/Favicon/apple-touch-icon-144x144.png`,
    '60x60': `${basePath}/Favicon/apple-touch-icon-60x60.png`,
    '120x120': `${basePath}/Favicon/apple-touch-icon-120x120.png`,
    '76x76': `${basePath}/Favicon/apple-touch-icon-76x76.png`,
    '152x152': `${basePath}/Favicon/apple-touch-icon-152x152.png`,
  },

  microsoftTiles: {
    '144x144': `${basePath}/Favicon/mstile-144x144.png`,
    '70x70': `${basePath}/Favicon/mstile-70x70.png`,
    '150x150': `${basePath}/Favicon/mstile-150x150.png`,
    '310x150': `${basePath}/Favicon/mstile-310x150.png`,
    '310x310': `${basePath}/Favicon/mstile-310x310.png`,
  },

  designElements: {
    'monochrome-dark': `${basePath}/logo/DESIGN ELEMENT _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/DESIGN ELEMENT _ Monochrome on Light BG.svg`,
    'light-bg': `${basePath}/logo/DESIGN ELEMENT _ on LIGHT background.svg`,
    'dark-bg': `${basePath}/logo/DESIGN ELEMENT _ on DARK background.svg`,
  },

  bgElementsFullScreen: {
    'monochrome-light': `${basePath}/logo/Background elements full screen _ Monochrome on Light BG.svg`,
    'monochrome-dark': `${basePath}/logo/Background elements full screen _ Monochrome on Dark BG.svg`,
    'dark-bg': `${basePath}/logo/Background elements full screen _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Background elements full screen _ on LIGHT background.svg`,
  },

  logoHorizontalWordmarkBrandline: {
    'dark-bg': `${basePath}/logo/Logo horizontal - wordmark - brand line _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Logo horizontal - wordmark - brand line _ on LIGHT background.svg`,
    'monochrome-dark': `${basePath}/logo/Logo horizontal - wordmark - brand line _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/Logo horizontal - wordmark - brand line _ Monochrome on Light BG.svg`,
  },

  logoVerticalWordmarkBrandline: {
    'dark-bg': `${basePath}/logo/Logo vertical - wordmark - brand line _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Logo vertical - wordmark - brand line _ on LIGHT background.svg`,
    'monochrome-dark': `${basePath}/logo/Logo vertical - wordmark - brand line _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/Logo vertical - wordmark - brand line _ Monochrome on Light BG.svg`,
  },

  wordmarkBrandline: {
    'monochrome-dark': `${basePath}/logo/WORDMARK - brand line - brand line _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/WORDMARK - brand line - brand line _ Monochrome on Light BG.svg`,
    'light-bg': `${basePath}/logo/WORDMARK - brand line - brand line _ on LIGHT background.svg`,
    'dark-bg': `${basePath}/logo/WORDMARK - brand line - brand line _ on DARK background.svg`,
  },

  logoHorizontal: {
    'dark-bg': `${basePath}/logo/Logo Horizontal _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Logo Horizontal _ on LIGHT background.svg`,
    'monochrome-dark': `${basePath}/logo/Logo Horizontal _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/Logo Horizontal _ Monochrome on Light BG.svg`,
  },

  logoVertical: {
    'dark-bg': `${basePath}/logo/Logo vertical _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Logo vertical _ on LIGHT background.svg`,
    'monochrome-dark': `${basePath}/cms_sutra/logo/Logo vertical _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/cms_sutra/logo/Logo vertical _ Monochrome on Light BG.svg`,
  },

  wordmark: {
    'monochrome-dark': `${basePath}/logo/WORDMARK _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/WORDMARK _ Monochrome on Light BG.svg`,
    'light-bg': `${basePath}/logo/WORDMARK _ on LIGHT background.svg`,
    'dark-bg': `${basePath}/logo/WORDMARK _ on DARK background.svg`,
  },

  brandPattern: {
    'monochrome-dark': `${basePath}/logo/Brand Pattern _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/Brand Pattern _ Monochrome on Light BG.svg`,
    'dark-bg': `${basePath}/logo/Brand Pattern _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Brand Pattern _ on LIGHT background.svg`,
  },

  logoSymbol: {
    'dark-bg': `${basePath}/logo/Logo SYMBOL _ on DARK background.svg`,
    'light-bg': `${basePath}/logo/Logo SYMBOL _ on LIGHT background.svg`,
    'monochrome-dark': `${basePath}/logo/Logo SYMBOL _ Monochrome on Dark BG.svg`,
    'monochrome-light': `${basePath}/logo/Logo SYMBOL _ Monochrome on Light BG.svg`,
  },

  ogImagesAboutUs: {
    default: `${basePath}/OG_images_database/About_us_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/About_us_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/About_us_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/About_us_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/About_us_OG-image_ita.jpg`,
  },

  ogImagesAmenities: {
    default: `${basePath}/OG_images_database/Amenities_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Amenities_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Amenities_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Amenities_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Amenities_OG-image_ita.jpg`,
  },

  ogImagesArchiveBlog: {
    default: `${basePath}/OG_images_database/Archive_Blog_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Archive_Blog_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Archive_Blog_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Archive_Blog_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Archive_Blog_OG-image_ita.jpg`,
  },

  ogImagesArchiveNews: {
    default: `${basePath}/OG_images_database/Archive_News_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Archive_News_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Archive_News_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Archive_News_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Archive_News_OG-image_ita.jpg`,
  },

  ogImagesArchiveProductsOrServices: {
    default: `${basePath}/OG_images_database/Archive_Products_or_Services_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Archive_Products_or_Services_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Archive_Products_or_Services_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Archive_Products_or_Services_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Archive_Products_or_Services_OG-image_ita.jpg`,
  },

  ogImagesArchiveRecipes: {
    default: `${basePath}/OG_images_database/Archive_Recipes_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Archive_Recipes_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Archive_Recipes_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Archive_Recipes_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Archive_Recipes_OG-image_ita.jpg`,
  },

  ogImagesBonus: {
    default: `${basePath}/OG_images_database/BONUS_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/BONUS_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/BONUS_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/BONUS_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/BONUS_OG-image_ita.jpg`,
  },

  ogImagesCareer: {
    default: `${basePath}/OG_images_database/Career_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Career_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Career_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Career_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Career_OG-image_ita.jpg`,
  },

  ogImagesCaseStudy: {
    default: `${basePath}/OG_images_database/Case_Study_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Case_Study_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Case_Study_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Case_Study_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Case_Study_OG-image_ita.jpg`,
  },

  ogImagesCompanyInfo: {
    default: `${basePath}/OG_images_database/Company_Info_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Company_Info_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Company_Info_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Company_Info_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Company_Info_OG-image_ita.jpg`,
  },

  ogImagesContactUs: {
    default: `${basePath}/OG_images_database/Contact_Us_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Contact_Us_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Contact_Us_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Contact_Us_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Contact_Us_OG-image_ita.jpg`,
  },

  ogImagesQuality: {
    default: `${basePath}/OG_images_database/Quality_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Quality_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Quality_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Quality_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Quality_OG-image_ita.jpg`,
  },

  ogImagesRestaurantMenu: {
    default: `${basePath}/OG_images_database/Restaurant_Menu_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Restaurant_Menu_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Restaurant_Menu_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Restaurant_Menu_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Restaurant_Menu_OG-image_ita.jpg`,
  },

  ogImagesTermsOfUse: {
    default: `${basePath}/OG_images_database/Terms_Of_Use_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Terms_Of_Use_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Terms_Of_Use_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Terms_Of_Use_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Terms_Of_Use_OG-image_ita.jpg`,
  },

  ogImagesWhereAreWe: {
    default: `${basePath}/OG_images_database/Where_Are_We_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Where_Are_We_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Where_Are_We_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Where_Are_We_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Where_Are_We_OG-image_ita.jpg`,
  },

  ogImagesDefault: {
    default: `${basePath}/OG_images_database/Default_OG-image.jpg`,
    eng: `${basePath}/OG_images_database/Default_OG-image_eng.jpg`,
    ger: `${basePath}/OG_images_database/Default_OG-image_ger.jpg`,
    hr: `${basePath}/OG_images_database/Default_OG-image_hr.jpg`,
    ita: `${basePath}/OG_images_database/Default_OG-image_ita.jpg`,
  },

  heroImagesAboutUs: {
    mobile: `${basePath}/Hero_images_database/CMS_About_Us__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_About_Us__Hero_Image.jpg`,
  },

  heroImagesAmenities: {
    mobile: `${basePath}/Hero_images_database/CMS_Amenities__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Amenities__Hero_Image.jpg`,
  },

  heroImagesArchiveBlog: {
    mobile: `${basePath}/Hero_images_database/CMS_Archive_Blog_Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Archive_Blog_Hero_Image.jpg`,
  },

  heroImagesArchiveNews: {
    mobile: `${basePath}/Hero_images_database/CMS_Archive_News__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Archive_News__Hero_Image.jpg`,
  },

  heroImagesArchiveProductsOrServices: {
    mobile: `${basePath}/Hero_images_database/CMS_Archive_Products_or_Services__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Archive_Products_or_Services__Hero_Image.jpg`,
  },

  heroImagesArchiveRecipes: {
    mobile: `${basePath}/Hero_images_database/CMS_Archive_Recipes__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Archive_Recipes__Hero_Image.jpg`,
  },

  heroImagesBonus: {
    mobile: `${basePath}/Hero_images_database/CMS_BONUS__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_BONUS_Hero_Image.jpg`,
  },

  heroImagesCareer: {
    mobile: `${basePath}/Hero_images_database/CMS_Career__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Career_Hero_Image.jpg`,
  },

  heroImagesCaseStudy: {
    mobile: `${basePath}/Hero_images_database/CMS_Case_Study__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Case_Study_Hero_Image.jpg`,
  },

  heroImagesCompanyInfo: {
    mobile: `${basePath}/Hero_images_database/CMS_Company_Info__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Company_Info_Hero_Image.jpg`,
  },

  heroImagesContactUs: {
    mobile: `${basePath}/Hero_images_database/CMS_Contact_Us__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Contact_Us_Hero_Image.jpg`,
  },

  heroImagesCookies: {
    mobile: `${basePath}/Hero_images_database/CMS_Cookies__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Cookies_Hero_Image.jpg`,
  },

  heroImagesExploreSurrounding: {
    mobile: `${basePath}/Hero_images_database/CMS_Explore_Surrounding__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Explore_Surrounding_Hero_Image.jpg`,
  },

  heroImagesFAQ: {
    mobile: `${basePath}/Hero_images_database/CMS_FAQ__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_FAQ_Hero_Image.jpg`,
  },

  heroImageFooter: {
    default: `${basePath}/Hero_images_database/CMS_Footer_Image.jpg`,
  },

  heroImagesHomePage: {
    mobile: `${basePath}/Hero_images_database/CMS_HomePage__Hero_image-mobile.jpg`,
    mobileMiddle: `${basePath}/Hero_images_database/CMS_HomePage__Middle_section_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_HomePage_Hero_Image.jpg`,
    desktopMiddle: `${basePath}/Hero_images_database/CMS_HomePage_Middle_section_Image.jpg`,
  },

  heroImagesHomePageMultiple: {
    img1: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_1.jpg`,
    img2: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_2.jpg`,
    img3: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_3.jpg`,
    img4: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_4.jpg`,
    img5: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_5.jpg`,
    img6: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_6.jpg`,
    img7: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_7.jpg`,
    img8: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_8.jpg`,
    img9: `${basePath}/Hero_images_database/Multiple_pictures_hero/Hero_image_(multiple)_9.jpg`,
  },

  heroMasks: {
    '1280v1': `${basePath}/Hero_images_database/Hero_mask/Hero_mask1280px-v1.svg`,
    '1280v2': `${basePath}/Hero_images_database/Hero_mask/Hero_mask1280px-v2.svg`,
    '1680v1': `${basePath}/Hero_images_database/Hero_mask/Hero_mask1680px-v1.svg`,
    '1680v2': `${basePath}/Hero_images_database/Hero_mask/Hero_mask1680px-v2.svg`,
    mobilev1: `${basePath}/Hero_images_database/Hero_mask/Hero_mask_Mobile-v1.svg`,
    mobilev2: `${basePath}/Hero_images_database/Hero_mask/Hero_mask_Mobile-v2.svg`,
  },

  heroImagesLocations: {
    mobile: `${basePath}/Hero_images_database/CMS_Locations__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Locations_Hero_Image.jpg`,
    desktop2: `${basePath}/Hero_images_database/CMS_Locations_Hero_Image-2.jpg`,
    mobile2: `${basePath}/Hero_images_database/CMS_Locations__Hero_image-mobile-2.jpg`,
  },

  heroImagesMeetOurTeam: {
    mobile: `${basePath}/Hero_images_database/CMS_Meet_Our_Team__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Meet_Our_Team_Hero_Image.jpg`,
  },

  heroImagesPressMedia: {
    mobile: `${basePath}/Hero_images_database/CMS_Press_Media_Downloads__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Press_Media_Downloads_Hero_Image.jpg`,
  },

  heroImagesPricing: {
    mobile: `${basePath}/Hero_images_database/CMS_Pricing__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Pricing_Hero_Image.jpg`,
  },

  heroImagesPrivacy: {
    mobile: `${basePath}/Hero_images_database/CMS_Privacy__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Privacy_Hero_Image.jpg`,
  },

  heroImagesQuality: {
    mobile: `${basePath}/Hero_images_database/CMS_Quality__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Quality_Hero_Image.jpg`,
  },

  heroImagesRestaurantMenu: {
    mobile: `${basePath}/Hero_images_database/CMS_Restaurant_Menu__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Restaurant_Menu_Hero_Image.jpg`,
  },

  heroImagesTermsOfUse: {
    mobile: `${basePath}/Hero_images_database/CMS_Terms_Of_Use__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Terms_Of_Use_Hero_Image.jpg`,
  },

  heroImagesWhereAreWe: {
    mobile: `${basePath}/Hero_images_database/CMS_Where_Are_we__Hero_image-mobile.jpg`,
    desktop: `${basePath}/Hero_images_database/CMS_Where_Are_we_Hero_Image.jpg`,
  },

  heroImagesDefault: {
    mobile: `${basePath}/Hero_images_database/Hero_Mobile - Placeholder DEFAULT.jpg`,
    desktop: `${basePath}/Hero_images_database/Hero_Image - Placeholder DEFAULT.jpg`,
  },

  backgroundImages: {
    paper: `${basePath}/Background/Paper_background.jpg`,
    bonus: `${basePath}/Background/bonus_background.jpg`,
    concrete: `${basePath}/Background/concrete_background.jpg`,
    svg: `${basePath}/Background/svg_background.svg`,
  },

  importElementsImages: {
    bottom: `${basePath}/elements/Bottom_png_element.png`,
    top: `${basePath}/elements/Top_png_element.png`,
  },

  placeholderHeroImage: {
    placeholder: `${basePath}/other/CMS_Image_Placeholder.jpg`,
  },

  carusel1Images: {
    img1: `${basePath}/Gallery database/carusel 1/img-01.jpg`,
    img2: `${basePath}/Gallery database/carusel 1/img-02.jpg`,
    img3: `${basePath}/Gallery database/carusel 1/img-03.jpg`,
    img4: `${basePath}/Gallery database/carusel 1/img-04.jpg`,
    img5: `${basePath}/Gallery database/carusel 1/img-05.jpg`,
    img6: `${basePath}/Gallery database/carusel 1/img-06.jpg`,
    img7: `${basePath}/Gallery database/carusel 1/img-07.jpg`,
    img8: `${basePath}/Gallery database/carusel 1/img-08.jpg`,
    img9: `${basePath}/Gallery database/carusel 1/img-09.jpg`,
    img10: `${basePath}/Gallery database/carusel 1/img-10.jpg`,
    img11: `${basePath}/Gallery database/carusel 1/img-11.jpg`,
    img12: `${basePath}/Gallery database/carusel 1/img-12.jpg`,
    img13: `${basePath}/Gallery database/carusel 1/img-13.jpg`,
    img14: `${basePath}/Gallery database/carusel 1/img-14.jpg`,
    img15: `${basePath}/Gallery database/carusel 1/img-15.jpg`,
    img16: `${basePath}/Gallery database/carusel 1/img-16.jpg`,
  },

  carusel2Images: {
    img1: `${basePath}/Gallery database/carusel 2/img-01.jpg`,
    img2: `${basePath}/Gallery database/carusel 2/img-02.jpg`,
    img3: `${basePath}/Gallery database/carusel 2/img-03.jpg`,
    img4: `${basePath}/Gallery database/carusel 2/img-04.jpg`,
    img5: `${basePath}/Gallery database/carusel 2/img-05.jpg`,
    img6: `${basePath}/Gallery database/carusel 2/img-06.jpg`,
    img7: `${basePath}/Gallery database/carusel 2/img-07.jpg`,
    img8: `${basePath}/Gallery database/carusel 2/img-08.jpg`,
    img9: `${basePath}/Gallery database/carusel 2/img-09.jpg`,
    img10: `${basePath}/Gallery database/carusel 2/img-10.jpg`,
    img11: `${basePath}/Gallery database/carusel 2/img-11.jpg`,
    img12: `${basePath}/Gallery database/carusel 2/img-12.jpg`,
    img13: `${basePath}/Gallery database/carusel 2/img-13.jpg`,
    img14: `${basePath}/Gallery database/carusel 2/img-14.jpg`,
    img15: `${basePath}/Gallery database/carusel 2/img-15.jpg`,
    img16: `${basePath}/Gallery database/carusel 2/img-16.jpg`,
  },

  carusel3Images: {
    img1: `${basePath}/Gallery database/carusel 3/img-01.jpg`,
    img2: `${basePath}/Gallery database/carusel 3/img-02.jpg`,
    img3: `${basePath}/Gallery database/carusel 3/img-03.jpg`,
    img4: `${basePath}/Gallery database/carusel 3/img-04.jpg`,
    img5: `${basePath}/Gallery database/carusel 3/img-05.jpg`,
    img6: `${basePath}/Gallery database/carusel 3/img-06.jpg`,
    img7: `${basePath}/Gallery database/carusel 3/img-07.jpg`,
    img8: `${basePath}/Gallery database/carusel 3/img-08.jpg`,
    img9: `${basePath}/Gallery database/carusel 3/img-09.jpg`,
    img10: `${basePath}/Gallery database/carusel 3/img-10.jpg`,
    img11: `${basePath}/Gallery database/carusel 3/img-11.jpg`,
    img12: `${basePath}/Gallery database/carusel 3/img-12.jpg`,
    img13: `${basePath}/Gallery database/carusel 3/img-13.jpg`,
    img14: `${basePath}/Gallery database/carusel 3/img-14.jpg`,
    img15: `${basePath}/Gallery database/carusel 3/img-15.jpg`,
    img16: `${basePath}/Gallery database/carusel 3/img-16.jpg`,
  },

  carusel4Images: {
    img1: `${basePath}/Gallery database/carusel 4/img-01.jpg`,
    img2: `${basePath}/Gallery database/carusel 4/img-02.jpg`,
    img3: `${basePath}/Gallery database/carusel 4/img-03.jpg`,
    img4: `${basePath}/Gallery database/carusel 4/img-04.jpg`,
    img5: `${basePath}/Gallery database/carusel 4/img-05.jpg`,
    img6: `${basePath}/Gallery database/carusel 4/img-06.jpg`,
    img7: `${basePath}/Gallery database/carusel 4/img-07.jpg`,
    img8: `${basePath}/Gallery database/carusel 4/img-08.jpg`,
    img9: `${basePath}/Gallery database/carusel 4/img-09.jpg`,
    img10: `${basePath}/Gallery database/carusel 4/img-10.jpg`,
    img11: `${basePath}/Gallery database/carusel 4/img-11.jpg`,
    img12: `${basePath}/Gallery database/carusel 4/img-12.jpg`,
    img13: `${basePath}/Gallery database/carusel 4/img-13.jpg`,
    img14: `${basePath}/Gallery database/carusel 4/img-14.jpg`,
    img15: `${basePath}/Gallery database/carusel 4/img-15.jpg`,
    img16: `${basePath}/Gallery database/carusel 4/img-16.jpg`,
  },

  carusel5Images: {
    img1: `${basePath}/Gallery database/carusel 5/img-01.jpg`,
    img2: `${basePath}/Gallery database/carusel 5/img-02.jpg`,
    img3: `${basePath}/Gallery database/carusel 5/img-03.jpg`,
    img4: `${basePath}/Gallery database/carusel 5/img-04.jpg`,
    img5: `${basePath}/Gallery database/carusel 5/img-05.jpg`,
    img6: `${basePath}/Gallery database/carusel 5/img-06.jpg`,
    img7: `${basePath}/Gallery database/carusel 5/img-07.jpg`,
    img8: `${basePath}/Gallery database/carusel 5/img-08.jpg`,
    img9: `${basePath}/Gallery database/carusel 5/img-09.jpg`,
    img10: `${basePath}/Gallery database/carusel 5/img-10.jpg`,
    img11: `${basePath}/Gallery database/carusel 5/img-11.jpg`,
    img12: `${basePath}/Gallery database/carusel 5/img-12.jpg`,
    img13: `${basePath}/Gallery database/carusel 5/img-13.jpg`,
    img14: `${basePath}/Gallery database/carusel 5/img-14.jpg`,
    img15: `${basePath}/Gallery database/carusel 5/img-15.jpg`,
    img16: `${basePath}/Gallery database/carusel 5/img-16.jpg`,
  },

  videoResources: {
    amenities: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Amenities_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Amenities_Hero__Video.mp4`,
    },
    archiveRecipes: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Archive_Recipes_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Archive_Recipes_Hero__Video.mp4`,
    },
    bonus: {
      placeholder: `${basePath}/Hero_Video_database/CMS_BONUS_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_BONUS_Hero__Video.mp4`,
    },
    meetOurTeam: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Meet_Our_Team_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Meet_Our_Team_Hero__Video.mp4`,
    },
    pressMediaDownloads: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Press_Media_Downloads_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Press_Media_Downloads_Hero__Video.mp4`,
    },
    pricing: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Pricing_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Pricing_Hero__Video.mp4`,
    },
    aboutUs: {
      placeholder: `${basePath}/Hero_Video_database/CMS_About_Us_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_About_Us_Hero__Video.mp4`,
    },
    archiveBlog: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Archive_Blog_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Archive_Blog_Hero__Video.mp4`,
    },
    archiveNews: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Archive_News_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Archive_News_Hero__Video.mp4`,
    },
    archiveProductsOrServices: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Archive_Products_or_Services_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Archive_Products_or_Services_Hero__Video.mp4`,
    },
    contactUs: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Contact_Us_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Contact_Us_Hero__Video.mp4`,
    },
    cookies: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Cookies_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Cookies_Hero__Video.mp4`,
    },
    footer: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Footer__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Footer__Video.mp4`,
    },
    termsOfUse: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Terms_Of_Use_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Terms_Of_Use_Hero__Video.mp4`,
    },
    career: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Career_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Career_Hero__Video.mp4`,
    },
    caseStudy: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Case_Study_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Case_Study_Hero__Video.mp4`,
    },
    exploreSurrounding: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Explore_Surrounding_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Explore_Surrounding_Hero__Video.mp4`,
    },
    locations: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Locations_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Locations_Hero__Video.mp4`,
    },
    quality: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Quality_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Quality_Hero__Video.mp4`,
    },
    restaurantMenu: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Restaurant_Menu_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Restaurant_Menu_Hero__Video.mp4`,
    },
    whereAreWe: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Where_Are_we_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Where_Are_we_Hero__Video.mp4`,
    },
    companyInfo: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Company_Info_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Company_Info_Hero__Video.mp4`,
    },
    faq: {
      placeholder: `${basePath}/Hero_Video_database/CMS_FAQ_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_FAQ_Hero__Video.mp4`,
    },
    homePage: {
      placeholder: `${basePath}/Hero_Video_database/CMS_HomePage_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_HomePage_Hero__Video.mp4`,
    },
    homePageMiddleSection: {
      placeholder: `${basePath}/Hero_Video_database/CMS_HomePage_Middle_section__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_HomePage_Middle_section__Video.mp4`,
    },
    privacy: {
      placeholder: `${basePath}/Hero_Video_database/CMS_Privacy_Hero__Video_Placeholder.jpg`,
      video: `${basePath}/Hero_Video_database/CMS_Privacy_Hero__Video.mp4`,
    },
    default: {
      placeholder: `${basePath}/Hero_Video_database/Video_Placeholder_DEFAULT.jpg`,
      video: `${basePath}/Hero_Video_database/Video_DEFAULT.mp4`,
    },
  },

  galleryImages: {
    gallery1: [
      { src: `${basePath}/Gallery database/gallery 1/img-01.jpg`, class: 'gallery-1-img-1' },
      { src: `${basePath}/Gallery database/gallery 1/img-02.jpg`, class: 'gallery-1-img-2' },
      { src: `${basePath}/Gallery database/gallery 1/img-03.jpg`, class: 'gallery-1-img-3' },
      { src: `${basePath}/Gallery database/gallery 1/img-04.jpg`, class: 'gallery-1-img-4' },
      { src: `${basePath}/Gallery database/gallery 1/img-05.jpg`, class: 'gallery-1-img-5' },
      { src: `${basePath}/Gallery database/gallery 1/img-06.jpg`, class: 'gallery-1-img-6' },
      { src: `${basePath}/Gallery database/gallery 1/img-07.jpg`, class: 'gallery-1-img-7' },
      { src: `${basePath}/Gallery database/gallery 1/img-08.jpg`, class: 'gallery-1-img-8' },
      { src: `${basePath}/Gallery database/gallery 1/img-09.jpg`, class: 'gallery-1-img-9' },
      { src: `${basePath}/Gallery database/gallery 1/img-10.jpg`, class: 'gallery-1-img-10' },
      { src: `${basePath}/Gallery database/gallery 1/img-11.jpg`, class: 'gallery-1-img-11' },
      { src: `${basePath}/Gallery database/gallery 1/img-12.jpg`, class: 'gallery-1-img-12' },
      { src: `${basePath}/Gallery database/gallery 1/img-13.jpg`, class: 'gallery-1-img-13' },
      { src: `${basePath}/Gallery database/gallery 1/img-14.jpg`, class: 'gallery-1-img-14' },
      { src: `${basePath}/Gallery database/gallery 1/img-15.jpg`, class: 'gallery-1-img-15' },
      { src: `${basePath}/Gallery database/gallery 1/img-16.jpg`, class: 'gallery-1-img-16' },
    ],
    gallery2: [
      { src: `${basePath}/Gallery database/gallery 2/img-01.jpg`, class: 'gallery-2-img-1' },
      { src: `${basePath}/Gallery database/gallery 2/img-02.jpg`, class: 'gallery-2-img-2' },
      { src: `${basePath}/Gallery database/gallery 2/img-03.jpg`, class: 'gallery-2-img-3' },
      { src: `${basePath}/Gallery database/gallery 2/img-04.jpg`, class: 'gallery-2-img-4' },
      { src: `${basePath}/Gallery database/gallery 2/img-05.jpg`, class: 'gallery-2-img-5' },
      { src: `${basePath}/Gallery database/gallery 2/img-06.jpg`, class: 'gallery-2-img-6' },
      { src: `${basePath}/Gallery database/gallery 2/img-07.jpg`, class: 'gallery-2-img-7' },
      { src: `${basePath}/Gallery database/gallery 2/img-08.jpg`, class: 'gallery-2-img-8' },
      { src: `${basePath}/Gallery database/gallery 2/img-09.jpg`, class: 'gallery-2-img-9' },
      { src: `${basePath}/Gallery database/gallery 2/img-10.jpg`, class: 'gallery-2-img-10' },
      { src: `${basePath}/Gallery database/gallery 2/img-11.jpg`, class: 'gallery-2-img-11' },
      { src: `${basePath}/Gallery database/gallery 2/img-12.jpg`, class: 'gallery-2-img-12' },
      { src: `${basePath}/Gallery database/gallery 2/img-13.jpg`, class: 'gallery-2-img-13' },
      { src: `${basePath}/Gallery database/gallery 2/img-14.jpg`, class: 'gallery-2-img-14' },
      { src: `${basePath}/Gallery database/gallery 2/img-15.jpg`, class: 'gallery-2-img-15' },
      { src: `${basePath}/Gallery database/gallery 2/img-16.jpg`, class: 'gallery-2-img-16' },
    ],
    gallery3: [
      { src: `${basePath}/Gallery database/gallery 3/img-01.jpg`, class: 'carusel-3-img-1' },
      { src: `${basePath}/Gallery database/gallery 3/img-02.jpg`, class: 'carusel-3-img-2' },
      { src: `${basePath}/Gallery database/gallery 3/img-03.jpg`, class: 'carusel-3-img-3' },
      { src: `${basePath}/Gallery database/gallery 3/img-04.jpg`, class: 'carusel-3-img-4' },
      { src: `${basePath}/Gallery database/gallery 3/img-05.jpg`, class: 'carusel-3-img-5' },
      { src: `${basePath}/Gallery database/gallery 3/img-06.jpg`, class: 'carusel-3-img-6' },
      { src: `${basePath}/Gallery database/gallery 3/img-07.jpg`, class: 'carusel-3-img-7' },
      { src: `${basePath}/Gallery database/gallery 3/img-08.jpg`, class: 'carusel-3-img-8' },
      { src: `${basePath}/Gallery database/gallery 3/img-09.jpg`, class: 'carusel-3-img-9' },
      { src: `${basePath}/Gallery database/gallery 3/img-10.jpg`, class: 'carusel-3-img-10' },
      { src: `${basePath}/Gallery database/gallery 3/img-11.jpg`, class: 'carusel-3-img-11' },
      { src: `${basePath}/Gallery database/gallery 3/img-12.jpg`, class: 'carusel-3-img-12' },
      { src: `${basePath}/Gallery database/gallery 3/img-13.jpg`, class: 'carusel-3-img-13' },
      { src: `${basePath}/Gallery database/gallery 3/img-14.jpg`, class: 'carusel-3-img-14' },
      { src: `${basePath}/Gallery database/gallery 3/img-15.jpg`, class: 'carusel-3-img-15' },
      { src: `${basePath}/Gallery database/gallery 3/img-16.jpg`, class: 'carusel-3-img-16' },
    ],
    gallery4: [
      { src: `${basePath}/Gallery database/gallery 4/img-01.jpg`, class: 'carusel-4-img-1' },
      { src: `${basePath}/Gallery database/gallery 4/img-02.jpg`, class: 'carusel-4-img-2' },
      { src: `${basePath}/Gallery database/gallery 4/img-03.jpg`, class: 'carusel-4-img-3' },
      { src: `${basePath}/Gallery database/gallery 4/img-04.jpg`, class: 'carusel-4-img-4' },
      { src: `${basePath}/Gallery database/gallery 4/img-05.jpg`, class: 'carusel-4-img-5' },
      { src: `${basePath}/Gallery database/gallery 4/img-06.jpg`, class: 'carusel-4-img-6' },
      { src: `${basePath}/Gallery database/gallery 4/img-07.jpg`, class: 'carusel-4-img-7' },
      { src: `${basePath}/Gallery database/gallery 4/img-08.jpg`, class: 'carusel-4-img-8' },
      { src: `${basePath}/Gallery database/gallery 4/img-09.jpg`, class: 'carusel-4-img-9' },
      { src: `${basePath}/Gallery database/gallery 4/img-10.jpg`, class: 'carusel-4-img-10' },
      { src: `${basePath}/Gallery database/gallery 4/img-11.jpg`, class: 'carusel-4-img-11' },
      { src: `${basePath}/Gallery database/gallery 4/img-12.jpg`, class: 'carusel-4-img-12' },
      { src: `${basePath}/Gallery database/gallery 4/img-13.jpg`, class: 'carusel-4-img-13' },
      { src: `${basePath}/Gallery database/gallery 4/img-14.jpg`, class: 'carusel-4-img-14' },
      { src: `${basePath}/Gallery database/gallery 4/img-15.jpg`, class: 'carusel-4-img-15' },
      { src: `${basePath}/Gallery database/gallery 4/img-16.jpg`, class: 'carusel-4-img-16' },
    ],
    gallery5: [
      { src: `${basePath}/Gallery database/gallery 5/img-01.jpg`, class: 'carusel-5-img-1' },
      { src: `${basePath}/Gallery database/gallery 5/img-02.jpg`, class: 'carusel-5-img-2' },
      { src: `${basePath}/Gallery database/gallery 5/img-03.jpg`, class: 'carusel-5-img-3' },
      { src: `${basePath}/Gallery database/gallery 5/img-04.jpg`, class: 'carusel-5-img-4' },
      { src: `${basePath}/Gallery database/gallery 5/img-05.jpg`, class: 'carusel-5-img-5' },
      { src: `${basePath}/Gallery database/gallery 5/img-06.jpg`, class: 'carusel-5-img-6' },
      { src: `${basePath}/Gallery database/gallery 5/img-07.jpg`, class: 'carusel-5-img-7' },
      { src: `${basePath}/Gallery database/gallery 5/img-08.jpg`, class: 'carusel-5-img-8' },
      { src: `${basePath}/Gallery database/gallery 5/img-09.jpg`, class: 'carusel-5-img-9' },
      { src: `${basePath}/Gallery database/gallery 5/img-10.jpg`, class: 'carusel-5-img-10' },
      { src: `${basePath}/Gallery database/gallery 5/img-11.jpg`, class: 'carusel-5-img-11' },
      { src: `${basePath}/Gallery database/gallery 5/img-12.jpg`, class: 'carusel-5-img-12' },
      { src: `${basePath}/Gallery database/gallery 5/img-13.jpg`, class: 'carusel-5-img-13' },
      { src: `${basePath}/Gallery database/gallery 5/img-14.jpg`, class: 'carusel-5-img-14' },
      { src: `${basePath}/Gallery database/gallery 5/img-15.jpg`, class: 'carusel-5-img-15' },
      { src: `${basePath}/Gallery database/gallery 5/img-16.jpg`, class: 'carusel-5-img-16' },
    ],
    gallery6: [
      { src: `${basePath}/Gallery database/gallery 6/img-01.jpg`, class: 'carusel-6-img-1' },
      { src: `${basePath}/Gallery database/gallery 6/img-02.jpg`, class: 'carusel-6-img-2' },
      { src: `${basePath}/Gallery database/gallery 6/img-03.jpg`, class: 'carusel-6-img-3' },
      { src: `${basePath}/Gallery database/gallery 6/img-04.jpg`, class: 'carusel-6-img-4' },
      { src: `${basePath}/Gallery database/gallery 6/img-05.jpg`, class: 'carusel-6-img-5' },
      { src: `${basePath}/Gallery database/gallery 6/img-06.jpg`, class: 'carusel-6-img-6' },
      { src: `${basePath}/Gallery database/gallery 6/img-07.jpg`, class: 'carusel-6-img-7' },
      { src: `${basePath}/Gallery database/gallery 6/img-08.jpg`, class: 'carusel-6-img-8' },
      { src: `${basePath}/Gallery database/gallery 6/img-09.jpg`, class: 'carusel-6-img-9' },
      { src: `${basePath}/Gallery database/gallery 6/img-10.jpg`, class: 'carusel-6-img-10' },
      { src: `${basePath}/Gallery database/gallery 6/img-11.jpg`, class: 'carusel-6-img-11' },
      { src: `${basePath}/Gallery database/gallery 6/img-12.jpg`, class: 'carusel-6-img-12' },
      { src: `${basePath}/Gallery database/gallery 6/img-13.jpg`, class: 'carusel-6-img-13' },
      { src: `${basePath}/Gallery database/gallery 6/img-14.jpg`, class: 'carusel-6-img-14' },
      { src: `${basePath}/Gallery database/gallery 6/img-15.jpg`, class: 'carusel-6-img-15' },
      { src: `${basePath}/Gallery database/gallery 6/img-16.jpg`, class: 'carusel-6-img-16' },
    ],
    gallery7: [
      { src: `${basePath}/Gallery database/gallery 7/img-01.jpg`, class: 'carusel-7-img-1' },
      { src: `${basePath}/Gallery database/gallery 7/img-02.jpg`, class: 'carusel-7-img-2' },
      { src: `${basePath}/Gallery database/gallery 7/img-03.jpg`, class: 'carusel-7-img-3' },
      { src: `${basePath}/Gallery database/gallery 7/img-04.jpg`, class: 'carusel-7-img-4' },
      { src: `${basePath}/Gallery database/gallery 7/img-05.jpg`, class: 'carusel-7-img-5' },
      { src: `${basePath}/Gallery database/gallery 7/img-06.jpg`, class: 'carusel-7-img-6' },
      { src: `${basePath}/Gallery database/gallery 7/img-07.jpg`, class: 'carusel-7-img-7' },
      { src: `${basePath}/Gallery database/gallery 7/img-08.jpg`, class: 'carusel-7-img-8' },
      { src: `${basePath}/Gallery database/gallery 7/img-09.jpg`, class: 'carusel-7-img-9' },
      { src: `${basePath}/Gallery database/gallery 7/img-10.jpg`, class: 'carusel-7-img-10' },
      { src: `${basePath}/Gallery database/gallery 7/img-11.jpg`, class: 'carusel-7-img-11' },
      { src: `${basePath}/Gallery database/gallery 7/img-12.jpg`, class: 'carusel-7-img-12' },
      { src: `${basePath}/Gallery database/gallery 7/img-13.jpg`, class: 'carusel-7-img-13' },
      { src: `${basePath}/Gallery database/gallery 7/img-14.jpg`, class: 'carusel-7-img-14' },
      { src: `${basePath}/Gallery database/gallery 7/img-15.jpg`, class: 'carusel-7-img-15' },
      { src: `${basePath}/Gallery database/gallery 7/img-16.jpg`, class: 'carusel-7-img-16' },
    ],
    gallery8: [
      { src: `${basePath}/Gallery database/gallery 8/img-01.jpg`, class: 'carusel-8-img-1' },
      { src: `${basePath}/Gallery database/gallery 8/img-02.jpg`, class: 'carusel-8-img-2' },
      { src: `${basePath}/Gallery database/gallery 8/img-03.jpg`, class: 'carusel-8-img-3' },
      { src: `${basePath}/Gallery database/gallery 8/img-04.jpg`, class: 'carusel-8-img-4' },
      { src: `${basePath}/Gallery database/gallery 8/img-05.jpg`, class: 'carusel-8-img-5' },
      { src: `${basePath}/Gallery database/gallery 8/img-06.jpg`, class: 'carusel-8-img-6' },
      { src: `${basePath}/Gallery database/gallery 8/img-07.jpg`, class: 'carusel-8-img-7' },
      { src: `${basePath}/Gallery database/gallery 8/img-08.jpg`, class: 'carusel-8-img-8' },
      { src: `${basePath}/Gallery database/gallery 8/img-09.jpg`, class: 'carusel-8-img-9' },
      { src: `${basePath}/Gallery database/gallery 8/img-10.jpg`, class: 'carusel-8-img-10' },
      { src: `${basePath}/Gallery database/gallery 8/img-11.jpg`, class: 'carusel-8-img-11' },
      { src: `${basePath}/Gallery database/gallery 8/img-12.jpg`, class: 'carusel-8-img-12' },
      { src: `${basePath}/Gallery database/gallery 8/img-13.jpg`, class: 'carusel-8-img-13' },
      { src: `${basePath}/Gallery database/gallery 8/img-14.jpg`, class: 'carusel-8-img-14' },
      { src: `${basePath}/Gallery database/gallery 8/img-15.jpg`, class: 'carusel-8-img-15' },
      { src: `${basePath}/Gallery database/gallery 8/img-16.jpg`, class: 'carusel-8-img-16' },
    ],
    gallery9: [
      { src: `${basePath}/Gallery database/gallery 9/img-01.jpg`, class: 'carusel-9-img-1' },
      { src: `${basePath}/Gallery database/gallery 9/img-02.jpg`, class: 'carusel-9-img-2' },
      { src: `${basePath}/Gallery database/gallery 9/img-03.jpg`, class: 'carusel-9-img-3' },
      { src: `${basePath}/Gallery database/gallery 9/img-04.jpg`, class: 'carusel-9-img-4' },
      { src: `${basePath}/Gallery database/gallery 9/img-05.jpg`, class: 'carusel-9-img-5' },
      { src: `${basePath}/Gallery database/gallery 9/img-06.jpg`, class: 'carusel-9-img-6' },
      { src: `${basePath}/Gallery database/gallery 9/img-07.jpg`, class: 'carusel-9-img-7' },
      { src: `${basePath}/Gallery database/gallery 9/img-08.jpg`, class: 'carusel-9-img-8' },
      { src: `${basePath}/Gallery database/gallery 9/img-09.jpg`, class: 'carusel-9-img-9' },
      { src: `${basePath}/Gallery database/gallery 9/img-10.jpg`, class: 'carusel-9-img-10' },
      { src: `${basePath}/Gallery database/gallery 9/img-11.jpg`, class: 'carusel-9-img-11' },
      { src: `${basePath}/Gallery database/gallery 9/img-12.jpg`, class: 'carusel-9-img-12' },
      { src: `${basePath}/Gallery database/gallery 9/img-13.jpg`, class: 'carusel-9-img-13' },
      { src: `${basePath}/Gallery database/gallery 9/img-14.jpg`, class: 'carusel-9-img-14' },
      { src: `${basePath}/Gallery database/gallery 9/img-15.jpg`, class: 'carusel-9-img-15' },
      { src: `${basePath}/Gallery database/gallery 9/img-16.jpg`, class: 'carusel-9-img-16' },
    ],
    gallery10: [
      { src: `${basePath}/Gallery database/gallery 10/img-01.jpg`, class: 'carusel-10-img-1' },
      { src: `${basePath}/Gallery database/gallery 10/img-02.jpg`, class: 'carusel-10-img-2' },
      { src: `${basePath}/Gallery database/gallery 10/img-03.jpg`, class: 'carusel-10-img-3' },
      { src: `${basePath}/Gallery database/gallery 10/img-04.jpg`, class: 'carusel-10-img-4' },
      { src: `${basePath}/Gallery database/gallery 10/img-05.jpg`, class: 'carusel-10-img-5' },
      { src: `${basePath}/Gallery database/gallery 10/img-06.jpg`, class: 'carusel-10-img-6' },
      { src: `${basePath}/Gallery database/gallery 10/img-07.jpg`, class: 'carusel-10-img-7' },
      { src: `${basePath}/Gallery database/gallery 10/img-08.jpg`, class: 'carusel-10-img-8' },
      { src: `${basePath}/Gallery database/gallery 10/img-09.jpg`, class: 'carusel-10-img-9' },
      { src: `${basePath}/Gallery database/gallery 10/img-10.jpg`, class: 'carusel-10-img-10' },
      { src: `${basePath}/Gallery database/gallery 10/img-11.jpg`, class: 'carusel-10-img-11' },
      { src: `${basePath}/Gallery database/gallery 10/img-12.jpg`, class: 'carusel-10-img-12' },
      { src: `${basePath}/Gallery database/gallery 10/img-13.jpg`, class: 'carusel-10-img-13' },
      { src: `${basePath}/Gallery database/gallery 10/img-14.jpg`, class: 'carusel-10-img-14' },
      { src: `${basePath}/Gallery database/gallery 10/img-15.jpg`, class: 'carusel-10-img-15' },
      { src: `${basePath}/Gallery database/gallery 10/img-16.jpg`, class: 'carusel-10-img-16' },
    ],
  },

  bgTextures: {
    texturePaper: `${basePath}/BG_Texture/BG_Texture-Paper.png`,
    textureConcrete: `${basePath}/BG_Texture/BG_Texture-Concrete.png`,
    textureWall: `${basePath}/BG_Texture/BG_Texture-Wall.png`,
    textureSVGWaves: `${basePath}/BG_Texture/BG_Texture-SVG_Waves.png`,
    shadow01: `${basePath}/Shadows/Shadow_01.png`,
    shadow02: `${basePath}/Shadows/Shadow_02.png`,
    shadow03: `${basePath}/Shadows/Shadow_03.png`,
    shadowLinearGradientBrandColors: `${basePath}/Shadows/Shadow_Linear_Gradient_Brand_Colors.png`,
    shadowLinearGradientBlack: `${basePath}/Shadows/Shadow_LinearGradient_Black.png`,
    shadowVignett: `${basePath}/Shadows/Shadow_Vignett.png`,
    shadowSideShadows: `${basePath}/Shadows/Shadow_Side_Shadows.png`,
  },

  siteLogo: {
    verticalLight: `${basePath}/SITE-LOGO/SiteLogo-Vertical-Light_Mode.svg`,
    verticalDark: `${basePath}/SITE-LOGO/SiteLogo-Vertical-Dark_Mode.svg`,
    horizontalLight: `${basePath}/SITE-LOGO/SiteLogo-horizontal-Light_Mode.svg`,
    horizontalDark: `${basePath}/SITE-LOGO/SiteLogo-horizontal-Dark_Mode.svg`,
    logoLight: `${basePath}/SITE-LOGO/SiteLogo-logo-Light_Mode.svg`,
    logoDark: `${basePath}/SITE-LOGO/SiteLogo-logo-Dark_Mode.svg`,
  },

  siteIcons: {
    langSwitcherLight: `${basePath}/SVG/NAVBAR/GLOBE-ICON/Lang-icon-globe-LIGHT_MODE.svg`,
    langSwitcherDark: `${basePath}/SVG/NAVBAR/GLOBE-ICON/Lang-icon-globe-DARK_MODE.svg`,
    nadNavbar: {
      phoneLight: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-Phone-light-mode.svg`,
      phoneDark: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-Phone-dark-mode.svg`,
      mailLight: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-email-light-mode.svg`,
      mailDark: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-email-dark-mode.svg`,
      mailLightAlt: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-email-light-mode-1.svg`,
      mailDarkAlt: `${basePath}/SVG/NAVBAR/NADNAVBAR-icon-email-dark-mode-1.svg`,
    },
    dropdownArrows: {
      downPraznaLight: `${basePath}/SVG/ARROWS-DROPDOWN/Down-prazna-Light_mode.svg`,
      downPraznaDark: `${basePath}/SVG/ARROWS-DROPDOWN/Down-prazna-Dark_mode.svg`,
      arrow: `${basePath}/SVG/ARROWS-DROPDOWN/dropdown-arrows.svg`,
      arrowAlt: `${basePath}/SVG/ARROWS-DROPDOWN/dropdown-arrows-1.svg`,
      rightTrokutLight: `${basePath}/SVG/ARROWS-DROPDOWN/Right-trokut-Light_mode.svg`,
      rightTrokutDark: `${basePath}/SVG/ARROWS-DROPDOWN/Right-trokut-Dark_mode.svg`,
      downTrokutLight: `${basePath}/SVG/ARROWS-DROPDOWN/Down-trokut-Light_mode.svg`,
      downTrokutDark: `${basePath}/SVG/ARROWS-DROPDOWN/Down-trokut-Dark_mode.svg`,
    },

    arrows: {
      kruznaLeftLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Kruzna-Left-Light_Mode.svg`,
      kruznaLeftDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Kruzna-Left-Dark_Mode.svg`,
      kruznaRightLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Kruzna-Right-Light_Mode.svg`,
      kruznaRightDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Kruzna-RIGHT-Dark_Mode.svg`,
      obicnaLeftLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Obicna-LEFT-Light_mode.svg`,
      obicnaLeftDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Obicna-LEFT-Dark_mode.svg`,
      obicnaRightLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Obicna-RIGHT-Light_mode.svg`,
      obicnaRightDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-Obicna-RIGHT-Dark_mode.svg`,
      saPodlogomLeftLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-sa_podlogom-Left-Light_Mode.svg`,
      saPodlogomLeftDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-sa_podlogom-Left-Dark_Mode.svg`,
      saPodlogomRightLight: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-sa_podlogom-RIGHT-Light_Mode.svg`,
      saPodlogomRightDark: `${basePath}/SVG/ARROWS/arrows-carousel-gallery-sa_podlogom-RIGHT-Dark_Mode.svg`,
      obicnaStrelicaLeftLight: `${basePath}/SVG/ARROWS/Obicna-strelica-Left-Light_Mode.svg`,
      obicnaStrelicaLeftDark: `${basePath}/SVG/ARROWS/Obicna-strelica-Left-Dark_Mode.svg`,
      obicnaStrelicaRightLight: `${basePath}/SVG/ARROWS/Obicna-strelica-RIGHT-Light_Mode.svg`,
      obicnaStrelicaRightDark: `${basePath}/SVG/ARROWS/Obicna-strelica-RIGHT-Dark_Mode.svg`,
    },

    countryIcons: {
      hr: {
        krug: `${basePath}/SVG/FLAGS/flags-HR--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/flags-HR--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/flags-HR--Pravokutni_oblik.svg`,
      },
      eng: {
        krug: `${basePath}/SVG/FLAGS/Flags-ENG--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-ENG--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-ENG--Pravokutni_oblik.svg`,
      },
      ita: {
        krug: `${basePath}/SVG/FLAGS/Flags-ITA--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-ITA--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-ITA--Pravokutni_oblik.svg`,
      },
      ger: {
        krug: `${basePath}/SVG/FLAGS/Flags-GER--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-GER--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-GER--Pravokutni_oblik.svg`,
      },
      ned: {
        krug: `${basePath}/SVG/FLAGS/Flags-NED--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-NED--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-NED--Pravokutni_oblik.svg`,
      },
      slo: {
        krug: `${basePath}/SVG/FLAGS/Flags-SLO--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-SLO--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-SLO--Pravokutni_oblik.svg`,
      },
      fra: {
        krug: `${basePath}/SVG/FLAGS/Flags-FRA--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-FRA--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-FRA--Pravokutni_oblik.svg`,
      },
      esp: {
        krug: `${basePath}/SVG/FLAGS/Flags-ESP--Krug_oblik.svg`,
        rounded: `${basePath}/SVG/FLAGS/Flags-ESP--Rounded_oblik.svg`,
        pravokut: `${basePath}/SVG/FLAGS/Flags-ESP--Pravokutni_oblik.svg`,
      },
    },
  },

  // Ostale grupe medijskih putanja
};

export async function GET(request: NextRequest) {
  const response = NextResponse.json(mediaPaths);

  // Postavljamo Cache-Control zaglavlja za keširanje na CDN-u
  response.headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=3600');
  return response;
}
