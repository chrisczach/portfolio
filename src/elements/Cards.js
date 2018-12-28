import styled from 'styled-components';
import  {elevation, transition, colors} from './utilities';

export const Card = styled.div`
  background: white;
  border-radius: 3px;
  ${elevation[4]}
  padding: 15px;
  max-width:300px;
  margin: 0 auto;
${transition({property: 'box-shadow'})}

  &:hover{
    ${elevation[5]}
  }
`;