import { Container } from "react-bootstrap";

export const ContainerComponent = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="vh-100 bg-secondary">
      <Container>{children}</Container>
    </div>
  );
};

export default ContainerComponent;
