import React, { useState } from 'react';
import {
  TitleWrap,
  TitleLogo,
  ModeIcon,
  TodoForm,
  TodoInput,
  TodoInputBtn,
  TodoInputIcon,
} from 'components/TodoTitleStyle';
import MoonIcon from 'assets/icon-moon.svg';
import SunIcon from 'assets/icon-sun.svg';
import CheckIcon from 'assets/icon-check.svg';

const TodoTitle = ({ theme, setTheme }) => {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

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
    console.log(todos);
    setInputText('');
  };

  return (
    <TitleWrap>
      <TitleLogo>
        <h1>TODO</h1>
        <ModeIcon
          onClick={handleToggler}
          src={theme === 'light' ? MoonIcon : SunIcon}
        />
      </TitleLogo>
      <TodoForm>
        <TodoInput
          onChange={handleInput}
          value={inputText}
          type='text'
          placeholder='Create a new todo...'
        />
        <TodoInputBtn onClick={handleSubmit} type='submit'>
          <TodoInputIcon src={CheckIcon} alt=''></TodoInputIcon>
          {/* <img src={CheckIcon} style={{ background: 'red' }} alt=''></img> */}
        </TodoInputBtn>
      </TodoForm>
    </TitleWrap>
  );
};

export default TodoTitle;
