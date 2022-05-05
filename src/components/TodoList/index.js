import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react';
import { todoListSelector, todosRemainingSelector } from '../../redux/selector';

export default function TodoList() {
  const [todoName, setTodoName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const todoList = useSelector(todosRemainingSelector)
  let key = useSelector(todoListSelector).length

  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setTodoName(e.target.value)
  }


  const handleAddButtonClick = () => {
    dispatch(addTodo({
      id: key,
      name: todoName,
      completed: false,
      priority: priority,
    }))
    key++
    setTodoName('')
    setPriority('Medium')
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo, index) => <Todo key={index} status={todo.completed} id={todo.id} name={todo.name} prioriry={todo.priority} />)}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Select defaultValue='Medium' value={priority} onChange={handlePriorityChange}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
