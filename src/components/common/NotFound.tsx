import React from "react";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>Oops!</h1>
      <p>404-PAGE NOT FOUND</p>
      <p>찾고 계신 페이지는 삭제되었거나 잠시 접근이 불가능합니다.</p>
      <button
        onClick={() => {
          window.location.replace("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;
