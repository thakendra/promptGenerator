import { useCallback } from "react";
import styles from "./unleash-creativity-container.module.css";

const UnleashCreativityContainer = () => {
  const onButtonClick = useCallback(() => {
    window.open(
      "https://7659013318683.gumroad.com/l/MIDJOURNEYPROMPTGENERATOR"
    );
  }, []);

  const onButton1Click = useCallback(() => {
    window.open(
      "https://7659013318683.gumroad.com/l/MIDJOURNEYPROMPTGENERATOR"
    );
  }, []);

  return (
    <div className={styles.herosection}>
      <div className={styles.herotext}>
        <div className={styles.newcallout}>
          <div className={styles.newcalloutChild} />
          <div className={styles.newcalloutItem} />
          <div className={styles.new}>NEW</div>
          <div className={styles.endlessPossibilitiesAnd}>
            endless possibilities and endless inspiration
          </div>
        </div>
        <div className={styles.herocta}>
          <div className={styles.title}>
            <p className={styles.unleash}>{`Unleash `}</p>
            <p className={styles.creativity}>Creativity</p>
          </div>
          <div className={styles.subtitle}>
            Are you tired of facing writer's block and running out of ideas?
            Look no further! PromptAI is here to ignite your creativity and
            bring fresh inspiration to your writing.
          </div>
          <div className={styles.buttonrow}>
            <button className={styles.button} onClick={onButtonClick}>
              <div className={styles.getStarted}>Get Started</div>
            </button>
            <button className={styles.button1} onClick={onButton1Click}>
              <div className={styles.getStarted}>free trial</div>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.heroimageIcon} alt="" src="../vector@2x.png" />
    </div>
  );
};

export default UnleashCreativityContainer;
