import React, { useContext, useState, useEffect } from 'react';
import {
  Wrapper,
  TagWrapper,
  InfoWrapper,
  Ul,
  Li,
  CheckIcon,
  CheckedIcon,
  CheckText,
  DeleteIcon,
} from 'components/TodoItem/style';
import TodoContext from 'components/TodoContext';
import CheckImg from 'assets/icon-check.svg';
import { saveLocalStorage } from 'components/Storage';

const TodoItem = () => {
  const [todos, setTodos] = useContext(TodoContext);
  const tagList = [
    { id: 'all', name: 'All' },
    { id: 'active', name: 'Active' },
    { id: 'completed', name: 'Completed' },
  ];
  const [selected, setSelected] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);

  const getLocalData = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosData = JSON.parse(localStorage.getItem('todos'));
      setTodos(todosData);
    }
  };

  useEffect(() => {
    getLocalData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setFilterTodos(todos);
    handleTag();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  const handleTag = (value) => {
    if (value !== undefined) {
      setSelected(value);
      switch (value) {
        case 'active':
          setFilterTodos(todos.filter((node) => node.completed === false));
          break;
        case 'completed':
          setFilterTodos(todos.filter((node) => node.completed === true));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    }
  };

  // 勾選
  const handleCompleted = (value) => {
    setTodos(
      todos.map((node) => {
        if (node.id === value.id) {
          return {
            ...node,
            completed: !node.completed,
          };
        }
        return node;
      })
    );
  };

  // 刪除
  const handleDelete = (value) => {
    setTodos(
      todos.filter((node) => {
        return node.id !== value.id;
      })
    );
  };

  // 清除全部
  const handleClearAll = () => {
    setTodos([]);
    saveLocalStorage([]);
  };

  return (
    <Wrapper>
      <TagWrapper>
        {tagList.map((node) => {
          return (
            <span
              key={node.id}
              onClick={() => handleTag(node.id)}
              className={node.id === selected ? 'select-tag' : null}
            >
              {node.name}
            </span>
          );
        })}
      </TagWrapper>
      <InfoWrapper>
        <span>{todos.length} items left</span>
        <span onClick={handleClearAll} className='clean-todos'>
          Clear Completed
        </span>
      </InfoWrapper>
      <Ul>
        {filterTodos.map((node) => {
          return (
            <Li key={node.id}>
              <div onClick={() => handleCompleted(node)}>
                {node.completed ? (
                  <CheckedIcon>
                    <img src={CheckImg} alt='' />
                  </CheckedIcon>
                ) : (
                  <CheckIcon />
                )}
              </div>
              <CheckText>
                <span className={node.completed ? 'checked-text' : null}>
                  {node.content}
                </span>
              </CheckText>
              <DeleteIcon onClick={() => handleDelete(node)} />
            </Li>
          );
        })}
      </Ul>
    </Wrapper>
  );
};

export default TodoItem;
