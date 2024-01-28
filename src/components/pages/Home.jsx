import React from 'react';

function Home() {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Welcome to Our Website!</h1>
            <p style={styles.paragraph}>
                This is the home page of our exciting React application. Here, you can find
                information about our latest features, news, and updates. We hope you enjoy
                your visit!
            </p>
            {/* You can add more content here such as images, links, etc. */}
        </div>
    );
}

// Example inline styles
const styles = {
    container: {
        textAlign: 'center',
        margin: '50px',
        padding: '20px',
    },
    header: {
        color: '#333',
        fontSize: '2em',
    },
    paragraph: {
        color: '#666',
        fontSize: '1em',
    },
};

export default Home;
