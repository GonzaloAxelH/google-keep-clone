import styled from "styled-components";

export const  Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const  WrapperListNotes = styled.div`
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex; 
  width: 75vw;
}
.my-masonry-grid_column {
  

  background-clip: padding-box;
}

/* Style your items */
.my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */

}

`;
export const  OtherNotes = styled.div``;
export const  TitleNotes = styled.p``;
export const OptionsNotes = styled.div`
  cursor:default;
  display:flex;
  height: 100%;
`;
export const  WrapperNote = styled.div`
  width: 95%;
  margin:0.7em;
  background: ${(props) => props.backgroundColor};
  
  border-radius: 10px;
  padding: 16px 14px 7px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.5s;
  .options-form-note {
    opacity: 0;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    .options-form-note {
      opacity: 1;
    }
  }
.info-note{
  display: flex;
  flex-direction: column;
  height: 100%;
  flex:1;
  p{
    height:100%;
    word-wrap: break-word;
  }
}


textarea{
  border: none;
  background:transparent;
  font-size: 17px;
  outline: none;
  word-wrap: break-word;
}
`;
export const  InputsForm = styled.div`
  display: flex;
  flex-direction: column;
  input {
    
    outline: none;
    margin: 0;
    padding: 0.5em 0.3em;
    background: transparent;
    border: none;
    font-size: 18px;
  }
  
`;
export const Textarea = styled.textarea`
 
  
`;

/**

    background: transparent;
    border: none;
    font-size: 16px;
    outline:none;
   margin:1em 0;
  }
  textarea::-webkit-scrollbar{
    background-color: transparent;
  }
  input:nth-child(1) {
    font-weight: bold;
  }
 * 
*/