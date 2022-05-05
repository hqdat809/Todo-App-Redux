import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFilterChange, filterByStatus, filterByPriority } from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState('')
  const [searchStatus, setSearchStatus] = useState('All')
  const [searchPriority, setSearchPriority] = useState([])

  const dispatch = useDispatch()

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }

  const filterByStatusChange = (e) => {
    setSearchStatus(e.target.value)
    dispatch(filterByStatus(e.target.value))
  }

  const filterByPrioritySearch = (e) => {
    setSearchPriority(e)
    dispatch(filterByPriority(e))
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search value={searchText} placeholder='input search text' onChange={handleSearchTextChange} />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group defaultValue='All' value={searchStatus} onChange={filterByStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={searchPriority}
          onChange={filterByPrioritySearch}
        >
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
      </Col>
    </Row>
  );
}
