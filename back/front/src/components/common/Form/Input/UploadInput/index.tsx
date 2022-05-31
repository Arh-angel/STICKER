import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Button } from 'antd';
import './UploadInput.module.scss';

const UploadInput = () => {
  console.log('UploadInput');

  return (
    <Upload>
      <Button>Выбрать файл</Button>
    </Upload>
  );
};

export default UploadInput;
