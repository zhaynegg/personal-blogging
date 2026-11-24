import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("always-something-to-write-about");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <h2></h2>
    </PostLayout>
  );
}
