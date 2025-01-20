import { useState } from "react";

const Popover = ({ id, titleImages, rankingsTitleImages }) => {
  return (
    <div id={id} className="popover">
      <div className="popover-title">
        {titleImages.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
      <div className="pcIndexPage-total"></div>
      <div className="r-title">
        {rankingsTitleImages.map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
      <div className="pcIndexPage-rankings"></div>
    </div>
  );
};

const PointButton = ({ id, togglePopover, isVisible }) => {
  return (
    <button
      onClick={(event) => togglePopover(event, id)}
      className={isVisible ? "active" : ""}
    ></button>
  );
};

const TaiwanPoint= () => {
  const [visiblePopover, setVisiblePopover] = useState(null);

  const togglePopover = (event, id) => {
    event.stopPropagation(); // 防止点击按钮时触发关闭逻辑
    setVisiblePopover((prev) => (prev === id ? null : id));
  };

  const closePopover = () => setVisiblePopover(null);

  // 添加全局点击事件，用于点击外部时关闭弹出框
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".popover") && !e.target.closest("button")) {
        closePopover();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const titleImages = [
    "./images/寄.svg",
    "./images/件.svg",
    "./images/總.svg",
    "./images/數.svg",
  ];
  const rankingsTitleImages = [
    "./images/排.svg",
    "./images/行.svg",
    "./images/榜.svg",
  ];

  return (
    <div id="pcIndexPage-taiwan">
      <img src="./images/taiwan_picture.svg" alt="" />
      {/* 離島 */}
      <div id="pcIndexPage-islands" className="point">
        <PointButton
          id="popover1"
          togglePopover={togglePopover}
          isVisible={visiblePopover === "popover1"}
        />
        {visiblePopover === "popover1" && (
          <Popover
            id="popover1"
            titleImages={titleImages}
            rankingsTitleImages={rankingsTitleImages}
          />
        )}
      </div>
      {/* 北部 */}
      <div id="pcIndexPage-north" className="point">
        <PointButton
          id="popover2"
          togglePopover={togglePopover}
          isVisible={visiblePopover === "popover2"}
        />
        {visiblePopover === "popover2" && (
          <Popover
            id="popover2"
            titleImages={titleImages}
            rankingsTitleImages={rankingsTitleImages}
          />
        )}
      </div>
    </div>
  );
};

export default TaiwanPoint;