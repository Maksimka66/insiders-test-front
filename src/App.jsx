import { Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import MainList from './pages/MainList';

import './App.scss';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/todolist' element={<MainList />} />
                {/* <Route path='' element={}/> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

