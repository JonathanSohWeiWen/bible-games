import React, { useState } from "react";
import { Switch } from "@headlessui/react";

interface ToggleProps {
  initialState: boolean;
  label: string;
  onChange: () => void;
}

const Toggle = ({ initialState, label, onChange }: ToggleProps) => {
  const [enabled, setEnabled] = useState(initialState);
  return (
    <>
      <Switch.Group as="div" className="flex items-center space-x-4">
        <Switch.Label>{label}</Switch.Label>
        <Switch
          as="button"
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
            onChange();
          }}
          className={`${
            enabled ? "bg-green-400" : "bg-gray-200"
          } relative inline-flex flex-shrink-0 h-6 w-12 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:shadow-outline`}
        >
          <span
            aria-hidden="true"
            className={`${
              enabled ? "translate-x-6" : "-translate-x-0"
            } pointer-events-none inline-block w-5 h-5 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
      </Switch.Group>
    </>
  );
};

export default Toggle;
