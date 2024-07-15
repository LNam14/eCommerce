import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';

const LoadingPage: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Spin size="large" spinning={loading} />
        </div>
    );
};

export default LoadingPage;
