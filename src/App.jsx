import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Styling from './unit2/Styling';
import Hooks from './Hooks/Hooks';
import CBack from './Hooks/CallBack';
import Memo from './Hooks/Memo';
import Memo2 from './Hooks/Memo2';
import RenderCount from './Hooks/RenderCount';
import Ref from './Hooks/Ref';
import Reducer from './Hooks/Reducer';
import HomeContext from './context/HomeContext';
import UseEffect from './Hooks/UseEffect.jsx';
import Details from './unit5/Details.jsx';
import HomeRedux from './Redux/HomeRedux.jsx';
import { Provider } from 'react-redux';
import store from './Redux/store.js';
function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          {/* Wrap the routes that need access to context inside ContextProvider */}
            <Route path="/" element={<HomeContext />} />
          <Route path="/styling" element={<Styling />} />
         
          <Route path="/hooks" element={<Hooks />}>
            <Route path="callback" element={<CBack />} />
            <Route path="memo" element={<Memo />} />
            <Route path="memo2" element={<Memo2 />} />
            <Route path="rendercount" element={<RenderCount />} />
            <Route path="ref" element={<Ref />} />
            <Route path="reducer" element={<Reducer />} />
            <Route path="useeffect" element={<UseEffect />} />
          </Route>
          <Route path="/HomeContext" element={<HomeContext/>}/>
          <Route path='/details/:id' element={<Details/>}/>
          <Route path="/HomeRedux" element={<HomeRedux/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  );
}

export default App;
