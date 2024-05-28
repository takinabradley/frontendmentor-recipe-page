import omeletteImg from "../assets/images/image-omelette.jpeg";
import styles from "./RecipePage.module.css";
export default function RecipePage() {
  return (
    <div className={styles.RecipePage}>
      <img src={omeletteImg} alt="omelette" className={styles["recipeImg"]} />

      <div className={styles["paddingWrapper"]}>
        <section className="section">
          <h1
            className={
              styles["sectionHeading"] + " " + styles["sectionHeading--intro"]
            }
          >
            Simple Omelette Recipe
          </h1>
          <p className="intro-text">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>

        <section className={styles["section"] + " " + styles["section--prep"]}>
          <h2
            className={
              styles["sectionHeading"] + " " + styles["sectionHeading--prep"]
            }
          >
            Preparation time
          </h2>
          <ul>
            <li>
              <span className={styles["listAccent"]}>Total</span>: Approximately
              10 minutes
            </li>
            <li>
              <span className={styles["listAccent"]}>Preparation</span>: 5
              minutes
            </li>
            <li>
              <span className={styles["listAccent"]}>Cooking</span>: 5 minutes
            </li>
          </ul>
        </section>

        <hr />

        <section className={styles["section"]}>
          <h2 className={styles["sectionHeading"]}>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>

        <hr />

        <section className={styles["section"]}>
          <h2 className={styles["sectionHeading"]}>Instructions</h2>
          <ol>
            <li>
              <span className={styles["listAccent"]}>Beat the eggs</span>: In a
              bowl, beat the eggs with a pinch of salt and pepper until they are
              well mixed. You can add a tablespoon of water or milk for a
              fluffier texture.
            </li>
            <li>
              <span className={styles["listAccent"]}>Heat the pan</span>: Place
              a non-stick frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className={styles["listAccent"]}>Cook the omelette</span>:
              Once the butter is melted and bubbling, pour in the eggs. Tilt the
              pan to ensure the eggs evenly coat the surface.
            </li>
            <li>
              <span className={styles["listAccent"]}>
                Add fillings (optional)
              </span>
              : When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </li>
            <li>
              <span className={styles["listAccent"]}>Fold and serve</span>: As
              the omelette continues to cook, carefully lift one edge and fold
              it over the fillings. Let it cook for another minute, then slide
              it onto a plate.
            </li>
            <li>
              <span className={styles["listAccent"]}>Enjoy</span>: Serve hot,
              with additional salt and pepper if needed.
            </li>
          </ol>
        </section>

        <hr />

        <setion className={styles["section"]}>
          <h2 className={styles["sectionHeading"]}>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          
          <table className={styles["table"]}>
            <tr>
              <th>Calories</th> <td>277kcal</td>
            </tr>
            <tr>
              <th>Carbs</th> <td>0g</td>
            </tr>
            <tr>
              <th>Protein</th> <td>20g</td>
            </tr>
            <tr>
              <th>Fat</th> <td>22g</td>
            </tr>
          </table>
        </setion>
      </div>
    </div>
  );
}
