"use client";
import { useEffect, useState } from "react";
import { Container, Post } from "./styles";

type PostType = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
};

const BlogSection = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://www.olivas.digital/wp-json/wp/v2/posts?categories=373"
        );
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <Post key={post.id}>
          <h3>{post.title.rendered}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={post.link}>Leia mais</a>
        </Post>
      ))}
    </Container>
  );
};

export default BlogSection;
