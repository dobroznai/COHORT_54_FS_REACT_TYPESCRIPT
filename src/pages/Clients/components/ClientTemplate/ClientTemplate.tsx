import { useNavigate } from "react-router-dom";
import { PageWrapper, CardInfo, ButtonControl } from "./styles";
import Button from "components/Button/Button";

import { type ClientTemplateProps } from "./types";

function ClientTemplate({ children }: ClientTemplateProps) {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <CardInfo>{children}</CardInfo>
      <ButtonControl>
        <Button onClick={goBack} name="Go back" />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientTemplate;
