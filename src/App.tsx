import './styles/App.scss';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from 'react-router-dom';
import Layout from './components/shared/Layout';
import Login from './pages/login/Login';
import List from './pages/users/List';
import Details from './pages/users/Details';
import NotFound from './components/NotFound';

export default function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Navigate to='/login' />} />
                    <Route path='/login' element={<Login />} />
                    <Route path="/" element={<Layout />}>
                        <Route path='/users' element={<List />} />
                        <Route path='/users/:id' element={<Details />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>

            </Router>
        </div>
    );
};