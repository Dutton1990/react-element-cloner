import './App.css';
import { Breakfast } from './components/Breakfast';
import { Food } from './components/Food';
import { ToggleInputs} from './components/ToggleInputs'

function App() {
  return (
    <>
      <Breakfast overwrite="vegan sauages">
        <Food foodName="toast" />
        <Food foodName="mushrooms" />
      </Breakfast>
      <ToggleInputs>
        <input type="text" placeholder="tell me a joke!" />
        <select name="type" id="joke-type">
          <option>funny</option>
          <option>hilarious</option>
        </select>
      </ToggleInputs>
    </>
  );
}

export default App;
