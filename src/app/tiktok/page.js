"use client"

import { CardPost } from "@/components/CardPost";
import styles from './page.module.css';
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get("page")) || 1;
  const [posts, setPosts] = useState([]);

  const limit = 4;
  const totalPages = Math.ceil(posts.length / limit);
  const startIndex = (pageParam - 1) * limit;
  const paginatedPosts = posts.slice(startIndex, startIndex + limit);

  const prevPage = pageParam > 1 ? pageParam - 1 : null;
  const nextPage = pageParam < totalPages ? pageParam + 1 : null;

  useEffect(() => {
    async function fetchAllPosts() {
      const response = await fetch("http://localhost:3042/posts", {
        cache: 'no-store'
      });
      if (!response.ok) {
        console.error("Erro ao buscar posts");
        return;
      }
      const data = await response.json();
      setPosts(data);
    }

    fetchAllPosts();
  }, []);

  return (
    <main className={styles.grid}>
      {paginatedPosts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      <div className={styles.links}>
        {prevPage ? (
          <button onClick={() => router.push(`tiktok/?page=${prevPage}`)} className={styles.link}>
            ← Página anterior
          </button>
        ) : (
          <span className={styles.disabled}>← Página anterior</span>
        )}

        {nextPage ? (
          <button onClick={() => router.push(`tiktok/?page=${nextPage}`)} className={styles.link}>
            Próxima página →
          </button>
        ) : (
          <span className={styles.disabled}>Próxima página →</span>
        )}
      </div>
    </main>
  );
}
