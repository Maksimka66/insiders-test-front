import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import MainList from './pages/MainList';
import { selectIsRegistered } from './store/auth/authSlice';

import './App.scss';

function App() {
    const isUserRegistered = useSelector(selectIsRegistered);

    return (
        <>
            <Routes>
                <Route path='/' element={isUserRegistered ? <MainList /> : <SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/todolist' element={<MainList />} />
                {/* <Route path='' element={}/> */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

