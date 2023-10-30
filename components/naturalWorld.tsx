import Image from "next/image";
import Link from "next/link";
import styles from "../src/app/page.module.css";

const NaturalWorld = () => {
  return (
    <>
      <div className={`${styles.natural_story}`}>
        <h2 className={`mb-20 mt-40`}>Natural World</h2>
        <div className={`${styles.naturalStory_grid}`}>
          {naturalCollection.map((value, index) => {
            return (
              <>
                <div
                  className={`${styles.naturalStory_card} relative`}
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
    </>
  );
};
export default NaturalWorld;
const naturalCollection = [
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
  {
    imageUrl: "/stories/nature.jpg",
    storiesHeadline:
      "How a sacred tie with Native Americans is restoring bison to indigenous lands",
  },
];
