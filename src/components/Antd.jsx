import { Button, Input, Modal } from "antd";
import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function Antd() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary">Thêm mới</Button>
      <Button type="dashed">Hủy</Button>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Thêm mới nhân viên"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Thêm"
        cancelText="Hủy"
      >
        <div>
          <label htmlFor="">Email</label>
          <Input className="" placeholder="Enter email" />
        </div>
      </Modal>
    </>
  );
}
