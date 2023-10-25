/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { emojiTitle, emojiWrapper, selectEmoji } from "../../styles";

const EditEmoji: React.FC = () => {
  const emojiValue = {
    "feeling-excited":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Ffeeling-excited.png?alt=media&token=ed759631-0237-4c82-bb76-6ef106739e89",
    "feeling-angry":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Ffeeling-angry.png?alt=media&token=db2eb657-d82c-4c4d-8ac8-78155536f5ba",
    "feeling-happy":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Ffeeling-happy.png?alt=media&token=1cd12bf3-9343-4144-a41c-6c913ebae6ec",
    "feeling-sad":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Ffeeling-sad.png?alt=media&token=d7a130a2-3b3c-443e-9b59-4b85d1ff13db",
    "feeling-soso":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Ffeeling-soso.png?alt=media&token=25ab4aff-b421-40e7-84b6-a32ec6a9faf9",
    "activity-exercise":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-exercise.png?alt=media&token=7216c7a0-3756-4d7d-8233-7943735aa6bd",
    "activity-game":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-game.png?alt=media&token=1ee13dd9-29ca-4288-8641-0442b3fff9a5",
    "activity-movie":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-movie.png?alt=media&token=bdea9c95-f2ad-456f-8e21-8a14ddabc2c1",
    "activity-music":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-music.png?alt=media&token=46673992-f219-4941-b5e1-e20e3f26eb37",
    "activity-play":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-play.png?alt=media&token=47a42a42-2571-41cb-9b7b-1295665de215",
    "activity-reading":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-reading.png?alt=media&token=089147c9-32fa-440e-8b3e-fac8a9af7eb1",
    "activity-relax":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-relax.png?alt=media&token=6e4c763a-8ac6-4579-8961-495cc80077b2",
    "activity-restaurant":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-restaurant.png?alt=media&token=e1c40461-2df1-452d-bde2-4bd1a4f488e9",
    "activity-shopping":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-shopping.png?alt=media&token=ecc35b16-6ee0-4612-a340-0488ec042916",
    "activity-travel":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-travel.png?alt=media&token=a867a17b-2038-497b-8cfd-909b2197ca76",
    "meeting-acquaintance":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fmeeting-acquaintance.png?alt=media&token=6104649e-66f9-4799-9404-a66d716dfc31",
    "meeting-couple":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fmeeting-couple.png?alt=media&token=abddc16d-de3d-4c9b-bd94-52c795c0fd9c",
    "meeting-family":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fmeeting-family.png?alt=media&token=e841b109-f3b6-460b-ac78-69f925861cbb",
    "meeting-friend":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fmeeting-friend.png?alt=media&token=72497d6d-2512-470f-9a19-976b955e2753",
    "meeting-no":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fmeeting-no.png?alt=media&token=857787bc-e779-4aec-9051-9aeab53558af",
    "weather-sunny":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fweather-sunny.png?alt=media&token=76919e06-f5d6-454f-a271-ddf0e69646a1",
    "weather-cloudy":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fweather-cloudy.png?alt=media&token=db4a5792-11a0-4119-96ac-bd500632dce1",
    "weather-rainy":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fweather-rainy.png?alt=media&token=9997b758-d0b7-46b2-9b67-32ca6858cdb8",
    "weather-snowy":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fweather-snowy.png?alt=media&token=1614a8d1-a283-4ee0-85c4-cb2a268217e6",
    "weather-windy":
      "https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Fweather-windy.png?alt=media&token=c2eafd5e-e22c-4d80-9197-c75ab2fd3e2b"
  };

  return (
    <div css={editEmojiWrapper}>
      {/* feeling - 무드 */}
      <fieldset
        name="feeling"
        css={emojiWrapper}
      >
        <div css={emojiTitle}>어떤 하루였나요?</div>
        <div css={selectEmoji}>
          <input
            type="radio"
            id="feeling-excited"
            value={emojiValue["feeling-excited"]}
            name="feeling"
            required
          />
          <label htmlFor="feeling-excited">
            <img src="/images/feeling-excited.png" />
            <p>기쁨</p>
          </label>
          <input
            type="radio"
            id="feeling-happy"
            value={emojiValue["feeling-happy"]}
            name="feeling"
            required
          />
          <label htmlFor="feeling-happy">
            <img src="/images/feeling-happy.png" />
            <p>행복</p>
          </label>
          <input
            type="radio"
            id="feeling-soso"
            value={emojiValue["feeling-soso"]}
            name="feeling"
            required
          />
          <label htmlFor="feeling-soso">
            <img src="/images/feeling-soso.png" />
            <p>그럭저럭</p>
          </label>
          <input
            type="radio"
            id="feeling-sad"
            value={emojiValue["feeling-sad"]}
            name="feeling"
            required
          />
          <label htmlFor="feeling-sad">
            <img src="/images/feeling-sad.png" />
            <p>슬픔</p>
          </label>
          <input
            type="radio"
            id="feeling-angry"
            value={emojiValue["feeling-angry"]}
            name="feeling"
            required
          />
          <label htmlFor="feeling-angry">
            <img src="/images/feeling-angry.png" />
            <p>화남</p>
          </label>
        </div>
      </fieldset>
      {/* weather - 날씨 */}
      <fieldset
        name="weather"
        css={emojiWrapper}
      >
        <div css={emojiTitle}>날씨는 어땠나요?</div>
        <div css={selectEmoji}>
          <input
            type="radio"
            id="weather-sunny"
            value={emojiValue["weather-sunny"]}
            name="weather"
            required
          />
          <label htmlFor="weather-sunny">
            <img src="/images/weather-sunny.png" />
            <p>맑음</p>
          </label>
          <input
            type="radio"
            id="weather-cloudy"
            value={emojiValue["weather-cloudy"]}
            name="weather"
            required
          />
          <label htmlFor="weather-cloudy">
            <img src="/images/weather-cloudy.png" />
            <p>흐림</p>
          </label>
          <input
            type="radio"
            id="weather-windy"
            value={emojiValue["weather-windy"]}
            name="weather"
            required
          />
          <label htmlFor="weather-windy">
            <img src="/images/weather-windy.png" />
            <p>바람</p>
          </label>
          <input
            type="radio"
            id="weather-rainy"
            value={emojiValue["weather-rainy"]}
            name="weather"
            required
          />
          <label htmlFor="weather-rainy">
            <img src="/images/weather-rainy.png" />
            <p>비</p>
          </label>
          <input
            type="radio"
            id="weather-snowy"
            value={emojiValue["weather-snowy"]}
            name="weather"
            required
          />
          <label htmlFor="weather-snowy">
            <img src="/images/weather-snowy.png" />
            <p>눈</p>
          </label>
        </div>
      </fieldset>
      {/* meeting - 만난 사람 */}
      <fieldset
        name="meeting"
        css={emojiWrapper}
      >
        <div css={emojiTitle}>누구를 만났나요?</div>
        <div css={selectEmoji}>
          <input
            type="radio"
            id="meeting-friend"
            value={emojiValue["meeting-friend"]}
            name="meeting"
            required
          />
          <label htmlFor="meeting-friend">
            <img src="/images/meeting-friend.png" />
            <p>친구</p>
          </label>
          <input
            type="radio"
            id="meeting-family"
            value={emojiValue["meeting-family"]}
            name="meeting"
            required
          />
          <label htmlFor="meeting-family">
            <img src="/images/meeting-family.png" />
            <p>가족</p>
          </label>
          <input
            type="radio"
            id="meeting-couple"
            value={emojiValue["meeting-couple"]}
            name="meeting"
            required
          />
          <label htmlFor="meeting-couple">
            <img src="/images/meeting-couple.png" />
            <p>애인</p>
          </label>
          <input
            type="radio"
            id="meeting-acquaintance"
            value={emojiValue["meeting-acquaintance"]}
            name="meeting"
            required
          />
          <label htmlFor="meeting-acquaintance">
            <img src="/images/meeting-acquaintance.png" />
            <p>지인</p>
          </label>
          <input
            type="radio"
            id="meeting-no"
            value={emojiValue["meeting-no"]}
            name="meeting"
            required
          />
          <label htmlFor="meeting-no">
            <img src="/images/meeting-no.png" />
            <p>안 만남</p>
          </label>
        </div>
      </fieldset>
      {/* activity - 활동 */}
      <fieldset
        name="activity"
        css={emojiWrapper}
      >
        <div css={emojiTitle}>무엇을 했나요?</div>
        <div css={selectEmoji}>
          <input
            type="radio"
            id="activity-exercise"
            value={emojiValue["activity-exercise"]}
            name="activity"
            required
          />
          <label htmlFor="activity-exercise">
            <img src="/images/activity-exercise.png" />
            <p>운동</p>
          </label>
          <input
            type="radio"
            id="activity-game"
            value={emojiValue["activity-game"]}
            name="activity"
            required
          />
          <label htmlFor="activity-game">
            <img src="/images/activity-game.png" />
            <p>게임</p>
          </label>
          <input
            type="radio"
            id="activity-movie"
            value={emojiValue["activity-movie"]}
            name="activity"
            required
          />
          <label htmlFor="activity-movie">
            <img src="/images/activity-movie.png" />
            <p>영화</p>
          </label>
          <input
            type="radio"
            id="activity-music"
            value={emojiValue["activity-music"]}
            name="activity"
            required
          />
          <label htmlFor="activity-music">
            <img src="/images/activity-music.png" />
            <p>음악</p>
            {/* <input
              type="text"
              placeholder="기타"
            /> */}
          </label>
          <input
            type="radio"
            id="activity-reading"
            value={emojiValue["activity-reading"]}
            name="activity"
            required
          />
          <label htmlFor="activity-reading">
            <img src="/images/activity-reading.png" />
            <p>독서</p>
          </label>
          <input
            type="radio"
            id="activity-restaurant"
            value={emojiValue["activity-restaurant"]}
            name="activity"
            required
          />
          <label htmlFor="activity-restaurant">
            <img src="/images/activity-restaurant.png" />
            <p>외식</p>
          </label>
          <input
            type="radio"
            id="activity-shopping"
            value={emojiValue["activity-shopping"]}
            name="activity"
            required
          />
          <label htmlFor="activity-shopping">
            <img src="/images/activity-shopping.png" />
            <p>쇼핑</p>
          </label>
          <input
            type="radio"
            id="activity-play"
            value={emojiValue["activity-play"]}
            name="activity"
            required
          />
          <label htmlFor="activity-play">
            <img src="/images/activity-play.png" />
            <p>공연 (연극/콘서트)</p>
          </label>
          <input
            type="radio"
            id="activity-travel"
            value={emojiValue["activity-travel"]}
            name="activity"
            required
          />
          <label htmlFor="activity-travel">
            <img src="/images/activity-travel.png" />
            <p>여행</p>
          </label>
          <input
            type="radio"
            id="activity-relax"
            value={emojiValue["activity-relax"]}
            name="activity"
            required
          />
          <label htmlFor="activity-relax">
            <img src="/images/activity-relax.png" />
            <p>휴식</p>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default EditEmoji;

const editEmojiWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
