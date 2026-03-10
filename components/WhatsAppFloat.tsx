'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export function WhatsAppFloat() {
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl shadow-2xl p-4 pr-10 max-w-[260px] border border-gray-100 relative"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <p className="text-sm text-gray-800 font-medium">
                            Assalamualaikum! 👋
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                            Ada yang bisa kami bantu tentang paket umroh? Chat kami sekarang!
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href="https://wa.me/6282215871742?text=Assalamualaikum%2C%20saya%20ingin%20bertanya%20tentang%20paket%20umroh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:shadow-[0_0_0_8px_rgba(37,211,102,0.3)] transition-all duration-300"
                style={{ animation: 'wa-pulse 2s infinite' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat WhatsApp"
            >
                {/* Official WhatsApp icon SVG */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 175.216 175.552"
                    className="w-9 h-9"
                >
                    <path
                        fill="#fff"
                        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324a60.95 60.95 0 0 0 31.112 8.481h.028c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.922-43.252 60.72 60.72 0 0 0-43.199-17.885z"
                    />
                    <path
                        fill="#25D366"
                        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324a60.95 60.95 0 0 0 31.112 8.481h.028c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.922-43.252 60.72 60.72 0 0 0-43.199-17.885z"
                    />
                    <path
                        fill="#fff"
                        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043a6.76 6.76 0 0 0-4.894 2.3c-1.682 1.838-6.42 6.269-6.42 15.288 0 8.998 6.573 17.7 7.492 18.923.918 1.224 12.698 20.326 31.344 27.64 15.502 6.076 18.648 4.864 22.022 4.562 3.373-.302 10.878-4.448 12.413-8.74 1.537-4.29 1.537-7.972 1.077-8.74-.459-.765-1.684-1.224-3.52-2.142-1.838-.918-10.878-5.37-12.562-5.982-1.684-.612-2.908-.918-4.137.918s-4.746 5.979-5.818 7.206c-1.071 1.224-2.143.918-3.98.306-1.838-.612-7.833-2.959-14.655-9.166-5.343-4.812-8.886-10.69-9.957-12.527-1.071-1.838-.114-2.835.806-3.752.826-.826 1.838-2.142 2.755-3.214.918-1.071 1.224-1.838 1.836-3.061.612-1.224.306-2.298-.153-3.214-.459-.918-4.028-9.98-5.685-13.633z"
                    />
                </svg>
            </motion.a>
        </div>
    );
}
