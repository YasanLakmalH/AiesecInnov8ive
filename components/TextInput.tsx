// components/TextInput.js

const TextInput = ({ placeholder }: { placeholder: string }) => {
    return (
        <input
        type        = "text"
        placeholder = "Occassion."
        className   = "px-3 py-2 w-full bg-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
      />
    );
  };
  
  export default TextInput;
  