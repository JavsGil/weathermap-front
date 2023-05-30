import React, { useState  } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import LoadingSpinner from "./spinner";
import Card from "./Card.js";
import FormComponent from "./FormComponent";
import createCustomIcon from "../Utils/IconsleafLet";

import "leaflet/dist/leaflet.css";
import "../../src/css/map.css";

import { searchCity, getHistorica } from "../services/services";

const customIcon = createCustomIcon();

const Map = ({ useNavigate, setHistorialData }) => {
  
  const navigate = useNavigate();

  const defaultCoordinates = { lat: 4.6874603, lng: -74.0617796 };
  const [coordinates, setCoordinates] = useState(defaultCoordinates);
  const [current, setCurrent] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [historialName, setHistorialName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLink, setShowLink] = useState(false);
  const [showInfoCard, setShowInfoCard] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();
  
    try {
      setLoading(true);
      const response = await searchCity(searchValue);
  
      setCurrent(response);
  
      const newCoordinates = {
        lat: response.latitude,
        lng: response.longitude,
      };
      setCoordinates(newCoordinates);
      setHistorialName(response.state);
      setSearchValue("");
      setShowLink(true);
      setShowInfoCard(true);
      setError(null);
    } catch (error) {
      console.error("Error:", error);
      setError("No se encontraron resultados para la búsqueda");
      setSearchValue("");
      setTimeout(() => setError(null), 2000);
    } finally {
      setLoading(false);
    }
  };
  

  const handleLinkClick = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const historicaData = await getHistorica(historialName);
      setHistorialData(historicaData);
      navigate("/historic");
    } catch (error) {
      console.error("Error:", error);
      const errorMessage =
        "Se produjo un error al obtener los datos históricos.";
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {loading ? (
        <div className="spinner-container">
          <LoadingSpinner />
        </div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="container">
          <div className="row">
            <FormComponent
              handleSearchSubmit={handleSearchSubmit}
              handleSearchChange={handleSearchChange}
              loading={loading}
              handleLinkClick={handleLinkClick}
              showLink={showLink}
              searchValue={searchValue}
            />
            <div className="col-12 col-md-8">
              <div className="map-container">
                <MapContainer center={coordinates} zoom={13}>
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={coordinates} icon={customIcon}>
                    <Popup>
                      <div>
                        <p>Humedad Relativa: {current.humidity}%</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex flex-column justify-content-center align-items-center h-100" style={{marginLeft:"-136px"}}>
                {showInfoCard && <Card current={current} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Map;