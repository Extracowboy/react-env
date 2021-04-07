import React from "react";

function HomePage() {
    return (
        <>
            <h1>Hey there.</h1>
            <div>Today is {new Date().toLocaleDateString()}</div>
        </>
    );
}

export default HomePage;
