import styled from '@emotion/styled';

export const ButtonUI = styled.button`
  border: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue[700]};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[4]}`};
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.body.md};
  height: ${({ theme }) => theme.spacing[11]};
  border-radius: ${({ theme }) => theme.border.radius.small};
`;
