import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa repellendus doloribus, placeat cupiditate, sequi quibusdam delectus fugiat perferendis aut minima non accusantium explicabo dignissimos numquam. Magni illum optio harum."
          />
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa repellendus doloribus, placeat cupiditate, sequi quibusdam delectus fugiat perferendis aut minima non accusantium explicabo dignissimos numquam. Magni illum optio harum."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
