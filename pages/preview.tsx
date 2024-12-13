import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Preview() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState('');
  
  const handleFileChange = (file: string) => {
    setSelectedFile(file);
    router.push(`/preview?file=${file}`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <h1 style={{ marginBottom: '20px' }}>Branding Preview</h1>
      <select 
        onChange={(e) => handleFileChange(e.target.value)}
        value={selectedFile}
        style={{ 
          padding: '8px', 
          marginBottom: '20px',
          width: '300px',
          fontSize: '16px'
        }}
      >
        <option value="">Select a file to preview</option>
        <option value="linkedin-banner">LinkedIn Banner</option>
        <option value="youtube-banner">YouTube Banner</option>
        <option value="social-header">Social Header</option>
        <option value="business-card">Business Card</option>
        <option value="email-signature">Email Signature</option>
        <option value="app-splash">App Splash</option>
        <option value="loading-spinner">Loading Spinner</option>
        <option value="presentation-template">Presentation Template</option>
        <option value="profile-picture">Profile Picture</option>
      </select>
      
      {selectedFile && (
        <iframe 
          src={`/api/getHtml?file=${selectedFile}`}
          style={{
            width: '100%',
            height: 'calc(100vh - 150px)',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
      )}
    </div>
  );
}
