

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomeScreen from './screens/home-screen/home-screen.component';

import './App.styles.scss';


const App = () => {

    return (

        <Router>
        
            <div className="app">

                <Header />

                <main className="app--main">

                    <Switch>

                        <Route
                            exact
                            path='/'
                            component={ HomeScreen }
                        />

                    </Switch>

                </main>

                <Footer />

            </div>

        </Router>

    );

} // end of App


export default App;

