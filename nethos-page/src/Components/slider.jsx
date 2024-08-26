import "./LogosSlider.css";
import allegro from "../Images/allegro.png";
import grycan from "../Images/grycan.png";
import legimi from "../Images/legimi.png";
import lisek from "../Images/lisek.png";
import lubimyczytac from "../Images/lubimyczytac.png";
import modivo from "../Images/modivo.png";
import rossmann from "../Images/rossmann.png";

export const Slider = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  const logos = [
    { id: 1, src: allegro, alt: "allegro 1" },
    { id: 2, src: rossmann, alt: "allegro 2" },
    { id: 3, src: grycan, alt: "allegro 3" },
    { id: 4, src: legimi, alt: "allegro 4" },
    { id: 5, src: lisek, alt: "allegro 5" },
    { id: 6, src: lubimyczytac, alt: "allegro 6" },
    { id: 7, src: modivo, alt: "allegro 7" },
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slider-content">
          {logos.map((logo) => (
            <div key={logo.id} className="logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="logo" />
            </div>
          ))}
          {logos.map((logo) => (
            <div key={logo.id} className="logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
