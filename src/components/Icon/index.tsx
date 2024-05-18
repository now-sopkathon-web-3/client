import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

interface IconObject {
  name: string;
  className?: string;
}

interface IconProps {
  icon: IconObject;
  size?: string;
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface IconContainerProps {
  size?: string;
  color?: string;
}

const index = ({ icon, size = '2.4rem', color = theme.color.black, onClick, ...props }: IconProps) => {
  return (
    <IconContainer size={size} color={color} onClick={onClick} className={icon.className} {...props}>
      {icon.name}
    </IconContainer>
  );
};

export default index;

const IconContainer = styled.span<IconContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};

  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
`;
