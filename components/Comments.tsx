"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="zhaynegg/personal-blogging"
      repoId="R_kgDOTA7ntQ"
      category="Announcements"
      categoryId="DIC_kwDOTA7ntc4DCJ4M"
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}
