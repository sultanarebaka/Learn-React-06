
import React from 'react';
import ReactDOM from 'react-dom/client';

function ReactForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ReactForm />);

              