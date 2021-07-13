function Icon({ name, size, style }) {
  const styles = {
    ...style,
    fontSize: size || 16,
  };

  return (
    <i
      className={`icon icon-${name}`}
      style={styles}
    />
  );
}

export default Icon;