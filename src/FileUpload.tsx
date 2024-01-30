import * as React from "react";
import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  showUploadList: false,
  action: "link",
  headers: {
    // TODO: 업로드 request 헤더
    // token, type 등 ..
  },
  beforeUpload(info) {
    // TODO: 이미지 파일 타입 체크
  },
  onChange(info) {
    console.log(info);
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
      // TODO: 이미지의 url을 가져온다. (모두 접근 가능한 권한으로)
      // TODO: 이미지의 url에서 id를 추출해 이미지 direct url을 만든다.
      // TODO: clipboard에도 넣어 주고, 아래 url를 띄워준다.
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const FileUpload: React.FC = () => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading
        company data or other banned files.
      </p>
    </Dragger>
  );
};

export default FileUpload;
