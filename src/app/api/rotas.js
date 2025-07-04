const isServer = typeof window === 'undefined';
const API_URL = isServer ? '' : 'http://localhost:3042';

useEffect(() => {
  if (!isServer) {
    fetch(`${API_URL}/sinais`)
      .then(res => res.json())
      .then(setSinais)
      .catch(err => console.error("Erro ao buscar sinais:", err));
  }
}, []);
