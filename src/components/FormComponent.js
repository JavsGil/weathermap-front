import React from 'react'

 const FormComponent = ({handleSearchSubmit,handleSearchChange,loading,handleLinkClick,showLink,searchValue}) => {
  return (
    <form onSubmit={handleSearchSubmit}>
        <div className="input-group-container">
          <div className="input-group mb-3">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Buscar"
              className="form-control w-auto ml-auto"
            />
            <button
              type="submit"
              disabled={loading || searchValue.trim() === ""}
              className="btn btn-primary form-control w-auto"
            >
              Buscar
            </button>

            {showLink && (
              <div className="input-group-append d-flex justify-content-end">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  href="#"
                  onClick={handleLinkClick}
                  className="btn btn-link"
                  style={{ marginRight: "0" }}
                >
                  Recientes
                </a>
              </div>
            )}
          </div>
        </div>
      </form>
  )
}

export default FormComponent;
