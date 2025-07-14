"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dados from "../../db.json";
import CardPost from "../../components/CardPost";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    function updateLimit() {
      if (window.innerWidth <= 480) {
        setLimit(1);
      } else {
        setLimit(4);
      }
    }

    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const pageParam = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    setPosts(dados.posts);
  }, []);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / limit);
  const startIndex = (pageParam - 1) * limit;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + limit);

  const prevPage = pageParam > 1 ? pageParam - 1 : null;
  const nextPage = pageParam < totalPages ? pageParam + 1 : null;

  return (
    <>
      <section className={styles.searchSection}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            router.push("?page=1");
          }}
          className={styles.searchInput}
        />
      </section>

      <main className={styles.grid}>
        {paginatedPosts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}

        <div className={styles.links}>
          {prevPage ? (
            <button
              onClick={() => router.push(`?page=${prevPage}`)}
              className={styles.link}
            >
              ← Página anterior
            </button>
          ) : (
            <span className={styles.disabled}>← Página anterior</span>
          )}

          {nextPage ? (
            <button
              onClick={() => router.push(`?page=${nextPage}`)}
              className={styles.link}
            >
              Próxima página →
            </button>
          ) : (
            <span className={styles.disabled}>Próxima página →</span>
          )}
        </div>
      </main>
    </>
  );
}
