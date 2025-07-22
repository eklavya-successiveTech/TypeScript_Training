"use client"
import useLocalStorage from "../hooks/useLocalStorage";
interface UserPreferences {
  theme: string;
  language: string;
  notifications: boolean;
}

export default function UserPreferences() {
  const { value: preferences, setValue, getValue, removeValue } = useLocalStorage<UserPreferences>('userPreferences', {
    theme: 'light',
    language: 'en',
    notifications: true
  });

  return (
    <div>
      <h2>User Preferences</h2>
      
      <div>
        <label>
          Theme:
          <select value={preferences.theme} onChange={(e) => setValue({...preferences, theme: e.target.value})}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Language:
          <select value={preferences.language} onChange={(e) => setValue({...preferences, language: e.target.value})}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Notifications:
          <input 
            type="checkbox" 
            checked={preferences.notifications} 
            onChange={(e) => setValue({...preferences, notifications: e.target.checked})}
          />
        </label>
      </div>

      <button onClick={() => alert(JSON.stringify(getValue()))}>Get</button>
      <button onClick={removeValue}>Remove</button>

      <div>
        <pre>{JSON.stringify(preferences, null, 2)}</pre>
      </div>
    </div>
  );
}