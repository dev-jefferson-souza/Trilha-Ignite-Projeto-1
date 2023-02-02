import styles from "./App.module.css";
import "./global.css";

import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./Post";

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa repellendus doloribus, placeat cupiditate, sequi quibusdam delectus fugiat perferendis aut minima non accusantium explicabo dignissimos numquam. Magni illum optio harum.
"
          />
        </main>
      </div>
    </div>
  );
}

export default App;
