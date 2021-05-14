import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import Toggle from "../components/Basic_Components/Toggle";
import Input from "../components/Basic_Components/Input";
import H1 from "../components/Basic_Components/H1";
import H2 from "../components/Basic_Components/H2";
import Button, {
  SecondaryButton,
  AcceptButton,
  RejectButton,
} from "../components/Basic_Components/Button";
import Card from "../components/Basic_Components/Card";

interface TemplateProps {
  componentName: string;
  children?: React.ReactNode;
  code: string;
}

const Template = ({ componentName, children, code }: TemplateProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="xl:w-1/3 md:w-1/2 md:p-2 mb-28">
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
    <div className="container mx-auto">
      <H1 text="Component Library" />
      <div className="md:flex md:justify-around md:flex-wrap">
        <Template
          componentName="Text Input"
          code={`<Input
      type="text"
      placeholder="Enter email address here"
      name="email"
      value={newUser.email}
      onChange={(e) =>
        setNewUser({ ...newUser, email: e.target.value })
      }
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
      onChange={(e) =>
        setNewUser({ ...newUser, password: e.target.value })
      }
    />`}
        >
          <Input
            type="password"
            placeholder="Enter password here"
            name="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </Template>
        <Template
          componentName="Default Button"
          code={`<button
          className={\`\${
            !disabled && "hover:bg-blue-400"
          } focus:outline-none bg-blue-500 text-white border-blue-500 rounded-md p-2 active:bg-blue-700 active:border-blue-700  disabled:opacity-50\`}
          disabled={disabled}
          onClick={onClick}
        >`}
        >
          <div className="my-6 flex justify-center md:justify-start">
            <Button
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
            <div className="w-4" />
            <Button
              disabled
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </Template>
        <Template
          componentName="Secondary Button"
          code={`<button
          className={\`\${
            !disabled && "hover:bg-grey-400"
          } focus:outline-none bg-grey-500 text-white border-grey-500 rounded-md p-2 active:bg-grey-700 active:border-grey-700  disabled:opacity-50\`}
          disabled={disabled}
          onClick={onClick}
        >`}
        >
          <div className="my-6 md:justify-start flex justify-center">
            <SecondaryButton
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
            <div className="w-4" />
            <SecondaryButton
              disabled
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </Template>
        <Template
          componentName="Accept Button"
          code={`<button
          className={\`\${
            !disabled && "hover:bg-green-400"
          } focus:outline-none bg-green-500 text-white border-green-500 rounded-md p-2 active:bg-green-700 active:border-green-700  disabled:opacity-50\`}
          disabled={disabled}
          onClick={onClick}
        >`}
        >
          <div className="my-6 md:justify-start flex justify-center">
            <AcceptButton
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
            <div className="w-4" />
            <AcceptButton
              disabled
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </Template>
        <Template
          componentName="Reject Button"
          code={`<button
          className={\`\${
            !disabled && "hover:bg-red-400"
          } focus:outline-none bg-red-500 text-white border-red-500 rounded-md p-2 active:bg-red-700 active:border-red-700  disabled:opacity-50\`}
          disabled={disabled}
          onClick={onClick}
        >`}
        >
          <div className="my-6 md:justify-start flex justify-center">
            <RejectButton
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
            <div className="w-4" />
            <RejectButton
              disabled
              text="Click me"
              onClick={() => console.log("Button clicked")}
            />
          </div>
        </Template>
        <Template
          componentName="Default Card"
          code={`const Card = ({
            width = "11/12",
            height = "max",
            backgroundColor = "bg-gray-100",
            children,
          }: CardProps) => {
            return (
              <div
                className={\`\${backgroundColor} w-\${width} h-\${height}
                shadow-md rounded p-4 text-justify mx-auto\`}
              >
                {children}
              </div>
            );
          };`}
        >
          <Card width="11/12" height="max">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quo
            iusto non natus iste, impedit tempora iure exercitationem, libero
            culpa soluta. Recusandae, non amet? Odit, dicta quisquam? Pariatur,
            laboriosam nam.
          </Card>
        </Template>
      </div>
    </div>
  );
};

export default ComponentLibrary;
