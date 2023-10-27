/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { emojiTitle, emojiWrapper, selectEmoji } from "../../styles";

type EmojiProps = {
  handleChange: (e: React.ChangeEvent) => void;
  feeling: string;
  weather: string;
  meeting: string;
  activity: string;
};

const UpdateEmoji: React.FC<EmojiProps> = ({
  handleChange,
  feeling,
  weather,
  meeting,
  activity
}) => {
  if (feeling && weather && meeting && activity)
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
              defaultChecked={feeling === "feeling-excited"}
              onChange={handleChange}
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
              defaultChecked={feeling === "feeling-happy"}
              onChange={handleChange}
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
              defaultChecked={feeling === "feeling-soso"}
              onChange={handleChange}
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
              defaultChecked={feeling === "feeling-sad"}
              onChange={handleChange}
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
              defaultChecked={feeling === "feeling-angry"}
              onChange={handleChange}
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
              defaultChecked={weather === "weather-sunny"}
              onChange={handleChange}
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
              defaultChecked={weather === "weather-cloudy"}
              onChange={handleChange}
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
              defaultChecked={weather === "weather-windy"}
              onChange={handleChange}
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
              defaultChecked={weather === "weather-rainy"}
              onChange={handleChange}
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
              defaultChecked={weather === "weather-snowy"}
              onChange={handleChange}
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
              defaultChecked={meeting === "meeting-friend"}
              onChange={handleChange}
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
              defaultChecked={meeting === "meeting-family"}
              onChange={handleChange}
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
              defaultChecked={meeting === "meeting-couple"}
              onChange={handleChange}
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
              defaultChecked={meeting === "meeting-acquaintance"}
              onChange={handleChange}
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
              defaultChecked={meeting === "meeting-no"}
              onChange={handleChange}
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
              value="activity-exercise"
              name="activity"
              defaultChecked={activity === "activity-exercise"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-game"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-movie"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-study"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-reading"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-restaurant"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-shopping"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-play"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-travel"}
              onChange={handleChange}
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
              defaultChecked={activity === "activity-relax"}
              onChange={handleChange}
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

export default UpdateEmoji;

const createEmojiWrapper = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
