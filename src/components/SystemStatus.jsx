import { useState, useEffect } from 'react';
import { FaCircle } from 'react-icons/fa';

const SystemStatus = () => {
    const [latency, setLatency] = useState(24);
    const [blockNumber, setBlockNumber] = useState(18452930);

    useEffect(() => {
        const interval = setInterval(() => {
            setLatency(prev => Math.max(10, prev + (Math.random() * 10 - 5)));
            setBlockNumber(prev => prev + (Math.random() > 0.8 ? 1 : 0));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-0 left-0 w-full bg-black/90 border-t border-white/5 py-1 px-4 text-xs font-mono text-muted flex justify-between items-center z-40 backdrop-blur-sm">
            <div className="flex gap-6">
                <div className="flex items-center gap-2">
                    <FaCircle className="text-green-500 text-[8px] animate-pulse" />
                    <span>SYSTEM ONLINE</span>
                </div>
                <div className="hidden md:block">
                    LATENCY: <span className="text-primary">{Math.round(latency)}ms</span>
                </div>
                <div className="hidden md:block">
                    MAINNET BLOCK: <span className="text-secondary">#{blockNumber}</span>
                </div>
            </div>
            <div>
                v2.0.4-beta
            </div>
        </div>
    );
};

export default SystemStatus;
