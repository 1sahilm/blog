import css from "../components/button.module.css";
const Button = (props: any) => {
  return (
    <>
      <div className={css.button}>
        <button className={props.className}> {props.text}</button>
      </div>
    </>
  );
};
export default Button;
