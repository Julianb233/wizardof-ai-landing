"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Check, AlertCircle, Sparkles } from "lucide-react";

interface DownloadButtonProps {
  templateId: string;
  templateName: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}

type DownloadState = 'idle' | 'downloading' | 'success' | 'error';

export function DownloadButton({
  templateId,
  templateName,
  className = '',
  variant = 'primary'
}: DownloadButtonProps) {
  const [state, setState] = useState<DownloadState>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleDownload = async () => {
    setState('downloading');
    setErrorMessage('');

    try {
      const response = await fetch(`/api/templates/${templateId}/download`);

      if (!response.ok) {
        throw new Error(`Failed to download: ${response.statusText}`);
      }

      // Get the blob data
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create download link and trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${templateId}-workflow.json`;
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Show success state
      setState('success');

      // Reset to idle after 3 seconds
      setTimeout(() => {
        setState('idle');
      }, 3000);

    } catch (error) {
      console.error('Download error:', error);
      setState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Download failed');

      // Reset to idle after 5 seconds
      setTimeout(() => {
        setState('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  const variants = {
    primary: {
      base: "bg-gradient-to-r from-cosmic-cyan to-nebula-purple text-white",
      hover: "hover:from-cosmic-cyan/90 hover:to-nebula-purple/90",
      shadow: "0 0 30px rgba(34, 211, 238, 0.3)"
    },
    secondary: {
      base: "glass-cosmic text-white border border-white/20",
      hover: "hover:border-white/40",
      shadow: "0 0 20px rgba(255, 255, 255, 0.1)"
    }
  };

  const buttonVariant = variants[variant];

  return (
    <div className={`relative ${className}`}>
      <motion.button
        onClick={handleDownload}
        disabled={state === 'downloading' || state === 'success'}
        className={`
          relative overflow-hidden
          inline-flex items-center justify-center gap-3
          px-8 py-4 rounded-xl font-semibold text-lg
          ${buttonVariant.base}
          ${buttonVariant.hover}
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          min-w-[220px]
        `}
        style={{
          boxShadow: state === 'idle' ? buttonVariant.shadow : 'none'
        }}
        whileHover={state === 'idle' ? { scale: 1.05 } : {}}
        whileTap={state === 'idle' ? { scale: 0.95 } : {}}
      >
        {/* Background shimmer effect */}
        <AnimatePresence mode="wait">
          {state === 'downloading' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              exit={{ opacity: 0 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear'
              }}
            />
          )}
        </AnimatePresence>

        {/* Button content */}
        <AnimatePresence mode="wait">
          {state === 'idle' && (
            <motion.div
              key="idle"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <Download className="w-5 h-5" />
              <span>Download Template</span>
            </motion.div>
          )}

          {state === 'downloading' && (
            <motion.div
              key="downloading"
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'linear'
                }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <span>Preparing Download...</span>
            </motion.div>
          )}

          {state === 'success' && (
            <motion.div
              key="success"
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 10
                }}
              >
                <Check className="w-5 h-5" />
              </motion.div>
              <span>Downloaded!</span>
            </motion.div>
          )}

          {state === 'error' && (
            <motion.div
              key="error"
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <AlertCircle className="w-5 h-5" />
              <span>Download Failed</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cosmic particles effect on success */}
        <AnimatePresence>
          {state === 'success' && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-white"
                  initial={{
                    x: '50%',
                    y: '50%',
                    opacity: 1
                  }}
                  animate={{
                    x: `${50 + Math.cos(i * 45 * Math.PI / 180) * 100}%`,
                    y: `${50 + Math.sin(i * 45 * Math.PI / 180) * 100}%`,
                    opacity: 0
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut'
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Error message tooltip */}
      <AnimatePresence>
        {state === 'error' && errorMessage && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 p-3 rounded-lg glass-cosmic border border-red-500/30 text-sm text-red-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>{errorMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success notification */}
      <AnimatePresence>
        {state === 'success' && (
          <motion.div
            className="absolute top-full left-0 right-0 mt-2 p-3 rounded-lg glass-cosmic border border-green-500/30 text-sm text-green-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold mb-1">Template Ready to Use!</p>
                <p className="text-xs text-text-secondary">
                  Import {templateId}-workflow.json into your AI orchestration system
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Compact version for use in cards or lists
export function DownloadButtonCompact({
  templateId,
  templateName,
  className = ''
}: DownloadButtonProps) {
  const [state, setState] = useState<DownloadState>('idle');

  const handleDownload = async () => {
    setState('downloading');

    try {
      const response = await fetch(`/api/templates/${templateId}/download`);

      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `${templateId}-workflow.json`;
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      setState('success');
      setTimeout(() => setState('idle'), 2000);

    } catch (error) {
      setState('error');
      setTimeout(() => setState('idle'), 2000);
    }
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={state === 'downloading'}
      className={`
        relative inline-flex items-center gap-2
        px-4 py-2 rounded-lg
        glass-cosmic border border-white/10
        text-sm font-medium text-white
        hover:border-cosmic-cyan/50
        transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      whileHover={state === 'idle' ? { scale: 1.05 } : {}}
      whileTap={state === 'idle' ? { scale: 0.95 } : {}}
    >
      <AnimatePresence mode="wait">
        {state === 'idle' && (
          <motion.div
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Download className="w-4 h-4" />
          </motion.div>
        )}

        {state === 'downloading' && (
          <motion.div
            key="downloading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, rotate: 360 }}
            exit={{ opacity: 0 }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 1,
                ease: 'linear'
              }
            }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        )}

        {state === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Check className="w-4 h-4" />
          </motion.div>
        )}

        {state === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AlertCircle className="w-4 h-4" />
          </motion.div>
        )}
      </AnimatePresence>

      <span>
        {state === 'idle' && 'Download'}
        {state === 'downloading' && 'Downloading...'}
        {state === 'success' && 'Done!'}
        {state === 'error' && 'Failed'}
      </span>
    </motion.button>
  );
}
