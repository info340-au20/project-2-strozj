import React from 'react';

export function Profile(props) {
    console.log(props.items);
    return (
        <div>
            <section id="main">
                <div className="main-text">
                    Here are your Items Checked out: 
                </div>
            </section>
        </div>
    );  
}