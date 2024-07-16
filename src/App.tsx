import React from 'react';
import Login from './pages/login/Login';
import './styles/App.scss';
import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigate to='/login' />} />
                <Route path="/login" element={<Login />} />
                <Route>
                    <>
                    </>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
