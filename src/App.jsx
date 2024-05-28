import RecipePage from "./components/RecipePage";
import FrontendMentorAttributionFooter from "./components/FrontendMentorAttributionFooter.jsx";
import styles from "./App.module.css"
function App() {

  return (
    <div className={styles["App"]}>
      <main>
        <RecipePage />
      </main>

      <FrontendMentorAttributionFooter name="takinabradley" socialMediaLink="https://github.com/takinabradley"/>
    </div>
  );
}

export default App;
