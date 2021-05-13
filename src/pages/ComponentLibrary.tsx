import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Toggle from "../components/Basic_Components/Toggle";
import Input from "../components/Basic_Components/Input";
import H1 from "../components/Basic_Components/H1";
import H2 from "../components/Basic_Components/H2";

interface TemplateProps {
  componentName: string;
  children?: React.ReactNode;
  code: string;
}

const Template = ({ componentName, children, code }: TemplateProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="content-start justify-center">
      <H2 text={componentName} color="gray" />
      {children}
      <Toggle
        label="Show Code"
        initialState={false}
        onChange={() => setShowCode(!showCode)}
      />
      {showCode && (
        <CopyBlock
          language="jsx"
          text={code}
          showLineNumbers={true}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      )}
    </div>
  );
};

const ComponentLibrary = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  return (
    <div className="container mx-auto ">
      <H1 text="Component Library" />
      <Template
        componentName="Text Input"
        code={`<Input
      type="text"
      placeholder="Enter email address here"
      name="email"
      value={newUser.email}
      onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
    />`}
      >
        <Input
          type="text"
          placeholder="Enter email address here"
          name="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </Template>
      <Template
        componentName="Password Input"
        code={`<Input
      type="password"
      placeholder="Enter password here"
      name="password"
      value={newUser.password}
      onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
    />`}
      >
        <Input
          type="password"
          placeholder="Enter password here"
          name="password"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </Template>
    </div>
  );
};

export default ComponentLibrary;
