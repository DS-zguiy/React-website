import { GenerateNavLinks } from '@/routers/GenerateNavLinks';
import React from 'react';
import { Outlet } from 'react-router';

const RootPage: React.FC = () => {
    const handleClick = () => {
        console.log(1);

    }
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>

                    <input
                        id="q"
                        aria-label="Search contacts"
                        placeholder="Search"
                        type="search"
                        name="q"
                    />
                    <div
                        id="search-spinner"
                        aria-hidden={true}
                        hidden={true}
                    />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>


                    <button onClick={handleClick}>New</button>

                </div>
                <nav>
                    <ul>
                        <GenerateNavLinks />
                    </ul>
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export default RootPage;
