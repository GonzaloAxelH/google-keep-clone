import ListNotes from "../../organismos/ListNotes/ListNotes.js";
import styled from "styled-components";
import FormCreateNote from "../../organismos/Forms/FormCreateNote/FormCreateNote.js";
const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .wrapper-form {
    margin: 4em 0;
  }
  .wrapper-listnotes {
  }
`;
export default function Home() {
  return (
    <HomeWrapper>
      <FormCreateNote className="wrapper-form" />
      <ListNotes className="wrapper-listnotes" />
    </HomeWrapper>
  );
}
