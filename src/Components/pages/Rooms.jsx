import React from 'react'
import Hero from '../Hero'
import Banner from '../Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../RoomsContainer';
const Rooms = () => {
    return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <RoomsContainer/>
    </div>
    )
}

export default Rooms
