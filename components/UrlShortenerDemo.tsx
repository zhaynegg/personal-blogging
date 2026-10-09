"use client";

import { useState } from "react";
import ProjectPreview from "./ProjectPreview";
import styles from "./UrlShortenerDemo.module.css";

const LONG_URL =
  "https://example.com/posts/creating-my-second-pet-project?from=projects&preview=shadow-path";
const SHORT_URL = "gettinyurl.my/shade";

export default function UrlShortenerDemo() {
  const [isShortened, setIsShortened] = useState(false);

  function togglePreview() {
    setIsShortened((current) => !current);
  }

  return (
    <ProjectPreview
      address="gettinyurl.my"
      title="A long link, a little shorter."
      instruction="Click the link to see it shrink."
      status={
        isShortened ? (
          <>
            <span className={styles.visuallyHidden}>
              Sample shortened to {SHORT_URL}. {" "}
            </span>
            <span>{LONG_URL.length} → {SHORT_URL.length} characters</span>
          </>
        ) : (
          "Sample link · click to shorten"
        )
      }
      actionLabel={isShortened ? "Try again" : "Shorten link"}
      actionSymbol={isShortened ? "↺" : "→"}
      onAction={togglePreview}
    >
      <button
        type="button"
        className={`${styles.linkSurface} ${isShortened ? styles.shortened : ""}`}
        onClick={togglePreview}
        aria-label={
          isShortened
            ? "Reset the sample URL"
            : `Shorten this sample URL: ${LONG_URL}`
        }
      >
        <span className={styles.linkLabel} aria-hidden="true">
          {isShortened ? "Short link" : "Long link"}
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {isShortened ? (
              <path d="m5 10 3 3 7-7" />
            ) : (
              <>
                <path d="M8.5 12.5 12.5 8.5" />
                <path d="m7 8-2 2a3.5 3.5 0 0 0 5 5l2-2M13 12l2-2a3.5 3.5 0 0 0-5-5L8 7" />
              </>
            )}
          </svg>
        </span>
        <span
          key={isShortened ? "short" : "long"}
          className={styles.url}
          aria-hidden="true"
        >
          {isShortened ? SHORT_URL : LONG_URL}
        </span>
      </button>
    </ProjectPreview>
  );
}
