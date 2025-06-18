import React from "react";
import Button from "./Button";
import { Plus, Trash2, Loader2 } from "lucide-react";

const ExamplePage = () => {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Button Showcase
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button variant="primary" onClick={() => alert("Primary Clicked")}>
          Primary
        </Button>

        <Button variant="secondary" icon={Plus}>
          Add Item
        </Button>

        <Button variant="danger" icon={Trash2}>
          Delete
        </Button>

        <Button loading icon={Loader2}>
          Saving...
        </Button>

        <Button fullWidth>Full Width</Button>

        <Button disabled>Disabled</Button>
      </div>
    </div>
  );
};

export default ExamplePage;
