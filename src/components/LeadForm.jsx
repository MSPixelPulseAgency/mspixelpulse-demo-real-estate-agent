export default function LeadForm({ fields, buttonLabel = 'Send Inquiry', note }) {
  return (
    <form className="lead-form" onSubmit={(event) => event.preventDefault()}>
      <div className="form-grid">
        {fields.map((field) => (
          <label key={field.name} className={field.type === 'textarea' ? 'full' : ''}>
            <span>{field.label}</span>
            {field.type === 'select' ? (
              <select name={field.name} defaultValue="">
                <option value="" disabled>{field.placeholder || 'Select an option'}</option>
                {field.options.map((option) => <option key={option}>{option}</option>)}
              </select>
            ) : field.type === 'textarea' ? (
              <textarea name={field.name} rows="5" placeholder={field.placeholder} />
            ) : (
              <input name={field.name} type={field.type || 'text'} placeholder={field.placeholder} />
            )}
          </label>
        ))}
      </div>
      {note && <p className="form-note">{note}</p>}
      <button className="btn primary" type="submit">{buttonLabel}</button>
    </form>
  );
}
