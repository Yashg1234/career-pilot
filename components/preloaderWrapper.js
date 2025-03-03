"use client";

import { useState } from "react";
import Preloader from "./preloader"

const PreloaderWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    return loading ? <Preloader setLoading={setLoading} /> : children;
};

export default PreloaderWrapper;
