import React from 'react';

const LANGUAGES = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi (हिन्दी)' },
    { code: 'ta', name: 'Tamil (தமிழ்)' },
    { code: 'te', name: 'Telugu (తెలుగు)' },
    { code: 'kn', name: 'Kannada (ಕನ್ನಡ)' },
    { code: 'ml', name: 'Malayalam (മലയാളം)' },
    { code: 'bn', name: 'Bengali (বাংলা)' },
    { code: 'mr', name: 'Marathi (मराठी)' },
    { code: 'gu', name: 'Gujarati (ગુજરાતી)' },
    { code: 'pa', name: 'Punjabi (ਪੰਜਾਬੀ)' },
    { code: 'es', name: 'Spanish (Español)' },
    { code: 'fr', name: 'French (Français)' },
    { code: 'de', name: 'German (Deutsch)' },
    { code: 'zh', name: 'Chinese (中文)' },
    { code: 'ar', name: 'Arabic (العربية)' },
    { code: 'pt', name: 'Portuguese (Português)' },
    { code: 'ru', name: 'Russian (Русский)' },
    { code: 'ja', name: 'Japanese (日本語)' },
    { code: 'ko', name: 'Korean (한국어)' },
    { code: 'tr', name: 'Turkish (Türkçe)' },
    { code: 'vi', name: 'Vietnamese (Tiếng Việt)' },
    { code: 'th', name: 'Thai (ไทย)' },
    { code: 'id', name: 'Indonesian (Bahasa Indonesia)' }
];

export default function LanguageSelector({ value, onChange, darkMode }) {
    return (
        <div>
            <label className={`block font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'
                }`}>
                Select Language:
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full p-3 rounded-lg transition-all duration-200 ${darkMode
                        ? 'bg-gray-900/50 border-2 border-gray-600 text-white focus:border-purple-500'
                        : 'bg-white border-2 border-gray-300 text-gray-900 focus:border-indigo-500'
                    } focus:outline-none`}
            >
                {LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
            <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                {LANGUAGES.length} languages supported • XLM-RoBERTa multilingual model
            </p>
        </div>
    );
}
