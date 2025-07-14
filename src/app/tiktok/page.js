"use client";

import CardPost from "../../components/CardPost/index";
import styles from './page.module.css';
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dados from "../../db.json";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(4); // cards por página (default 4)

  // Detecta largura da tela para atualizar limite
  useEffect(() => {
    function updateLimit() {
      if (window.innerWidth <= 480) {
        setLimit(1); // mobile = 1 card por página
      } else {
        setLimit(4); // desktop/tablet = 4 cards por página
      }
    }

    updateLimit();
    window.addEventListener('resize', updateLimit);
    return () => window.removeEventListener('resize', updateLimit);
  }, []);

  // Pega página atual da query
  const pageParam = Number(searchParams.get("page")) || 1;

  // Carrega posts (simulado aqui com dados importados)
  useEffect(() => {
    setPosts(dados.posts);
  }, []);

  // Cálculos para paginação
  const totalPages = Math.ceil(posts.length / limit);
  const startIndex = (pageParam - 1) * limit;
  const paginatedPosts = posts.slice(startIndex, startIndex + limit);

  const prevPage = pageParam > 1 ? pageParam - 1 : null;
  const nextPage = pageParam < totalPages ? pageParam + 1 : null;

  return (
    <main className={styles.grid}>
      {paginatedPosts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}

      <div className={styles.links}>
        {prevPage ? (
          <button onClick={() => router.push(`?page=${prevPage}`)} className={styles.link}>
            ← Página anterior
          </button>
        ) : (
          <span className={styles.disabled}>← Página anterior</span>
        )}

        {nextPage ? (
          <button onClick={() => router.push(`?page=${nextPage}`)} className={styles.link}>
            Próxima página →
          </button>
        ) : (
          <span className={styles.disabled}>Próxima página →</span>
        )}
      </div>
    </main>
  );
}
