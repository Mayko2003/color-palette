import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { Footer, Header } from './modules/layouts';
import { FilterProvider, UserProvider, ColorPalettesProvider, FavProvider } from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <FilterProvider>
                    <ColorPalettesProvider>
                        <FavProvider>
                            <Header />
                            <App />
                        </FavProvider>
                    </ColorPalettesProvider>
                </FilterProvider>
            </UserProvider>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);