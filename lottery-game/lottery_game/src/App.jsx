
import './App.css';
import Lottery from './Lottery';
import Ticket from './Ticket';

function App() {
  

  return (
    <>
    {/* ticket size is 3 and win lottery sum is 15 */}
      <Lottery n={3} winningSum={15}/>
      
    </>
  );
}

export default App;
