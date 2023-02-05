import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header/Header";
import { Post, PostProps } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

interface Post extends PostProps {
  id: number;
}

function App() {
  const posts: Post[] = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/dev-jefferson-souza.png",
        name: "Jefferson Souza",
        role: "Trainee @Neki",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa! 👋" },
        {
          type: "paragraph",
          content:
            " Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat.",
        },
        { type: "link", content: "jefferson.repo/portifolio" },
      ],
      publishedAt: new Date("2023-02-03 08:35:20"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/ggoncalvesdev.png",
        name: "Gabriel Gonçalves",
        role: "Trainee @Neki",
      },
      content: [
        { type: "paragraph", content: "Boa tarde, gente!!" },
        {
          type: "paragraph",
          content:
            "Hoje estou dando início aos meus estudos relacionados a área de cibersegurança.",
        },
        { type: "link", content: "gabriel.repo/ciberseguranca" },
      ],
      publishedAt: new Date("2023-01-18 14:25:11"),
    },
    {
      id: 3,
      author: {
        avatarUrl: "https://github.com/pedrowiskutzki.png",
        name: "Pedro Wiskutzki",
        role: "Trainee @Neki",
      },
      content: [
        { type: "paragraph", content: "Fala galeraa! 👋" },
        {
          type: "paragraph",
          content: " Acabei de subir mais um projeto React, manipulando mapas.",
        },
        { type: "link", content: "pedro.repo/mapas" },
      ],
      publishedAt: new Date("2023-02-01 09:12:20"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
