import React from 'react';

const Section = ({ children, className = '', id = '' }) => {
    return (
        <section id={id} className={`py-12 md:py-20 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default Section;
