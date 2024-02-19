import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ScreenRecord from './ScreenRecording';

const Router = () => (
    <Routes>
        <Route path="/" element={<ScreenRecord />} />

    </Routes>
);

export default Router;
