import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { addNewStaff } from '../../store/actions/staffActions';

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  staff: {
    name?: string;
    title?: string;
    company?: string;
    group?: string;
    role?: string;
    email?: string;
    business_phone?: string;
    cell_phone?: string;
    account_right?: string;
    active?: string;
    note?: string;
  } | null;
}

interface FormErrors {
  name?: string;
  title?: string;
  company?: string;
  group?: string;
  role?: string;
  email?: string;
  business_phone?: string;
  cell_phone?: string;
}

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, staff }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    company: '',
    group: '',
    role: '',
    email: '',
    business_phone: '',
    cell_phone: '',
    account_right: '',
    active: '',
    note: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false); // To track whether the form was submitted

  useEffect(() => {
    if (staff) {
      setFormData((prev) => ({
        ...prev,
        ...staff, // Merge the existing formData with the user prop
      }));
    } else {
      setFormData({
        name: '',
        title: '',
        company: '',
        group: '',
        role: '',
        email: '',
        business_phone: '',
        cell_phone: '',
        account_right: '',
        active: '',
        note: '',
      });
    }
  }, [staff]);

  // Reset isSubmitted when modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false); // Hide validation errors when the modal is reopened
      setErrors({});
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      account_right: "Manager",
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true); // Mark the form as submitted
    const validationErrors: FormErrors = {};

    // Validate fields flexibly
    if (!formData.name) validationErrors.name = 'Name is required';
    if (!formData.title) validationErrors.title = 'Title is required';
    if (!formData.company) validationErrors.company = 'Company is required';
    if (!formData.group) validationErrors.group = 'Group is required';
    if (!formData.role) validationErrors.role = 'Role is required';
    if (!formData.email) validationErrors.email = 'Email is required';
    if (!formData.business_phone) validationErrors.business_phone = 'Business phone is required';
    if (!formData.cell_phone) validationErrors.cell_phone = 'Cell phone is required';
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) validationErrors.email = 'Please enter a valid email';

    // You can add other flexible validations for phone numbers or other fields here

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    if(staff){
        // dispatch(updateStaff(formData));
    }
    else{
      setFormData((prevState) => {
        return {
          ...prevState,
        };
      });
      dispatch(addNewStaff(formData));
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 relative w-[500px]">
        <button className="absolute top-2 right-2 text-[24px] leading-[32px] text-[#121212]" onClick={onClose}>
          ✕
        </button>
        <h2 className="text-[#121212] text-[24px] leading-[32px] font-bold mb-4">Add New Staff</h2>
        <div className="flex gap-[8px] mb-[16px]">
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px] w-full"
            />
            {isSubmitted && errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Title</label>
            <select
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full"
            >
              <option value="">Select Title</option>
              <option value="Processor">Processor</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
            </select>
            {isSubmitted && errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
          </div>
        </div>
        <div className="flex gap-[8px] mb-[16px]">
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px] w-full"
            />
            {isSubmitted && errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Group</label>
            <select
              name="group"
              value={formData.group}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full"
            >
              <option value="">Select Group</option>
              <option value="N/A">N/A</option>
              <option value="team">Team</option>
              <option value="others">Others</option>
            </select>
            {isSubmitted && errors.group && <p className="text-red-500 text-sm">{errors.group}</p>}
          </div>
        </div>
        <div className="flex gap-[8px] mb-[16px]">
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full"
            >
              <option value="">Select Role</option>
              <option value="Developer">Developer</option>
              <option value="editor">Editor</option>
              <option value="viewer">Viewer</option>
            </select>
            {isSubmitted && errors.role && <p className="text-red-500 text-sm">{errors.role}</p>}
          </div>
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px] w-full"
            />
            {isSubmitted && errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>
        <div className="flex gap-[8px] mb-[16px]">
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Business Phone</label>
            <input
              type="text"
              name="business_phone"
              value={formData.business_phone}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px] w-full"
            />
            {isSubmitted && errors.business_phone && <p className="text-red-500 text-sm">{errors.business_phone}</p>}
          </div>
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Cell Phone</label>
            <input
              type="text"
              name="cell_phone"
              value={formData.cell_phone}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[7px] w-full"
            />
            {isSubmitted && errors.cell_phone && <p className="text-red-500 text-sm">{errors.cell_phone}</p>}
          </div>
        </div>
        <div className="flex gap-[8px] mb-[16px]">
          <div className="w-full">
            <label className="font-lato text-[#344054] text-[14px] leading-[20px]">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="text-[#344054] border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] w-full"
              rows={4}
            />
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="bg-gray-300 text-[#344054] px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;