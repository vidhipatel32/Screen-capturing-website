import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Webcam from './Webcam';

const Router = () => (
    <Routes>
        <Route path="/" element={<Webcam />} />

    </Routes>
);

export default Router;
