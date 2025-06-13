import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Section2 from './section2'
import Section3 from './Section3'
import HomePageProperties from './HomePageProperties'
// import { properties } from '../assets/Data'
import axios from 'axios';

function Home() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/property`);
                setProperties(response.data);
            } catch (err) {
                setError('Failed to load properties.');
            } finally {
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    return (
        <>
            <Hero />
            <Section2 />
            <HomePageProperties properties={properties.slice(0, 6)} loading={loading} error={error} />
            <Section3 />
        </>
    )
}

export default Home