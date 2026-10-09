"use client";

import type { ReactNode } from "react";
import styles from "./ProjectPreview.module.css";

type ProjectPreviewProps = {
  address: string;
  title: string;
  instruction: string;
  children: ReactNode;
  status: ReactNode;
  actionLabel: string;
  actionSymbol: string;
  onAction: () => void;
};

export default function ProjectPreview({
  address,
  title,
  instruction,
  children,
  status,
  actionLabel,
  actionSymbol,
  onAction,
}: ProjectPreviewProps) {
  return (
    <div className={styles.preview}>
      <div className={styles.chrome}>
        <span className={styles.windowDots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.address}>{address}</span>
        <span className={styles.previewLabel}>Interactive preview</span>
      </div>

      <div className={styles.body}>
        <p className={styles.title}>{title}</p>
        <p className={styles.instruction}>{instruction}</p>
        <div className={styles.canvas}>{children}</div>
        <div className={styles.footer}>
          <p className={styles.status} role="status" aria-atomic="true">
            {status}
          </p>
          <button
            type="button"
            className={styles.actionButton}
            onClick={onAction}
          >
            {actionLabel}
            <span aria-hidden="true">{actionSymbol}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
