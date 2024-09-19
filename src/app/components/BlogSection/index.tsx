"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Container, ContainerContent, Button } from "./styles";
import CardNews from "../CardNews";

type PostType = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
  featured_media: string;
  yoast_head_json: { og_image: { url: string }[] };
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
      <h1
        style={{
          textAlign: "center",
          color: "#5D5D5D",
          fontSize: "45px",
          fontWeight: "500",
          lineHeight: "54px",
        }}
      >
        Últimas do <span style={{ color: "#841E7F" }}>Blog</span>
      </h1>
      <ContainerContent>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            320: { slidesPerView: 1 },
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <CardNews
                image={post.yoast_head_json.og_image[0]?.url}
                title={post.title.rendered}
                description={post.excerpt.rendered}
                link={post.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerContent>
      <Button>Veja mais</Button>
    </Container>
  );
};

export default BlogSection;
