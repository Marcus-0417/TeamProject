import React from "react";
import { motion } from "framer-motion";

const ENTextReveal = () => {
  const text = "Send a postcard to convey warmth.";
  const letters = text.split(""); // 將文字拆分成單個字元

  return (
    <p className="text-EN" style={{ display: "flex", overflow: "hidden" }}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }} // 初始狀態：透明且下偏移
          animate={{ opacity: 1, y: 0 }} // 最終狀態：完全顯示且回到原位
          transition={{
            delay: index * 0.5, // 延遲動畫（逐字顯示）
            duration: 1.0, // 每個字的動畫持續時間
            ease: "easeOut",
          }}
          style={{ display: "inline-block" }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
};

export default ENTextReveal;
