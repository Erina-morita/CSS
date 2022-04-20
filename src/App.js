import { useState } from "react";
import { ColorMessage } from "./components/ColorMessage";
import { CssModules } from "./CssModules";
//useEffectの初期値の設定
import { useEffect } from "react";

//再レンダリングとは
//Stateをカウントアップした時画面をリロードしたとき再レンダリングされる

export const App = () => {
  const [num, setNum] = useState(0);

  //useEffect(実行する関数,[依存する値])ある値が変わったときに限り処理を続行する
  useEffect(() => {
    //alert();
  }, [num]);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは!!!!!!!!!</h1>
      <ColorMessage color="pink" message="testです！！" />
      <ColorMessage color="blue" message="お元気ですか" />
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>

      <CssModules />
    </>
  );
};
