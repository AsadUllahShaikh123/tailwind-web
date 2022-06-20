import React from 'react'

const Suggestion = ({suggestion}) => {
  return (
    <>
      <div className="stepC">
            <div
              className="note"
              style={{
                marginTop: "2.5rem",
                border: "1px solid rgb(55, 65, 81)",
                padding: "1rem",
                borderRadius: "2px",
              }}
            >
              <p style={{ color: " rgb(156, 163, 175)" }}>
                {suggestion}
              </p>
            </div>
          </div>
        
    </>
  )
}

export default Suggestion