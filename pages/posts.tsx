
import Link from 'next/link';

const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;