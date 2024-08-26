import "./App.css";
import { Slider } from "./Components/slider.jsx";
import logo from "./Images/logo.jpg";
// import photo from "./Images/photo.jpg";
import team1 from "./Images/team1.jpg";
import team2 from "./Images/team2.jpg";
import team3 from "./Images/team3.jpg";
import mark from "./Icons/mark.svg";
import implementacja from "./Icons/implementacja.svg";
import analiza from "./Icons/analiza.svg";
import wybor from "./Icons/wybor.svg";

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} alt="nethos-logo" className="nethos-logo" />
      </header>
      <div className="Hero-section">
        <p>
          Masz wiele obaw związanych z nadchodzącym wdrożeniem systemów IT w
          Twojej firmie? Z naszym doświadczonym zespołem konsultantów możesz
          mieć pewność, że Twój projekt będzie realizowany sprawnie i
          efektywnie!
        </p>
        <div className="office"></div>
      </div>
      <div className="Products-section">
        <h1>Usługi konsultacyjne Nethos</h1>
        <div className="column-container">
          <div className="column">
            <img src={analiza} alt="mark" className="icon" />
            <h4>Analiza potrzeb biznesowych</h4>
            <p className="description-of-services">pomagamy zdefiniować cele i wymagania Twojego projektu</p>
          </div>
          <div className="column">
            <img src={mark} alt="mark" className="icon" />
            <h4>Wybór optymalnych rozwiązań</h4>
            <p className="description-of-services">
              doradzamy w wyborze najlepszych rozwiązań IT dla Twojej
              organizacji, biorąc pod uwagę zarówno aspekty techniczne, jak i
              biznesowe
            </p>
          </div>
          <div className="column">
            <img src={wybor} alt="mark" className="icon" />
            <h4>Planowanie projektu</h4>
            <p className="description-of-services">
              opracowujemy szczegółowy plan wdrażania, uwzględniając
              harmonogram, budżet oraz zasoby niezbędne do realizacji projektu
            </p>
          </div>
          <div className="column">
            <img src={implementacja} alt="mark" className="icon" />
            <h4>Wsparcie implementacyjne</h4>
            <p className="description-of-services">
              pomagamy w skutecznej implementacji nowych rozwiązań, zapewniając
              ciągłość działania Twoich systemów i minimalizując ewentualne
              przestoje
            </p>
          </div>
        </div>
      </div>
      <div className="Why-Nethos-section">
        <div className="list">
        <div className="title-with-button">
        <h1>Dlaczego wybrać Nethos?</h1>
        <button className="button">NAPISZ DO NAS</button>
          </div>
         
          <ul>
            <li>Doświadczony zespół specjalistów</li>
            <li>Indywidualne podejście</li>
            <li>Nowoczesne technologie</li>
            <li>Bezpieczeństwo danych</li>
          </ul>
        </div>
       
      </div>
      <div className="About-us-section">
        <h1>O nas</h1>
        <p className="about-nethos">
        Nethos to wiodąca firma konsultingowa specjalizująca się w dostarczaniu innowacyjnych rozwiązań IT dla przedsiębiorstw w całej Polsce. Nasza misja polega na wspieraniu klientów w optymalizacji procesów biznesowych poprzez zaawansowane technologie informacyjne oraz doradztwo strategiczne. W Nethos stawiamy na partnerstwo i długotrwałe relacje z klientami. Nasz zespół składa się z doświadczonych konsultantów, inżynierów i specjalistów, którzy są pasjonatami technologii. Dzięki naszym innowacyjnym podejściom oraz indywidualnemu traktowaniu każdego projektu, osiągamy wysoką jakość usług oraz satysfakcję naszych klientów.
        </p>
        <div className="team-container">
          <div className="member-of-team">
            <img src={team2} alt="photo-of-member" />
            <h3>Magdalena Raszczyk</h3>
            <p className="position">Specjalistka ds. Zarządzania Projektami</p>
            <p className="description-of-member">
            Odpowiedzialna za koordynację projektów konsultingowych, w tym planowanie, wdrażanie i nadzorowanie ich przebiegu. Zajmuje się również budżetowaniem projektów oraz komunikacją z klientami - to Magda zaopiekuje się Twoją firmą na wstępnym etapie wpółpracy.
            </p>
          </div>
          <div className="member-of-team">
            <img src={team1} alt="photo-of-member" />
            <h3>Paweł Michalski</h3>
            <p className="position">Analityk Rynkowy</p>
            <p className="description-of-member">
            Zajmuje się analizą trendów rynkowych i konkurencji, co wspiera tworzenie strategii konsultingowych dla klientów. Przygotowuje dane oraz raporty z analiz, które pomagają w podejmowaniu strategicznych decyzji. Dzięki Pawłowi zostaną zidentyfikowane nowe możliwości rynkowe dla Twojej firmy oraz zagrożenia, które mogą wpływać na projekty. 
            </p>
          </div>
          <div className="member-of-team">
            <img src={team3} alt="photo-of-member" />
            <h3>Karolina Wiśniewska</h3>
            <p className="position">Konsultantka ds. Strategii</p>
            <p className="description-of-member">
           Specjalizuje się w opracowywaniu strategii rozwoju dla klientów. Analizuje ich potrzeby oraz trendy w branży, aby tworzyć spersonalizowane plany działania. Prowadzi warsztaty i sesje doradcze, które pomagają klientom w podejmowaniu kluczowych decyzji. Magda będzie również zaangażowana w monitorowanie wyników wdrożonych strategii w Twojej firmie i proponowanie modyfikacji. 
            </p>
          </div>
        </div>
      </div>
      <div className="Satisfied-clients-section">
        <div className="title-with-button">

        <h1>Poznaj zadowolonych klientów Nethos!</h1>
          <button className="button">DOŁĄCZ DO NICH JUŻ DZIŚ</button>
        </div>
        <div>

          <p className="description">
            Juz od 9 lat pomagamy naszym klientom sprostać oczekiwaniom stale zmieniającego rynku poprzez wdrażanie adekwatnych systemów informatycznych. Wspólnie z naszymi klientami zrealizowaliśmy do tej pory ponad 50 projektów. 
          
          </p>
        
        </div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
