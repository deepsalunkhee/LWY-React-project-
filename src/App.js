
import './App.css';
import Basicclasscomponent from './Components/Basicclasscomponent';
import BasicformHandling from './Components/BasicformHandling';
import Basicfunctionalcomponent from './Components/Basicfunctionalcomponent';
import { Basicsprops } from './Components/Basicsprops';
import ConditionalRendering from './Components/ConditionalRendering';
import { Heading } from './Components/Heading';
import { Helloworld } from './Components/Helloworld';
import LifeCycleA from './Components/LifeCycleA';
import { Listrendering } from './Components/Listrendering';
import MethodasapropParent from './Components/Methodasaprop_Parent';
import ParentforPureConomp from './Components/ParentforPureConomp';
import ReactFragments from './Components/ReactFragments';
import Refs from './Components/Refs';
import { Setstate } from './Components/Setstate';
import { State } from './Components/State';

function App() {
  return (
    <div className="App">

      

      <Heading/>
      <p style={{color:"green"}}>NOTE:SOURCE CODE IS AVAILABLE IN GITHUB REPO</p>
      <Helloworld/>
      <Basicfunctionalcomponent/>
      <Basicclasscomponent/>
      <p style={{color:"green"}}>NOTE:HERE ONWORDS I WILLMOSTLY TRY TO USE ARROW FUNCTIONS AS THE ARE MORE FRIENDLY WITH ME😁 </p>
      <Basicsprops   name=" spidy"/>
      <State/>
      <Setstate/>
      <MethodasapropParent/>
      <ConditionalRendering/>
      <Listrendering/>
      <BasicformHandling/>
      <p style={{color:"green"}}>NOTE:At the end of the day the classcomponent provide some of he most important features in react so It is important to understand them as well😋 </p>
      <h3 style={{color:"white"}}>10)Life cycle methods</h3>
      <LifeCycleA/>
      <ReactFragments/>
      <ParentforPureConomp/>
      <Refs/>
      <p style={{color:"green"}}>NOTE:Here we complete some basic concepts in react now lets jump on hooks ..... </p>

    </div>
  );
}

export default App;
