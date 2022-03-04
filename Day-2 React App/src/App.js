
import './App.css';
import {Mobile} from './components/Mobile'

const OS = ["Apple", "BlackBerry", "iPhone", "Windows Phone"]
const head1 = "Mobile Operating Systems"

const company = ["Samsung", "HTC", "Micromax", "Apple"]
const head2 = "Mobile Manufacturers"
function App() {
  return (
   <>
     <Mobile head = {head1} Os = {OS}/>
     <Mobile head = {head2} Os = {company}/>
   </>
  );
}

export default App;
