import React from "react";

import formatFechaHora from "../Utils/formatDateTime";

const Historic = ({ historial }) => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div>
      {historial.map((item, index) => (
        <div style={{ padding:'46px'}} key={index}>
          <div className="card mt-3 card-with-margin">
            <h3 className="card-header size-title d-flex align-items-center justify-content-between">
              <span>
                Ciudad: <span className="font-weight-bold">{item.state}</span>
              </span>
              <button
                type="submit"
                onClick={handleGoBack}
                className="btn btn-primary"
                style={{ marginRight: "0" }}
              >
                Volver
              </button>
            </h3>

            <div className="card-body">
              <span>
                Pais:{" "}
                <span className="font-weight-bold">{item.country}</span>
              </span>
              <div className="table-responsive text-center border p-3">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Humedad</th>
                      <th>Fecha y Hora</th>
                    </tr>
                  </thead>
                  <tbody>
                    {item.info.map((infoItem, infoIndex) => (
                      <tr key={infoIndex}>
                        <td>{infoItem.humidity} %</td>
                        <td>{formatFechaHora(infoItem.created_at)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Historic;
