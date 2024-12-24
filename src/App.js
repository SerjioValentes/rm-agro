import HomePage from "./pages/HomePage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
function App() {
  return (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
    <div className="App">

      <HomePage />
    </div>
    </LocalizationProvider>
  );
}

export default App;
