const Button = (color = "#57ad7d", size = "md", children) => {
  const sizes = {
    sm: "6px 12px",
    md: "10px, 20px",
    lg: "14px, 28px",
  };
  return (
    <button
      style={{
        padding: sizes[size],
        backgroundColor: color,
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
