import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Lock, Eye, EyeOff } from 'lucide-react';
import { useAdmin } from './AdminContext';

const CORRECT_PIN = '1234'; // Change this to your preferred PIN

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const { enterEditorMode } = useAdmin();
  const [pin, setPin] = useState('');
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');
  const [step, setStep] = useState<'confirm' | 'pin'>('confirm');

  const handleConfirm = () => setStep('pin');

  const handlePinSubmit = () => {
    if (pin === CORRECT_PIN) {
      enterEditorMode();
      onClose();
      setPin('');
      setStep('confirm');
      setError('');
    } else {
      setError('Incorrect PIN. Try again.');
      setPin('');
    }
  };

  const handleClose = () => {
    onClose();
    setPin('');
    setStep('confirm');
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#030712] border-l border-slate-800 z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-[#9b87f5]" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Owner Access</p>
                  <p className="text-slate-500 text-xs">Portfolio Editor</p>
                </div>
              </div>
              <button onClick={handleClose} className="text-slate-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col justify-center p-10">
              <AnimatePresence mode="wait">
                {step === 'confirm' ? (
                  <motion.div
                    key="confirm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#9b87f5]/30 to-[#9b87f5]/5 flex items-center justify-center mx-auto mb-8 ring-2 ring-[#9b87f5]/30">
                      <ShieldCheck size={36} className="text-[#9b87f5]" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-3">Hey, Jeremiah 👋</h2>
                    <p className="text-slate-400 leading-relaxed mb-10">
                      Want to switch to <span className="text-[#9b87f5] font-semibold">Editor Mode</span>? You'll be able to add, edit, and remove sections and images.
                    </p>
                    <div className="space-y-3">
                      <button
                        onClick={handleConfirm}
                        className="w-full py-4 px-6 rounded-2xl bg-[#9b87f5] text-white font-bold hover:bg-[#8570e6] transition-all duration-300 hover:-translate-y-0.5"
                      >
                        Yes, Enter Editor Mode
                      </button>
                      <button
                        onClick={handleClose}
                        className="w-full py-4 px-6 rounded-2xl bg-slate-800/50 text-slate-400 font-medium hover:text-white hover:bg-slate-800 transition-all"
                      >
                        No, Cancel
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pin"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/5 flex items-center justify-center mx-auto mb-8 ring-2 ring-amber-500/30">
                      <Lock size={36} className="text-amber-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Enter PIN</h2>
                    <p className="text-slate-400 text-sm mb-8">Enter your 4-digit access PIN to continue.</p>

                    <div className="relative mb-4">
                      <input
                        type={showPin ? 'text' : 'password'}
                        value={pin}
                        onChange={e => { setPin(e.target.value.slice(0, 4)); setError(''); }}
                        onKeyDown={e => e.key === 'Enter' && handlePinSubmit()}
                        placeholder="••••"
                        maxLength={4}
                        className="w-full py-4 px-6 pr-14 rounded-2xl bg-slate-800/80 border border-slate-700 text-white text-center text-2xl tracking-[1rem] font-mono placeholder:text-slate-600 focus:outline-none focus:border-[#9b87f5] transition-colors"
                        autoFocus
                      />
                      <button
                        onClick={() => setShowPin(!showPin)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-colors"
                      >
                        {showPin ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>

                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-rose-400 text-sm mb-4"
                      >
                        {error}
                      </motion.p>
                    )}

                    <div className="space-y-3">
                      <button
                        onClick={handlePinSubmit}
                        disabled={pin.length !== 4}
                        className="w-full py-4 px-6 rounded-2xl bg-[#9b87f5] text-white font-bold hover:bg-[#8570e6] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 disabled:translate-y-0"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setStep('confirm')}
                        className="w-full py-3 px-6 rounded-2xl text-slate-500 font-medium hover:text-white transition-colors text-sm"
                      >
                        ← Back
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-800">
              <p className="text-center text-slate-600 text-xs">
                This panel is exclusively for Jeremiah Ragay.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Hook for the 10-tap trigger logic
export function useFooterTap(onTrigger: () => void) {
  const tapCount = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTap = useCallback(() => {
    tapCount.current += 1;

    if (tapTimer.current) clearTimeout(tapTimer.current);
    tapTimer.current = setTimeout(() => {
      tapCount.current = 0;
    }, 2000);

    if (tapCount.current >= 10) {
      tapCount.current = 0;
      if (tapTimer.current) clearTimeout(tapTimer.current);
      onTrigger();
    }
  }, [onTrigger]);

  return handleTap;
}
