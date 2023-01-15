import styles from "./contentBlock.module.scss";

interface IContentBlockProps {
  title?: string;
  body?: string | JSX.Element;
  button?: JSX.Element;
  className?: string;
}

export default function ContentBlock({
  title = "",
  body = "",
  button = <></>,
  className = "",
}: IContentBlockProps) {
  return (
    <div className={`${styles.contentBlockContainerDefault} ${className}`}>
      {title && <h2>{title}</h2>}
      {body && <p>{body}</p>}
      {button && button}
    </div>
  );
}
