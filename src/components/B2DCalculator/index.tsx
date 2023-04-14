import React, { useState, useRef } from "react";
import styles from "./B2DCalculator.module.scss";

export default function B2DCalculator() {
  const binaryInputRef = useRef(null);
  const binary2Decimal = (e: React.FormEvent): void => {
    e.preventDefault();

    console.log(binaryInputRef.current?.value);
  };

  return (
    <div className={styles.Container}>
      <form>
        <input type="text" ref={binaryInputRef} />
        <button onClick={binary2Decimal}>开始转换</button>
      </form>
    </div>
  );
}
