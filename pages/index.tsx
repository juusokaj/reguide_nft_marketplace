import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/nft-rewiki.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  Simple NFTs Trade
                </span>
                <br />
                
              </h1>
              <p className={styles.heroSubtitle}>
              on ReWiki Marketplace faster than ever.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  TRADE YOUR NFTs now
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
