// import React, {useContext} from "react";
// import "./Achievement.scss";
// import AchievementCard from "../../components/achievementCard/AchievementCard";
// import {achievementSection} from "../../portfolio";
// import {Fade} from "react-reveal";
// import StyleContext from "../../contexts/StyleContext";
// export default function Achievement() {
//   const {isDark} = useContext(StyleContext);
//   if (!achievementSection.display) {
//     return null;
//   }
//   return (
//     <Fade bottom duration={1000} distance="20px">
//       <div className="main" id="achievements">
//         <div className="achievement-main-div">
//           <div className="achievement-header">
//             <h1
//               className={
//                 isDark
//                   ? "dark-mode heading achievement-heading"
//                   : "heading achievement-heading"
//               }
//             >
//               {achievementSection.title}
//             </h1>
//             <p
//               className={
//                 isDark
//                   ? "dark-mode subTitle achievement-subtitle"
//                   : "subTitle achievement-subtitle"
//               }
//             >
//               {achievementSection.subtitle}
//             </p>
//           </div>
//           <div className="achievement-cards-div">
//             {achievementSection.achievementsCards.map((card, i) => {
//               return (
//                 <AchievementCard
//                   key={i}
//                   isDark={isDark}
//                   cardInfo={{
//                     title: card.title,
//                     description: card.subtitle,
//                     image: card.image,
//                     imageAlt: card.imageAlt,
//                     footer: card.footerLink
//                   }}
//                 />
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// }

import React, {useContext} from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import Slider from "react-slick";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  const CustomPrevArrow = ({onClick}) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &#10094;
    </div>
  );

  const CustomNextArrow = ({onClick}) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &#10095;
    </div>
  );

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>

          <div className="achievement-carousel-div">
            <Slider {...settings}>
              {achievementSection.achievementsCards.map((card, i) => (
                <div key={i}>
                  <AchievementCard
                    isDark={isDark}
                    cardInfo={{
                      title: card.title,
                      description: card.subtitle,
                      image: card.image,
                      imageAlt: card.imageAlt,
                      footer: card.footerLink
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Fade>
  );
}
