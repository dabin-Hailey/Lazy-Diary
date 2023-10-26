/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { emojiTitle, emojiWrapper, selectEmoji } from "../../styles";

const CreateEmoji: React.FC = () => {
  return (
    <div css={createEmojiWrapper}>
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
            value="feeling-excited"
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
            value="feeling-happy"
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
            value="feeling-soso"
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
            value="feeling-sad"
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
            value="feeling-angry"
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
            value="weather-sunny"
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
            value="weather-cloudy"
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
            value="weather-windy"
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
            value="weather-rainy"
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
            value="weather-snowy"
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
            value="meeting-friend"
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
            value="meeting-family"
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
            value="meeting-couple"
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
            value="meeting-acquaintance"
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
            value="meeting-no"
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
            value="https://firebasestorage.googleapis.com/v0/b/lazy-diary-7352b.appspot.com/o/assets%2Factivity-exercise.png?alt=media&token=7216c7a0-3756-4d7d-8233-7943735aa6bd"
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
            value="activity-game"
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
            value="activity-movie"
            name="activity"
            required
          />
          <label htmlFor="activity-movie">
            <img src="/images/activity-movie.png" />
            <p>영화</p>
          </label>
          <input
            type="radio"
            id="activity-study"
            value="activity-study"
            name="activity"
            required
          />
          <label htmlFor="activity-study">
            <img src="/images/activity-study.png" />
            <p>공부</p>
            {/* <input
              type="text"
              placeholder="기타"
            /> */}
          </label>
          <input
            type="radio"
            id="activity-reading"
            value="activity-reading"
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
            value="activity-restaurant"
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
            value="activity-shopping"
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
            value="activity-play"
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
            value="activity-travel"
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
            value="activity-relax"
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

export default CreateEmoji;

const createEmojiWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
