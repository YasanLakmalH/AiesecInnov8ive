// components/MoodSelector.js

interface MoodSelectorProps {
    placeholder: string;
  }
  
  const MoodSelector = ({ placeholder }: MoodSelectorProps) => {
    return (
      <select
        id="mood"
        name="mood"
        className="p-2 w-full bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="excited">Excited</option>
        <option value="calm">Calm</option>
      </select>
    );
  };
  
  export default MoodSelector;
  