import styles from './Avatar.module.scss';

interface IAvatarProps {
  size?: number;
  image?: string;
}

const Avatar = ({ size = 46, image }: IAvatarProps) => {
  const sizeInner = `${size - 8}px`;
  const sizeWrapper = `${size}px`;

  return (
    <button
      className={styles.avButton}
      style={{ width: sizeWrapper, height: sizeWrapper }}
    >
      <div
        className={styles.avInner}
        style={{ width: sizeInner, height: sizeWrapper }}
      >
        {image && (
          <img
            className={styles.avImage}
            src={image}
            width={sizeInner}
            height={sizeWrapper}
          />
        )}
      </div>
    </button>
  );
};

export default Avatar;
