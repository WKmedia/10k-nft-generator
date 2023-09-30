import React from 'react';
import Header from './compnents/Header';
import ImageUpload from './compnents/ImageUpload';
import LayerManagement from './compnents/LayerManagement';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <ImageUpload />
                <LayerManagement />
            </main>
        </div>
    );
}

export default App;