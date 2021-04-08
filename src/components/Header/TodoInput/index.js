import React, { useState, useEffect, useContext } from 'react';
import {
  TitleWrap,
  TitleLogo,
  ModeIcon,
  Form,
  Input,
  InputBtn,
} from 'components/Header/TodoInput/style';
import MoonIcon from 'assets/icon-moon.svg';
import SunIcon from 'assets/icon-sun.svg';
import CheckIcon from 'assets/icon-check.svg';
import TodoContext from 'components/TodoContext';
import { saveLocalStorage } from 'components/Storage';

const TodoInput = ({ theme, setTheme }) => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useContext(TodoContext);

  const handleToggler = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          content: inputText,
          completed: false,
        },
      ]);
    }
    setInputText('');
  };

  useEffect(() => {
    if (todos.length > 0) {
      saveLocalStorage(todos);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <TitleWrap>
      <TitleLogo>
        <h1>TODO</h1>
        <ModeIcon
          onClick={handleToggler}
          src={theme === 'light' ? MoonIcon : SunIcon}
        />
      </TitleLogo>
      <Form>
        <Input
          onChange={handleInput}
          value={inputText}
          type='text'
          placeholder='Create a new todo...'
        />
        <InputBtn onClick={handleSubmit} type='submit'>
          <img src={CheckIcon} alt=''></img>
        </InputBtn>
      </Form>
    </TitleWrap>
  );
};

export default TodoInput;
