import PostLayout from "@/components/PostLayout";
import { getPost } from "@/lib/posts";

const post = getPost("creating-my-second-pet-project");

export const metadata = {
  title: post.title,
  description: post.description,
};

export default function PostPage() {
  return (
    <PostLayout post={post}>
      <h2>Going to start</h2>
    </PostLayout>
  );
}
