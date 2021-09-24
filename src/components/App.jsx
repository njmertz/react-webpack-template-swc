import '../styles/index.scss';
import Recipes from './Recipes';
import samplepng from '../images/sample.png';
import samplesvg from '../images/sample.svg';
const App = () => {
    return (
        <>
          <section className="hero"></section>
          <main>
            <section>
                <h1>React Webpack Template SWC</h1>
            </section>
            <img src={samplepng} alt="sample png file" width="250" />
            <img src={samplesvg} alt="sample svg file" width="250" />
            <Recipes />
          </main>
        </>
    );
};

export default App;