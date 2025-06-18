import React, { useState } from "react";
import Modal from "./Modal";

const Example_Toast = () => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-10 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        Modals pop-up Example
      </h1>
      {/* Buttons to open each modal */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setOpenConfirm(true)}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Open Confirm Modal
        </button>

        <button
          onClick={() => setOpenEdit(true)}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
        >
          Edit Details
        </button>

        <button
          onClick={() => setOpenUpdate(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Update Info
        </button>

        <button
          onClick={() => setOpenDelete(true)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Delete Record
        </button>
      </div>

      {/* Confirm Modal */}
      <Modal isOpen={openConfirm} onClose={() => setOpenConfirm(false)} title="Confirmation">
        <p>Are you sure you want to continue?</p>
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={() => setOpenConfirm(false)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenConfirm(false);
              alert("Confirmed!");
            }}
            className="px-4 py-2 bg-green-600 text-white rounded text-sm hover:bg-green-700"
          >
            Confirm
          </button>
        </div>
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={openEdit} onClose={() => setOpenEdit(false)} title="Edit Details">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <div className="flex justify-end gap-3">
            <button
              onClick={() => setOpenEdit(false)}
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                setOpenEdit(false);
                alert(`Saved: ${formData.name}, ${formData.email}`);
              }}
              className="px-4 py-2 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700"
            >
              Save
            </button>
          </div>
        </div>
      </Modal>

      {/* Update Modal */}
      <Modal isOpen={openUpdate} onClose={() => setOpenUpdate(false)} title="Update Info">
        <p className="mb-4">Click update to apply latest changes.</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={() => setOpenUpdate(false)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Close
          </button>
          <button
            onClick={() => {
              setOpenUpdate(false);
              alert("Updated successfully!");
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal isOpen={openDelete} onClose={() => setOpenDelete(false)} title="Delete Record">
        <p className="text-red-500">This action cannot be undone.</p>
        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={() => setOpenDelete(false)}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded text-sm hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setOpenDelete(false);
              alert("Record deleted.");
            }}
            className="px-4 py-2 bg-red-600 text-white rounded text-sm hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Example_Toast;
