import Image from "next/image";
import styles from "../src/app/page.module.css";
import Link from "next/link";

const PlacesStories = () => {
  return (
    <>
      <div className={`${styles.places_story}`}>
        <h2 className={`mb-20 mt-40`}>Places</h2>
        <div className={`${styles.placesStory_grid}`}>
          {placesCollection.map((value, index) => {
            return (
              <>
                <div
                  className={`${styles.placesStory_card} relative`}
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
export default PlacesStories;
const placesCollection = [
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
  {
    imageUrl: "/stories/place.jpg",
    storiesHeadline:
      "Marvel at a regal showcase of history, art and luxury in St Petersburg",
  },
];
