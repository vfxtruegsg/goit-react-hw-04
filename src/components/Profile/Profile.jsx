import profileStyles from "./Profile.module.css";

export default function Profile({ userData }) {
  return (
    <div className={profileStyles["profile-container"]}>
      <div className={profileStyles["user-inf"]}>
        <img
          className={profileStyles["user-avatar"]}
          src={userData.avatar}
          alt="User avatar"
        />
        <p
          style={{
            fontWeight: "600",
          }}
        >
          {userData.username}
        </p>
        <p
          style={{
            color: "#464646",
          }}
        >
          @{userData.tag}
        </p>
        <p
          style={{
            color: "#464646",
          }}
        >
          {userData.location}
        </p>
      </div>

      <ul className={profileStyles["media-list"]}>
        <li className={profileStyles["media-item"]}>
          <span className={profileStyles["media-item__text"]}>Followers</span>
          <span className={profileStyles["media-item__indicators"]}>
            {userData.stats.followers}
          </span>
        </li>
        <li className={profileStyles["media-item"]}>
          <span className={profileStyles["media-item__text"]}>Views</span>
          <span className={profileStyles["media-item__indicators"]}>
            {userData.stats.views}
          </span>
        </li>
        <li className={profileStyles["media-item"]}>
          <span className={profileStyles["media-item__text"]}>Likes</span>
          <span className={profileStyles["media-item__indicators"]}>
            {userData.stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
}
