import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to top, white, rgb(245, 245, 101));
  @media screen and (min-width: 576px) {
    background-image: linear-gradient(to right, white, rgb(245, 245, 101));
  }
`
export const MainContainer = styled.div`
  border-radius: 20px;
  display: flex;
  flex-direction: column-reverse;
  max-width: 780px;
  min-height: 500px;
  background-image: linear-gradient(to top, #ffbf1f 50%, #272c47 50%);
  @media screen and (min-width: 576px) {
    background-image: linear-gradient(to right, #ffbf1f 50%, #272c47 50%);
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`

export const CharacterDisplayContainer = styled.div`
  min-height: 250px;
  background-color: #ffbf1f;
  padding: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  @media screen and (min-width: 576px) {
    min-height: 500px;
    width: 50%;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`

export const AppHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 40px;
`

export const NoUserInputImage = styled.img`
  width: 100%;
  padding: 20px;
`

export const UserTextResultContainer = styled.ul`
  padding: 0px;
`
export const ResultItem = styled.li`
  list-style: none;
`

export const UserTextResult = styled.p`
  font-size: 16px;
  font-weight: 600;
`

export const CharacterAddContainer = styled.div`
  min-height: 250px;
  background-color: #272c47;
  padding: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  @media screen and (min-width: 576px) {
    min-height: 500px;
    width: 50%;
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`

export const CharacterCounterHeading = styled.h1`
  font-size: 24px;
  color: #ffbf1f;
`

export const AddTextContainer = styled.form`
  display: flex;
  align-items: center;
`

export const TextInput = styled.input`
  width: 100%;
  min-width: 100px;
  max-width: 300px;
  padding: 12px;
  border-radius: 5px;
  color: #0f172a;
  outline: none;
`

export const AddButton = styled.button`
  color: #0f172a;
  background-color: #ffbf1f;
  border: none;
  border-radius: 5px;
  padding: 12px 22px;
  cursor: pointer;
  margin-left: 20px;
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 10px;
`
