import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTerminal, FaTimes, FaMinus } from 'react-icons/fa';

const commands = {
    help: "Available commands: help, about, skills, projects, clear, whoami",
    about: "I am a Full Stack Web3 Developer passionate about decentralization.",
    skills: "React, Solidity, Node.js, TypeScript, Ethers.js, GraphQL",
    projects: "Check out the 'Work' page for a full list of my projects!",
    whoami: "root@web3-portfolio",
    clear: "clear"
};

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to Web3 Terminal v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history]);

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase();

            if (cmd === 'clear') {
                setHistory([]);
            } else {
                const output = commands[cmd] || `Command not found: ${cmd}. Type "help" for assistance.`;
                setHistory([
                    ...history,
                    { type: 'input', content: input },
                    { type: 'output', content: output }
                ]);
            }
            setInput('');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-20 right-4 md:right-10 w-[90vw] md:w-[600px] h-[400px] glass rounded-lg overflow-hidden shadow-2xl z-50 border border-white/10 flex flex-col font-mono text-sm"
        >
            {/* Header */}
            <div className="bg-white/5 p-2 flex justify-between items-center border-b border-white/10 cursor-move">
                <div className="flex items-center gap-2 text-muted">
                    <FaTerminal />
                    <span>guest@portfolio:~</span>
                </div>
                <div className="flex gap-2">
                    <button onClick={onClose} className="p-1 hover:text-white text-muted transition-colors"><FaMinus /></button>
                    <button onClick={onClose} className="p-1 hover:text-red-500 text-muted transition-colors"><FaTimes /></button>
                </div>
            </div>

            {/* Body */}
            <div
                className="flex-1 p-4 overflow-y-auto bg-black/80 text-green-400"
                onClick={() => inputRef.current?.focus()}
            >
                {history.map((line, i) => (
                    <div key={i} className="mb-1">
                        {line.type === 'input' ? (
                            <div className="flex gap-2 text-white">
                                <span className="text-primary">➜</span>
                                <span>{line.content}</span>
                            </div>
                        ) : (
                            <div className="opacity-80">{line.content}</div>
                        )}
                    </div>
                ))}

                <div className="flex gap-2 items-center mt-2">
                    <span className="text-primary">➜</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none flex-1 text-white"
                        autoFocus
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </motion.div>
    );
};

export default Terminal;
