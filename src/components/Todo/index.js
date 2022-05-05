import { Row, Tag, Checkbox } from 'antd';
import { useState } from 'react';
import { toggleCheckbox } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
};

export default function Todo({ name, prioriry, id, status }) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch()

  const handleToggleCheckbox = () => {
    // setChecked(!checked);
    dispatch(toggleCheckbox(id))
  };

  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(status ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={status} onClick={handleToggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  );
}
