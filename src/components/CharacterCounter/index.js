import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  AppContainer,
  MainContainer,
  CharacterDisplayContainer,
  AppHeading,
  NoUserInputImage,
  UserTextResultContainer,
  ResultItem,
  UserTextResult,
  CharacterAddContainer,
  CharacterCounterHeading,
  AddTextContainer,
  TextInput,
  AddButton,
  ErrorMsg,
} from './styledComponent'

class CharacterCounter extends Component {
  state = {
    inputText: '',
    textList: [],
    isEmpty: false,
  }

  onChangeUserInputText = event => {
    this.setState({inputText: event.target.value})
  }

  onSubmitAddButton = event => {
    event.preventDefault()

    const {inputText} = this.state

    const addItems = {
      id: uuidv4(),
      userInputText: inputText,
    }

    if (inputText !== '') {
      this.setState(prevState => ({
        textList: [...prevState.textList, addItems],
        inputText: '',
        isEmpty: false,
      }))
    } else {
      this.setState({isEmpty: true})
    }
  }

  render() {
    const {textList, inputText, isEmpty} = this.state

    const noResult = textList.length === 0

    console.log(textList.length)
    return (
      <AppContainer>
        <MainContainer>
          <CharacterDisplayContainer>
            <AppHeading>Count the characters like a Boss...</AppHeading>
            {noResult ? (
              <NoUserInputImage
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <UserTextResultContainer>
                {textList.map(eachItem => (
                  <ResultItem key={eachItem.id}>
                    <UserTextResult>
                      {eachItem.userInputText} : {eachItem.userInputText.length}
                    </UserTextResult>
                  </ResultItem>
                ))}
              </UserTextResultContainer>
            )}
          </CharacterDisplayContainer>
          <CharacterAddContainer>
            <CharacterCounterHeading>Character Counter</CharacterCounterHeading>
            <AddTextContainer onSubmit={this.onSubmitAddButton}>
              <TextInput
                onChange={this.onChangeUserInputText}
                type="text"
                placeholder="Enter the Characters here"
                value={inputText}
              />
              <AddButton type="submit">Add</AddButton>
            </AddTextContainer>
            {isEmpty && <ErrorMsg>*Please enter your text</ErrorMsg>}
          </CharacterAddContainer>
        </MainContainer>
      </AppContainer>
    )
  }
}

export default CharacterCounter
