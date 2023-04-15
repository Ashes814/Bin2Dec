import React, { useState, useRef } from "react";
import styles from "./B2DCalculator.module.scss";

export default function B2DCalculator() {
  const [decimal, setDecimal] = useState(0);
  const binaryInputRef = useRef<HTMLInputElement>(null);

  const binary2Decimal = (e: React.FormEvent): void => {
    e.preventDefault();
    const inputValue = binaryInputRef.current?.value;

    if (!inputValue) {
      alert("请输入内容");
      return;
    }

    let decimalValue = 0;
    for (let i = 0; i < inputValue.length; i++) {
      decimalValue += +inputValue[i] * 2 ** (inputValue.length - i - 1);
    }
    setDecimal(decimalValue);
    binaryInputRef.current.value = "";
  };

  const validateInput = (event: React.KeyboardEvent): void => {
    if (event.key == "1" || event.key == "0") {
      return;
    } else {
      event.preventDefault();
      alert("二进制输入只能是0或1");
    }
  };

  return (
    <div className={styles.Container}>
      <h2 className={styles.Title}>二进制转十进制</h2>
      <form>
        <input type="text" ref={binaryInputRef} onKeyDown={validateInput} />
        <button onClick={binary2Decimal}>开始转换</button>
      </form>
      <div className={styles.Result}>十进制结果: {decimal}</div>
    </div>
  );
}
