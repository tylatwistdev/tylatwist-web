import React from 'react';
import './SkeletonLoader.css'; // Optional: for additional styling

const SkeletonLoader = () => {
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className="container-fluid my-5">
            <h2 className="text-center mb-4">Loading...</h2>
            <div className="row">
                {
                    items.map((item) => (
                        <div key={item} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="skeleton-image"></div>
                                <div className="card-body">
                                    <div className="skeleton-title"></div>
                                    <div className="skeleton-text"></div>
                                    <div className="skeleton-button"></div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SkeletonLoader;
