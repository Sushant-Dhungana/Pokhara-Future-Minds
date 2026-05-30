"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* ── Hook ──────────────────────────────────────────────────────── */
export function useToast() {
  const [toasts, setToasts] = useState([]);
  const counter = useRef(0);

  const add = useCallback(({ message, type = "error", duration = 4000 }) => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, add, remove };
}

/* ── Individual toast ──────────────────────────────────────────── */
function Toast({ toast, onRemove }) {
  const isError   = toast.type === "error";
  const isSuccess = toast.type === "success";
  const isInfo    = toast.type === "info";

  const icon = isSuccess ? "✓" : isError ? "✕" : "ℹ";

  return (
    <div
      className={`toast toast--${toast.type}`}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      <span className="toast-icon" aria-hidden="true">{icon}</span>
      <p className="toast-message">{toast.message}</p>
      <button
        type="button"
        className="toast-close"
        aria-label="Dismiss notification"
        onClick={() => onRemove(toast.id)}
      >
        ×
      </button>
    </div>
  );
}

/* ── Container ─────────────────────────────────────────────────── */
export default function Toaster({ toasts, onRemove }) {
  if (!toasts.length) return null;
  return (
    <div className="toaster" role="region" aria-label="Notifications">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onRemove={onRemove} />
      ))}
    </div>
  );
}
