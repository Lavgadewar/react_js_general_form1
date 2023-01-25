import React, { useState } from "react";
import { Form, Input, Select, Radio, Checkbox, DatePicker } from "antd";
// import styles from "./project.css";
import styles from "./project.css";
const { Option } = Select;

function MyForm() {
  const [form] = Form.useForm();
  const [options, setOptions] = useState([
    { value: "maharashtra", label: "maharashtra " },
    { value: "delhi", label: "delhi " },
    { value: "Karnataka", label: "Karnataka " },
  ]);

  const handleChange = (value) => {
    setOptions([
      { value: "option1", label: value },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ]);
  };

  return (
    <Form form={form} className={styles["container"]}>
      <Form.Item label="birth date" className={styles.formItem}>
        <DatePicker className={styles["ant-calendar-picker"]} />
      </Form.Item>
      <Form.Item
        label="born in maharashtra"
        className={styles["ant-form-item-control"]}
      >
        <Checkbox />
      </Form.Item>
      <Form.Item
        label="languages you know"
        className={styles["ant-form-item-control"]}
      >
        <Checkbox.Group>
          <Checkbox value="option1">hindi</Checkbox>
          <Checkbox value="option2">marathi</Checkbox>
          <Checkbox value="option3">english</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item label="address">
        <Input className={styles["ant-form-item-label"]} />
      </Form.Item>
      <Form.Item label="state">
        <Select>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Radio Buttons">
        <Radio.Group>
          <Radio value={1}>male</Radio>
          <Radio value={2}>female</Radio>
          <Radio value={3}>Others</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <button type="submit">Submit</button>
      </Form.Item>
    </Form>
  );
}
export default MyForm;
