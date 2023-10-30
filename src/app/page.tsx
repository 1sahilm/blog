import Image from "next/image";
import styles from "./page.module.css";
import Header from "../../components/header";
import Button from "../../components/button";
import Link from "next/link";
import stories from "../../components/stories.js";
import popularStories from "../../components/popularStories";
import NaturalWorld from "../../components/naturalWorld";
import PlacesStories from "../../components/places";
import PeopleStories from "../../components/people";

export default function Home() {
  return (
    <main className={`${styles.main} `}>
      <div>
        <Header />
        <div className={`${styles.banner} flex items-center container `}>
          <div
            className={`${styles.banner_left} text-white flex flex-2 flex-column gap-20`}
          >
            <span>TODAY’S BEAUTIFUL NEWS</span>
            <h2>
              Meet the ex-addict going beyond methadone treatment to guide drug
              users to recovery
            </h2>
            <span title="comu">Community</span>
            <Button text="More" className="font-16" />
          </div>
          <div className={`${styles.banner_right} flex-1`}>
            <div
              className={`${styles.box} flex items-center font-18 weight-600 justify-center`}
            >
              <p className={`text-white m-auto`}>
                <span>Share hope.</span> <br />
                <span>Submit your story</span>
              </p>
            </div>
          </div>
        </div>
        <div className={`container`}>
          <div className={`${styles.latest_story}`}>
            <h2 className={`mb-20`}>Latest Stories</h2>
            <div className={`${styles.story_grid}`}>
              {stories.map((value, index) => {
                return (
                  <>
                    <div
                      className={`${styles.story_card} relative`}
                      key={index}
                    >
                      <Image
                        title="card-image"
                        src={value.imageUrl}
                        alt="stories"
                        width={400}
                        height={250}
                      />
                      <Link href={"#"} className="absolute left-0">
                        {value.storiesHeadline}
                      </Link>
                      <Image
                        title="bookmark"
                        src={"/stories/bookmark.png"}
                        alt="stories"
                        width={17}
                        height={20}
                      />
                      <Image
                        title="heart"
                        src={"/stories/heart.png"}
                        alt="stories"
                        width={20}
                        height={20}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className={`${styles.popular_story}`}>
            <h2 className={`mb-20 mt-40`}>Latest Stories</h2>
            <div className={`${styles.popularStory_grid}`}>
              {popularStories.map((value, index) => {
                return (
                  <>
                    <div
                      className={`${styles.popularStory_card} relative`}
                      key={index}
                    >
                      <Image
                        title="card-image"
                        src={value.imageUrl}
                        alt="stories"
                        width={400}
                        height={250}
                      />
                      <Link href={"#"} className="absolute left-0">
                        {value.storiesHeadline}
                      </Link>
                      <Image
                        title="bookmark"
                        src={"/stories/bookmark.png"}
                        alt="stories"
                        width={17}
                        height={20}
                      />
                      <Image
                        title="heart"
                        src={"/stories/heart.png"}
                        alt="stories"
                        width={20}
                        height={20}
                      />
                      <div className={`${styles.play_button}`}>
                        <div className={`flex items-center`}>
                          <Image
                            title="play"
                            src={"/stories/play.png"}
                            alt="stories"
                            width={20}
                            height={20}
                          />{" "}
                          <span>2:00</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <NaturalWorld />
        </div>
        <div className={`${styles.dark_Section} container`}>
          <div className={`${styles.dark_SectionGrid} `}>
            <div>
              <h3 className="font-42">
                <strong>RE-FRAMING </strong>
                THE WORLD
              </h3>
              <p>
                Beautiful News is reframing our world, one film at a time, every
                day at 4:14pm
              </p>
            </div>
            <div className={`${styles.dark_rightSection}`}>
              <span className={`${styles.dark_span}`}>Activism </span>
              <span className={`${styles.dark_span}`}>Animals </span>
              <span className={`${styles.dark_span}`}>Community </span>
              <span className={`${styles.dark_span}`}>Conservation </span>
              <span className={`${styles.dark_span}`}>Craft </span>
              <span className={`${styles.dark_span}`}>Creativity </span>
              <span className={`${styles.dark_span}`}>Culture </span>
              <span className={`${styles.dark_span}`}>Education </span>
              <span className={`${styles.dark_span}`}>Family </span>
              <span className={`${styles.dark_span}`}>Fashion </span>
              <span className={`${styles.dark_span}`}>Food </span>
              <span className={`${styles.dark_span}`}>Innovation </span>
              <span className={`${styles.dark_span}`}>LGBTQ </span>
              <span className={`${styles.dark_span}`}>Music </span>
              <span className={`${styles.dark_span}`}>My Beautiful World </span>
              <span className={`${styles.dark_span}`}>Natural World </span>
              <span className={`${styles.dark_span}`}>Nature </span>
              <span className={`${styles.dark_span}`}>Performance </span>
              <span className={`${styles.dark_span}`}>Sport </span>
            </div>
          </div>
        </div>
        <div className="container">
          <PlacesStories />

          <PeopleStories />

          <div className={`${styles.form_Section}`}>
            <div className={`${styles.formHeading}`}>
              <h3>
                <strong>Reframe</strong>
                your inbox
              </h3>
              <p>
                Subscribe to our newsletter <br /> and never miss a story
              </p>
            </div>
            <div className="mt-20 flex">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Enter your email" />
              <Button text="Sign up" className={`${styles.signUp_button}`} />
            </div>
          </div>
        </div>
        <div className={`${styles.quoteSection}`}>
          <div className={`${styles.quotePart}`}>
            <p>Brave! What a beautiful initiative</p>
            <p className={`${styles.author}`}>
              <span title="bar"></span>
              <span>Bonwa Mbontsi,</span>
              <span>Bali</span>
            </p>
          </div>
          <div className={`${styles.quotePart}`}>
            <p>
              Beautiful News empowers the generation of tomorrow for a brighter
              future and hope for every individual
            </p>
            <p className={`${styles.author}`}>
              <span title="bar"></span>
              <span>Faakhir Bestman,</span>
              <span>Cape Town</span>
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
}
