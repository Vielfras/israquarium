import './App.css';
import AuthProvider from './context/AuthContext';
import ToastsProvider from './context/ToastsContext';
import './i18n';

// import ServerTest from './layouts/ServerTest/ServerTest';
import Default from './layouts/Default/Default';


function App() {
  return (

    <div className='App'>
      <AuthProvider>
        <ToastsProvider>
          {/* <ServerTest />; */}
          <Default />
        </ToastsProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
