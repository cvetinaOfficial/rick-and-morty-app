import Navbar from '../components/nav/Nav';
import MainContent from './main/MainContent';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../pages/home/Home';
import Actors from '../pages/actors/Actors';
import Episodes from '../pages/episodes/Episodes';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home></Home>
    },
    {
        path: '/actors',
        main: () => <Actors></Actors>
    },
    {
        path: '/episodes',
        main: () => <Episodes></Episodes>
    },
]

const getRoutes = () => {
    return routes.map((route, index) => {
       return <Route key={index} 
        exact={route.exact}
         path={route.path}>
        {route.main}
         </Route>
    });
}

function Layout(){
    return <>
    <div className="container">
            <Navbar />
            <MainContent />
            <Switch>
                {getRoutes()}
            </Switch>
    </div>
    </>
}

export default Layout;