const IconWrapper = ({ Icon, onClick, children, ...args }) => {
  return (
    <>
      <div onClick={onClick} className="wrapper__menu-icon" {...args}>
        <Icon />
      </div>
      {children}
    </>
  );
};

export default IconWrapper;
