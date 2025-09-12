import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { adminRoutes, privateRoutes, publicRoutes } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout';
import AdminLayout from './Layout/AdminLayout/AdminLayout';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { UserProvider } from './contexts/UserContext';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function App() {
    return (
        <PayPalScriptProvider
            options={{
                'client-id': 'Afxkq5sgwCLxJxLjY4586dzfu5qERm1LM3JKQky5CZYJ1pU5DEAVXKlLYyWFOZAcu_yqWnmdhUDOgZZ0',
            }}
        >
            <UserProvider>
                <Router>
                    <div className="App">
                        <ScrollToTop />
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                const Layout = route.layout || ((page) => <DefaultLayout>{page}</DefaultLayout>);

                                return <Route key={index} path={route.path} element={Layout(<Page />)}></Route>;
                            })}
                            {privateRoutes.map((route, index) => {
                                const Page = route.component;
                                const Layout = route.layout || ((page) => <DefaultLayout>{page}</DefaultLayout>);
                                return <Route key={index} path={route.path} element={Layout(<Page />)}></Route>;
                            })}
                            {adminRoutes.map((route, index) => {
                                const Page = route.component;
                                const Layout = route.layout || ((page) => <AdminLayout>{page}</AdminLayout>);

                                return <Route key={index} path={route.path} element={Layout(<Page />)}></Route>;
                            })}
                        </Routes>
                    </div>
                </Router>
            </UserProvider>
        </PayPalScriptProvider>
    );
}

export default App;
