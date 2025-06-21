import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        const Layout = route.layout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

                        return <Route key={index} path={route.path} element={Layout(<Page />)}></Route>;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
