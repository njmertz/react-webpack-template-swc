import '../styles/index.scss';
import Switch from './Switch';

const App = () => {
    return (
        <>
          <section className="hero"></section>
          <main>
            <section>
                <h1>React Webpack Template SWC</h1>
                <p>Hello. Welcome to this React project using Webpack. The example below is a simple component emulating an On/Off switch.</p>
            </section>
            <Switch />
          </main>
        </>
    );
};

export default App;